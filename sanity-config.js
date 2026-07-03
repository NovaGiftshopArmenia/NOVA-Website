// ============================================
// NOVA SANITY CMS CONFIGURATION & HELPER
// ============================================
// Handles: Products, Product Images, Product Translations
// Everything else stays in Firebase (orders, users, etc.)
// Uses Sanity HTTP API directly — no SDK dependency needed

const SANITY_CONFIG = {
  projectId: '49iqr6js',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skerzCM4AF5WJN5lLQPctC45fI6FqsoLU2C9m23ENIUCruklL6NXxbagwPWMVXYPqnK5zdz8WZLR3mXC98WQNda4URhyziGHpcaf6HKnYjqBW00alXalDdDShSy2MrU8UwEfKwvqVkcE8u9Ii01aN5z64HRSkeW97FsBRuKRhSnCxafYhcVw'
};

// Base URLs for Sanity API
const SANITY_API = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data`;
const SANITY_ASSETS_API = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/assets/images/${SANITY_CONFIG.dataset}`;

// Standard headers for authenticated requests
function sanityHeaders(contentType) {
  const h = { 'Authorization': `Bearer ${SANITY_CONFIG.token}` };
  if (contentType) h['Content-Type'] = contentType;
  return h;
}

// ============================================
// NovaSanity — Sanity wrapper for product management
// Uses raw HTTP API (fetch) — no SDK needed
// ============================================
const NovaSanity = {
  _products: null,
  _translations: null,
  _ready: false,

  // Initialize — fetch all products from Sanity
  async init() {
    try {
      // GROQ query to fetch all products
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        productId,
        name,
        brand,
        sku,
        tagline,
        description,
        ingredients,
        scent_family,
        gender_id,
        price,
        sizes,
        stock,
        tags,
        vibes,
        rating,
        reviewsCount,
        featured,
        notes,
        "image": mainImage.asset->url,
        "images": galleryImages[].asset->url,
        translations
      }`;

      const url = `${SANITY_API}/query/${SANITY_CONFIG.dataset}?query=${encodeURIComponent(query)}`;
      const response = await fetch(url, { headers: sanityHeaders() });

      if (!response.ok) {
        throw new Error(`Sanity API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const products = data.result || [];

      // Transform Sanity documents to match AppState.products format
      this._products = products.map(doc => this._transformFromSanity(doc));

      // Extract translations from products
      this._translations = { am: {}, ru: {} };
      products.forEach(doc => {
        if (doc.translations) {
          const pid = doc.productId || doc._id;
          if (doc.translations.am) this._translations.am[pid] = doc.translations.am;
          if (doc.translations.ru) this._translations.ru[pid] = doc.translations.ru;
        }
      });

      this._ready = true;
      console.log(`[NovaSanity] ✅ Loaded ${this._products.length} products from Sanity`);
      if (Object.keys(this._translations.am).length > 0) {
        console.log(`[NovaSanity] ✅ Loaded translations for ${Object.keys(this._translations.am).length} products`);
      }
      return this._products;
    } catch (e) {
      console.error('[NovaSanity] ❌ Failed to initialize:', e);
      this._products = [];
      this._translations = { am: {}, ru: {} };
      this._ready = false;
      return [];
    }
  },

  // Get all products (synchronous, from cache)
  getProducts() {
    return this._products;
  },

  // Get product translations (synchronous, from cache)
  getProductTranslations() {
    return this._translations;
  },

  // Transform a Sanity document to the format app.js expects
  _transformFromSanity(doc) {
    return {
      id: doc.productId || doc._id,
      _sanityId: doc._id,
      name: doc.name || '',
      brand: doc.brand || '',
      sku: doc.sku || '',
      tagline: doc.tagline || '',
      description: doc.description || '',
      ingredients: doc.ingredients || '',
      scent_family: doc.scent_family || '',
      gender_id: doc.gender_id || '',
      price: doc.price || 0,
      sizes: doc.sizes || [],
      stock: doc.stock || 0,
      tags: doc.tags || [],
      vibes: doc.vibes || [],
      rating: doc.rating || 0,
      reviewsCount: doc.reviewsCount || 0,
      featured: doc.featured || false,
      notes: doc.notes || { top: [], heart: [], base: [] },
      image: doc.image || '',
      images: (doc.images || []).filter(Boolean)
    };
  },

  // ---- MUTATIONS (create, update, delete) via Sanity Mutations API ----

  async _mutate(mutations) {
    const url = `${SANITY_API}/mutate/${SANITY_CONFIG.dataset}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: sanityHeaders('application/json'),
      body: JSON.stringify({ mutations })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Sanity mutation failed: ${response.status} — ${errorText}`);
    }

    return await response.json();
  },

  // Save a single product to Sanity (create or update)
  async saveProduct(product) {
    const sanityId = product._sanityId || `product-${product.id}`;

    const doc = {
      _id: sanityId,
      _type: 'product',
      productId: product.id,
      name: product.name,
      brand: product.brand,
      sku: product.sku || '',
      tagline: product.tagline,
      description: product.description,
      ingredients: product.ingredients || '',
      scent_family: product.scent_family,
      gender_id: product.gender_id,
      price: product.price,
      sizes: product.sizes || [],
      stock: product.stock || 0,
      tags: product.tags || [],
      vibes: product.vibes || [],
      rating: product.rating || 0,
      reviewsCount: product.reviewsCount || 0,
      featured: product.featured || false,
      notes: product.notes || { top: [], heart: [], base: [] }
    };

    // Handle main image — store as Sanity image reference if it's a Sanity URL
    if (product.image && product.image.includes('cdn.sanity.io')) {
      const assetRef = this._urlToAssetRef(product.image);
      if (assetRef) {
        doc.mainImage = { _type: 'image', asset: { _type: 'reference', _ref: assetRef } };
      }
    } else if (product.image) {
      // External URL — store in a separate field
      doc.externalImageUrl = product.image;
    }

    // Handle gallery images
    if (product.images && product.images.length > 0) {
      const galleryRefs = [];
      product.images.forEach(imgUrl => {
        if (imgUrl && imgUrl.includes('cdn.sanity.io')) {
          const assetRef = this._urlToAssetRef(imgUrl);
          if (assetRef) {
            galleryRefs.push({
              _type: 'image',
              _key: this._generateKey(),
              asset: { _type: 'reference', _ref: assetRef }
            });
          }
        }
      });
      if (galleryRefs.length > 0) {
        doc.galleryImages = galleryRefs;
      }
    }

    try {
      await this._mutate([{ createOrReplace: doc }]);
      product._sanityId = sanityId;
      console.log(`[NovaSanity] ✅ Saved product "${product.name}" (${sanityId})`);
    } catch (e) {
      console.error(`[NovaSanity] ❌ Failed to save "${product.name}":`, e);
      if (typeof showToast === 'function') {
        showToast('SANITY SAVE ERROR: ' + e.message);
      }
      throw e;
    }
  },

  // Save ALL products
  async saveAllProducts(productsArray) {
    console.log(`[NovaSanity] 📦 Saving ${productsArray.length} products to Sanity...`);
    // Batch mutations for efficiency (max ~50 at a time)
    const batchSize = 50;
    for (let i = 0; i < productsArray.length; i += batchSize) {
      const batch = productsArray.slice(i, i + batchSize);
      const mutations = batch.map(product => {
        const sanityId = product._sanityId || `product-${product.id}`;
        product._sanityId = sanityId;

        const doc = {
          _id: sanityId,
          _type: 'product',
          productId: product.id,
          name: product.name,
          brand: product.brand,
          sku: product.sku || '',
          tagline: product.tagline,
          description: product.description,
          ingredients: product.ingredients || '',
          scent_family: product.scent_family,
          gender_id: product.gender_id,
          price: product.price,
          sizes: product.sizes || [],
          stock: product.stock || 0,
          tags: product.tags || [],
          vibes: product.vibes || [],
          rating: product.rating || 0,
          reviewsCount: product.reviewsCount || 0,
          featured: product.featured || false,
          notes: product.notes || { top: [], heart: [], base: [] }
        };

        // Handle images
        if (product.image && product.image.includes('cdn.sanity.io')) {
          const assetRef = this._urlToAssetRef(product.image);
          if (assetRef) doc.mainImage = { _type: 'image', asset: { _type: 'reference', _ref: assetRef } };
        } else if (product.image) {
          doc.externalImageUrl = product.image;
        }

        if (product.images && product.images.length > 0) {
          const galleryRefs = [];
          product.images.forEach(imgUrl => {
            if (imgUrl && imgUrl.includes('cdn.sanity.io')) {
              const ref = this._urlToAssetRef(imgUrl);
              if (ref) galleryRefs.push({ _type: 'image', _key: this._generateKey(), asset: { _type: 'reference', _ref: ref } });
            }
          });
          if (galleryRefs.length > 0) doc.galleryImages = galleryRefs;
        }

        return { createOrReplace: doc };
      });

      await this._mutate(mutations);
    }
    console.log(`[NovaSanity] ✅ All ${productsArray.length} products saved`);
  },

  // Save product translations for a specific product
  async saveProductTranslation(productId, translations) {
    const sanityId = `product-${productId}`;
    try {
      await this._mutate([{
        patch: {
          id: sanityId,
          set: { translations: translations }
        }
      }]);

      // Update local cache
      if (translations.am) this._translations.am[productId] = translations.am;
      if (translations.ru) this._translations.ru[productId] = translations.ru;

      console.log(`[NovaSanity] ✅ Saved translations for "${productId}"`);
    } catch (e) {
      console.warn(`[NovaSanity] ⚠️ Failed to save translations for "${productId}":`, e);
    }
  },

  // Save ALL translations
  async saveAllTranslations(translationsObj) {
    if (!translationsObj) return;

    const productIds = new Set([
      ...Object.keys(translationsObj.am || {}),
      ...Object.keys(translationsObj.ru || {})
    ]);

    console.log(`[NovaSanity] 📦 Saving translations for ${productIds.size} products...`);

    // Batch patch mutations
    const mutations = [];
    for (const pid of productIds) {
      const trans = {
        am: translationsObj.am?.[pid] || null,
        ru: translationsObj.ru?.[pid] || null
      };
      mutations.push({
        patch: {
          id: `product-${pid}`,
          set: { translations: trans }
        }
      });

      // Update local cache
      if (trans.am) this._translations.am[pid] = trans.am;
      if (trans.ru) this._translations.ru[pid] = trans.ru;
    }

    if (mutations.length > 0) {
      try {
        await this._mutate(mutations);
        console.log(`[NovaSanity] ✅ All translations saved`);
      } catch (e) {
        console.warn(`[NovaSanity] ⚠️ Failed to save translations batch:`, e);
      }
    }
  },

  // Delete a product from Sanity
  async deleteProduct(productId) {
    const sanityId = `product-${productId}`;
    try {
      await this._mutate([{ delete: { id: sanityId } }]);
      console.log(`[NovaSanity] 🗑️ Deleted product "${productId}"`);
    } catch (e) {
      console.warn(`[NovaSanity] ⚠️ Failed to delete "${productId}":`, e);
    }
  },

  // ---- IMAGE UPLOAD via Sanity Assets API ----

  async uploadImage(imageData, productId, index) {
    // If it's already a URL (not base64), return as-is
    if (typeof imageData === 'string' && !imageData.startsWith('data:')) {
      return imageData;
    }

    try {
      let blob;
      if (typeof imageData === 'string' && imageData.startsWith('data:')) {
        const response = await fetch(imageData);
        blob = await response.blob();
      } else if (imageData instanceof Blob || imageData instanceof File) {
        blob = imageData;
      } else {
        console.warn('[NovaSanity] Invalid image data type');
        return '';
      }

      const filename = `${productId}_img_${index}_${Date.now()}.webp`;
      console.log(`[NovaSanity] ⬆️ Uploading "${filename}" (${Math.round(blob.size / 1024)}KB)...`);

      const uploadUrl = `${SANITY_ASSETS_API}?filename=${encodeURIComponent(filename)}`;
      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SANITY_CONFIG.token}`,
          'Content-Type': blob.type || 'image/webp'
        },
        body: blob
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Upload failed: ${response.status} — ${errText}`);
      }

      const result = await response.json();
      const imageUrl = result.document?.url || '';
      console.log(`[NovaSanity] ✅ Image uploaded: ${imageUrl}`);
      return imageUrl;
    } catch (e) {
      console.error(`[NovaSanity] ❌ Image upload failed:`, e);
      if (typeof showToast === 'function') {
        showToast('IMAGE UPLOAD FAILED: ' + e.message);
      }
      return '';
    }
  },

  // Delete an image asset from Sanity
  async deleteImage(url) {
    if (!url || !url.includes('cdn.sanity.io')) return;
    try {
      const assetRef = this._urlToAssetRef(url);
      if (assetRef) {
        await this._mutate([{ delete: { id: assetRef } }]);
        console.log('[NovaSanity] 🗑️ Deleted image asset');
      }
    } catch (e) {
      console.warn('[NovaSanity] Could not delete image:', e.message);
    }
  },

  // ---- HELPERS ----

  // Convert a Sanity CDN URL to an asset reference ID
  // URL: https://cdn.sanity.io/images/{projectId}/{dataset}/{id}-{widthxheight}.{ext}
  _urlToAssetRef(url) {
    if (!url || !url.includes('cdn.sanity.io')) return null;
    try {
      const parts = url.split('/');
      const filename = parts[parts.length - 1].split('?')[0];
      // filename like: abc123-800x600.webp
      const dotIdx = filename.lastIndexOf('.');
      const ext = filename.substring(dotIdx + 1);
      const name = filename.substring(0, dotIdx);
      return `image-${name}-${ext}`;
    } catch (e) {
      return null;
    }
  },

  // Generate a random key for Sanity array items
  _generateKey() {
    return Math.random().toString(36).substring(2, 10);
  },

  // Debug helper
  async debug() {
    console.log('=== NovaSanity Debug ===');
    console.log('Ready:', this._ready);
    console.log('Products in cache:', this._products?.length || 0);
    console.log('Translations (AM):', Object.keys(this._translations?.am || {}).length);
    console.log('Translations (RU):', Object.keys(this._translations?.ru || {}).length);

    try {
      const query = encodeURIComponent('count(*[_type == "product"])');
      const url = `${SANITY_API}/query/${SANITY_CONFIG.dataset}?query=${query}`;
      const resp = await fetch(url, { headers: sanityHeaders() });
      const data = await resp.json();
      console.log('Products in Sanity (live):', data.result);
    } catch (e) {
      console.error('Failed to query Sanity:', e);
    }
    console.log('=== End Debug ===');
  }
};

window.NovaSanity = NovaSanity;
