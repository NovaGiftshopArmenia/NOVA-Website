// ============================================
// NOVA FIREBASE CONFIGURATION & DATABASE HELPER
// ============================================
// This file initializes Firebase and provides the NovaDB helper
// which replaces localStorage for all shared/admin data.
// Per-user data (cart, wishlist, session, language) stays in localStorage.

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

// Enable offline persistence — writes are cached locally first,
// so even if the page is refreshed before sync completes, data persists
db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('[NovaDB] Persistence unavailable: multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('[NovaDB] Persistence not supported in this browser');
  }
});

// ============================================
// NovaDB — Cache-first Firestore wrapper
// ============================================
// Strategy:
//   - On init(), fetch ALL shared data from Firestore into memory cache
//   - Reads are synchronous (from cache) — no code flow changes needed
//   - Writes update cache immediately + fire async Firestore write
//   - If Firestore is empty (first run), seed it with defaults

const NovaDB = {
  _cache: {},
  _collection: 'site_data',
  _ready: false,
  _initPromise: null,

  // ---- INITIALIZATION ----
  // Fetches all documents from 'site_data' collection into cache
  async init() {
    // If already initializing, return the existing promise (prevents duplicate inits)
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
      console.log('[NovaDB] Loaded from Firestore:', Object.keys(this._cache));
    } catch (e) {
      console.error('[NovaDB] Failed to load from Firestore, falling back to defaults:', e);
      this._ready = false;
    }
  },

  // Wait for init to complete — call this from any DOMContentLoaded handler
  async whenReady() {
    if (this._ready) return;
    if (this._initPromise) await this._initPromise;
  },

  // ---- GENERIC GET/SET ----
  // Get data from cache (synchronous)
  get(docId) {
    return this._cache[docId] || null;
  },

  // Set data: update cache + write to Firestore
  // Returns a Promise so callers can await if needed
  set(docId, data) {
    this._cache[docId] = data;
    return db.collection(this._collection).doc(docId).set(data)
      .then(() => {
        console.log(`[NovaDB] Saved '${docId}' to Firestore`);
      })
      .catch(e => {
        console.error(`[NovaDB] Failed to write '${docId}':`, e);
      });
  },

  // ---- PRODUCTS ----
  getProducts() {
    const doc = this.get('products');
    return doc ? doc.items : null;
  },

  saveProducts(productsArray) {
    // Strip getter properties before saving (category, gender are computed)
    const clean = productsArray.map(p => {
      const obj = {};
      for (const key of Object.keys(p)) {
        // Skip computed getter properties
        const descriptor = Object.getOwnPropertyDescriptor(p, key);
        if (descriptor && typeof descriptor.get === 'function') continue;
        obj[key] = p[key];
      }
      return obj;
    });
    this.set('products', { items: clean });
  },

  // ---- ORDERS ----
  getOrders() {
    const doc = this.get('orders');
    return doc ? doc.items : null;
  },

  saveOrders(ordersArray) {
    this.set('orders', { items: ordersArray });
  },

  // ---- INSTAGRAM POSTS ----
  getInstagramPosts() {
    const doc = this.get('instagram_posts');
    return doc ? doc.items : null;
  },

  saveInstagramPosts(postsArray) {
    this.set('instagram_posts', { items: postsArray });
  },

  // ---- BRANDS ----
  getBrands() {
    const doc = this.get('brands');
    return doc ? doc.items : null;
  },

  saveBrands(brandsArray) {
    this.set('brands', { items: brandsArray });
  },

  // ---- TRASH ----
  getTrash() {
    const doc = this.get('trash');
    return doc ? doc.items : [];
  },

  saveTrash(trashArray) {
    this.set('trash', { items: trashArray });
  },

  // ---- STAFF PROFILES ----
  getStaffProfiles() {
    const doc = this.get('staff_profiles');
    return doc ? doc.data : null;
  },

  saveStaffProfiles(profilesObj) {
    this.set('staff_profiles', { data: profilesObj });
  },

  // ---- AUDIT LOGS ----
  getAuditLogs() {
    const doc = this.get('audit_logs');
    return doc ? doc.entries : [];
  },

  saveAuditLogs(logsArray) {
    this.set('audit_logs', { entries: logsArray });
  },

  // ---- USERS (registered customer accounts) ----
  getUsers() {
    const doc = this.get('users');
    return doc ? doc.items : [];
  },

  saveUsers(usersArray) {
    this.set('users', { items: usersArray });
  },

  // ---- ADMIN EMAILS ----
  getAdminEmails() {
    const doc = this.get('admin_emails');
    return doc ? doc.emails : null;
  },

  saveAdminEmails(emailsArray) {
    this.set('admin_emails', { emails: emailsArray });
  }
};

// Expose globally
window.NovaDB = NovaDB;
window.db = db;
