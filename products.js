// GLOBAL TAXONOMY DEFINITIONS
const GLOBAL_ATTRIBUTES = {
  scent_families: {
    woody: { id: "woody", label: { en: "Woody", am: "Փայտային", ru: "Древесные" }, color: "#8E806A" },
    floral: { id: "floral", label: { en: "Floral", am: "Ծաղկային", ru: "Цветочные" }, color: "#E4A5B8" },
    citrus: { id: "citrus", label: { en: "Citrus", am: "Ցիտրուսային", ru: "Цитрусовые" }, color: "#F4D160" },
    amber: { id: "amber", label: { en: "Amber", am: "Ամբրային", ru: "Амбровые" }, color: "#D67B27" },
    aromatic: { id: "aromatic", label: { en: "Aromatic", am: "Արոմատիկ", ru: "Ароматические" }, color: "#7BA05B" }
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


// No mock products - all products are managed via admin panel and stored in Firestore
const INITIAL_PRODUCTS = [];

// Export for ES modules support, otherwise let it exist globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_PRODUCTS, GLOBAL_ATTRIBUTES };
} else {
  window.GLOBAL_ATTRIBUTES = GLOBAL_ATTRIBUTES;
}
