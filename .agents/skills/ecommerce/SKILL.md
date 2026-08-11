---
name: ecommerce
description: Universal e-commerce website architecture skill. Covers full SPA architecture including admin panel (orders, inventory, brands, clients, activity logs, blog), Sanity CMS + Firebase integration, product data schema, storefront pages (home, shop, product detail, contact, checkout), filtering/sorting, cart drawer, wishlist drawer, wishlist page, user authentication (sign-in/sign-up/logout), My Account ecosystem (dashboard, purchase history, personal discount, order history, wishlist, account details), checkout flow with order creation, i18n translations (EN/AM/RU), CSS design system with design tokens, deployment on Vercel, and SEO. Use when building, modifying, or debugging any e-commerce shop, admin dashboard, product management, cart/wishlist, user accounts, order tracking, or storefront feature.
---

# Universal E-Commerce Shop — Full Architecture Skill

This skill provides the **complete blueprint** for building a production-grade e-commerce website from scratch. It documents every system, function, and pattern used in a real production codebase. The architecture is **industry-agnostic** — adapt product fields for jewelry, fragrances, fashion, electronics, or any product type.

---

## 1. Project Architecture Overview

### Tech Stack
- **Frontend**: Vanilla HTML + CSS + JavaScript (no framework, single-page application)
- **CMS for Products & Images**: Sanity CMS (HTTP API, no SDK)
- **Database for Orders/Users/Config**: Firebase Firestore
- **Deployment**: Vercel (static site with rewrites)
- **Fonts**: Google Fonts (Armenian + Latin)
- **Email**: EmailJS for order confirmations and contact forms
- **Build**: Custom `build.js` for CSS/JS minification via `terser`

### File Structure
```
project-root/
├── index.html              # Main SPA — all routes: home, shop, about, checkout, admin, my-account, wishlist, blog
├── product.html            # Standalone product detail page (SEO-friendly, separate HTML)
├── styles.css              # Master stylesheet (~4000+ lines)
├── styles.min.css          # Minified production CSS
├── app.js                  # Main application logic (~9500 lines)
├── app.min.js              # Minified production JS
├── admin.js                # Admin panel logic (WooCommerceAdmin object)
├── firebase-config.js      # Firebase init + NovaDB wrapper
├── sanity-config.js        # Sanity CMS wrapper (NovaSanity)
├── products.js             # Global taxonomy definitions (categories, materials, etc.)
├── build.js                # Node.js minification script
├── vercel.json             # Vercel routing rewrites & cache headers
├── manifest.json           # PWA manifest
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap
├── assets/                 # Static images, logos, hero images
└── .agents/                # Agent skills and rules
```

### Routing (Single-Page Application)
The `index.html` serves as a SPA with hash-based routing. All routes rewrite to `index.html` via `vercel.json`:
- `/` or `/home` → Home view
- `/shop` → Shop catalog view
- `/about` → About/brand story view
- `/contact` → Contact form view
- `/checkout` → Cart & checkout view
- `/admin` → Admin panel (login-gated)
- `/wishlist` → Wishlist page view
- `/my-account` → User account view (auth-gated)
- `/blog` → Blog listing view
- `/product` → **Separate** `product.html` (for SEO)

Each route shows/hides `<section class="route-view">` elements with `id="view-{name}"`.

---

## 2. Global App State

```javascript
const AppState = {
  products: [],              // All products (loaded from Sanity CMS on init)
  cart: [],                  // Cart items [{product, size, quantity, price}]
  wishlist: [],              // Wishlist product IDs (string array)
  instagramPosts: [],        // Social feed data
  currentRoute: 'home',     // Current SPA route
  language: 'am',           // Current UI language: 'en' | 'am' | 'ru'
  filters: {
    category: 'all',
    search: '',
    sort: 'default',         // 'default' | 'low' | 'high' | 'name'
    brand: '',
    gender: '',
    tag: '',
    scent_families: [],      // Product-type-specific filter arrays
    genders: [],
    vibes: [],
    sizes: [],
    brands: [],
    priceRange: { min: 0, max: 500000 }
  },
  selectedProduct: null,     // Currently selected product for detail view
  selectedSize: '100ml',     // Default selected variant/size
  customer: {                // Current logged-in customer data
    firstName: '',
    lastName: '',
    email: '',
    billing: {
      street: '',
      city: '',
      zip: ''
    },
    pastPurchases: [],       // Array of {id, size, date}
    discoverySamples: [],
    orders: []               // Array of {id, date, items, total, status}
  },
  outOfStockNotifications: [] // Product IDs user wants restock alerts for
};
```

### Initialization Flow
```javascript
// DOMContentLoaded:
1. NovaDB.init()              // Load Firebase data (orders, users, admin emails, audit logs)
2. NovaSanity.init()          // Load products from Sanity CMS via GROQ query
3. AppState.products = NovaSanity.getProducts()
4. WooCommerceAdmin.orders = NovaDB.getOrders() || []
5. loadCartFromStorage()      // Restore cart from localStorage
6. loadWishlistFromStorage()  // Restore wishlist from localStorage
7. initAuth()                 // Restore user session from localStorage
8. Render current route
9. Init event listeners (cart, filters, search, etc.)
```

---

## 3. Sanity CMS Configuration (`sanity-config.js`)

### Purpose
Manages **ALL product data and product images**. Uses Sanity HTTP API directly (no SDK dependency).

### Key Object: `NovaSanity`
```javascript
const NovaSanity = {
  _products: null,          // Cached products array
  _translations: null,      // {am: {pid: {...}}, ru: {pid: {...}}}
  _ready: false,

  async init()                          // Fetches all products via GROQ query
  getProducts()                         // Returns cached products array (sync)
  getProductTranslations()              // Returns {am: {}, ru: {}} (sync)
  getCachedProducts()                   // Returns products from localStorage cache

  async saveProduct(product)            // Create or update single product
  async saveAllProducts(productsArray)  // Batch save (50 per batch, createOrReplace)
  async deleteProduct(productId)        // Delete mutation

  async uploadImage(imageData, productId, index)  // Upload to Sanity Assets API
  async deleteImage(url)                           // Delete image asset

  async saveProductTranslation(productId, translations)  // Patch translations
  async saveAllTranslations(translationsObj)             // Batch translation patches

  _transformFromSanity(doc)   // Transform Sanity doc → AppState.products format
  _urlToAssetRef(url)         // Convert CDN URL to asset reference ID
  _generateKey()              // Random key for array items
};
```

### GROQ Query (init)
```javascript
const query = `*[_type == "product"] | order(_createdAt desc) {
  _id, productId, name, brand, sku, tagline, description, ingredients,
  scent_family, gender_id, price, sizes, stock, tags, vibes,
  rating, reviewsCount, featured, notes,
  "image": mainImage.asset->url,
  "images": galleryImages[].asset->url,
  translations, faqs
}`;
```

### Image Upload Pattern
```javascript
// Upload flow:
// 1. Convert base64/File/Blob to raw bytes
// 2. POST to: https://{projectId}.api.sanity.io/v{version}/assets/images/{dataset}?filename={name}
// 3. Content-Type: image/webp (or actual mime type)
// 4. Response contains: result.document.url (the CDN URL)
// 5. Store CDN URL as mainImage.asset reference in product document
```

### Local Cache Strategy
Products are cached in `localStorage` under key `nova_sanity_cache` to eliminate 5-second fetch delay on page load. Cache is refreshed on every successful `init()`.

---

## 4. Firebase Configuration (`firebase-config.js`)

### Purpose
Manages everything **EXCEPT** products/images: orders, users, admin access, audit logs, instagram posts, brands.

### Key Object: `NovaDB`
```javascript
const NovaDB = {
  _cache: {},
  _collection: 'site_data',  // Single Firestore collection, keyed by doc ID

  async init()                   // Loads all docs from Firestore into cache
  get(docId)                     // Sync read from cache
  async set(docId, data)         // Updates cache + writes to Firestore
  whenReady()                    // Returns a promise that resolves when init completes

  // Data accessors (all return arrays or objects):
  getOrders() / saveOrders(array)
  getUsers() / saveUsers(array)
  getAdminEmails() / saveAdminEmails(array)
  getStaffProfiles() / saveStaffProfiles(obj)
  getAuditLogs() / saveAuditLogs(array)
  getBrands() / saveBrands(array)
  getTrash() / saveTrash(array)
  getInstagramPosts() / saveInstagramPosts(array)
};
```

### Firestore Document IDs
All data lives in a single collection `site_data` with these document IDs:
- `orders` → `{ items: [...] }`
- `users` → `{ items: [...] }`
- `admin_emails` → `{ emails: [...] }`
- `staff_profiles` → `{ data: {...} }`
- `audit_logs` → `{ entries: [...] }`
- `brands` → `{ items: [...] }`
- `trash` → `{ items: [...] }`
- `instagram_posts` → `{ items: [...] }`

---

## 5. Cart System

### Cart Item Structure
```javascript
{
  product: { /* full product object reference */ },
  size: "100ml",     // Selected variant/size label
  quantity: 2,       // Number of items
  price: 125000      // Price for the selected size
}
```

### Core Functions

| Function | Purpose |
|---|---|
| `addToCart(product, size, qty)` | Add item or increment qty. Validates stock limits. Shows toast. Opens cart drawer. |
| `updateCartUI()` | Re-renders cart drawer items, updates badge counts (desktop, mobile, floating header). |
| `updateCartQty(index, change)` | Increment/decrement qty. Removes if qty ≤ 0. Validates stock. |
| `removeCartItem(index)` | Removes item by index. Shows toast. |
| `saveCartToStorage()` | Saves `AppState.cart` to `localStorage` key `nova_cart_storage`. |
| `loadCartFromStorage()` | Restores cart from localStorage. Re-maps product references to runtime state. |
| `openCartDrawer()` | Adds `.active` class to `#cart-drawer-overlay`. |
| `closeCartDrawer()` | Removes `.active` class. |
| `quickAddToCart(productId)` | Adds product with first available size, qty 1. Used by card buttons and wishlist. |

### Cart Drawer HTML IDs
- `#cart-drawer-overlay` — Drawer overlay container
- `#cart-items-container` — Cart items list
- `#cart-subtotal` — Subtotal display
- `#cart-count-badge` — Desktop header badge
- `#mobile-cart-count-badge` — Mobile header badge
- `.floating-cart-count` — Floating header badge

### Cart Storage
```javascript
// Save: localStorage key 'nova_cart_storage'
localStorage.setItem('nova_cart_storage', JSON.stringify(AppState.cart));

// Load: parse + re-map product references
AppState.cart = JSON.parse(localStorage.getItem('nova_cart_storage'));
AppState.cart.forEach(item => {
  const productRef = AppState.products.find(p => p.id === item.product.id);
  if (productRef) item.product = productRef;
});
```

### Cart Empty State
When cart is empty, displays SVG icon + translated empty message + "Go to Shop" button.

### Cart Badge Animation
On add to cart, the badge gets a `bounce` CSS class for 400ms.

---

## 6. Wishlist System

### Wishlist Data Structure
`AppState.wishlist` is a **flat array of product IDs** (strings):
```javascript
AppState.wishlist = ["product-001", "product-002"];
```

### Core Functions

| Function | Purpose |
|---|---|
| `toggleWishlist(productId)` | Add or remove product ID. Shows toast. Saves to localStorage. Re-renders UI. |
| `toggleWishlistCard(productId, event)` | Wrapper that calls `toggleWishlist()` + stops event propagation (for card buttons). |
| `updateWishlistUI()` | Re-renders wishlist drawer items, updates badge counts, toggles `.wishlist-filled` class on header heart. |
| `saveWishlistToStorage()` | Saves to `localStorage` key `nova_wishlist_storage`. |
| `loadWishlistFromStorage()` | Restores from localStorage. |
| `renderWishlistPage()` | Renders the full-page `/wishlist` view with product grid. |
| `addAllWishlistToCart()` | Moves all in-stock wishlist items to cart at once. |

### Wishlist Drawer HTML IDs
- `#wishlist-drawer-overlay` — Drawer overlay
- `#wishlist-items-container` — Items list
- `#wishlist-count-badge` — Desktop badge
- `#mobile-wishlist-count-badge` — Mobile badge
- `.floating-wishlist-count` — Floating header badge

### Wishlist Page HTML
- `#wishlist-page-container` — Full-page wishlist grid container
- Each item has: image, meta (category + brand), name, price, "Add to Cart" button, remove button

### Wishlist Card Heart Button
Product cards include a heart button: `<button class="nv-card__wishlist">`. When wishlisted, it gets class `is-active` and the SVG fills.

---

## 7. User Authentication System

### Architecture
Custom auth system using **localStorage** for session persistence and **Firebase Firestore** for user storage. No Firebase Auth SDK — uses plain email/password with client-side password hashing.

### User Object
```javascript
{
  id: "lxyz123",                    // Generated via Date.now().toString(36)
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  passwordHash: "h_abc123",        // Simple hash (not production-secure)
  createdAt: "2026-08-01T...",
  billing: { street: '', city: '', zip: '' }
}
```

### Session Storage
```javascript
const SESSION_KEY = 'nova_user_session';
// Save: localStorage.setItem(SESSION_KEY, JSON.stringify(user))
// Get:  JSON.parse(localStorage.getItem(SESSION_KEY))
// Clear: localStorage.removeItem(SESSION_KEY)
```

### Auth Functions

| Function | Purpose |
|---|---|
| `handleSignUp(event)` | Validates passwords match, checks email uniqueness in users array, creates user, saves to Firestore via `saveUsers()`, saves session, updates UI. If email was pre-granted admin, syncs staff profile. |
| `handleSignIn(event)` | Finds user by email, validates password hash, saves session, updates UI. Auto-establishes admin session if email is in admin list. |
| `handleLogout()` | Clears both user session and admin session. Navigates to home. |
| `updateAuthUI(user)` | Adds/removes `user-logged-in` class on body. Updates header greeting, customer state, account form fields. |
| `switchAuthTab(tab)` | Toggles between sign-in and sign-up forms. |
| `initAuth()` | On page load, restores session and updates UI. |

### Auth Gate HTML Structure
```html
<div id="auth-gate" class="auth-gate">
  <div class="auth-card">
    <div class="auth-tabs">
      <button id="auth-tab-signin" onclick="switchAuthTab('signin')">Sign In</button>
      <button id="auth-tab-signup" onclick="switchAuthTab('signup')">Create Account</button>
    </div>
    <!-- Sign In Form: #auth-signin-form -->
    <!--   Fields: #signin-email, #signin-password -->
    <!--   Error: #signin-error -->
    <!-- Sign Up Form: #auth-signup-form -->
    <!--   Fields: #signup-first-name, #signup-last-name, #signup-email, #signup-password, #signup-password-confirm -->
    <!--   Error: #signup-error -->
  </div>
</div>
```

### Auth UI Visibility
- `.auth-logged-in` elements: Visible only when user is logged in (via `body.user-logged-in` class)
- `.auth-guest` elements: Visible only when no user is logged in

---

## 8. My Account Ecosystem

### Overview
The `/my-account` route shows either the **Auth Gate** (if logged out) or the **Account Dashboard** (if logged in). The dashboard has a sidebar with 6 tabs.

### My Account Tabs

| Tab ID | Tab Name | Panel ID | Content |
|---|---|---|---|
| `dashboard` | Dashboard | `#account-sec-dashboard` | Welcome greeting, Profile Summary card (purchase category bars), Quick Nav grid (4 shortcut cards) |
| `wardrobe` | Purchase History | `#account-sec-wardrobe` | Grid of past purchases with product image, name, size, purchase date, "Buy Again" button |
| `discovery` | Personal Discount | `#account-sec-discovery` | Auto-rotating brand discount system. Shows discount code, amount %, featured brand, expiry countdown. Code is copyable. |
| `orders` | Order History | `#account-sec-orders` | Table: ID, Date, Items, Total, Status badge, Invoice button |
| `wishlist` | My Wishlist | `#account-sec-wishlist` | Grid of wishlisted products with Add to Cart / Notify Restock buttons |
| `details` | Account Details | `#account-sec-details` | Form: First Name, Last Name, Email, Billing Address (Street, City, ZIP), New Password |

### Tab Switching
```javascript
window.switchAccountTab = function(tabId) {
  // Remove active from all .account-nav-btn in .my-account-sidebar
  // Add active to matching [data-account-tab="{tabId}"]
  // Hide all .account-panel in .my-account-content
  // Show #account-sec-{tabId}
};
```

### Personal Discount System
```javascript
// Auto-rotating discount: cycles through brands every N days
const DISCOUNT_CYCLE_DAYS = 14;
const DISCOUNT_PERCENT = 10;

function getActiveDiscount() {
  // Determines which brand is currently featured based on date
  // Returns { brand, code, percent, daysLeft, cycleIndex }
}

function renderPersonalDiscount() {
  // Populates: #discount-brand-title, #discount-description,
  //            #discount-code-display, #discount-amount-display,
  //            #discount-brand-display, #discount-expires-display
}

window.applyDiscountCode = function() {
  // Validates entered code against active discount
  // Applies percentage discount to matching brand items in cart
};
```

### Account Details Form IDs
- `#acc-first-name`, `#acc-last-name`, `#acc-email`
- `#acc-billing-street`, `#acc-billing-city`, `#acc-billing-zip`
- `#acc-password`
- Form: `#customer-details-form` → `onsubmit="saveCustomerDetails(event)"`

### Out-of-Stock Notifications
```javascript
window.toggleOutofStockNotification = function(productId) {
  // Toggles product ID in AppState.outOfStockNotifications
  // Shows toast: "RESTOCK NOTIFICATION ENABLED/REMOVED."
};
```

---

## 9. Checkout Flow

### Checkout Page Structure
Two-column grid layout:
- **Left**: Billing details form
- **Right**: Order summary (cart items list, subtotal, shipping, discount code input, total, place order button)

### Checkout Functions

| Function | Purpose |
|---|---|
| `renderCheckoutPage()` | Renders cart items in summary, calls `updateCheckoutTotals()` and `prefillCheckoutForm()`. |
| `prefillCheckoutForm()` | Pre-fills billing form from `localStorage` key `nova_billing_info` or from `AppState.customer`. |
| `updateCheckoutTotals()` | Calculates subtotal, adds shipping cost, updates total display. |
| `processCheckout()` | Main checkout handler (see flow below). |
| `restoreCheckoutPage()` | Restores default checkout HTML after success screen. |

### Checkout Flow (`processCheckout`)
```javascript
async function processCheckout() {
  1. Calculate subtotal, shipping, total
  2. Collect customer data from billing form:
     { firstName, lastName, email, address, region, city, zip }
  3. Save billing info to localStorage('nova_billing_info')
  4. Deduct product stock quantities
  5. Save updated products to Sanity: await saveProductsToStorage()
  6. Create order: WooCommerceAdmin.addOrder(customerData, cart, total)
  7. Clear cart: AppState.cart = []; saveCartToStorage(); updateCartUI()
  8. Show success receipt view (order ID, date, shipping address, total)
  9. Send confirmation email via EmailJS
}
```

### Checkout Form HTML IDs
- `#billing-first-name`, `#billing-last-name`, `#billing-email`
- `#billing-address`, `#billing-city`, `#billing-zip`
- `#region-dropdown-value` (custom dropdown with `data-value` attribute)
- `#checkout-items-list` — Order summary items
- `#checkout-subtotal-val`, `#checkout-shipping-val`, `#checkout-total-val`
- `#checkout-discount-input`, `#checkout-discount-msg`

### Order Success View
After checkout, the checkout container is replaced with a success receipt showing:
- Checkmark SVG icon
- "Order Placed Successfully" heading
- Order reference number and email confirmation message
- Order details: date, shipping address, total paid
- "Continue Shopping" button

---

## 10. Admin Panel

### Architecture
The admin panel lives within `index.html` at `#view-admin`. Access is gated by email/password login checked against Firebase staff profiles.

### Admin Authentication Flow
```javascript
1. User navigates to /admin
2. Show #admin-login-wrapper (email + password form)
3. On submit: Check email+password against NovaDB staff profiles
4. Verify email is in NovaDB.getAdminEmails() list
5. If admin → show #admin-dashboard-wrapper, hide login
6. Load staff profile, set sessionStorage('nova_admin_session')
7. Log "Admin login" to audit logs
```

### Role-Based Access
- **Super Admin**: Full access to all tabs including Settings (developer tab)
- **Shop Manager**: Access to all tabs except Settings

### Admin Layout Structure
```
#view-admin
├── #admin-login-wrapper (login form)
└── #admin-dashboard-wrapper (main dashboard)
    ├── .admin-header (logo, role badge, user name, logout, "View Front End")
    └── .admin-layout (flex)
        ├── .admin-sidebar (navigation tabs)
        └── .admin-content (tab panels)
```

### Admin Sidebar Tabs

| Tab ID | Tab Name | Panel ID |
|---|---|---|
| `orders` | Orders Manager | `#admin-sec-orders` |
| `inventory` | Inventory Tracker | `#admin-sec-inventory` |
| `developer` | Settings | `#admin-sec-developer` |
| `clients` | Clients | `#admin-sec-clients` |
| `logs` | Activity Logs | `#admin-sec-logs` |
| `blog` | Blog Manager | `#admin-sec-blog` |

### Tab A: Orders Manager
- **Stats Grid** (4 cards): Total Revenue, Orders Placed, Avg Order Value, Total Stock Items
- **Sales Chart**: Bar chart showing sales by top brands
- **Orders Table**: Order ID, Date, Customer (name + email), Items, Total, Status, Actions
  - Status badges: `pending`, `processing`, `completed`, `failed`
  - Actions: status dropdown + delete button

### Tab B: Inventory Tracker (3 Sub-Tabs)
**Products**: Search, bulk actions, inventory table (Checkbox, Image, Name/brand/SKU, Price, Stock, Availability, Actions). "Import CSV" and "Add New Product" buttons. Clicking a product opens the Product Editor.

**Brands**: Add brand form + grid of brand cards with delete.

**Trash**: Deleted products with restore/permanent delete + bulk actions.

### Tab C: Settings (Super Admin Only)
Grant admin access by email. List of admin emails with revoke option.

### Tab D: Clients
Table of registered users: #, Name, Email, Registered date, Actions.

### Tab E: Activity Logs
Audit log table: Timestamp, Operator, Action. Clear Logs button.

### Tab F: Blog Manager
Full blog post form with multilingual fields (EN, AM, RU). Posts table with edit/delete.

### Product Editor (Full-Page WordPress-Style)
```
#product-editor-page
├── pe-topbar (Back button, title, Publish button)
└── pe-content (flex)
    ├── pe-main
    │   ├── Product Name input + Slug
    │   └── pe-metabox "Product Data"
    │       ├── Tab: General (Brand, SKU, Description, Pricing/Sizes)
    │       ├── Tab: Inventory (Stock qty, status)
    │       └── Tab: Details (product-type-specific fields)
    └── pe-sidebar
        ├── Product Image (upload/URL + gallery)
        ├── Classification (Category, Type filters)
        ├── Tags (checkboxes)
        └── Product Stats (Rating, Reviews, Featured checkbox)
```

### Key Admin Object: `WooCommerceAdmin`
```javascript
const WooCommerceAdmin = {
  orders: [],  // Loaded from Firestore on init

  async saveOrdersToStorage()                   // Saves to Firestore via NovaDB
  getMetrics(productsList)                      // Returns {revenue, orderCount, aov, stockCount}
  addOrder(customerData, cartItems, total)       // Creates new order object
  updateOrderStatus(orderId, newStatus)          // Updates status
  renderDashboard(productsList)                  // Renders stats, chart, orders table
  renderOrdersTable()                           // Renders orders tbody
  renderInventoryTable(productsList, callback)  // Renders inventory tbody
};
```

### Order Object
```javascript
{
  id: "NOVA-1001",
  date: "2026-08-04 16:00",
  customer: "John Doe",
  email: "john@example.com",
  total: 125000,
  status: "pending",  // pending | processing | completed | failed
  items: [
    { name: "Product Name", qty: 1, size: "Standard" }
  ]
}
```

---

## 11. CSS Design System

### Design Tokens (`:root`)
```css
:root {
  --green: #0B3B30;        /* Primary dark (header, accents) */
  --green-2: #123F35;      /* Secondary dark green */
  --ink: #1F1D1A;          /* Body text, dark backgrounds */
  --cream: #FFFFFF;        /* Light backgrounds */
  --cream-2: #FFFFFF;      /* Alternate light */
  --cream-3: #F7F7F7;      /* Subtle gray background */
  --gold: #C9A227;         /* Accent color (CTAs, highlights) */
  --font: 'Noto Sans Armenian', 'Instrument Sans', sans-serif;
  --font-serif: 'Noto Serif Armenian', Georgia, serif;
  --mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  --gutter: 20px;          /* Responsive padding (20→32→44px) */
  --max: 1720px;           /* Max content width */
}
```

### Key CSS Classes

| Class | Purpose |
|---|---|
| `.btn-primary` | Gold/accent background CTA button |
| `.btn-secondary` | Outlined button |
| `.btn-underline` / `.btn-underline-dark` | Text-only with underline |
| `.nv-card` | Product card component |
| `.nv-card__figure` | Card image container |
| `.nv-card__body` | Card text content |
| `.nv-card__brand` | Brand name label |
| `.nv-card__name` | Product name |
| `.nv-card__price` | Price display |
| `.nv-card__wishlist` | Heart button (`.is-active` when wishlisted) |
| `.admin-card` | Admin panel card container |
| `.admin-table` | Admin data table |
| `.admin-input` | Form inputs in admin |
| `.admin-status-badge` | Status pill badges |
| `.badge-pending` / `.badge-processing` / `.badge-completed` / `.badge-failed` | Status colors |
| `.stat-card` | Dashboard metric card |
| `.filter-chip` | Filter toggle button (`.active` for selected state) |
| `.cart-item` | Cart/wishlist drawer item row |
| `.cart-empty-state` | Empty cart/wishlist message |
| `.wishlist-page-item` | Full-page wishlist item |
| `.auth-card` | Auth gate card |
| `.auth-tab` | Auth tab button (`.active` state) |
| `.auth-input` | Auth form inputs |
| `.account-nav-btn` | My Account sidebar tab (`.active` state) |
| `.account-panel` | My Account content panel |
| `.welcome-box` | Dashboard greeting container |
| `.discovery-promo-banner` | Discount banner |

### Responsive Breakpoints
- Mobile first: base styles
- `768px` — Tablet
- `1024px` — Small desktop
- `1200px` — Large desktop

---

## 12. Internationalization (i18n)

### Language System
Three languages: English (`en`), Armenian (`am`), Russian (`ru`).

### Implementation
- All translatable elements use `data-trans="key_name"` attribute
- A global `TRANSLATIONS` object maps keys → translations per language
- `AppState.language` tracks current language (stored in `localStorage` key `nova_lang_choice`)
- Language switcher in the header UI updates all `[data-trans]` elements

### Translation Keys (Partial List)
```javascript
TRANSLATIONS = {
  en: {
    cart_title: "Shopping Bag",
    cart_subtotal_label: "Subtotal",
    cart_shipping_desc: "Shipping and taxes calculated at checkout.",
    cart_checkout_btn: "Proceed to Checkout",
    cart_empty_msg: "Your shopping bag is currently empty.",
    card_add_to_cart: "Add to Cart",
    modal_add_to_cart: "Add to Cart",
    wishlist_title: "My Wishlist",
    wishlist_empty_msg: "Your wishlist is currently empty.",
    browse_shop_btn: "Browse Shop",
    go_to_shop_btn: "Go to Shop",
    my_account_title: "My Account",
    // ... hundreds more keys
  },
  am: { /* Armenian translations */ },
  ru: { /* Russian translations */ }
};
```

### Product Translations
```javascript
// In Sanity, each product has:
translations: {
  am: { name: "...", tagline: "...", description: "..." },
  ru: { name: "...", tagline: "...", description: "..." }
}
```

---

## 13. Shop Filtering System

### Filter State
```javascript
const filterState = {
  selectedCategories: [],   // e.g. ["Rings", "Necklaces"]
  selectedTypes: [],        // Product-type-specific filters
  selectedBrands: [],
  searchQuery: '',
  priceRange: { min: 0, max: 500000 },
  sort: 'default'           // default | low | high | name
};
```

### Shop Page Layout
```
Shop Page
├── Breadcrumbs (Home / All Products)
├── Shop Intro (H1, description)
├── Mobile Filter Toggle button
└── Shop Layout (sidebar + main)
    ├── Sidebar Filters
    │   ├── Search box
    │   ├── Category chips (filter-chip buttons)
    │   ├── Type/classification chips (with color dots)
    │   ├── Brand filter
    │   ├── Price range (min/max inputs)
    │   └── Clear All button
    └── Results Area
        ├── Results count + active filter chips
        ├── Sort dropdown
        ├── Products grid (responsive: 2→3→4 cols)
        └── Empty state with "clear filters" button
```

---

## 14. Deployment & Build

### Vercel Configuration (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/product", "destination": "/product.html" },
    { "source": "/(shop|about|contact|checkout|admin|...)", "destination": "/index.html" },
    { "source": "/(catch-all-non-assets)", "destination": "/index.html" }
  ],
  "headers": [
    { "source": "/(.*).html", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] },
    { "source": "/(.*).min.css", "headers": [{ "key": "Cache-Control", "value": "immutable, 1yr" }] },
    { "source": "/(.*).min.js", "headers": [{ "key": "Cache-Control", "value": "immutable, 1yr" }] },
    { "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "immutable, 1yr" }] }
  ]
}
```

### Build Process (`node build.js`)
- Minifies `styles.css` → `styles.min.css`
- Minifies `app.js` → `app.min.js` (uses `terser`)
- Production HTML references `.min` versions

### SEO Essentials
- `<title>`, `<meta description>`, `<meta keywords>`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- Canonical URL
- JSON-LD structured data (Organization, Product)
- `robots.txt`, `sitemap.xml`
- Semantic HTML with single `<h1>` per page
- `loading="lazy"` on images
- Preconnect hints for external resources

---

## 15. Product Card Component
```html
<a href="/product?id=..." class="nv-card">
  <figure class="nv-card__figure">
    <img class="nv-card__img" src="..." alt="..." loading="lazy">
    <button class="nv-card__wishlist" onclick="toggleWishlistCard('id', event)">
      <svg><!-- heart icon --></svg>
    </button>
  </figure>
  <div class="nv-card__body">
    <div class="nv-card__brand">BRAND NAME</div>
    <div class="nv-card__name">Product Name<small>Type · Category</small></div>
    <div class="nv-card__rule"></div>
    <div class="nv-card__foot">
      <span class="nv-card__price">֏125,000</span>
      <button class="product-btn" onclick="quickAddToCart('id', event)">Add to Cart</button>
    </div>
  </div>
</a>
```

---

## 16. Key JavaScript Patterns

### Toast Notifications
```javascript
function showToast(message) {
  // Creates a temporary notification at the bottom of the screen
  // Auto-dismisses after ~3 seconds
  // All messages are UPPERCASE by convention
}
```

### DOM Cache Object
```javascript
const DOM = {
  // Cart
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartCountBadge: document.getElementById('cart-count-badge'),

  // Wishlist
  wishlistDrawerOverlay: document.getElementById('wishlist-drawer-overlay'),
  wishlistItemsContainer: document.getElementById('wishlist-items-container'),
  wishlistCountBadge: document.getElementById('wishlist-count-badge'),
  wishlistHeaderBtn: document.getElementById('wishlist-header-btn'),

  // ... other cached elements
};
```

### localStorage Keys Reference

| Key | Data | Purpose |
|---|---|---|
| `nova_cart_storage` | Cart items array (JSON) | Persist cart across sessions |
| `nova_wishlist_storage` | Wishlist product IDs (JSON array) | Persist wishlist |
| `nova_user_session` | User object (JSON) | Auth session persistence |
| `nova_lang_choice` | Language code string | Remember language preference |
| `nova_billing_info` | Billing form data (JSON) | Pre-fill checkout form |
| `nova_sanity_cache` | Products array (JSON) | Fast product loading cache |

### Email Integration (EmailJS)
```javascript
// Order confirmation email
emailjs.send('service_id', 'template_id', {
  email: customerEmail,
  order_id: orderId,
  orders: orderItemsList,
  cost: {
    shipping: shippingDisplay,
    tax: '֏0',
    total: totalDisplay
  }
});
```

---

## 17. Quick Reference: Admin Panel HTML IDs

### Login
- `#admin-login-wrapper`, `#admin-login-form`
- `#admin-email-input`, `#admin-pass-input`

### Dashboard
- `#admin-dashboard-wrapper`
- `#admin-user-role-badge`, `#admin-user-profile-name`

### Sidebar: `[data-admin-tab="orders|inventory|developer|clients|logs|blog"]`

### Orders Tab
- `#admin-revenue-val`, `#admin-orders-val`, `#admin-aov-val`, `#admin-stock-val`
- `#admin-brand-chart`, `#admin-orders-tbody`

### Inventory Tab
- `#admin-inventory-tbody`, `#admin-inventory-search`
- `#bulk-action-select`, `#admin-brands-list`, `#admin-trash-list`

### Settings Tab
- `#grant-admin-email`, `#admin-access-list`

### Clients Tab
- `#admin-clients-tbody`, `#admin-clients-count`

### Logs Tab
- `#admin-audit-logs-tbody`

### Blog Tab
- `#blog-admin-form`, `#admin-blog-tbody`

### Product Editor
- `#product-editor-page`, `#pe-product-name`, `#pe-brand`, `#pe-sku`
- `#pe-description`, `#pe-stock`, `#pe-image-file`, `#pe-image-url`, `#pe-gallery`
