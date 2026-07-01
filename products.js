// GLOBAL TAXONOMY DEFINITIONS
const GLOBAL_ATTRIBUTES = {
  scent_families: {
    woody: { id: "woody", label: { en: "Woody", am: "Փայտային", ru: "Древесные" }, color: "#8E806A" },
    floral: { id: "floral", label: { en: "Floral", am: "Ծաղկային", ru: "Цветочные" }, color: "#E4A5B8" },
    citrus: { id: "citrus", label: { en: "Citrus", am: "Ցիտրուսային", ru: "Цитрусовые" }, color: "#F4D160" },
    amber: { id: "amber", label: { en: "Amber", am: "Ամբրային", ru: "Ամբրային" }, color: "#D67B27" }
  },
  genders: {
    men: { id: "men", label: { en: "Men", am: "Տղամարդկանց", ru: "Мужчинам" } },
    women: { id: "women", label: { en: "Women", am: "Կանանց", ru: "Женщинам" } },
    unisex: { id: "unisex", label: { en: "Unisex", am: "Ունիսեքս", ru: "Унисекс" } }
  },
  vibes: {
    romantic: { id: "romantic", label: { en: "Romantic / Evening", am: "Ռոմանտիկ / Երեկոյան", ru: "Романтический / Вечерний" } },
    daily: { id: "daily", label: { en: "Daily / Fresh", am: "Ամենօրյա / Թարմ", ru: "Повседневный / Свежий" } },
    professional: { id: "professional", label: { en: "Business / Elegant", am: "Գործնական / Էլեգանտ", ru: "Деловой / Элегантный" } },
    cozy: { id: "cozy", label: { en: "Warm / Cozy", am: "Տաք / Հարմարավետ", ru: "Теплый / Уютный" } },
    mysterious: { id: "mysterious", label: { en: "Mysterious / Bold", am: "Խորհրդավոր / Համարձակ", ru: "Загадочный / Смелый" } }
  }
};

const INITIAL_PRODUCTS = [
  {
    id: "santal-01",
    name: "Santal N°01",
    scent_family: "woody",
    gender_id: "unisex",
    vibes: ["mysterious", "cozy"],
    price: 195,
    image: "assets/santal.webp",
    brand: "NOVA",
    tags: ["New", "Best Seller", "Home"],
    rating: 4.9,
    reviewsCount: 128,
    tagline: "A smoky, magnetic signature of Australian sandalwood, cardamom, and leather.",
    description: "Santal N°01 is our signature creation. It captures the raw elegance of the Australian outback under a midnight sky. Warm, dry, and sensuous, it envelopes the wearer in a comforting yet mysterious aura of leather, amber, and spice, drying down to an creamy, milky woodiness that lingers on the skin for hours.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Alpha-Isomethyl Ionone, Farnesol, Geraniol, Limonene, Linalool.",
    notes: {
      top: ["Cardamom", "Iris", "Violet"],
      heart: ["Sandalwood", "Virginia Cedar", "Papyrus"],
      base: ["Leather", "Amber", "Musk"]
    },
    sizes: [
      { size: "50ml", price: 120 },
      { size: "100ml", price: 195 },
      { size: "200ml", price: 310 }
    ],
    stock: 12,
    featured: true
  },
  {
    id: "fleur-cerisier",
    name: "Fleur de Cerisier",
    scent_family: "floral",
    gender_id: "women",
    vibes: ["romantic", "daily"],
    price: 180,
    image: "assets/fleur.webp",
    brand: "Byredo",
    tags: ["Best Seller", "Gift"],
    rating: 4.8,
    reviewsCount: 84,
    tagline: "A delicate, airy dance of cherry blossom, white tea, and soft cashmere musk.",
    description: "Fleur de Cerisier is a poetic interpretation of springtime in Kyoto. Capturing the fleeting beauty of cherry blossoms drifting on a warm breeze, this fragrance opens with bright, watery notes before settling into a soft, powdery floral heart, anchored by a comforting base of clean cashmere wood and white musk.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Citronellol, Hexyl Cinnamal, Hydroxycitronellal, Limonene, Linalool.",
    notes: {
      top: ["Bergamot", "White Tea", "Pear"],
      heart: ["Cherry Blossom", "French Rose", "Jasmine"],
      base: ["Cashmere Musk", "Sandalwood", "White Amber"]
    },
    sizes: [
      { size: "50ml", price: 110 },
      { size: "100ml", price: 180 },
      { size: "200ml", price: 290 }
    ],
    stock: 8,
    featured: true
  },
  {
    id: "agrumes-frais",
    name: "Agrumes Frais",
    scent_family: "citrus",
    gender_id: "unisex",
    vibes: ["daily", "professional"],
    price: 165,
    image: "assets/agrumes.webp",
    brand: "Le Labo",
    tags: ["Best Seller", "New"],
    rating: 4.7,
    reviewsCount: 96,
    tagline: "A sun-drenched explosion of Sicilian bergamot, green mandarin, and salted sea air.",
    description: "Agrumes Frais is a tribute to the sun-soaked cliffs of the Amalfi coast. Vibrant, sparkling, and refreshing, it evokes the crisp feeling of a morning breeze rustling through citrus groves. Salty marine accords balance the bright, zesty top notes, while clean vetiver and white amber give it a sophisticated, lasting structure.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Citronellol, Geraniol.",
    notes: {
      top: ["Sicilian Bergamot", "Green Mandarin", "Lemon Zest"],
      heart: ["Sea Salt Accord", "Neroli", "Basil"],
      base: ["Haitian Vetiver", "White Amber", "Cedarwood"]
    },
    sizes: [
      { size: "50ml", price: 95 },
      { size: "100ml", price: 165 },
      { size: "200ml", price: 260 }
    ],
    stock: 15,
    featured: true
  },
  {
    id: "ambre-chaud",
    name: "Ambre Chaud",
    scent_family: "amber",
    gender_id: "men",
    vibes: ["cozy", "romantic"],
    price: 210,
    image: "assets/ambre.webp",
    brand: "NOVA",
    tags: ["New", "Gift", "Home"],
    rating: 4.9,
    reviewsCount: 154,
    tagline: "An opulent, velvet blanket of golden amber, warm vanilla bean, and toasted spices.",
    description: "Ambre Chaud is an intense, luxurious fragrance designed for the colder months and intimate evenings. It wraps the skin in a warm, resinous embrace of amber and sweet, dark vanilla bean, elevated by a sophisticated blend of cardamon and nutmeg, and resting on a long-lasting base of tobacco leaf and rich labdanum.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Coumarin, Eugenol, Cinnamal, Benzyl Benzoate, Linalool.",
    notes: {
      top: ["Nutmeg", "Coriander", "Cinnamon"],
      heart: ["Golden Amber", "Labdanum", "Patchouli"],
      base: ["Vanilla Bean", "Tobacco Leaf", "Siam Benzoin"]
    },
    sizes: [
      { size: "50ml", price: 130 },
      { size: "100ml", price: 210 },
      { size: "200ml", price: 340 }
    ],
    stock: 6,
    featured: false
  },
  {
    id: "figue-noire",
    name: "Figue Noire",
    scent_family: "woody",
    gender_id: "unisex",
    vibes: ["daily", "mysterious"],
    price: 185,
    image: "assets/figue.webp",
    brand: "NOVA",
    tags: ["New", "Home"],
    rating: 4.7,
    reviewsCount: 32,
    tagline: "A dark, green interpretation of ripe figs under the Mediterranean sun.",
    description: "Figue Noire opens with a burst of crisp fig leaves, quickly revealing the dark, jammy sweetness of the fruit itself. As it settles, warm cedarwood and earthy vetiver anchor the scent, creating a sophisticated green fragrance that feels both fresh and profoundly deep.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Linalool, Coumarin, Limonene.",
    notes: {
      top: ["Fig Leaf", "Green Sap", "Bergamot"],
      heart: ["Black Fig", "Coconut Milk", "Iris"],
      base: ["Cedarwood", "Vetiver", "Tonka Bean"]
    },
    sizes: [
      { size: "50ml", price: 110 },
      { size: "100ml", price: 185 },
      { size: "200ml", price: 290 }
    ],
    stock: 24,
    featured: true
  },
  {
    id: "vetiver-blanc",
    name: "Vétiver Blanc",
    scent_family: "woody",
    gender_id: "unisex",
    vibes: ["professional", "daily"],
    price: 190,
    image: "assets/agrumes.webp",
    brand: "NOVA",
    tags: ["Best Seller"],
    rating: 4.8,
    reviewsCount: 115,
    tagline: "A crisp, clean, and bracingly fresh take on classic Haitian vetiver.",
    description: "Vétiver Blanc strips the vetiver root of its usual smokiness, focusing instead on its bright, grapefruit-like facets. Paired with neroli and a touch of white musk, it's the olfactive equivalent of a perfectly tailored crisp white shirt.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Limonene, Linalool, Citral, Geraniol.",
    notes: {
      top: ["Grapefruit", "Neroli", "Bergamot"],
      heart: ["Haitian Vetiver", "Orange Blossom", "Pink Pepper"],
      base: ["White Musk", "Cedar", "Ambroxan"]
    },
    sizes: [
      { size: "50ml", price: 115 },
      { size: "100ml", price: 190 },
      { size: "200ml", price: 300 }
    ],
    stock: 18,
    featured: true
  },
  {
    id: "rose-epicee",
    name: "Rose Épicée",
    scent_family: "floral",
    gender_id: "unisex",
    vibes: ["romantic", "mysterious"],
    price: 210,
    image: "assets/rose.webp",
    brand: "NOVA",
    tags: ["New", "Gift"],
    rating: 4.9,
    reviewsCount: 45,
    tagline: "A fiery, modern rose wrapped in saffron and crushed black pepper.",
    description: "Rose Épicée takes the classic Damask rose and sets it alight. Spiked with saffron and black pepper, it bypasses the powdery romance of traditional florals to deliver a spicy, confident, and utterly contemporary statement.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Citronellol, Geraniol, Eugenol.",
    notes: {
      top: ["Saffron", "Black Pepper", "Plum"],
      heart: ["Damask Rose", "Patchouli", "Clove"],
      base: ["Oud", "Leather", "Vanilla"]
    },
    sizes: [
      { size: "50ml", price: 130 },
      { size: "100ml", price: 210 },
      { size: "200ml", price: 330 }
    ],
    stock: 10,
    featured: true
  },
  {
    id: "musc-invisible",
    name: "Musc Invisible",
    scent_family: "floral",
    gender_id: "unisex",
    vibes: ["daily", "cozy"],
    price: 175,
    image: "assets/vanille.webp",
    brand: "NOVA",
    tags: ["Best Seller", "Home"],
    rating: 4.9,
    reviewsCount: 210,
    tagline: "The ultimate 'your skin but better' fragrance, soft and intimate.",
    description: "Musc Invisible is designed to mimic the scent of clean, warm skin. It is incredibly delicate, relying on a complex accord of synthetic musks, ambrette seed, and a whisper of pear to create a fragrance that is universally flattering and endlessly comforting.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Farnesol.",
    notes: {
      top: ["Ambrette Seed", "Pear", "Aldehydes"],
      heart: ["White Musk", "Jasmine Petals", "Cotton"],
      base: ["Cashmeran", "White Woods", "Iso E Super"]
    },
    sizes: [
      { size: "50ml", price: 105 },
      { size: "100ml", price: 175 },
      { size: "200ml", price: 280 }
    ],
    stock: 35,
    featured: true
  },
  {
    id: "oud-absolu",
    name: "Oud Absolu",
    scent_family: "woody",
    gender_id: "men",
    vibes: ["mysterious", "professional"],
    price: 240,
    image: "assets/oud.webp",
    brand: "NOVA",
    tags: ["New"],
    rating: 4.6,
    reviewsCount: 18,
    tagline: "A hypnotic, intense distillation of rare agarwood and dark incense.",
    description: "Oud Absolu is not for the faint of heart. It is a powerful, uncompromising exploration of the darkest woods. Featuring sustainably sourced Cambodian agarwood, it is rich, smoky, and slightly medicinal, softening into a velvety amber base over 24 hours.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Linalool, Farnesol.",
    notes: {
      top: ["Incense", "Black Pepper", "Elemi"],
      heart: ["Cambodian Oud", "Cypriol", "Labdanum"],
      base: ["Amber", "Patchouli", "Dark Musk"]
    },
    sizes: [
      { size: "50ml", price: 150 },
      { size: "100ml", price: 240 },
      { size: "200ml", price: 380 }
    ],
    stock: 5,
    featured: true
  },
  {
    id: "neroli-portofino",
    name: "Néroli Riviera",
    scent_family: "citrus",
    gender_id: "unisex",
    vibes: ["daily"],
    price: 185,
    image: "assets/agrumes.webp",
    brand: "NOVA",
    tags: ["Best Seller"],
    rating: 4.8,
    reviewsCount: 95,
    tagline: "Sun-drenched citrus and white florals capturing the Italian coast.",
    description: "Néroli Riviera is bottled sunshine. It perfectly balances the tart bite of Italian lemon and bitter orange with the soapy, green sweetness of neroli. A touch of amber in the base ensures this summery scent lingers long after sunset.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Limonene, Linalool, Citral, Geraniol.",
    notes: {
      top: ["Italian Lemon", "Bitter Orange", "Bergamot"],
      heart: ["Neroli", "Orange Blossom", "Lavender"],
      base: ["Amber", "Rosemary", "Musk"]
    },
    sizes: [
      { size: "50ml", price: 110 },
      { size: "100ml", price: 185 },
      { size: "200ml", price: 290 }
    ],
    stock: 14,
    featured: true
  }
];

// Add backward compatible getters to INITIAL_PRODUCTS
INITIAL_PRODUCTS.forEach(p => {
  Object.defineProperty(p, 'category', {
    get() {
      const fam = GLOBAL_ATTRIBUTES.scent_families[this.scent_family];
      return fam ? fam.label.en : "";
    },
    configurable: true,
    enumerable: true
  });
  
  Object.defineProperty(p, 'gender', {
    get() {
      const g = GLOBAL_ATTRIBUTES.genders[this.gender_id];
      return g ? g.label.en : "";
    },
    configurable: true,
    enumerable: true
  });
});

// Export for ES modules support, otherwise let it exist globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_PRODUCTS, GLOBAL_ATTRIBUTES };
} else {
  window.GLOBAL_ATTRIBUTES = GLOBAL_ATTRIBUTES;
}
