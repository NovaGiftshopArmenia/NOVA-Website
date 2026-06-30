// ============================================
// NOVA FIREBASE CONFIGURATION & DATABASE HELPER
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyDqh33t_bQw6DUlwmHuInLAqWtUb_T1A5I",
  authDomain: "nova-giftshop.firebaseapp.com",
  projectId: "nova-giftshop",
  storageBucket: "nova-giftshop.firebasestorage.app",
  messagingSenderId: "627062575242",
  appId: "1:627062575242:web:a9daf0dbc5e24ba2c19d73",
  measurementId: "G-W7HHMYZ7DC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================================
// NovaDB — Firestore wrapper with in-memory cache
// ============================================
const NovaDB = {
  _cache: {},
  _collection: 'site_data',
  _ready: false,
  _initPromise: null,
  _pendingWrites: 0,

  async init() {
    if (this._initPromise) return this._initPromise;
    this._initPromise = this._doInit();
    return this._initPromise;
  },

  async _doInit() {
    try {
      const snapshot = await db.collection(this._collection).get();
      snapshot.forEach(doc => {
        this._cache[doc.id] = doc.data();
      });
      this._ready = true;
      console.log('[NovaDB] ✅ Loaded from Firestore:', Object.keys(this._cache));
      
      // Log products count specifically
      const prods = this._cache['products'];
      if (prods && prods.items) {
        console.log('[NovaDB] Products in Firestore:', prods.items.length);
      } else {
        console.log('[NovaDB] No products document in Firestore yet');
      }
    } catch (e) {
      console.error('[NovaDB] ❌ Failed to load from Firestore:', e);
      this._ready = false;
    }
  },

  async whenReady() {
    if (this._ready) return;
    if (this._initPromise) await this._initPromise;
  },

  // ---- GET (synchronous, from cache) ----
  get(docId) {
    return this._cache[docId] || null;
  },

  // ---- SET (updates cache + writes to Firestore) ----
  async set(docId, data) {
    this._cache[docId] = data;
    this._pendingWrites++;
    try {
      await db.collection(this._collection).doc(docId).set(data);
      console.log(`[NovaDB] ✅ Saved '${docId}' to Firestore`);
    } catch (e) {
      console.error(`[NovaDB] ❌ FAILED to write '${docId}':`, e);
      // Show visible error so user can report it
      if (typeof showToast === 'function') {
        showToast('DATABASE ERROR: ' + e.message);
      }
    } finally {
      this._pendingWrites--;
    }
  },

  // ---- PRODUCTS ----
  getProducts() {
    const doc = this.get('products');
    return doc ? doc.items : null;
  },

  saveProducts(productsArray) {
    // Explicitly pick known product fields only
    const PRODUCT_FIELDS = ['id', 'name', 'scent_family', 'concentration', 'gender_id', 
      'vibes', 'price', 'image', 'images', 'brand', 'tags', 'rating', 'reviewsCount',
      'tagline', 'description', 'ingredients', 'notes', 'sizes', 'stock', 'featured'];
    
    const clean = productsArray.map(p => {
      const obj = {};
      PRODUCT_FIELDS.forEach(key => {
        if (p[key] !== undefined) {
          obj[key] = p[key];
        }
      });
      return obj;
    });
    console.log(`[NovaDB] 📦 Saving ${clean.length} products...`);
    return this.set('products', { items: clean });
  },

  // ---- ORDERS ----
  getOrders() {
    const doc = this.get('orders');
    return doc ? doc.items : null;
  },

  saveOrders(ordersArray) {
    return this.set('orders', { items: ordersArray });
  },

  // ---- INSTAGRAM POSTS ----
  getInstagramPosts() {
    const doc = this.get('instagram_posts');
    return doc ? doc.items : null;
  },

  saveInstagramPosts(postsArray) {
    return this.set('instagram_posts', { items: postsArray });
  },

  // ---- BRANDS ----
  getBrands() {
    const doc = this.get('brands');
    return doc ? doc.items : null;
  },

  saveBrands(brandsArray) {
    return this.set('brands', { items: brandsArray });
  },

  // ---- TRASH ----
  getTrash() {
    const doc = this.get('trash');
    return doc ? doc.items : [];
  },

  saveTrash(trashArray) {
    return this.set('trash', { items: trashArray });
  },

  // ---- STAFF PROFILES ----
  getStaffProfiles() {
    const doc = this.get('staff_profiles');
    return doc ? doc.data : null;
  },

  saveStaffProfiles(profilesObj) {
    return this.set('staff_profiles', { data: profilesObj });
  },

  // ---- AUDIT LOGS ----
  getAuditLogs() {
    const doc = this.get('audit_logs');
    return doc ? doc.entries : [];
  },

  saveAuditLogs(logsArray) {
    return this.set('audit_logs', { entries: logsArray });
  },

  // ---- USERS ----
  getUsers() {
    const doc = this.get('users');
    return doc ? doc.items : [];
  },

  saveUsers(usersArray) {
    return this.set('users', { items: usersArray });
  },

  // ---- ADMIN EMAILS ----
  getAdminEmails() {
    const doc = this.get('admin_emails');
    return doc ? doc.emails : null;
  },

  saveAdminEmails(emailsArray) {
    return this.set('admin_emails', { emails: emailsArray });
  },

  // ---- DEBUG HELPER ----
  // Call from console: NovaDB.debug()
  async debug() {
    console.log('=== NovaDB Debug ===');
    console.log('Ready:', this._ready);
    console.log('Pending writes:', this._pendingWrites);
    console.log('Cache keys:', Object.keys(this._cache));
    console.log('Products in cache:', this._cache['products']?.items?.length || 'none');
    console.log('Products in AppState:', window.AppState?.products?.length || 'none');
    console.log('Trash in cache:', this._cache['trash']?.items?.length || 'none');
    
    // Verify by reading directly from Firestore
    try {
      const doc = await db.collection(this._collection).doc('products').get();
      if (doc.exists) {
        const data = doc.data();
        console.log('Products in Firestore (live):', data.items?.length || 'none');
        console.log('Product IDs in Firestore:', data.items?.map(p => p.id));
      } else {
        console.log('Products document does NOT exist in Firestore!');
      }
    } catch(e) {
      console.error('Failed to read from Firestore:', e);
    }
    
    console.log('Products in AppState:', window.AppState?.products?.map(p => p.id));
    console.log('=== End Debug ===');
  },

  // Quick test: delete first product and save
  async testDelete() {
    console.log('=== Test Delete ===');
    console.log('Before: AppState has', window.AppState.products.length, 'products');
    const removed = window.AppState.products.splice(0, 1);
    console.log('Removed:', removed[0]?.name);
    console.log('After splice: AppState has', window.AppState.products.length, 'products');
    
    await this.saveProducts(window.AppState.products);
    console.log('Save complete. Verifying...');
    
    // Read back from Firestore directly
    const doc = await db.collection(this._collection).doc('products').get();
    if (doc.exists) {
      console.log('Firestore now has:', doc.data().items?.length, 'products');
    }
    console.log('=== End Test ===');
  }
};

window.NovaDB = NovaDB;
window.db = db;
