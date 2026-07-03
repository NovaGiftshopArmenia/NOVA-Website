// ============================================
// NOVA SANITY CMS CONFIGURATION & HELPER
// ============================================
// Handles: Products, Product Images, Product Translations
// Everything else stays in Firebase (orders, users, etc.)

const SANITY_CONFIG = {
  projectId: '49iqr6js',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skerzCM4AF5WJN5lLQPctC45fI6FqsoLU2C9m23ENIUCruklL6NXxbagwPWMVXYPqnK5zdz8WZLR3mXC98WQNda4URhyziGHpcaf6HKnYjqBW00alXalDdDShSy2MrU8UwEfKwvqVkcE8u9Ii01aN5z64HRSkeW97FsBRuKRhSnCxafYhcVw',
  useCdn: false // We need fresh data, not cached
};

// ============================================
// NovaSanity — Sanity wrapper for product management
// ============================================
const NovaSanity = {
  _client: null,
  _products: null,
  _translations: null,
  _ready: false,

  // Initialize the Sanity client and load all products
  async init() {
    try {
      // Create Sanity client using the CDN-loaded library
      this._client = sanityClient.createClient({
        projectId: SANITY_CONFIG.projectId,
        dataset: SANITY_CONFIG.dataset,
        apiVersion: SANITY_CONFIG.apiVersion,
        token: SANITY_CONFIG.token,
        useCdn: SANITY_CONFIG.useCdn
      });

      // Fetch all products from Sanity
      const products = await this._client.fetch(
        `*[_type == "product"] | order(_createdAt desc) {
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
        }`
      );

      // Transform Sanity documents to match the existing AppState.products format
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
      console.log(`[NovaSanity] ✅ Loaded translations for ${Object.keys(this._translations.am).length} products`);
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
      _sanityId: doc._id, // Keep Sanity's internal ID for updates
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
      images: doc.images || []
    };
  },

  // Save a single product to Sanity (create or update)
  async saveProduct(product) {
    if (!this._client) throw new Error('Sanity client not initialized');

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

    // Handle main image — if it's a Sanity asset URL, create a reference
    if (product.image && product.image.includes('cdn.sanity.io')) {
      // Already a Sanity URL — extract asset ID and create reference
      const assetId = this._extractAssetId(product.image);
      if (assetId) {
        doc.mainImage = { _type: 'image', asset: { _type: 'reference', _ref: assetId } };
      }
    }
    // If image is NOT a Sanity URL, we store it as a plain string for now
    // (it might be an external URL or empty)

    // Handle gallery images similarly
    if (product.images && product.images.length > 0) {
      const galleryRefs = [];
      for (const imgUrl of product.images) {
        if (imgUrl && imgUrl.includes('cdn.sanity.io')) {
          const assetId = this._extractAssetId(imgUrl);
          if (assetId) {
            galleryRefs.push({ _type: 'image', _key: this._generateKey(), asset: { _type: 'reference', _ref: assetId } });
          }
        }
      }
      if (galleryRefs.length > 0) {
        doc.galleryImages = galleryRefs;
      }
    }

    try {
      const result = await this._client.createOrReplace(doc);
      product._sanityId = result._id;
      console.log(`[NovaSanity] ✅ Saved product "${product.name}" to Sanity (${result._id})`);
      return result;
    } catch (e) {
      console.error(`[NovaSanity] ❌ Failed to save product "${product.name}":`, e);
      if (typeof showToast === 'function') {
        showToast('SANITY SAVE ERROR: ' + e.message);
      }
      throw e;
    }
  },

  // Save ALL products (used by saveProductsToStorage)
  async saveAllProducts(productsArray) {
    console.log(`[NovaSanity] 📦 Saving ${productsArray.length} products to Sanity...`);
    const promises = productsArray.map(p => this.saveProduct(p));
    await Promise.all(promises);
    console.log(`[NovaSanity] ✅ All ${productsArray.length} products saved`);
  },

  // Save product translations for a specific product
  async saveProductTranslation(productId, translations) {
    if (!this._client) return;
    
    const sanityId = `product-${productId}`;
    try {
      await this._client.patch(sanityId)
        .set({ translations: translations })
        .commit();
      
      // Update local cache
      if (translations.am) this._translations.am[productId] = translations.am;
      if (translations.ru) this._translations.ru[productId] = translations.ru;
      
      console.log(`[NovaSanity] ✅ Saved translations for "${productId}"`);
    } catch (e) {
      console.warn(`[NovaSanity] ⚠️ Failed to save translations for "${productId}":`, e);
    }
  },

  // Save ALL translations (used by saveAllTranslations)
  async saveAllTranslations(translationsObj) {
    if (!this._client || !translationsObj) return;
    
    const productIds = new Set([
      ...Object.keys(translationsObj.am || {}),
      ...Object.keys(translationsObj.ru || {})
    ]);

    console.log(`[NovaSanity] 📦 Saving translations for ${productIds.size} products...`);
    
    for (const pid of productIds) {
      const trans = {
        am: translationsObj.am?.[pid] || null,
        ru: translationsObj.ru?.[pid] || null
      };
      await this.saveProductTranslation(pid, trans);
    }
    
    console.log(`[NovaSanity] ✅ All translations saved`);
  },

  // Delete a product from Sanity
  async deleteProduct(productId) {
    if (!this._client) return;
    
    const sanityId = `product-${productId}`;
    try {
      await this._client.delete(sanityId);
      console.log(`[NovaSanity] 🗑️ Deleted product "${productId}" from Sanity`);
    } catch (e) {
      console.warn(`[NovaSanity] ⚠️ Failed to delete product "${productId}":`, e);
    }
  },

  // Upload an image to Sanity Assets
  // Accepts: File, Blob, or base64 data URL
  async uploadImage(imageData, productId, index) {
    if (!this._client) throw new Error('Sanity client not initialized');

    // If it's already a URL (not base64), return as-is
    if (typeof imageData === 'string' && !imageData.startsWith('data:')) {
      return imageData;
    }

    try {
      let blob;
      if (typeof imageData === 'string' && imageData.startsWith('data:')) {
        // Convert base64 data URL to blob
        const response = await fetch(imageData);
        blob = await response.blob();
      } else if (imageData instanceof Blob || imageData instanceof File) {
        blob = imageData;
      } else {
        console.warn('[NovaSanity] Invalid image data type');
        return '';
      }

      const filename = `${productId}_img_${index}_${Date.now()}.webp`;
      
      console.log(`[NovaSanity] ⬆️ Uploading image "${filename}" (${Math.round(blob.size / 1024)}KB)...`);
      
      const asset = await this._client.assets.upload('image', blob, {
        filename: filename,
        contentType: blob.type || 'image/webp'
      });

      const imageUrl = asset.url;
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

  // Delete an image asset from Sanity (by URL)
  async deleteImage(url) {
    if (!url || !url.includes('cdn.sanity.io')) return;
    try {
      const assetId = this._extractAssetId(url);
      if (assetId) {
        await this._client.delete(assetId);
        console.log('[NovaSanity] 🗑️ Deleted image asset from Sanity');
      }
    } catch (e) {
      console.warn('[NovaSanity] Could not delete image:', e.message);
    }
  },

  // Extract Sanity asset ID from a CDN URL
  // URL format: https://cdn.sanity.io/images/{projectId}/{dataset}/{assetId}.{ext}
  _extractAssetId(url) {
    if (!url || !url.includes('cdn.sanity.io')) return null;
    try {
      const parts = url.split('/');
      const filename = parts[parts.length - 1].split('?')[0]; // Remove query params
      const [name, ext] = filename.split('.');
      // Sanity asset IDs look like: image-{hash}-{width}x{height}-{ext}
      return `image-${name}-${ext}`;
    } catch (e) {
      return null;
    }
  },

  // Generate a random key for array items (Sanity requires _key on array items)
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
    
    if (this._client) {
      try {
        const count = await this._client.fetch('count(*[_type == "product"])');
        console.log('Products in Sanity (live):', count);
      } catch (e) {
        console.error('Failed to query Sanity:', e);
      }
    }
    console.log('=== End Debug ===');
  }
};

window.NovaSanity = NovaSanity;
