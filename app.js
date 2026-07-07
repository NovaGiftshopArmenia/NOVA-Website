// Format price with comma separators (23000 → "23,000")
function formatPrice(num) {
  return Number(num).toLocaleString('en-US');
}

// LOCALIZATION DICTIONARIES
const TRANSLATIONS = {
  am: {
    nav_about: "Մեր Մասին",
    about_hook_title: "Օլֆակտոր Արվեստի Արարողներ",
    about_hook_desc: "Մենք հավաքագրում ենք հազվագյուտ, նիշային բույրեր և մաքուր բաղադրիչներ ժամանակակից էսթետների համար: Մեր առաքելությունն է ձեր բույրը վերածել գլուխգործոցի:",
    about_story_title: "Մեր <span style='color: var(--color-brown); font-style: italic'>Սկիզբը</span>",
    about_story_desc: "NOVA-ն ծնվել է մեկ մոլուցքից՝ գտնել անզիջում, հազվագյուտ և շնչակտուր անող բույրեր մի շուկայում, որը ողողված է սովորական, մասսայական տարբերակներով: Այն, ինչ սկսվեց որպես համաշխարհային էլիտար բույրերի մասնավոր հավաքածու, վերածվեց սրբավայրի նրանց համար, ովքեր գնահատում են նիշային պարֆյումերիայի իսկական արվեստը:",
    about_eyebrow: "ԹՈՐՄԱՆ ԱՐՎԵՍՏԸ — ՀԻՄՆԱԴՐՎԱԾ Է 2026",
    about_lead: "Օլֆակտոր մաքուր բույրերի ճարտարապետական ​​ուսումնասիրություն՝ ձեռագործ ժամանակակից էսթետիկայի սիրահարների համար:",
    stat_botanical: "Օրիգինալ և Վավերական",
    stat_batch: "Համաշխարհային Բրենդներ",
    stat_batch_number: "Էլիտար",
    stat_synthetic: "Զրո Մասսայական Տարբերակներ",
    contact_us: "Կապնվել Մեզ հետ",
    about_pillars_title: "Վստահության Հիմքերը",
    about_guarantee_title: "100% Իսկության Երաշխիք",
    about_guarantee_desc: "Անմիջական մատակարարումներ օծանելիքի տներից: Բացառում ենք կասկածելի աղբյուրներն ու շուկայական զիջումները:",
    about_scent_match_title: "Իդեալական Բույրի Խոստում",
    about_scent_match_desc: "Մանրամասն նոտաներ և անվտանգ վերադարձի հնարավորություն: Ձեր ընտրությունը մեր պատասխանատվությունն է:",
    about_storage_title: "Անթերի Պահպանում",
    about_storage_desc: "Կլիմայական վերահսկողություն յուրաքանչյուր շշի համար: Երաշխավորում ենք օծանելիքի բնական կառուցվածքի պահպանումը:",
    about_cta_title: "Պատրա՞ստ եք գտնել ձեր բույրը:",
    about_cta_btn: "Բացահայտել Հավաքածուն",
    nav_home: "Գլխավոր",
    nav_products: "Ապրանքներ",
    nav_brands: "Ապրանքանիշեր",
    nav_men: "Տղամարդկանց",
    nav_women: "Կանանց",
    nav_new: "Նորույթներ",
    nav_bestsellers: "Բեսթսելերներ",
    badge_bestseller: "ԲԵՍԹՍԵԼԵՐ",
    badge_new_product: "ՆՈՐՈՒՅԹ",
    nav_gifts: "Նվեր Հավաքածուներ",
    cat_men: "Տղամարդկանց",
    cat_women: "Կանանց",
    cat_gifts: "Նվերներ",
    cat_bestsellers: "Բեսթսելերներ",
    cat_new: "Նորույթներ",
    nav_admin: "WooCommerce Կառավարում",
    nav_order_history: "Պատվերների պատմություն",
    nav_logout: "Դուրս գալ",
    auth_signin_btn: "Մուտք",
    auth_signup_title: "Գրանցվել",
    auth_email_label: "Էլ. հասցե",
    auth_password_label: "Գաղտնաբառ",
    auth_first_name: "Անուն",
    auth_last_name: "Ազգանուն",
    auth_confirm_password: "Հաստատել գաղտնաբառը",
    hello_user: "Ողջույն, Էմմա",
    mega_woody: "Փայտային",
    mega_floral: "Ծաղկային",
    mega_citrus: "Ցիտրուսային",
    mega_amber: "Ամբրային",
    search_placeholder: "Որոնել բույրեր...",
    newsletter_placeholder: "Ձեր էլ. հասցեն",
    maison_de_parfum: "Maison de Parfum",
    hero_title: "Քո բույրը <span class='hero-highlight'>քեզ</span> է սպասում",
    hero_desc: "Օծանելիք, նվերներ, գեղեցիկ փաթեթավորում",
    explore_fragrances: "Բացահայտել Բույրերը",
    view_admin_demo: "Դեմո Կառավարում",
    promise_title_1: "Բացառիկ և Ընտրված Հավաքածու",
    promise_desc_1: "Աշխարհի ամենահեղինակավոր, հազվագյուտ և օրիգինալ օծանելիքների խնամքով ընտրված հավաքածու Հայաստանում՝ պարֆյումերիայի գիտակների համար:",
    promise_title_2: "Երկարակյաց և Անկրկնելի Բույրեր",
    promise_desc_2: "Բարձր կայունությամբ և յուրահատուկ շլեյֆով ընտրված էլիտար պարֆյումերիա՝ ապահովելով երկարակյաց օծանելիքի առկայություն:",
    promise_title_3: "Կայուն էկո-փաթեթավորում",
    promise_desc_3: "Էկոլոգիապես մաքուր փաթեթավորմամբ օծանելիք՝ 100% կենսաքայքայվող FSC տուփերով, բամբակյա պիտակներով և վերամշակվող շշերով:",
    promise_title_4: "Առաքում",
    promise_desc_4: "Առաքում Հայաստանի ողջ տարածքով",
    collections_title: "ՕԾԱՆԵԼԻՔՆԵՐ",
    gender_unisex: "ՈՒՆԻՍԵՔՍ",
    gender_men: "ՏՂԱՄԱՐԴՈՒ",
    gender_women: "ԿԱՆԱՑԻ",
    featured_subtitle: "Ընտրված Ստեղծագործություններ",
    featured_title: "Բույրերի Հավաքածու",
    view_full_collection_btn: "Դիտել ամբողջ հավաքածուն",
    shop_title: "Հավաքածու",
    shop_subtitle: "Զտեք ձեր որոնումը ըստ նոտաների կամ օծանելիքի ընտանիքի:",
    filter_all: "Բոլորը",
    filter_woody: "Փայտային",
    filter_floral: "Ծաղկային",
    filter_citrus: "Ցիտրուսային",
    filter_amber: "Ամբրային",
    sort_default: "Լռելյայն տեսակավորում",
    sort_price_low_high: "Գին՝ ցածրից բարձր",
    sort_price_high_low: "Գին՝ բարձրից ցածր",
    sort_rating: "Միջին գնահատական",
    cart_title: "Գնումների Զամբյուղ",
    cart_subtotal_label: "Ընդամենը",
    cart_shipping_desc: "Առաքումը և հարկերը հաշվարկվում են պատվերը ձևակերպելիս:",
    cart_checkout_btn: "Անցնել ձևակերպման",
    cart_empty_msg: "Ձեր գնումների զամբյուղը դատարկ է:",
    go_to_shop_btn: "Գնալ Խանութ",
    wishlist_title: "Իմ Ցանկությունները",
    wishlist_add_all_btn: "Ավելացնել բոլորը զամբյուղ",
    wishlist_empty_msg: "Ձեր ցանկությունների ցուցակը դատարկ է:",
    browse_shop_btn: "Դիտել Խանութը",
    card_explore: "Բացահայտել",
    card_add_to_cart: "Ավելացնել",
    card_sold_out: "Սպառված է",
    reviews_label: "կարծիք",
    in_stock_label: "Առկա է",
    out_of_stock_label: "Առկա չէ",
    modal_fragrance_pyramid: "Բույրերի Բուրգ",
    modal_top: "Վերին նոտաներ:",
    modal_heart: "Սրտի նոտաներ:",
    modal_base: "Հիմնային նոտաներ:",
    modal_select_size: "Ընտրեք Չափսը",
    modal_view_ingredients: "Դիտել Բաղադրությունը",
    modal_add_to_cart: "Ավելացնել Զամբյուղ",
    checkout_billing_title: "Հաշվարկային տվյալներ",
    checkout_first_name: "Անուն *",
    checkout_last_name: "Ազգանուն *",
    checkout_email: "Էլ. Փոստ *",
    checkout_street: "Հասցե *",
    checkout_city: "Քաղաք *",
    checkout_zip: "Փոստային ինդեքս *",
    checkout_shipping: "Առաքում *",
    checkout_payment_title: "Վճարում",
    checkout_payment_desc: "Դեմո վճարում. Սիմուլյացիոն ռեժիմ: Իրական քարտերից գանձում չի կատարվի:",
    checkout_place_order: "Կատարել Պատվեր",
    checkout_your_order: "Ձեր Պատվերը",
    checkout_subtotal: "Ընդամենը:",
    checkout_shipping_row: "Առաքում:",
    checkout_total: "Ընդհանուր:",
    order_success_title: "Պատվերն հաջողությամբ կատարվել է",
    order_success_desc: "Շնորհակալություն NOVA-ն ընտրելու համար: Ձեր պատվերի համարն է <strong>#REF</strong>: Մենք ուղարկել ենք հաստատման նամակ EMAIL հասցեին:",
    order_details: "Պատվերի մանրամասները",
    order_date: "Ամսաթիվ:",
    order_ship_to: "Առաքման հասցե:",
    order_total_paid: "Ընդհանուր վճարված:",
    continue_shopping_btn: "Շարունակել Գնումները",
    footer_about: "Բուսական մաքուր բույրերի ճարտարապետական ​​ուսումնասիրություն՝ պատրաստված ժամանակակից էսթետիկայի սիրահարների համար:",
    footer_nav_title: "Նավարկություն",
    footer_shop_link: "Խանութ",
    footer_families_title: "Բույրերի Ընտանիքներ",
    footer_pages_title: "Էջեր",
    footer_follow_title: "Հետևեք Մեզ",
    footer_newsletter_title: "Լրատու",
    footer_newsletter_desc: "Բաժանորդագրվեք՝ նոր սեզոնային թորումների մասին տեղեկություններ ստանալու համար:",
    footer_rights: "&copy; 2026 NOVA Inc. Բոլոր իրավունքները պաշտպանված են:",
    footer_tagline: "ԷԼԵԳԱՆՏՈՒԹՅՈՒՆ &bull; ՄԻՆԻՄԱԼԻԶՄ &bull; ՄԱՔՐՈՒԹՅՈՒՆ",
    home_reviews_title: "Հաճախորդների Կարծիքներ",
    home_instagram_title: "Հետևեք մեզ Instagram-ում",
    home_instagram_shortcode_title: "Ինստագրամ Լրահոս (Shortcode)",
    scroll_text: "Սահեցնել &rarr;",
    brand_nova: "NOVA",
    brand_le_labo: "Le Labo",
    brand_byredo: "Byredo",
    brand_diptyque: "Diptyque",
    brand_aesop: "Aesop",
    brand_chanel: "Chanel",
    brand_dior: "Dior",
    brand_giorgio_armani: "Giorgio Armani",
    brand_yves_saint_laurent: "Yves Saint Laurent",
    brand_gucci: "Gucci",
    brand_versace: "Versace",
    brand_calvin_klein: "Calvin Klein",
    brand_dolce_gabbana: "Dolce & Gabbana",
    brand_tom_ford: "Tom Ford",
    brand_hermes: "Hermès",
    brand_burberry: "Burberry",
    brand_lancome: "Lancôme",
    brand_paco_rabanne: "Paco Rabanne",
    brand_jean_paul_gaultier: "Jean Paul Gaultier",
    brand_hugo_boss: "Hugo Boss",
    brand_creed: "Creed",
    brand_jo_malone: "Jo Malone London",
    brand_maison_francis_kurkdjian: "Maison Francis Kurkdjian",
    pp_faq_title: "Հաճախ տրվող հարցեր",
    pp_faq_q1: "Ինչո՞վ է յուրահատուկ այս բույրը:",
    pp_faq_a1: "Մեր բույրերը բաղկացած են հազվագյուտ բուսական նյութերից, որոնք թորվում են փոքր խմբաքանակներով՝ բացառիկ մաքրության և երկարակեցության համար:",
    pp_faq_q2: "Արդյո՞ք այս ապրանքը վեգան է և առանց դաժանության:",
    pp_faq_a2: "Այո, մեր բոլոր ստեղծագործությունները 100% վեգան են և երբեք չեն փորձարկվել կենդանիների վրա: Մենք հավատում ենք կայուն, էթիկական շքեղությանը:",
    pp_faq_q3: "Որքա՞ն է պահպանվում բույրը:",
    pp_faq_a3: "Որպես Eau de Parfum՝ դուք կարող եք ակնկալել ինտենսիվ բուրմունք, որը տևում է 8-ից 12 ժամ՝ կախված ձեր մաշկի քիմիայից:",
    pp_faq_q4: "Ո՞րն է ձեր վերադարձի քաղաքականությունը:",
    pp_faq_a4: "Մենք ընդունում ենք վերադարձ 30 օրվա ընթացքում՝ չօգտագործված ապրանքների համար, դրանց օրիգինալ փաթեթավորմամբ:",
    admin_title: "WooCommerce Կառավարում",
    admin_total_revenue: "Ընդհանուր Հասույթ",
    admin_orders_placed: "Գրանցված Պատվերներ",
    admin_avg_order_value: "Միջին պատվերի արժեք",
    admin_total_stock: "Ընդհանուր պաշար",
    admin_orders_list: "WooCommerce Պատվերների Ցանկ",
    admin_th_order_id: "Պատվերի ID",
    admin_th_date: "Ամսաթիվ",
    admin_th_customer: "Հաճախորդ",
    admin_th_items: "Ապրանքներ",
    admin_th_total: "Ընդամենը",
    admin_th_status: "Կարգավիճակ",
    admin_th_actions: "Գործողություններ",
    admin_inventory_title: "WooCommerce Պաշարներ և Գներ",
    admin_inventory_desc: "Փոփոխեք գներն ու քանակը։ Սեղմեք «Թարմացնել»՝ փոփոխություններն անմիջապես կիրառելու համար։",
    admin_th_image: "Նկար",
    admin_th_fragrance: "Բույր",
    admin_th_price: "Գին (100ml)",
    admin_th_stock_qty: "Պաշարի քանակ",
    admin_th_availability: "Առկայություն",
    admin_btn_update: "Թարմացնել",
    review_1_text: "\"Ժամանակակից օծանելիքի բացարձակ գլուխգործոց։ Սանդալի նոտան այնքան յուղալի և էլեգանտ է, ինձ անընդհատ կանգնեցնում և հարցնում են, թե ինչ եմ կրում:\"",
    review_1_author: "Էլենա Վ.",
    review_2_text: "\"Մինիմալիստական կատարելություն։ Փաթեթավորումը հիասքանչ է, իսկ հենց բույրը՝ բարդ, որն օրվա ընթացքում գեղեցիկ զարգանում է իմ մաշկի վրա:\"",
    review_2_author: "Մարկուս Տ.",
    review_3_text: "\"Վերջապես գտա իմ այցեքարտային բույրը։ Այն նուրբ է, բայց աներևակայելի երկարակյաց։ Բուսական մաքրությունն իսկապես շողում է յուրաքանչյուր ցողի մեջ:\"",
    review_3_author: "Սառա Լ.",
    review_4_text: "\"Հաճախորդների սպասարկումը և փաթեթավորումը բացելու փորձը նույնքան շքեղ էին, որքան ինքնին օծանելիքը։ Խիստ խորհուրդ եմ տալիս խորշային բույրերի յուրաքանչյուր սիրահարի:\"",
    review_4_author: "Դավիդ Կ.",
    review_5_text: "\"Կարծես կրում եմ արվեստի գործ։ Բույրի տարածումը ճիշտ չափի է՝ նկատելի, բայց երբեք չափազանցված չէ:\"",
    review_5_author: "Միա Ռ.",
    review_6_text: "\"Իսկապես յուրահատուկ հոտառական փորձ։ Չորացման փուլը փոշոտ է և բարդ։ Անհամբեր սպասում եմ փորձել հավաքածուի մնացած մասը:\"",
    review_6_author: "Ջուլիան Մ.",
    review_7_text: "\"Ես սիրահարված եմ մինիմալիստական էսթետիկային և մաքուր, ոչ տոքսիկ բաղադրիչներին։ Վերջապես շքեղ ապրանքանիշ, որը համապատասխանում է իմ արժեքներին:\"",
    review_7_author: "Քլոե Տ.",
    review_8_text: "\"Գնել եմ որպես նվեր կնոջս համար, և նա ամբողջովին հիացած էր։ Բույրն արբեցնող է և աներևակայելի նուրբ:\"",
    review_8_author: "Ջեյմս Բ.",
    mobile_sec_menu: "Մենյու",
    mobile_sec_actions: "Գնումներ",
    mobile_sec_languages: "Լեզուներ",
    nav_contact: "Հետադարձ Կապ",
    contact_header_title: "ՀԵՏԱԴԱՐՁ ԿԱՊ",
    contact_subtitle: "Եկեք <span style='color: var(--color-brown); font-style: italic'>զրուցենք</span>",
    contact_lead: "Հարց ունե՞ք։ Սիրով կսպասենք Ձեր արձագանքին։",
    contact_desc: "Ունե՞ք հարցեր կամ ցանկանում եք պատվիրել անհատական բույր։ Մեր կոնսյերժը սիրով կօգնի ձեզ։",
    contact_address_label: "Հասցե",
    contact_phone_label: "Հեռախոս",
    contact_email_label: "Էլ. Հասցե",
    contact_delivery_label: "Առաքում",
    contact_delivery_value: "Առաքում Հայաստանի ողջ տարածքով",
    contact_form_name_placeholder: "Անի Անուն",
    contact_form_email_placeholder: "anun@example.com",
    contact_form_subject_placeholder: "Բույրի խորհրդատվություն",
    contact_form_message_placeholder: "Գրեք ձեր հաղորդագրությունը այստեղ...",
    contact_hours_label: "Ժամեր",
    contact_form_name: "Անուն *",
    contact_form_email: "Էլ. Փոստ *",
    contact_form_subject: "Թեմա *",
    contact_form_message: "Հաղորդագրություն *",
    contact_form_submit: "Ուղարկել",
    footer_policy_shipping: "Առաքում և Վերադարձ",
    footer_policy_privacy: "Գաղտնիություն և Պայմաններ",
    policy_shipping_header_title: "ԱՌԱՔՈՒՄ",
    policy_shipping_subtitle: "ԱՋԱԿՑՈՒԹՅՈՒՆ",
    policy_shipping_title: "Առաքման և Վերադարձի Պայմաններ",
    policy_shipping_sec1_title: "1. Առաքում և Հանձնում",
    policy_shipping_sec1_desc1: "NOVA-ում յուրաքանչյուր բույր խնամքով փաթեթավորվում է՝ պահպանելու իր նուրբ բուսական բաղադրությունը։ Մենք առաքում ենք ինչպես Հայաստանի ողջ տարածքում, այնպես էլ միջազգային մակարդակով։",
    policy_shipping_sec1_desc2: "<strong>Առաքում Երևանում:</strong> 1-2 աշխատանքային օր (անվճար 20,000 AMD-ից բարձր պատվերների դեպքում):<br><strong>ՀՀ մարզեր:</strong> 2-4 աշխատանքային օր:<br><strong>Միջազգային առաքում:</strong> 7-14 աշխատանքային օր գրանցված փոստով:",
    policy_shipping_sec2_title: "2. Վերադարձի և Փոխանակման Պայմաններ",
    policy_shipping_sec2_desc1: "Հաշվի առնելով խորշային օծանելիքների անձնական բնույթը, մենք կարող ենք ընդունել միայն այն ապրանքների վերադարձը, որոնք լիովին չբացված են, չօգտագործված և գտնվում են իրենց օրիգինալ փակ փաթեթավորման մեջ՝ առաքումից հետո 14 օրվա ընթացքում:",
    policy_shipping_sec2_desc2: "Եթե ցանկանում եք վերադարձ կատարել, խնդրում ենք կապվել մեր կոնսյերժ թիմի հետ concierge@novafragrances.com հասցեով՝ նախքան ծրարը հետ ուղարկելը:",
    policy_shipping_sec3_title: "3. Վնասված Ապրանքներ",
    policy_shipping_sec3_desc1: "Եթե ձեր սրվակը վնասված է կամ արտահոսում է, խնդրում ենք անմիջապես լուսանկարել այն և կապվել մեզ հետ ստանալուց հետո 48 ժամվա ընթացքում։ Մենք անմիջապես կկազմակերպենք փոխարինում կամ լիարժեք վերադարձ:",
    policy_privacy_header_title: "ՕՐԵՆՔ",
    policy_privacy_subtitle: "ԻՐԱՎԱԿԱՆ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ",
    policy_privacy_title: "Գաղտնիության Քաղաքականություն և Օգտագործման Պայմաններ",
    policy_privacy_sec1_title: "1. Հավաքագրվող Տեղեկատվություն",
    policy_privacy_sec1_desc: "Մենք հավաքագրում ենք հիմնական կոնտակտային և առաքման տվյալները, երբ կատարում եք գնումներ կամ բաժանորդագրվում եք մեր լրատուին։ Այս տվյալներն օգտագործվում են բացառապես պատվերների իրականացման համար:",
    policy_privacy_sec2_title: "2. Վճարումների Անվտանգություն",
    policy_privacy_sec2_desc: "Բոլոր վճարումները մշակվում են ապահով և գաղտնագրված համակարգերի միջոցով։ NOVA-ն չի պահպանում և չունի ուղիղ հասանելիություն ձեր քարտի տվյալներին:",
    policy_privacy_sec3_title: "3. Օգտագործման Պայմաններ",
    policy_privacy_sec3_desc: "Այս կայքում տեղադրված ողջ բովանդակությունը, պատկերները և տեքստերը պաշտպանված են ապրանքային նշանով և հեղինակային իրավունքով։ Պատճենահանումն առանց NOVA-ի գրավոր թույլտվության խստիվ արգելվում է:",
    wishlist_header_title: "ՑԱՆԿՈՒԹՅՈՒՆՆԵՐ",
    wishlist_subtitle: "ԻՄ ՆԱԽԸՆՏՐԵԼԻՆԵՐԸ",
    wishlist_view_page_btn: "Տեսնել Ցանկության Էջը",
    exp_subtitle: "Օլֆակտոր Գիտություն",
    exp_title: "Օլֆակտոր Պատմություն",
    exp_desc: "Յուրաքանչյուր NOVA բույր դինամիկ, կենդանի կոմպոզիցիա է, որը զարգանում է մաշկի վրա մի քանի ժամվա ընթացքում: Մենք հետևում ենք ֆրանսիական բարձր օծանելիքի ավանդական եռաստիճան կառուցվածքին, որն ուժեղացված է կայուն աղբյուրներից հավաքված բուսական բաղադրիչներով։",
    top_desc: "Առաջին տպավորություն (0-30 րոպե)",
    heart_desc: "Հիմնական բնավորություն (30 րոպե - 4 ժամ)",
    base_desc: "Տարածում և տևողություն (4+ ժամ)",
    promises_title: "Գիտակից Շքեղության Սկզբունքներ",
    suggestions_title: "Ամբողջացրեք Ծիսակարգը",
    search_no_results: "Հոտառական նոտաներ չեն գտնվել:",
    filter_scent_family: "Բույրերի Ընտանիք",
    filter_gender: "Սեռ",
    filter_vibe: "Տրամադրություն / Առիթ",
    filter_price: "Գին",
    filter_size: "Չափս",
    filter_brand: "Ապրանքանիշ",
    btn_apply_filters: "Կիրառել Զտիչները",
    btn_clear_all: "Մաքրել Բոլորը",
    btn_filters: "Զտիչներ",
    vibe_romantic: "Ռոմանտիկ / Երեկոյան",
    vibe_daily: "Ամենօրյա / Թարմ",
    vibe_professional: "Գործնական / Էլեգանտ",
    vibe_cozy: "Տաք / Հարմարավետ",
    vibe_mysterious: "Խորհրդավոր / Համարձակ",
    my_account_subtitle: "ՀԱՃԱԽՈՐԴԻ ՊՈՐՏԱԼ",
    my_account_title: "Իմ Հաշիվը",
    acc_nav_dashboard: "Գլխավոր էջ",
    acc_nav_wardrobe: "Բույրերի Պահարան",
    acc_nav_discovery: "Անձնական Զեղչ",
    acc_nav_details: "Հաշվի Տվյալներ",
    acc_nav_orders: "Պատվերների Պատմություն",
    acc_dash_welcome: "Բարի գալուստ ձեր անձնական հոտառական պորտալ: Այստեղից դուք կարող եք հետևել ձեր գնումներին, կառավարել ձեր հասցեները և կուտակված կրեդիտները:",
    acc_scent_profile: "Օլֆակտոր Պրոֆիլ",
    acc_scent_profile_desc: "Հիմնվելով ձեր ընտրած բույրերի վրա, ձեր նախընտրություններն են.",
    acc_wardrobe_title: "Իմ Բույրերի Պահարանը",
    acc_discovery_title: "Փորձանմուշների Հետևում",
    acc_promo_tag: "Discovery Խումբ",
    acc_promo_title: "Կիրառեք Փորձանմուշի Կրեդիտը Լիարժեք Շշի Համար",
    acc_promo_desc: "Հավանեցի՞ք նմուշները: Կիրառեք ձեր 4,000 AMD Discovery կրեդիտը ցանկացած լիարժեք (100մլ) շշի համար:",
    acc_promo_code_lbl: "ՁԵՐ ԵԶԱԿԻ ԿՈԴԸ:",
    admin_secure_portal: "ԱՊԱՀՈՎ ՄՈՒՏՔ",
    admin_login_title: "WooCommerce Մուտք",
    admin_pass_hint: "Հուշում. norayrnajaryann@gmail.com / K9$v!p2WbX",
    btn_admin_login: "Մուտք գործել",
    admin_view_frontend: "Դիտել Խանութը",
    admin_nav_orders: "Պատվերների Կառավարիչ",
    admin_nav_inventory: "Պաշարների Կառավարիչ",
    admin_nav_dev: "Մշակողի Կարգավորումներ",
    admin_nav_logs: "Գործողությունների Մատյան",
    admin_nav_clients: "Հաճախորդներ",
    admin_clients_title: "Գրանցված Հաճախորդներ",
    admin_clients_desc: "Կայքում հաշիվ ստեղծած բոլոր օգտագործողները:",
    admin_th_name: "Անուն",
    admin_th_registered: "Գրանցման ամսաթիվ",
    admin_th_actions: "Գործողություններ",
    acc_nav_wardrobe_sub: "Դիտել գնված շշերը",
    acc_nav_discovery_sub: "Հետևել փորձանմուշներին",
    acc_nav_orders_sub: "Հետևել առաքումներին",
    acc_nav_details_sub: "Խմբագրել հասցեները և էլ. հասցեն",
    acc_th_id: "ID",
    acc_th_date: "Ամսաթիվ",
    acc_th_items: "Ապրանքներ",
    acc_th_total: "Ընդհանուր",
    acc_th_status: "Կարգավիճակ",
    acc_th_invoice: "Հաշիվ",
    acc_th_sample_kit: "Փորձանմուշի հավաքածու",
    acc_th_purchase_date: "Գնման ամսաթիվ",
    acc_th_credit_value: "Կրեդիտի արժեք",
    admin_staff_placeholder: "Անուն (օր.՝ Էլենա)",
    status_pending: "Ընթացքի մեջ",
    status_processing: "Մշակվում է",
    status_completed: "Ավարտված",
    status_failed: "Ձախողված",
    admin_btn_delete: "Ջնջել",
    admin_btn_add_new: "Ավելացնել նորը",
    plugin_pdf_label: "WooCommerce PDF Հաշիվ-ապրանքագրեր (v2.1)",
    plugin_subs_label: "WooCommerce Բաժանորդագրություններ (v4.0)",
    admin_insta_location_placeholder: "օր.՝ Գրաս, Ֆրանսիա",
    admin_insta_caption_placeholder: "Բույրերի նոտաներ, մանրամասներ և այլն...",
    admin_staff_locked: "Արգելափակված",
    admin_logs_empty: "Մատյանում գրառումներ չկան:",
    admin_sales_perf: "Վաճառքի Արդյունքներն ըստ Կատեգորիաների",
    admin_dev_title: "Մշակողի և Համակարգի Կարգավորումներ",
    admin_dev_desc: "Կառավարեք պլատֆորմի կոնֆիգուրացիաները, հիմնական ընդլայնումները, վճարային դարպասները և անձնակազմի անվտանգության հավատարմագրերը:",
    admin_dev_plugins: "Հիմնական Ընդլայնումներ և Փլագիններ",
    admin_dev_gateways: "Վճարային Դարպասներ",
    gateway_stripe_label: "Stripe Ինտեգրում",
    gateway_paypal_label: "PayPal Express Ինտեգրում",
    gateway_cod_label: "Կանխիկ Վճարում (COD)",
    admin_dev_staff_manager: "Անձնակազմի Պրոֆիլների Կառավարիչ",
    admin_dev_staff_desc: "Գրանցեք կամ չեղարկեք անձնակազմի մենեջերների մուտքի հավատարմագրերը:",
    admin_btn_create_profile: "Ստեղծել Պրոֆիլ",
    admin_th_staff_name: "Անձնակազմի Անուն",
    admin_th_role: "Դեր",
    admin_logs_title: "Գործողությունների Մատյան",
    admin_logs_desc: "Պլատֆորմի անվտանգության աուդիտի մատյան, որը հետևում է հավատարմագրերի մուտքին, կարգավորումներին, գնագոյացման փոփոխություններին և թարմացումներին:",
    admin_logs_clear: "Մաքրել Մատյանը",
    admin_logs_th_timestamp: "Ժամանակի դրոշմ",
    admin_logs_th_operator: "Օպերատոր",
    admin_logs_th_action: "Գրանցված Գործողություն",
    admin_btn_install: "Տեղադրել",
    acc_wardrobe_empty: "Ձեր բույրերի պահարանը դատարկ է:",
    acc_discovery_empty: "Գնված փորձանմուշներ դեռևս չկան:",
    acc_orders_empty: "Պատվերներ դեռևս չկան:",
    bg_media: "ՄԵԴԻԱ",
    insta_likes: "հավանում",
    insta_loc_1: "Գրաս, Ֆրանսիա",
    insta_loc_2: "Կիոտո, Ճապոնիա",
    insta_loc_3: "Ամալֆի, Իտալիա",
    insta_loc_4: "Փարիզ, Ֆրանսիա",
    insta_loc_5: "Լոնդոն, Մեծ Բրիտանիա",
    insta_loc_6: "Սանտորինի, Հունաստան",
    insta_loc_7: "Միլան, Իտալիա",
    insta_loc_8: "Սեն Տրոպե, Ֆրանսիա",
    insta_caption_1: "Santal N°01-ը պատկերում է ավստրալիական անապատի հում էլեգանտությունը: Թորված է պղնձե սյուներում: ✨",
    insta_caption_2: "Ծաղկող բալենու և մեղմ քաշմիրե մուշկի նուրբ պար: Fleur de Cerisier-ը Կիոտոն է գարնանը: 🌸",
    insta_caption_3: "Սիցիլիական բերգամոտի և աղի ծովային օդի արևոտ պայթյուն: Agrumes Frais-ը ձեռքում: 🍋",
    insta_caption_4: "Նվիրեք օլֆակտոր պոեզիա: Մեր բնորոշ հայտնագործությունների հավաքածուն՝ փաթաթված կայուն վուշով: 🎁",
    insta_caption_5: "Մաքուր բուսական բաղադրիչներ՝ հավաքված աշխարհի կայուն աղբյուրներից: Հում շքեղություն: 🌿",
    insta_caption_6: "Ոսկեգույն ամբրայի և տապակած համեմունքների շքեղ, թավշյա ծածկոց ոսկե ժամին: 🌅",
    insta_caption_7: "Յուրաքանչյուր ցող կենդանի կոմպոզիցիա է, որը զարգանում է մաշկի վրա մի քանի ժամվա ընթացքում: 💫",
    insta_caption_8: "Կազդուրիչ թարմ Vétiver Blanc: Կատարյալ դերձակված սպիտակ շապիկի օլֆակտոր համարժեքը: 🌊",
    insta_view_comments_1: "Դիտել բոլոր 12 մեկնաբանությունները",
    insta_view_comments_2: "Դիտել բոլոր 8 մեկնաբանությունները",
    insta_view_comments_3: "Դիտել բոլոր 15 մեկնաբանությունները",
    insta_view_comments_4: "Դիտել բոլոր 9 մեկնաբանությունները",
    insta_view_comments_5: "Դիտել բոլոր 11 մեկնաբանությունները",
    insta_view_comments_6: "Դիտել բոլոր 14 մեկնաբանությունները",
    insta_date_1: "2 ՕՐ ԱՌԱՋ",
    insta_date_2: "3 ՕՐ ԱՌԱՋ",
    insta_date_3: "4 ՕՐ ԱՌԱՋ",
    insta_date_4: "5 ՕՐ ԱՌԱՋ",
    insta_date_5: "1 ՇԱԲԱԹ ԱՌԱՋ",
    insta_date_6: "1 ՇԱԲԱԹ ԱՌԱՋ",
    admin_nav_instagram: "Instagram Կառավարիչ",
    admin_insta_title: "Instagram Լրահոսի Կառավարում",
    admin_insta_desc: "Ավելացրեք նոր գրառումներ ինստագրամի լրահոսում, խմբագրեք տվյալները կամ ջնջեք գոյություն ունեցող գրառումները:",
    admin_insta_add_post: "Ավելացնել Նոր Գրառում",
    admin_insta_location: "Վայր / Տեղանք *",
    admin_insta_caption: "Նկարագրություն *",
    admin_insta_date: "Ամսաթիվ *",
    admin_insta_images: "Նկարներ (թույլատրվում է մի քանիսը) *",
    admin_insta_active_posts: "Ակտիվ Գրառումներ",
    admin_th_thumbnail: "Նկար",
    admin_th_location: "Վայր",
    admin_th_caption: "Նկարագրություն",
    admin_th_date: "Ամսաթիվ",
    admin_btn_add_post: "Ավելացնել Գրառում",
    insta_feed_empty: "Գրառումներ դեռ չկան: Ավելացրեք գրառումներ WooCommerce կառավարման վահանակից:",
    modal_product_edit_title: "Խմբագրել Ապրանքի Տվյալները",
    modal_lbl_name: "Ապրանքի Անունը *",
    modal_lbl_brand: "Ապրանքանիշ *",
    modal_lbl_tagline: "Կարճ Նկարագրություն *",
    modal_lbl_desc: "Նկարագրություն *",
    modal_lbl_ingredients: "Բաղադրություն",
    modal_lbl_image_url: "Նկար (Image URL) *",
    modal_lbl_or_upload: "ԿԱՄ վերբեռնել ֆայլ՝",
    modal_lbl_family: "Ընտանիք *",
    modal_lbl_gender: "Սեռ *",
    modal_lbl_stock: "Պաշարի Քանակ *",
    modal_lbl_notes_top: "Վերին Նոտաներ *",
    modal_lbl_notes_heart: "Սրտի Նոտաներ *",
    modal_lbl_notes_base: "Հիմնային Նոտաներ *",
    modal_btn_cancel: "Չեղարկել",
    modal_btn_save: "Պահպանել",
    home_video_title: "Բացառիկ Բույրերի Արվեստը",
    home_video_paragraph: "NOVA-ի յուրաքանչյուր կաթիլը կատարելության և շքեղության արտացոլումն է։ Մենք ընտրում ենք աշխարհի լավագույն ու հազվագյուտ բաղադրիչները՝ ստեղծելով զարգացող զգայական ճանապարհորդություն ձեր մաշկի վրա։ Լինելով էլիտար պարֆյումերիայի առաջատարը Հայաստանում՝ NOVA-ն առաջարկում է ոչ թե պարզապես բույր, այլ անմոռանալի շլեյֆ, որն ընդգծում է ձեր անհատականությունը:",
    home_video_cta: "Իմանալ Ավելին"
  },
  ru: {
    nav_about: "О нас",
    about_hook_title: "Создатели Ольфакторного Искусства",
    about_hook_desc: "Мы отбираем редкие нишевые ароматы и чистые ингредиенты для современных эстетов. Наша миссия — превратить ваш фирменный аромат из второстепенного в шедевр.",
    about_story_title: "Наше <span style='color: var(--color-brown); font-style: italic'>Начало</span>",
    about_story_desc: "NOVA родилась из одной страсти: находить бескомпромиссные, редкие и захватывающие дух ароматы на рынке, переполненном масс-маркетом. То, что начиналось как частная коллекция лучших мировых шедевров, превратилось в премиальный бутик для тех, кто ценит истинное искусство нишевой парфюмерии.",
    about_eyebrow: "ИСКУССТВО ДИСТИЛЛЯЦИИ — ОСН. В 2026",
    about_lead: "Архитектурное исследование чистых ботанических ароматов, созданных вручную для ценителей современной эстетики.",
    stat_botanical: "Подлинность и Качество",
    stat_batch: "Элитные Мировые Бренды",
    stat_batch_number: "Элитные",
    stat_synthetic: "Ноль Дешевых Аналогов",
    contact_us: "Связаться с нами",
    about_pillars_title: "Основы Доверия",
    about_guarantee_title: "Подлинность, всегда.",
    about_guarantee_desc: "Прямые поставки от официальных дистрибьюторов и парфюмерных домов. Абсолютное качество — без серого импорта и компромиссов.",
    about_scent_match_title: "Обещание идеального аромата.",
    about_scent_match_desc: "Детальные ольфакторные профили и лёгкий возврат нераспечатанных флаконов для уверенной покупки онлайн.",
    about_storage_title: "Безупречное хранение.",
    about_storage_desc: "Каждый флакон хранится в климатической галерее с контролем света и температуры, сохраняя первозданное звучание.",
    about_cta_title: "Готовы найти свой идеальный аромат?",
    about_cta_btn: "Исследовать Коллекцию",
    nav_home: "Главная",
    nav_products: "Товары",
    nav_brands: "Бренды",
    nav_men: "Мужчинам",
    nav_women: "Женщинам",
    nav_new: "Новинки",
    nav_bestsellers: "Бестселлеры",
    badge_bestseller: "БЕСТСЕЛЛЕР",
    badge_new_product: "НОВИНКА",
    nav_gifts: "Подарочные наборы",
    cat_men: "Мужчинам",
    cat_women: "Женщинам",
    cat_gifts: "Подарки",
    cat_bestsellers: "Бестселлеры",
    cat_new: "Новинки",
    nav_admin: "WooCommerce Админ",
    nav_order_history: "История заказов",
    nav_logout: "Выйти",
    auth_signin_btn: "Войти",
    auth_signup_title: "Создать аккаунт",
    auth_email_label: "Эл. почта",
    auth_password_label: "Пароль",
    auth_first_name: "Имя",
    auth_last_name: "Фамилия",
    auth_confirm_password: "Подтвердите пароль",
    hello_user: "Привет, Эмма",
    mega_woody: "Древесные",
    mega_floral: "Цветочные",
    mega_citrus: "Цитрусовые",
    mega_amber: "Амбровые",
    search_placeholder: "Поиск ароматов...",
    newsletter_placeholder: "Ваш эл. адрес",
    maison_de_parfum: "Maison de Parfum",
    hero_title: "Твой аромат ждет <span class='hero-highlight'>тебя</span>",
    hero_desc: "Парфюмерия, подарки, красивая упаковка",
    explore_fragrances: "Исследовать Ароматы",
    view_admin_demo: "Демо Управление",
    promise_title_1: "Эксклюзивные Коллекции Ароматов",
    promise_desc_1: "Тщательно отобранная коллекция редких и оригинальных духов в Армении от лучших мировых брендов.",
    promise_title_2: "Стойкие и Шлейфовые Духи",
    promise_desc_2: "Элитная брендовая парфюмерия с высокой концентрацией масел, гарантирующая исключительную стойкость шлейфовых духов.",
    promise_title_3: "Экологичная Упаковка",
    promise_desc_3: "Экологичная упаковка духов: 100% биоразлагаемые коробки FSC, натуральные хлопковые этикетки и перерабатываемые флаконы.",
    collections_title: "ПАРФЮМЕРИЯ",
    gender_unisex: "УНИСЕКС",
    gender_men: "МУЖСКОЙ",
    gender_women: "ЖЕНСКИЙ",
    featured_subtitle: "Избранные Творения",
    featured_title: "Коллекция Ароматов",
    view_full_collection_btn: "Посмотреть всю коллекцию",
    shop_title: "Коллекция",
    shop_subtitle: "Уточните поиск по профилю нот или семейству ароматов.",
    filter_all: "Все",
    filter_woody: "Древесные",
    filter_floral: "Цветочные",
    filter_citrus: "Цитрусовые",
    filter_amber: "Амбровые",
    sort_default: "Сортировка по умолчанию",
    sort_price_low_high: "Цена: от низкой к высокой",
    sort_price_high_low: "Цена: от высокой к низкой",
    sort_rating: "Средний рейтинг",
    cart_title: "Корзина покупок",
    cart_subtotal_label: "Подытог",
    cart_shipping_desc: "Доставка и налоги рассчитываются при оформлении заказа.",
    cart_checkout_btn: "Перейти к оформлению",
    cart_empty_msg: "Ваша корзина в данный момент пуста.",
    go_to_shop_btn: "В магазин",
    wishlist_title: "Мой вишлист",
    wishlist_add_all_btn: "Добавить все в корзину",
    wishlist_empty_msg: "Ваш список желаний пуст.",
    browse_shop_btn: "В каталог",
    card_explore: "Подробнее",
    card_add_to_cart: "В корзину",
    card_sold_out: "Продано",
    reviews_label: "отзывов",
    in_stock_label: "В наличии",
    out_of_stock_label: "Нет в наличии",
    modal_fragrance_pyramid: "Пирамида Аромата",
    modal_top: "Верхние ноты:",
    modal_heart: "Ноты сердца:",
    modal_base: "Базовые ноты:",
    modal_select_size: "Выберите объем",
    modal_view_ingredients: "Посмотреть состав",
    modal_add_to_cart: "Добавить в корзину",
    checkout_billing_title: "Детали оплаты",
    checkout_first_name: "Имя *",
    checkout_last_name: "Фамилия *",
    checkout_email: "Электронная почта *",
    checkout_street: "Адрес *",
    checkout_city: "Город *",
    checkout_zip: "Почтовый индекс *",
    checkout_shipping: "Доставка *",
    checkout_payment_title: "Оплата",
    checkout_payment_desc: "Демо-платеж: режим симулятора. Реальные карты не будут использоваться.",
    checkout_place_order: "Разместить заказ",
    checkout_your_order: "Ваш Заказ",
    checkout_subtotal: "Подытог:",
    checkout_shipping_row: "Доставка:",
    checkout_total: "Итого:",
    order_success_title: "Заказ успешно оформлен",
    order_success_desc: "Спасибо за выбор NOVA. Номер вашего заказа <strong>#REF</strong>. Мы отправили подтверждение на адрес EMAIL.",
    order_details: "Детали заказа",
    order_date: "Дата:",
    order_ship_to: "Доставка в:",
    order_total_paid: "Итого оплачено:",
    continue_shopping_btn: "Продолжить покупки",
    footer_about: "Архитектурное исследование чистых растительных ароматов, созданное для ценителей современной эстетики.",
    footer_nav_title: "Навигация",
    footer_shop_link: "Каталог",
    footer_families_title: "Семейства Ароматов",
    footer_pages_title: "Страницы",
    footer_follow_title: "Подписывайтесь",
    footer_newsletter_title: "Подписка",
    footer_newsletter_desc: "Подпишитесь, чтобы получать уведомления о новых сезонных выпусках.",
    footer_rights: "&copy; 2026 NOVA Inc. Все права защищены.",
    footer_tagline: "ЭЛЕГАНТНОСТЬ &bull; МИНИМАЛИЗМ &bull; ЧИСТОТА",
    home_reviews_title: "Отзывы Клиентов",
    home_instagram_title: "Следите за нами в Instagram",
    home_instagram_shortcode_title: "Лента Instagram (Шорткод)",
    scroll_text: "ПРОКРУТКА &rarr;",
    brand_nova: "NOVA",
    brand_le_labo: "Le Labo",
    brand_byredo: "Byredo",
    brand_diptyque: "Diptyque",
    brand_aesop: "Aesop",
    brand_chanel: "Chanel",
    brand_dior: "Dior",
    brand_giorgio_armani: "Giorgio Armani",
    brand_yves_saint_laurent: "Yves Saint Laurent",
    brand_gucci: "Gucci",
    brand_versace: "Versace",
    brand_calvin_klein: "Calvin Klein",
    brand_dolce_gabbana: "Dolce & Gabbana",
    brand_tom_ford: "Tom Ford",
    brand_hermes: "Hermès",
    brand_burberry: "Burberry",
    brand_lancome: "Lancôme",
    brand_paco_rabanne: "Paco Rabanne",
    brand_jean_paul_gaultier: "Jean Paul Gaultier",
    brand_hugo_boss: "Hugo Boss",
    brand_creed: "Creed",
    brand_jo_malone: "Jo Malone London",
    brand_maison_francis_kurkdjian: "Maison Francis Kurkdjian",
    pp_faq_title: "Часто задаваемые вопросы",
    pp_faq_q1: "Что делает этот аромат уникальным?",
    pp_faq_a1: "Наши ароматы состоят из редчайших растительных компонентов, дистиллированных небольшими партиями для исключительной чистоты и стойкости.",
    pp_faq_q2: "Является ли этот продукт веганским и без жестокости?",
    pp_faq_a2: "Да, все наши творения на 100% веганские и никогда не тестировались на животных. Мы верим в устойчивую, этичную роскошь.",
    pp_faq_q3: "Как долго держится аромат?",
    pp_faq_a3: "Как Eau de Parfum, он держится от 8 до 12 часов в зависимости от химии вашей кожи.",
    pp_faq_q4: "Какова ваша политика возврата?",
    pp_faq_a4: "Мы принимаем возвраты в течение 30 дней для неиспользованных продуктов в оригинальной упаковке.",
    admin_title: "WooCommerce Админ",
    admin_total_revenue: "Общий Доход",
    admin_orders_placed: "Оформленные Заказы",
    admin_avg_order_value: "Средний Чек",
    admin_total_stock: "Общий Запас",
    admin_orders_list: "Список Заказов WooCommerce",
    admin_th_order_id: "ID Заказа",
    admin_th_date: "Дата",
    admin_th_customer: "Клиент",
    admin_th_items: "Товары",
    admin_th_total: "Итого",
    admin_th_status: "Статус",
    admin_th_actions: "Действия",
    admin_inventory_title: "WooCommerce Запасы и Цены",
    admin_inventory_desc: "Измените цены и количество. Нажмите «Обновить», чтобы применить немедленно.",
    admin_th_image: "Изображение",
    admin_th_fragrance: "Аромат",
    admin_th_price: "Цена (100ml)",
    admin_th_stock_qty: "Кол-во на складе",
    admin_th_availability: "Наличие",
    admin_btn_update: "Обновить",
    review_1_text: "\"Абсолютный шедевр современной парфюмерии. Нота сандала такая сливочная и элегантная, меня постоянно останавливают и спрашивают, что на мне надето.\"",
    review_1_author: "Елена В.",
    review_2_text: "\"Минималистическое совершенство. Упаковка великолепна, но сам аромат сложен, красиво раскрываясь в течение дня на моей коже.\"",
    review_2_author: "Маркус Т.",
    review_3_text: "\"Я наконец нашла свой аромат. Он тонкий, но невероятно стойкий. Ботаническая чистота действительно сияет в каждом распылении.\"",
    review_3_author: "Сара Л.",
    review_4_text: "\"Обслуживание клиентов и распаковка были такими же роскошными, как и сам парфюм. Очень рекомендую любому любителю нишевой парфюмерии.\"",
    review_4_author: "Давид К.",
    review_5_text: "\"Ощущение, будто носишь индивидуальное произведение искусства. Шлейф как раз то, что нужно — заметный, но никогда не подавляющий.\"",
    review_5_author: "Мия Р.",
    review_6_text: "\"Поистине уникальный ольфакторный опыт. База пудровая и утонченная. Я не могу дождаться, чтобы попробовать остальную часть коллекции.\"",
    review_6_author: "Джулиан М.",
    review_7_text: "\"Я влюблена в минималистичную эстетику и чистые, нетоксичные ингредиенты. Наконец, роскошный бренд, который соответствует моим ценностям.\"",
    review_7_author: "Хлоя Т.",
    review_8_text: "\"Купил в подарок жене, и она была в полном восторге. Аромат пьянящий и невероятно изысканный.\"",
    review_8_author: "Джеймс Б.",
    mobile_sec_menu: "Меню",
    mobile_sec_actions: "Покупки",
    mobile_sec_languages: "Языки",
    nav_contact: "Контакты",
    contact_header_title: "КОНТАКТЫ",
    contact_subtitle: "Давайте <span style='color: var(--color-brown); font-style: italic'>Поговорим</span>",
    contact_lead: "У вас есть вопросы? Мы будем рады получить от вас сообщение.",
    contact_desc: "Есть вопросы или хотите заказать индивидуальный аромат? Наш консьерж будет рад помочь вам.",
    contact_address_label: "Адрес",
    contact_phone_label: "Телефон",
    contact_email_label: "Эл. почта",
    contact_delivery_label: "Доставка",
    contact_delivery_value: "Доставка по всей Армении",
    contact_form_name_placeholder: "Анна Иванова",
    contact_form_email_placeholder: "anna@example.com",
    contact_form_subject_placeholder: "Консультация по ароматам",
    contact_form_message_placeholder: "Напишите ваше сообщение здесь...",
    contact_hours_label: "Часы работы",
    contact_form_name: "Имя *",
    contact_form_email: "Эл. почта *",
    contact_form_subject: "Тема *",
    contact_form_message: "Сообщение *",
    contact_form_submit: "Отправить",
    footer_policy_shipping: "Доставка и возврат",
    footer_policy_privacy: "Конфиденциальность и условия",
    policy_shipping_header_title: "ДОСТАВКА",
    policy_shipping_subtitle: "ПОДДЕРЖКА КЛИЕНТОВ",
    policy_shipping_title: "Правила доставки и возврата",
    policy_shipping_sec1_title: "1. Доставка и получение",
    policy_shipping_sec1_desc1: "В NOVA каждый аромат тщательно упаковывается для сохранения его тонкой растительной композиции. Мы осуществляем доставку как по Армении, так и по всему миру.",
    policy_shipping_sec1_desc2: "<strong>Доставка по Еревану:</strong> 1-2 рабочих дня (бесплатно при заказе на сумму более 20 000 AMD).<br><strong>Регионы Армении:</strong> 2-4 рабочих дня.<br><strong>Международная доставка:</strong> 7-14 рабочих дней заказной почтой.",
    policy_shipping_sec2_title: "2. Правила возврата и обмена",
    policy_shipping_sec2_desc1: "В связи с индивидуальным и гигиеническим характером нишевой парфюмерии, мы можем принять возврат только полностью запечатанной, неиспользованной продукции в оригинальной упаковке в течение 14 дней с момента доставки.",
    policy_shipping_sec2_desc2: "Если вы хотите оформить возврат, пожалуйста, свяжитесь с нашей службой поддержки по адресу concierge@novafragrances.com перед отправкой товара назад.",
    policy_shipping_sec3_title: "3. Поврежденные товары",
    policy_shipping_sec3_desc1: "Если флакон пришел поврежденным или протекает, немедленно сделайте фотографию и свяжитесь с нами в течение 48 часов с момента получения. Мы организуем замену или полный возврат средств.",
    policy_privacy_header_title: "ЗАКОН",
    policy_privacy_subtitle: "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ",
    policy_privacy_title: "Конфиденциальность и Условия использования",
    policy_privacy_sec1_title: "1. Сбор информации",
    policy_privacy_sec1_desc: "Мы собираем базовую контактную информацию и адрес доставки при оформлении заказа или подписке на нашу рассылку. Эти данные используются исключительно для выполнения ваших заказов.",
    policy_privacy_sec2_title: "2. Безопасность платежей",
    policy_privacy_sec2_desc: "Все платежи обрабатываются через защищенные зашифрованные шлюзы. NOVA не сохраняет и не имеет доступа к вашей платежной карте.",
    policy_privacy_sec3_title: "3. Условия использования",
    policy_privacy_sec3_desc: "Весь контент, изображения и тексты на этом сайте защищены товарным знаком и авторским правом. Копирование без письменного разрешения NOVA строго запрещено.",
    wishlist_header_title: "СПИСОК ЖЕЛАНИЙ",
    wishlist_subtitle: "МОИ ЗАКЛАДКИ",
    wishlist_view_page_btn: "Открыть список желаний",
    exp_subtitle: "Ольфакторная Наука",
    exp_title: "Ольфакторная История",
    exp_desc: "Каждый аромат NOVA представляет собой динамичную, живую композицию, которая развивается на коже в течение нескольких часов. Мы следуем традиционной трехъярусной структуре французской высокой парфюмерии, усиленной ботаническими ингредиентами, собранными из устойчивых источников по всему миру.",
    top_desc: "Первое впечатление (0-30 минут)",
    heart_desc: "Основной характер (30 минут - 4 часа)",
    base_desc: "Шлейф и стойкость (4+ часов)",
    promises_title: "Принципы Осознанной Роскоши",
    suggestions_title: "Завершите Ритуал",
    search_no_results: "Ольфакторные ноты не найдены.",
    filter_scent_family: "Семейство ароматов",
    filter_gender: "Пол",
    filter_vibe: "Атмосфера / Повод",
    filter_price: "Цена",
    filter_size: "Объем",
    filter_brand: "Бренд",
    btn_apply_filters: "Применить фильтры",
    btn_clear_all: "Сбросить все",
    btn_filters: "Фильтры",
    vibe_romantic: "Романтический / Вечерний",
    vibe_daily: "Повседневный / Свежий",
    vibe_professional: "Деловой / Элегантный",
    vibe_cozy: "Теплый / Уютный",
    vibe_mysterious: "Загадочный / Смелый",
    my_account_subtitle: "КЛИЕНТСКИЙ ПОРТАЛ",
    my_account_title: "Личный Кабинет",
    acc_nav_dashboard: "Панель управления",
    acc_nav_wardrobe: "Гардероб ароматов",
    acc_nav_discovery: "Персональная Скидка",
    acc_nav_details: "Настройки аккаунта",
    acc_nav_orders: "История заказов",
    acc_dash_welcome: "Добро пожаловать в ваш личный ольфакторный портал. Отсюда вы можете отслеживать свои покупки парфюмерии, управлять адресами и скидками.",
    acc_scent_profile: "Профиль ароматов",
    acc_scent_profile_desc: "На основании ваших покупок, ваши ольфакторные предпочтения:",
    acc_wardrobe_title: "Мой гардероб ароматов",
    acc_discovery_title: "Персональная Скидка",
    acc_promo_tag: "КЛУБ DISCOVERY",
    acc_promo_title: "Обменяйте пробник на флакон",
    acc_promo_desc: "Понравились пробники? Примените скидку 4,000 AMD при покупке любого полноразмерного (100мл) флакона!",
    acc_promo_code_lbl: "ВАШ УНИКАЛЬНЫЙ КОД СКИДКИ:",
    admin_secure_portal: "БЕЗОПАСНЫЙ ПОРТАЛ",
    admin_login_title: "Вход в WooCommerce",
    admin_pass_hint: "Подсказка: norayrnajaryann@gmail.com / K9$v!p2WbX",
    btn_admin_login: "Войти",
    admin_view_frontend: "Посмотреть сайт",
    admin_nav_orders: "Менеджер заказов",
    admin_nav_inventory: "Управление запасами",
    admin_nav_dev: "Настройки разработчика",
    admin_nav_logs: "Журнал активности",
    admin_nav_clients: "Клиенты",
    admin_clients_title: "Зарегистрированные клиенты",
    admin_clients_desc: "Все пользователи, создавшие аккаунт на сайте.",
    admin_th_name: "Имя",
    admin_th_registered: "Зарегистрирован",
    admin_th_actions: "Действия",
    acc_nav_wardrobe_sub: "Просмотр купленных флаконов",
    acc_nav_discovery_sub: "Ваш эксклюзивный код скидки",
    acc_nav_orders_sub: "Отслеживание отправлений",
    acc_nav_details_sub: "Редактировать адреса и эл. почту",
    acc_th_id: "ID",
    acc_th_date: "Дата",
    acc_th_items: "Товары",
    acc_th_total: "Итого",
    acc_th_status: "Статус",
    acc_th_invoice: "Счет",
    acc_th_sample_kit: "Набор пробников",
    acc_th_purchase_date: "Дата покупки",
    acc_th_credit_value: "Сумма скидки",
    admin_staff_placeholder: "Имя (например, Елена)",
    status_pending: "В ожидании",
    status_processing: "Обрабатывается",
    status_completed: "Выполнен",
    status_failed: "Ошибка",
    admin_btn_delete: "Удалить",
    admin_btn_add_new: "Добавить новый",
    plugin_pdf_label: "WooCommerce PDF Инвойсы (v2.1)",
    plugin_subs_label: "WooCommerce Подписки (v4.0)",
    admin_insta_location_placeholder: "например, Грас, Франция",
    admin_insta_caption_placeholder: "Ноты аромата, детали и т.д.",
    admin_staff_locked: "Заблокировано",
    admin_logs_empty: "Записи в журнале отсутствуют.",
    admin_sales_perf: "Показатели продаж по категориям",
    admin_dev_title: "Настройки разработчика и системы",
    admin_dev_desc: "Управление конфигурациями платформы, основными расширениями, платежными шлюзами и учетными данными безопасности персонала.",
    admin_dev_plugins: "Основные расширения и плагины",
    admin_dev_gateways: "Платежные шлюзы",
    gateway_stripe_label: "Интеграция Stripe Checkout",
    gateway_paypal_label: "PayPal Express Standard",
    gateway_cod_label: "Оплата при доставке (COD)",
    admin_dev_staff_manager: "Менеджер профилей персонала",
    admin_dev_staff_desc: "Регистрация или отзыв учетных данных доступа для менеджеров персонала.",
    admin_btn_create_profile: "Создать профиль",
    admin_th_staff_name: "Имя сотрудника",
    admin_th_role: "Роль",
    admin_logs_title: "Система логирования активности",
    admin_logs_desc: "Журнал аудита безопасности платформы, отслеживающий доступ по учетным данным, изменения настроек, цен и обновлений.",
    admin_logs_clear: "Очистить логи",
    admin_logs_th_timestamp: "Временная метка",
    admin_logs_th_operator: "Оператор",
    admin_logs_th_action: "Записанное действие",
    admin_btn_install: "Установить",
    acc_wardrobe_empty: "Ваш гардероб ароматов пуст.",
    acc_discovery_empty: "Наборы пробников еще не приобретены.",
    acc_orders_empty: "Заказы еще не оформлены.",
    bg_media: "МЕДИA",
    insta_likes: "отметок «Нравится»",
    insta_loc_1: "Грас, Франция",
    insta_loc_2: "Киото, Япония",
    insta_loc_3: "Амальфи, Италия",
    insta_loc_4: "Париж, Франция",
    insta_loc_5: "Лондон, Великобритания",
    insta_loc_6: "Санторини, Греция",
    insta_loc_7: "Милан, Италия",
    insta_loc_8: "Сен-Тропе, Франция",
    insta_caption_1: "Santal N°01 отражает первозданную элегантность австралийской пустыни. Дистиллирован в медных колоннах. ✨",
    insta_caption_2: "Нежный танец цветущей вишни и мягкого кашемирового мускуса. Fleur de Cerisier — это Киото весной. 🌸",
    insta_caption_3: "Пропитанный солнцем взрыв сицилийского бергамота и соленого морского воздуха. Agrumes Frais в руке. 🍋",
    insta_caption_4: "Подарите ольфакторную поэзию. Наш фирменный набор открытий, завернутый в экологичный лен. 🎁",
    insta_caption_5: "Чистые растительные ингредиенты, собранные из экологически чистых источников по всему миру. Первозданная роскошь. 🌿",
    insta_caption_6: "Роскошное бархатное одеяло из золотой амбры и поджаренных специй в золотой час. 🌅",
    insta_caption_7: "Каждое распыление — это живая композиция, которая раскрывается на коже в течение нескольких часов. 💫",
    insta_caption_8: "Бодряще свежий Vétiver Blanc. Ольфакторный эквивалент сшитой на заказ белой рубашки. 🌊",
    insta_view_comments_1: "Посмотреть все 12 комментариев",
    insta_view_comments_2: "Посмотреть все 8 комментариев",
    insta_view_comments_3: "Посмотреть все 15 комментариев",
    insta_view_comments_4: "Посмотреть все 9 комментариев",
    insta_view_comments_5: "Посмотреть все 11 комментариев",
    insta_view_comments_6: "Посмотреть все 14 комментариев",
    insta_date_1: "2 ДНЯ НАЗАД",
    insta_date_2: "3 ДНЯ НАЗАД",
    insta_date_3: "4 ДНЯ НАЗАД",
    insta_date_4: "5 ДНЕЙ НАЗАД",
    insta_date_5: "1 НЕДЕЛЮ НАЗАД",
    insta_date_6: "1 НЕДЕЛЮ НАЗАД",
    admin_nav_instagram: "Instagram Менеджер",
    admin_insta_title: "Управление лентой Instagram",
    admin_insta_desc: "Добавляйте новые публикации в ленту Instagram, редактируйте информацию или удаляйте существующие записи.",
    admin_insta_add_post: "Добавить новую запись",
    admin_insta_location: "Местоположение / Место *",
    admin_insta_caption: "Описание / Подпись *",
    admin_insta_date: "Дата публикации *",
    admin_insta_images: "Изображения (можно выбрать несколько) *",
    admin_insta_active_posts: "Активные публикации",
    admin_th_thumbnail: "Миниатюра",
    admin_th_location: "Местоположение",
    admin_th_caption: "Подпись",
    admin_th_date: "Дата",
    admin_btn_add_post: "Добавить публикацию",
    insta_feed_empty: "Публикаций пока нет. Добавьте новые публикации из панели управления WooCommerce.",
    modal_product_edit_title: "Редактировать Детали Товара",
    modal_lbl_name: "Название Товара *",
    modal_lbl_brand: "Бренд *",
    modal_lbl_tagline: "Краткое Описание *",
    modal_lbl_desc: "Описание *",
    modal_lbl_ingredients: "Состав (Ингредиенты)",
    modal_lbl_image_url: "Фото (Изображение URL) *",
    modal_lbl_or_upload: "ИЛИ загрузить файл:",
    modal_lbl_family: "Семейство *",
    modal_lbl_gender: "Пол *",
    modal_lbl_stock: "Количество на складе *",
    modal_lbl_notes_top: "Верхние Ноты *",
    modal_lbl_notes_heart: "Ноты Сердца *",
    modal_lbl_notes_base: "Базовые Ноты *",
    modal_btn_cancel: "Отмена",
    modal_btn_save: "Сохранить Изменения",
    home_video_title: "Искусство Изысканного Выбора",
    home_video_paragraph: "Каждая капля парфюма Nova — это манифест роскоши и безупречного вкуса. Мы отбираем самые редкие и ценные парфюмерные компоненты со всего мира, создавая многогранную, раскрывающуюся историю на вашей коже. Nova — это ведущий бренд нишевой парфюмерии в Армении, создающий стойкие шлейфовые ароматы, которые заявляют о вашем присутствии без единого слова.",
    home_video_cta: "Подробнее",
    promise_title_1: "Эксклюзивные Коллекции",
    promise_desc_1: "Тщательно отобранные престижные, редкие и оригинальные дизайнерские ароматы в Армении.",
    promise_title_2: "Стойкие Авторские Ароматы",
    promise_desc_2: "Нишевые коллекции ароматов с мастерской концентрацией масел, обеспечивающие стойкий шлейфовый аромат.",
    promise_title_3: "Экологичная Упаковка",
    promise_desc_3: "Экологичная упаковка с биоразлагаемыми FSC коробками, хлопковыми этикетками и перерабатываемыми стеклянными бутылками.",
    promise_title_4: "Доставка",
    promise_desc_4: "Доставка по всей Армении"
  },
  en: {
    nav_about: "About Us",
    about_hook_title: "Purveyors of Olfactive Art",
    about_hook_desc: "We curate rare, niche fragrances and raw, clean ingredients for the modern aesthete. Our mission is to elevate your signature scent from an afterthought to a masterpiece.",
    about_story_title: "Our <span style='color: var(--color-brown); font-style: italic'>Beginning</span>",
    about_story_desc: "NOVA was born from a singular obsession: to discover uncompromising, rare, and breathtaking scents in a market flooded with mass-produced options. What started as a private curation of the world’s finest global fragrances has evolved into a premier sanctuary for those who appreciate the true artistry of niche perfumery.",
    about_eyebrow: "THE ART OF DISTILLATION — EST. 2026",
    about_lead: "An architectural study of pure botanical scents, handcrafted for the modern aesthetic enthusiast.",
    stat_botanical: "Authentic Curation",
    stat_batch: "Global Brands",
    stat_batch_number: "Elite",
    stat_synthetic: "Mass-Produced Fluff",
    contact_us: "Get In Touch",
    about_pillars_title: "The Pillars of Trust",
    about_guarantee_title: "Authenticity, always.",
    about_guarantee_desc: "Sourced directly from authorized distributors and original perfume houses. Absolute purity—no grey markets, no compromises.",
    about_scent_match_title: "The perfect scent promise.",
    about_scent_match_desc: "Deep scent profiles and worry-free returns on all unopened boxes, making it easy to buy perfume online with total confidence.",
    about_storage_title: "Impeccable storage.",
    about_storage_desc: "Every bottle kept in climate- and light-controlled vaults, preserving the delicate molecular integrity and long-lasting power.",
    about_cta_title: "Ready to find your signature scent?",
    about_cta_btn: "Explore the Collection",
    nav_home: "Home",
    nav_products: "Products",
    nav_brands: "Brands",
    nav_men: "Men",
    nav_women: "Women",
    nav_new: "New Arrivals",
    nav_bestsellers: "Best Sellers",
    badge_bestseller: "BEST SELLER",
    badge_new_product: "NEW PRODUCT",
    nav_gifts: "Gift Sets",
    cat_men: "Men",
    cat_women: "Women",
    cat_gifts: "Gifts",
    cat_bestsellers: "Best Sellers",
    cat_new: "New Arrivals",
    nav_admin: "WooCommerce Admin",
    nav_order_history: "Order History",
    nav_logout: "Log Out",
    auth_signin_btn: "Sign In",
    auth_signup_title: "Create Account",
    auth_email_label: "Email Address",
    auth_password_label: "Password",
    auth_first_name: "First Name",
    auth_last_name: "Last Name",
    auth_confirm_password: "Confirm Password",
    hello_user: "Hello, Emma",
    mega_woody: "Woody Notes",
    mega_floral: "Floral Notes",
    mega_citrus: "Citrus Notes",
    mega_amber: "Amber Notes",
    search_placeholder: "Search olfactory note...",
    newsletter_placeholder: "Your email address",
    maison_de_parfum: "Maison de Parfum",
    hero_title: "Your scent is waiting for <span class='hero-highlight'>you</span>",
    hero_desc: "Perfumes, gifts, beautiful packaging",
    explore_fragrances: "Explore Fragrances",
    view_admin_demo: "View Admin Demo",
    promise_title_1: "Exclusively Curated Collections",
    promise_desc_1: "Expertly curated selection of the world's most prestigious, rare, and authentic designer perfumes in Armenia.",
    promise_title_2: "Long-Lasting Signature Scents",
    promise_desc_2: "Hand-selected niche fragrance collections with masterful oil concentrations, ensuring a breathtaking, long-lasting signature scent.",
    promise_title_3: "Sustainable Packaging",
    promise_desc_3: "Eco-friendly perfume packaging featuring 100% biodegradable FSC boxes, cotton labels, and recyclable glass bottles.",
    collections_title: "PERFUMES",
    gender_unisex: "UNISEX",
    gender_men: "FOR MEN",
    gender_women: "FOR WOMEN",
    featured_subtitle: "Selected Creations",
    featured_title: "The Fragrance Collective",
    view_full_collection_btn: "View Full Collection",
    shop_title: "The Collection",
    shop_subtitle: "Refine your search by notes profile or olfactory family.",
    filter_all: "All",
    filter_woody: "Woody",
    filter_floral: "Floral",
    filter_citrus: "Citrus",
    filter_amber: "Amber",
    sort_default: "Default sorting",
    sort_price_low_high: "Price: Low to High",
    sort_price_high_low: "Price: High to Low",
    sort_rating: "Average Rating",
    cart_title: "Shopping Bag",
    cart_subtotal_label: "Subtotal",
    cart_shipping_desc: "Shipping and taxes calculated at checkout.",
    cart_checkout_btn: "Proceed to Checkout",
    cart_empty_msg: "Your shopping bag is currently empty.",
    go_to_shop_btn: "Go to Shop",
    wishlist_title: "My Wishlist",
    wishlist_add_all_btn: "Add All to Bag",
    wishlist_empty_msg: "Your wishlist is currently empty.",
    browse_shop_btn: "Browse Shop",
    card_explore: "Explore",
    card_add_to_cart: "Add to Cart",
    card_sold_out: "Sold Out",
    reviews_label: "reviews",
    in_stock_label: "In Stock",
    out_of_stock_label: "Out of Stock",
    modal_fragrance_pyramid: "Fragrance Pyramid",
    modal_top: "Top Notes:",
    modal_heart: "Heart Notes:",
    modal_base: "Base Notes:",
    modal_select_size: "Select Size",
    modal_view_ingredients: "View Ingredients",
    modal_add_to_cart: "Add to Cart",
    checkout_billing_title: "Billing Details",
    checkout_first_name: "First Name *",
    checkout_last_name: "Last Name *",
    checkout_email: "Email Address *",
    checkout_street: "Street Address *",
    checkout_city: "City *",
    checkout_zip: "ZIP / Postal Code *",
    checkout_shipping: "Shipping *",
    checkout_payment_title: "Payment",
    checkout_payment_desc: "Demo payment: Simulator mode. No real cards will be charged.",
    checkout_place_order: "Place Order",
    checkout_your_order: "Your Order",
    checkout_subtotal: "Subtotal:",
    checkout_shipping_row: "Shipping:",
    checkout_total: "Total:",
    order_success_title: "Order Placed Successfully",
    order_success_desc: "Thank you for choosing NOVA. Your order number is <strong>#REF</strong>. We have sent a confirmation email to EMAIL.",
    order_details: "Order Details",
    order_date: "Date:",
    order_ship_to: "Ship To:",
    order_total_paid: "Total Paid:",
    continue_shopping_btn: "Continue Shopping",
    footer_about: "An architectural study of pure botanical scents, handcrafted for the modern aesthetic enthusiast.",
    footer_nav_title: "Navigation",
    footer_shop_link: "Shop Collection",
    footer_families_title: "Olfactory Families",
    footer_pages_title: "Pages",
    footer_follow_title: "Follow Us",
    footer_newsletter_title: "Newsletter",
    footer_newsletter_desc: "Subscribe to receive previews of new seasonal distillations.",
    footer_rights: "&copy; 2026 NOVA Inc. All rights reserved.",
    footer_tagline: "ELEGANCE &bull; MINIMALISM &bull; PURITY",
    home_reviews_title: "What Our Clients Say",
    home_instagram_title: "Follow Us @NovaFragrances",
    home_instagram_shortcode_title: "Instagram Feed (Shortcode)",
    scroll_text: "SCROLL &rarr;",
    brand_nova: "NOVA",
    brand_le_labo: "Le Labo",
    brand_byredo: "Byredo",
    brand_diptyque: "Diptyque",
    brand_aesop: "Aesop",
    brand_chanel: "Chanel",
    brand_dior: "Dior",
    brand_giorgio_armani: "Giorgio Armani",
    brand_yves_saint_laurent: "Yves Saint Laurent",
    brand_gucci: "Gucci",
    brand_versace: "Versace",
    brand_calvin_klein: "Calvin Klein",
    brand_dolce_gabbana: "Dolce & Gabbana",
    brand_tom_ford: "Tom Ford",
    brand_hermes: "Hermès",
    brand_burberry: "Burberry",
    brand_lancome: "Lancôme",
    brand_paco_rabanne: "Paco Rabanne",
    brand_jean_paul_gaultier: "Jean Paul Gaultier",
    brand_hugo_boss: "Hugo Boss",
    brand_creed: "Creed",
    brand_jo_malone: "Jo Malone London",
    brand_maison_francis_kurkdjian: "Maison Francis Kurkdjian",
    pp_faq_title: "Frequently Asked Questions",
    pp_faq_q1: "What makes this fragrance unique?",
    pp_faq_a1: "Our fragrances are composed of the rarest botanicals, distilled in small batches for exceptional purity and longevity.",
    pp_faq_q2: "Is this product cruelty-free and vegan?",
    pp_faq_a2: "Yes, all our creations are 100% vegan and never tested on animals. We believe in sustainable, ethical luxury.",
    pp_faq_q3: "How long does the scent last?",
    pp_faq_a3: "Formulated as an Eau de Parfum, you can expect an intoxicating sillage that lasts between 8 to 12 hours depending on your skin chemistry.",
    pp_faq_q4: "What is your return policy?",
    pp_faq_a4: "We accept returns within 30 days of purchase for unused products in their original packaging.",
    admin_title: "WooCommerce Control Panel",
    admin_total_revenue: "Total Revenue",
    admin_orders_placed: "Orders Placed",
    admin_avg_order_value: "Avg. Order Value",
    admin_total_stock: "Total Stock Items",
    admin_orders_list: "WooCommerce Orders List",
    admin_th_order_id: "Order ID",
    admin_th_date: "Date",
    admin_th_customer: "Customer",
    admin_th_items: "Purchased Items",
    admin_th_total: "Total",
    admin_th_status: "Status",
    admin_th_actions: "Actions",
    admin_inventory_title: "WooCommerce Inventory & Price Control",
    admin_inventory_desc: "Edit prices and quantity stock levels. Click \"Update\" to apply to storefront immediately.",
    admin_th_image: "Image",
    admin_th_fragrance: "Fragrance",
    admin_th_price: "Price (100ml)",
    admin_th_stock_qty: "Stock Quantity",
    admin_th_availability: "Availability",
    admin_btn_update: "Update",
    review_1_text: "\"An absolute masterpiece of modern perfumery. The sandalwood note is so creamy and elegant, I constantly get stopped and asked what I'm wearing.\"",
    review_1_author: "Elena V.",
    review_2_text: "\"Minimalist perfection. The packaging is gorgeous, but the scent itself is complex, evolving beautifully throughout the day on my skin.\"",
    review_2_author: "Marcus T.",
    review_3_text: "\"I have finally found my signature scent. It's subtle yet incredibly long-lasting. The botanical purity really shines through in every spray.\"",
    review_3_author: "Sarah L.",
    review_4_text: "\"The customer service and unboxing experience were as luxurious as the perfume itself. Highly recommend to any niche fragrance lover.\"",
    review_4_author: "David K.",
    review_5_text: "\"It feels like wearing a customized piece of art. The sillage is just right—noticeable but never overwhelming.\"",
    review_5_author: "Mia R.",
    review_6_text: "\"A truly unique olfactive experience. The dry down is powdery and sophisticated. I cannot wait to try the rest of the collection.\"",
    review_6_author: "Julian M.",
    review_7_text: "\"I am in love with the minimalist aesthetic and the pure, non-toxic ingredients. Finally a luxury brand that aligns with my values.\"",
    review_7_author: "Chloe T.",
    review_8_text: "\"Bought this as a gift for my wife and she was completely blown away. The scent is intoxicating and incredibly refined.\"",
    review_8_author: "James B.",
    mobile_sec_menu: "Menu",
    mobile_sec_actions: "Shopping",
    mobile_sec_languages: "Languages",
    nav_contact: "Contact",
    contact_header_title: "CONTACT US",
    contact_subtitle: "Let's <span style='color: var(--color-brown); font-style: italic'>Talk</span>",
    contact_lead: "Have a question? We would be pleased to hear from you",
    contact_desc: "Have questions or want to request a bespoke fragrance consultation? Our concierge is here to assist you.",
    contact_address_label: "Address",
    contact_address_value: "C. Vedi, Armenia",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_delivery_label: "Delivery",
    contact_delivery_value: "Delivery across all of Armenia",
    contact_form_name: "Name *",
    contact_form_email: "Email *",
    contact_form_subject: "Subject *",
    contact_form_message: "Message *",
    contact_form_submit: "Send Message",
    contact_form_name_placeholder: "Emma Watson",
    contact_form_email_placeholder: "emma@example.com",
    contact_form_subject_placeholder: "Fragrance consultation request",
    contact_form_message_placeholder: "Write your message here...",
    footer_policy_shipping: "Shipping & Returns",
    footer_policy_privacy: "Privacy & Terms",
    policy_shipping_header_title: "SHIPPING",
    policy_shipping_subtitle: "CUSTOMER SUPPORT",
    policy_shipping_title: "Shipping & Returns Policy",
    policy_shipping_sec1_title: "1. Shipping & Delivery",
    policy_shipping_sec1_desc1: "At NOVA, each fragrance is carefully packed to preserve its delicate botanical composition. We ship both locally across Armenia and internationally.",
    policy_shipping_sec1_desc2: "<strong>Yerevan Delivery:</strong> 1-2 business days (Free for orders over 20,000 AMD).<br><strong>Regional Armenia:</strong> 2-4 business days.<br><strong>International Delivery:</strong> 7-14 business days via registered postal service.",
    policy_shipping_sec2_title: "2. Return & Exchange Policy",
    policy_shipping_sec2_desc1: "Due to the personal and cosmetic nature of niche perfumery, we are only able to accept returns on products that are completely unopened, unused, and in their original sealed cellophane packaging within 14 days of delivery.",
    policy_shipping_sec2_desc2: "If you wish to initiate a return, please contact our concierge team at concierge@novafragrances.com before sending the package back.",
    policy_shipping_sec3_title: "3. Damaged or Faulty Items",
    policy_shipping_sec3_desc1: "If your bottle arrives damaged or leaking, please take a photograph immediately and contact us within 48 hours of receipt. We will arrange a replacement or full refund immediately.",
    policy_privacy_header_title: "PRIVACY",
    policy_privacy_subtitle: "LEGAL STATEMENT",
    policy_privacy_title: "Privacy Policy & Terms of Service",
    policy_privacy_sec1_title: "1. Information We Collect",
    policy_privacy_sec1_desc: "We collect basic billing, contact, and shipping information when you purchase from our collection or subscribe to our newsletter. This data is exclusively used to fulfill your orders and enhance your experience.",
    policy_privacy_sec2_title: "2. Payment Security",
    policy_privacy_sec2_desc: "All payments are processed securely through encrypted merchant gateways. NOVA does not store or have direct access to your credit card numbers or private financial details.",
    policy_privacy_sec3_title: "3. Terms of Use",
    policy_privacy_sec3_desc: "All content, imagery, and text on this platform are protected under trademark and intellectual property rights. Copying or redistribution is strictly prohibited without explicit written permission from NOVA.",
    wishlist_header_title: "WISHLIST",
    wishlist_subtitle: "MY FAVORITES",
    wishlist_view_page_btn: "View Wishlist Page",
    exp_subtitle: "Olfactive Science",
    exp_title: "The Olfactory Narrative",
    exp_desc: "Every NOVA fragrance is a dynamic, living composition that evolves on the skin over several hours. We follow the traditional three-tiered structure of French high perfumery, enhanced with botanical ingredients gathered from sustainable sources worldwide.",
    top_desc: "First impression (0-30 mins)",
    heart_desc: "Core personality (30 mins - 4 hours)",
    base_desc: "Sillage & longevity (4+ hours)",
    promises_title: "Conscious Luxury Principles",
    suggestions_title: "Complete the Ritual",
    search_no_results: "No olfactory notes found.",
    filter_scent_family: "Scent Family",
    filter_gender: "Gender",
    filter_vibe: "Vibe / Occasion",
    filter_price: "Price",
    filter_size: "Size",
    filter_brand: "Brand",
    btn_apply_filters: "Apply Filters",
    btn_clear_all: "Clear All",
    btn_filters: "Filters",
    vibe_romantic: "Romantic / Evening",
    vibe_daily: "Daily / Fresh",
    vibe_professional: "Business / Elegant",
    vibe_cozy: "Warm / Cozy",
    vibe_mysterious: "Mysterious / Bold",
    my_account_subtitle: "CLIENT PORTAL",
    my_account_title: "My Account",
    acc_nav_dashboard: "Dashboard",
    acc_nav_wardrobe: "Scent Wardrobe",
    acc_nav_discovery: "Personal Discount",
    acc_nav_details: "Account Details",
    acc_nav_orders: "Order History",
    acc_dash_welcome: "Welcome to your private olfactory portal. From here, you can track your seasonal scent purchases, configure your delivery preferences, and manage your discovery credit.",
    acc_scent_profile: "Scent Profile Summary",
    acc_scent_profile_desc: "Based on your olfactory choices, your main preferences are:",
    acc_wardrobe_title: "My Scent Wardrobe",
    acc_discovery_title: "Personal Discount",
    acc_promo_tag: "DISCOVERY CLUB",
    acc_promo_title: "Convert Sample to Full-Bottle",
    acc_promo_desc: "Loved your samples? Apply your 4,000 AMD discovery credit toward any full-sized (100ml) bottle!",
    acc_promo_code_lbl: "YOUR UNIQUE CREDIT CODE:",
    admin_secure_portal: "SECURE PORTAL",
    admin_login_title: "WooCommerce Login",
    admin_pass_hint: "Hint: norayrnajaryann@gmail.com / K9$v!p2WbX",
    btn_admin_login: "Login",
    admin_view_frontend: "View Front End",
    admin_nav_orders: "Orders Manager",
    admin_nav_inventory: "Inventory Tracker",
    admin_nav_dev: "Developer Settings",
    admin_nav_logs: "Activity Logs",
    admin_nav_clients: "Clients",
    admin_clients_title: "Registered Clients",
    admin_clients_desc: "All users who have created an account on the website.",
    admin_th_name: "Name",
    admin_th_registered: "Registered",
    admin_th_actions: "Actions",
    acc_nav_wardrobe_sub: "View purchased bottles",
    acc_nav_discovery_sub: "Your exclusive brand code",
    acc_nav_orders_sub: "Track shipments",
    acc_nav_details_sub: "Edit addresses & email",
    acc_th_id: "ID",
    acc_th_date: "Date",
    acc_th_items: "Items",
    acc_th_total: "Total",
    acc_th_status: "Status",
    acc_th_invoice: "Invoice",
    acc_th_sample_kit: "Sample Kit",
    acc_th_purchase_date: "Purchase Date",
    acc_th_credit_value: "Credit Value",
    admin_staff_placeholder: "Name (e.g. Elena)",
    status_pending: "Pending",
    status_processing: "Processing",
    status_completed: "Completed",
    status_failed: "Failed",
    admin_btn_delete: "Delete",
    admin_btn_add_new: "Add New",
    plugin_pdf_label: "WooCommerce PDF Invoices (v2.1)",
    plugin_subs_label: "WooCommerce Subscriptions (v4.0)",
    admin_insta_location_placeholder: "e.g. Grasse, France",
    admin_insta_caption_placeholder: "Scent notes, details, etc.",
    admin_staff_locked: "Locked",
    admin_logs_empty: "No logs recorded.",
    admin_sales_perf: "Sales Performance by Fragrance Category",
    admin_dev_title: "Developer & System Settings",
    admin_dev_desc: "Manage platform configurations, core extensions, payment gateways, and staff security credentials.",
    admin_dev_plugins: "Core Extensions & Plugins",
    admin_dev_gateways: "Payment Gateways",
    gateway_stripe_label: "Stripe Checkout Integration",
    gateway_paypal_label: "PayPal Standard Express",
    gateway_cod_label: "Cash on Delivery (COD)",
    admin_dev_staff_manager: "Staff Profiles Manager",
    admin_dev_staff_desc: "Register or revoke backend access credentials for staff managers.",
    admin_btn_create_profile: "Create Profile",
    admin_th_staff_name: "Staff Name",
    admin_th_role: "Role",
    admin_logs_title: "Activity Logging System",
    admin_logs_desc: "Platform security audit log tracking credentials access, settings adjustments, pricing edits, and updates.",
    admin_logs_clear: "Clear Logs",
    admin_logs_th_timestamp: "Timestamp",
    admin_logs_th_operator: "Operator",
    admin_logs_th_action: "Recorded Action",
    admin_btn_install: "Install",
    acc_wardrobe_empty: "Your scent wardrobe is empty.",
    acc_discovery_empty: "No discovery samples purchased yet.",
    acc_orders_empty: "No orders placed yet.",
    bg_media: "MEDIA",
    insta_likes: "likes",
    insta_loc_1: "Grasse, France",
    insta_loc_2: "Kyoto, Japan",
    insta_loc_3: "Amalfi, Italy",
    insta_loc_4: "Paris, France",
    insta_loc_5: "London, United Kingdom",
    insta_loc_6: "Santorini, Greece",
    insta_loc_7: "Milan, Italy",
    insta_loc_8: "St. Tropez, France",
    insta_caption_1: "Santal N°01 captures the raw elegance of the Australian outback. Distilled in copper columns. ✨",
    insta_caption_2: "A delicate dance of cherry blossom and soft cashmere musk. Fleur de Cerisier is Kyoto in springtime. 🌸",
    insta_caption_3: "A sun-drenched explosion of Sicilian bergamot and salted sea air. Agrumes Frais in hand. 🍋",
    insta_caption_4: "Give the gift of olfactory poetry. Our signature discovery set wrapped in sustainable linen. 🎁",
    insta_caption_5: "Pure botanical ingredients gathered from sustainable sources worldwide. Raw luxury. 🌿",
    insta_caption_6: "An opulent, velvet blanket of golden amber and toasted spices at the golden hour. 🌅",
    insta_caption_7: "Every spray is a living composition that evolves on the skin over several hours. 💫",
    insta_caption_8: "Bracingly fresh Vétiver Blanc. The olfactive equivalent of a tailored white shirt. 🌊",
    insta_view_comments_1: "View all 12 comments",
    insta_view_comments_2: "View all 8 comments",
    insta_view_comments_3: "View all 15 comments",
    insta_view_comments_4: "View all 9 comments",
    insta_view_comments_5: "View all 11 comments",
    insta_view_comments_6: "View all 14 comments",
    insta_date_1: "2 DAYS AGO",
    insta_date_2: "3 DAYS AGO",
    insta_date_3: "4 DAYS AGO",
    insta_date_4: "5 DAYS AGO",
    insta_date_5: "1 WEEK AGO",
    insta_date_6: "1 WEEK AGO",
    admin_nav_instagram: "Instagram Manager",
    admin_insta_title: "Instagram Feed Manager",
    admin_insta_desc: "Add new posts to the front page Instagram feed, edit details, or delete existing posts.",
    admin_insta_add_post: "Add New Post",
    admin_insta_location: "Location / Place *",
    admin_insta_caption: "Caption / Description *",
    admin_insta_date: "Post Date *",
    admin_insta_images: "Images (multiple allowed) *",
    admin_insta_active_posts: "Active Posts Feed",
    admin_th_thumbnail: "Thumbnail",
    admin_th_location: "Location",
    admin_th_caption: "Caption",
    admin_th_date: "Date",
    admin_btn_add_post: "Add Post",
    insta_feed_empty: "No posts yet. Add posts from the WooCommerce Control Panel.",
    modal_product_edit_title: "Edit Product Details",
    modal_lbl_name: "Product Name *",
    modal_lbl_brand: "Brand *",
    modal_lbl_tagline: "Tagline / Short Desc *",
    modal_lbl_desc: "Description *",
    modal_lbl_ingredients: "Ingredients",
    modal_lbl_image_url: "Photo (Image URL) *",
    modal_lbl_or_upload: "OR upload a file:",
    modal_lbl_family: "Family *",
    modal_lbl_gender: "Gender *",
    modal_lbl_stock: "Stock Quantity *",
    modal_lbl_notes_top: "Top Notes *",
    modal_lbl_notes_heart: "Heart Notes *",
    modal_lbl_notes_base: "Base Notes *",
    modal_btn_cancel: "Cancel",
    modal_btn_save: "Save Changes",
    home_video_title: "The Art of Rare Curation",
    home_video_paragraph: "Every drop of Nova is a masterpiece of precision and luxury. We source the world’s finest premium ingredients, seamlessly blending rare elements to create an evolving sensory journey on your skin. As a premier niche fragrance brand in Armenia, Nova doesn’t just offer a scent—it crafts an unforgettable identity that lingers beautifully.",
    home_video_cta: "Learn More",
    promise_title_1: "Exclusively Curated Collections",
    promise_desc_1: "Expertly curated selection of the world's most prestigious, rare, and authentic designer perfumes in Armenia.",
    promise_title_2: "Long-Lasting Signature Scents",
    promise_desc_2: "Hand-selected niche fragrance collections with masterful oil concentrations, ensuring a breathtaking, long-lasting signature scent.",
    promise_title_3: "Sustainable Packaging",
    promise_desc_3: "Eco-friendly perfume packaging featuring 100% biodegradable FSC boxes, cotton labels, and recyclable glass bottles.",
    promise_title_4: "Delivery",
    promise_desc_4: "Delivery across all of Armenia"
  }
};

const PRODUCT_TRANSLATIONS = {
  am: {
    "santal-01": {
      tagline: "Ավստրալիական սանդալի, հիլի և կաշվի ծխագույն, մագնիսական ստորագրություն:",
      description: "Santal N°01-ը մեր ստորագրության ստեղծագործությունն է: Այն որսում է ավստրալիական անապատի հում էլեգանտությունը կեսգիշերային երկնքի տակ: Տաք, չոր և զգայական, այն փաթաթում է կրողին կաշվի, ամբրայի և համեմունքների հարմարավետ, բայց խորհրդավոր աուրայով՝ չորանալով մինչև սերուցքային, կաթնային փայտայնություն:",
      top: ["Հիլ", "Իրիս", "Մանուշակ"],
      heart: ["Սանդալե փայտ", "Վիրջինյան մայրի", "Պապիրուս"],
      base: ["Կաշի", "Ամբրա", "Մուշկ"]
    },
    "fleur-cerisier": {
      tagline: "Բալենու ծաղկի, սպիտակ թեյի և նուրբ կաշմիրե մուշկի նուրբ, եթերային պար:",
      description: "Fleur de Cerisier-ը Կիոտոյում գարնանային ժամանակի պոետիկ մեկնաբանությունն է: Որսալով տաք քամուց պտտվող բալենու ծաղիկների անցողիկ գեղեցկությունը՝ այս բույրը բացվում է վառ, ջրային նոտաներով, նախքան փոշոտ ծաղկային սրտի մեջ տեղավորվելը, որն ամրացված է կաշմիրի և սպիտակ մուշկի հիմքով:",
      top: ["Բերգամոտ", "Սպիտակ թեյ", "Տանձ"],
      heart: ["Բալենու ծաղիկ", "Ֆրանսիական վարդ", "Հասմիկ"],
      base: ["Կաշմիրե մուշկ", "Սանդալե փայտ", "Սպիտակ ամբրա"]
    },
    "agrumes-frais": {
      tagline: "Սիցիլիական բերգամոտի, կանաչ մանդարինի և աղի ծովային օդի արևով ողողված պայթյուն:",
      description: "Agrumes Frais-ը հարգանքի տուրք է Ամալֆիի ափի արևով ողողված ժայռերին: Կենսունակ, կայծկլտող և թարմացնող, այն արթնացնում է ցիտրուսային այգիներով անցնող առավոտյան զեփյուռի թարմ զգացումը: Աղի ծովային ակորդները հավասարակշռում են վառ նոտաները, իսկ վետիվերն ու սպիտակ ամբրան տալիս են կայուն կառուցվածք:",
      top: ["Սիցիլիական բերգամոտ", "Կանաչ մանդարին", "Կիտրոնի կեղև"],
      heart: ["Ծովի աղի ակորդ", "Ներոլի", "Ռեհան"],
      base: ["Հայիթյան վետիվեր", "Սպիտակ ամբրա", "Մայրի"]
    },
    "ambre-chaud": {
      tagline: "Ոսկե ամբրայի, տաք վանիլի և տապակած համեմունքների շքեղ, թավշյա ծածկոց:",
      description: "Ambre Chaud-ը ինտենսիվ, շքեղ բույր է, որը նախատեսված է ցուրտ ամիսների և մտերմիկ երեկոների համար: Այն փաթաթում է մաշկը ամբրայի և քաղցր, մութ վանիլի տաք գրկում, որն ուժեղացված է կարդամոնի և մշկընկույզի խառնուրդով և հենվում է ծխախոտի տերևի և լաբդանումի երկարատև հիմքի վրա:",
      top: ["Մշկընկույզ", "Կորիանդր", "Դարչին"],
      heart: ["Ոսկե ամբրա", "Լաբդանում", "Պաչուլի"],
      base: ["Վանիլ", "Ծխախոտի տերև", "Սիամական բենզոին"]
    },
    "figue-noire": {
      tagline: "Միջերկրական արևի տակ հասուն թզի մուգ, կանաչ մեկնաբանություն:",
      description: "Figue Noire-ը բացվում է թզի խրթխրթան տերևների պայթյունով՝ արագորեն բացահայտելով բուն մրգի մուգ, ջեմային քաղցրությունը: Հարմարվելով՝ տաք մայրի և հողեղեն վետիվերը ամրացնում են բույրը՝ ստեղծելով բարդ կանաչ բույր, որը և՛ թարմ է, և՛ չափազանց խորը:",
      top: ["Թզի տերև", "Կանաչ հյութ", "Բերգամոտ"],
      heart: ["Սև թուզ", "Կոկոսի կաթ", "Իրիս"],
      base: ["Մայրի", "Վետիվեր", "Տոնկա հատիկ"]
    },
    "vetiver-blanc": {
      tagline: "Դասական Հայիթյան վետիվերի թարմ, մաքուր և առույգացնող մոտեցում:",
      description: "Vétiver Blanc-ը մաքրում է վետիվերի արմատն իր սովորական ծխոտությունից՝ փոխարենը կենտրոնանալով դրա վառ, թուրինջանման ասպեկտների վրա: Համադրված ներոլիի և սպիտակ մուշկի հպման հետ՝ սա կատարյալ հարմարեցված խրթխրթան սպիտակ վերնաշապիկի հոտառական համարժեքն է:",
      top: ["Թուրինջ", "Ներոլի", "Բերգամոտ"],
      heart: ["Հայիթյան վետիվեր", "Նարնջի ծաղիկ", "Վարդագույն պղպեղ"],
      base: ["Սպիտակ մուշկ", "Մայրի", "Ամբրոքսան"]
    },
    "rose-epicee": {
      tagline: "Կրակոտ, ժամանակակից վարդ՝ փաթաթված զաֆրանով և մանրացված սև պղպեղով:",
      description: "Rose Épicée-ն վերցնում է դասական դամասկոսյան վարդը և կրակի է տալիս այն: Զաֆրանով և սև պղպեղով համեմված՝ այն շրջանցում է ավանդական ծաղիկների փոշոտ ռոմանտիկան՝ փոխարենը մատուցելով կծու, վստահ և միանգամայն ժամանակակից արտահայտություն:",
      top: ["Զաֆրան", "Սև պղպեղ", "Սալոր"],
      heart: ["Դամասկոսյան վարդ", "Պաչուլի", "Մեխակ"],
      base: ["Ուդ", "Կաշի", "Վանիլ"]
    },
    "musc-invisible": {
      tagline: "Վերջնական «քո մաշկը, բայց ավելի լավ» բույր, փափուկ և մտերմիկ:",
      description: "Musc Invisible-ը նախագծված է մաքուր, տաք մաշկի բույրը ընդօրինակելու համար: Այն անհավանական նուրբ է՝ հիմնվելով սինթետիկ մուշկերի, ամբրետտայի սերմի և տանձի շշուկի բարդ ակորդի վրա՝ ստեղծելով բույր, որը համընդհանուր շոյող և անվերջ հարմարավետ է:",
      top: ["Ամբրետտայի սերմ", "Տանձ", "Ալդեհիդներ"],
      heart: ["Սպիտակ մուշկ", "Հասմիկի թերթիկներ", "Բամբակ"],
      base: ["Կաշմերան", "Սպիտակ փայտեր", "Iso E Super"]
    },
    "oud-absolu": {
      tagline: "Հազվագյուտ ագարի փայտի և մութ խնկի հիպնոտիկ, ինտենսիվ թորում:",
      description: "Oud Absolu-ն թույլերի համար չէ: Դա մութ անտառների հզոր, անզիջում ուսումնասիրություն է: Ներառելով կայուն աղբյուրներից ստացված կամբոջական ագարի փայտ՝ այն հարուստ է, ծխագույն և փոքր-ինչ բժշկական՝ 24 ժամվա ընթացքում փափկելով թավշյա ամբրայի հիմքում:",
      top: ["Խունկ", "Սև պղպեղ", "Էլեմի"],
      heart: ["Կամբոջական ուդ", "Ցիպրիոլ", "Լաբդանում"],
      base: ["Ամբրա", "Պաչուլի", "Մութ մուշկ"]
    },
    "neroli-portofino": {
      tagline: "Արևով ողողված ցիտրուս և սպիտակ ծաղիկներ՝ որսալով իտալական ափը:",
      description: "Néroli Riviera-ն շշալցված արևի լույս է: Այն կատարելապես հավասարակշռում է իտալական կիտրոնի և դառը նարնջի տտիպ խայթոցը ներոլիի օճառային, կանաչ քաղցրության հետ: Հիմքում ամբրայի հպումն ապահովում է, որ այս ամառային բույրը երկար պահպանվի մայրամուտից հետո:",
      top: ["Իտալական կիտրոն", "Դառը նարինջ", "Բերգամոտ"],
      heart: ["Ներոլի", "Նարնջի ծաղիկ", "Լավանդա"],
      base: ["Ամբրա", "Ռոզմարին", "Մուշկ"]
    }
  },
  ru: {
    "santal-01": {
      tagline: "Дымная, притягательная композиция из австралийского сандала, кардамона и кожи.",
      description: "Santal N°01 — фирменное творение. Передает первозданную элегантность австралийской пустыни под полуночным небом. Теплый, сухой и чувственный, окутывает уютной аурой кожи, амбры и специй.",
      top: ["Кардамон", "Ирис", "Фиалка"],
      heart: ["Сандал", "Вирджинский кедр", "Папирус"],
      base: ["Кожа", "Амбра", "Мускус"]
    },
    "fleur-cerisier": {
      tagline: "Нежный, воздушный танец цветущей вишни, белого чая и мягкого кашемирового мускуса.",
      description: "Fleur de Cerisier — поэтическая интерпретация весны в Киото. Запечатлев мимолетную красоту цветов вишни, кружащихся на теплом ветру, этот аромат открывается водяными нотами.",
      top: ["Бергамот", "Белый чай", "Груша"],
      heart: ["Цветущая вишня", "Французская роза", "Жасмин"],
      base: ["Кашемировый мускус", "Сандал", "Белая амбра"]
    },
    "agrumes-frais": {
      tagline: "Наполненный солнцем взрыв сицилийского бергамота, зеленого мандарина и соленого морского воздуха.",
      description: "Agrumes Frais — дань уважения залитым солнцем утесам побережья Амальфи. Яркий, искрящийся и освежающий, он воссоздает ощущение утреннего бриза в цитрусовом саду.",
      top: ["Сицилийский бергамот", "Зеленый мандарин", "Лимонная цедра"],
      heart: ["Аккорд морской соли", "Нероли", "Базилик"],
      base: ["Гаитянский ветивер", "Белая амбра", "Кедр"]
    },
    "ambre-chaud": {
      tagline: "Роскошное бархатное одеяло из золотой амбры, теплой ванили и пряностей.",
      description: "Ambre Chaud — интенсивный, роскошный аромат, созданный для холодных месяцев и интимных вечеров. Он окутывает кожу теплым объятием амбры и сладкой темной ванили.",
      top: ["Мускатный орех", "Кориандр", "Корица"],
      heart: ["Золотая амбра", "Лабданум", "Пачули"],
      base: ["Стручок ванили", "Табачный лист", "Сиамский бензоин"]
    },
    "figue-noire": {
      tagline: "Темная, зеленая интерпретация спелого инжира под средиземноморским солнцем.",
      description: "Figue Noire открывается всплеском хрустящих фиговых листьев, быстро раскрывая темную джемовую сладость самого фрукта. Усаживаясь, теплый кедр и землистый ветивер закрепляют аромат, создавая сложный зеленый парфюм, одновременно свежий и глубокий.",
      top: ["Фиговый лист", "Зеленый сок", "Бергамот"],
      heart: ["Черный инжир", "Кокосовое молоко", "Ирис"],
      base: ["Кедр", "Ветивер", "Бобы тонка"]
    },
    "vetiver-blanc": {
      tagline: "Хрустящий, чистый и бодряще свежий взгляд на классический гаитянский ветивер.",
      description: "Vétiver Blanc лишает корень ветивера его обычной дымности, сосредотачиваясь вместо этого на его ярких, грейпфрутовых гранях. В сочетании с нероли и легким прикосновением белого мускуса, это ольфакторный эквивалент идеально сшитой белой рубашки.",
      top: ["Грейпфрут", "Нероли", "Бергамот"],
      heart: ["Гаитянский ветивер", "Цветок апельсина", "Розовый перец"],
      base: ["Белый мускус", "Кедр", "Амброксан"]
    },
    "rose-epicee": {
      tagline: "Огненная, современная роза, окутанная шафраном и толченым черным перцем.",
      description: "Rose Épicée берет классическую дамасскую розу и поджигает ее. Приправленный шафраном и черным перцем, он обходит пудровую романтику традиционных цветочных ароматов, чтобы вместо этого сделать пряное, уверенное и абсолютно современное заявление.",
      top: ["Шафран", "Черный перец", "Слива"],
      heart: ["Дамасская роза", "Пачули", "Гвоздика"],
      base: ["Уд", "Кожа", "Ваниль"]
    },
    "musc-invisible": {
      tagline: "Идеальный аромат «ваша кожа, только лучше», мягкий и интимный.",
      description: "Musc Invisible создан, чтобы имитировать запах чистой, теплой кожи. Он невероятно деликатен, полагаясь на сложный аккорд синтетических мускусов, семян амбретты и шепот груши, создавая аромат, который универсально приятен и бесконечно уютен.",
      top: ["Семена амбретты", "Груша", "Альдегиды"],
      heart: ["Белый мускус", "Лепестки жасмина", "Хлопок"],
      base: ["Кашмеран", "Белое дерево", "Iso E Super"]
    },
    "oud-absolu": {
      tagline: "Гипнотическая, интенсивная дистилляция редкого агарового дерева и темного ладана.",
      description: "Oud Absolu не для слабонервных. Это мощное, бескомпромиссное исследование самых темных деревьев. С использованием камбоджийского уда, полученного из устойчивых источников, он богат, дымен и слегка лечебен, смягчаясь в бархатную амбровую базу в течение 24 часов.",
      top: ["Ладан", "Черный перец", "Элеми"],
      heart: ["Камбоджийский уд", "Циприол", "Лабданум"],
      base: ["Амбра", "Пачули", "Темный мускус"]
    },
    "neroli-portofino": {
      tagline: "Залитые солнцем цитрусовые и белые цветы, передающие дух итальянского побережья.",
      description: "Néroli Riviera — это солнце во флаконе. Он идеально уравновешивает терпкую горечь итальянского лимона и горького апельсина с мыльной, зеленой сладостью нероли. Прикосновение амбры в базе гарантирует, что этот летний аромат сохранится надолго после заката.",
      top: ["Итальянский лимон", "Горький апельсин", "Бергамот"],
      heart: ["Нероли", "Цветок апельсина", "Лаванда"],
      base: ["Амбра", "Розмарин", "Мускус"]
    }
  },
  en: {
    "santal-01": {
      tagline: "A smoky, magnetic signature of Australian sandalwood, cardamom, and leather.",
      description: "Santal N°01 is our signature creation. It captures the raw elegance of the Australian outback under a midnight sky. Warm, dry, and sensuous, it envelopes the wearer in a comforting yet mysterious aura of leather, amber, and spice, drying down to an creamy, milky woodiness.",
      top: ["Cardamom", "Iris", "Violet"],
      heart: ["Sandalwood", "Virginia Cedar", "Papyrus"],
      base: ["Leather", "Amber", "Musk"]
    },
    "fleur-cerisier": {
      tagline: "A delicate, airy dance of cherry blossom, white tea, and soft cashmere musk.",
      description: "Fleur de Cerisier is a poetic interpretation of springtime in Kyoto. Capturing the fleeting beauty of cherry blossoms drifting on a warm breeze, this fragrance opens with bright, watery notes before settling into a soft, powdery floral heart, anchored by a comforting base of clean cashmere wood and white musk.",
      top: ["Bergamot", "White Tea", "Pear"],
      heart: ["Cherry Blossom", "French Rose", "Jasmine"],
      base: ["Cashmere Musk", "Sandalwood", "White Amber"]
    },
    "agrumes-frais": {
      tagline: "A sun-drenched explosion of Sicilian bergamot, green mandarin, and salted sea air.",
      description: "Agrumes Frais is a tribute to the sun-soaked cliffs of the Amalfi coast. Vibrant, sparkling, and refreshing, it evokes the crisp feeling of a morning breeze rustling through citrus groves. Salty marine accords balance the bright, zesty top notes, while clean vetiver and white amber give it a sophisticated, lasting structure.",
      top: ["Sicilian Bergamot", "Green Mandarin", "Lemon Zest"],
      heart: ["Sea Salt Accord", "Neroli", "Basil"],
      base: ["Haitian Vetiver", "White Amber", "Cedarwood"]
    },
    "ambre-chaud": {
      tagline: "An opulent, velvet blanket of golden amber, warm vanilla bean, and toasted spices.",
      description: "Ambre Chaud is an intense, luxurious fragrance designed for the colder months and intimate evenings. It wraps the skin in a warm, resinous embrace of amber and sweet, dark vanilla bean, elevated by a sophisticated blend of cardamon and nutmeg, and resting on a long-lasting base of tobacco leaf and rich labdanum.",
      top: ["Nutmeg", "Coriander", "Cinnamon"],
      heart: ["Golden Amber", "Labdanum", "Patchouli"],
      base: ["Vanilla Bean", "Tobacco Leaf", "Siam Benzoin"]
    },
    "figue-noire": {
      tagline: "A dark, green interpretation of ripe figs under the Mediterranean sun.",
      description: "Figue Noire opens with a burst of crisp fig leaves, quickly revealing the dark, jammy sweetness of the fruit itself. As it settles, warm cedarwood and earthy vetiver anchor the scent, creating a sophisticated green fragrance that feels both fresh and profoundly deep.",
      top: ["Fig Leaf", "Green Sap", "Bergamot"],
      heart: ["Black Fig", "Coconut Milk", "Iris"],
      base: ["Cedarwood", "Vetiver", "Tonka Bean"]
    },
    "vetiver-blanc": {
      tagline: "A crisp, clean, and bracingly fresh take on classic Haitian vetiver.",
      description: "Vétiver Blanc strips the vetiver root of its usual smokiness, focusing instead on its bright, grapefruit-like facets. Paired with neroli and a touch of white musk, it's the olfactive equivalent of a perfectly tailored crisp white shirt.",
      top: ["Grapefruit", "Neroli", "Bergamot"],
      heart: ["Haitian Vetiver", "Orange Blossom", "Pink Pepper"],
      base: ["White Musk", "Cedar", "Ambroxan"]
    },
    "rose-epicee": {
      tagline: "A fiery, modern rose wrapped in saffron and crushed black pepper.",
      description: "Rose Épicée takes the classic Damask rose and sets it alight. Spiked with saffron and black pepper, it bypasses the powdery romance of traditional florals to deliver a spicy, confident, and utterly contemporary statement.",
      top: ["Saffron", "Black Pepper", "Plum"],
      heart: ["Damask Rose", "Patchouli", "Clove"],
      base: ["Oud", "Leather", "Vanilla"]
    },
    "musc-invisible": {
      tagline: "The ultimate 'your skin but better' fragrance, soft and intimate.",
      description: "Musc Invisible is designed to mimic the scent of clean, warm skin. It is incredibly delicate, relying on a complex accord of synthetic musks, ambrette seed, and a whisper of pear to create a fragrance that is universally flattering and endlessly comforting.",
      top: ["Ambrette Seed", "Pear", "Aldehydes"],
      heart: ["White Musk", "Jasmine Petals", "Cotton"],
      base: ["Cashmeran", "White Woods", "Iso E Super"]
    },
    "oud-absolu": {
      tagline: "A hypnotic, intense distillation of rare agarwood and dark incense.",
      description: "Oud Absolu is not for the faint of heart. It is a powerful, uncompromising exploration of the darkest woods. Featuring sustainably sourced Cambodian agarwood, it is rich, smoky, and slightly medicinal, softening into a velvety amber base over 24 hours.",
      top: ["Incense", "Black Pepper", "Elemi"],
      heart: ["Cambodian Oud", "Cypriol", "Labdanum"],
      base: ["Amber", "Patchouli", "Dark Musk"]
    },
    "neroli-portofino": {
      tagline: "Sun-drenched citrus and white florals capturing the Italian coast.",
      description: "Néroli Riviera is bottled sunshine. It perfectly balances the tart bite of Italian lemon and bitter orange with the soapy, green sweetness of neroli. A touch of amber in the base ensures this summery scent lingers long after sunset.",
      top: ["Italian Lemon", "Bitter Orange", "Bergamot"],
      heart: ["Neroli", "Orange Blossom", "Lavender"],
      base: ["Amber", "Rosemary", "Musk"]
    }
  }
};

// EmailJS Global Init
if (typeof emailjs !== 'undefined') {
  emailjs.init('bYE8lSm0rcSBnWLKb');
}

// Contact form submission via EmailJS
  const contactForm = document.getElementById('contact-us-form');
  if (contactForm) {
    const EMAILJS_SERVICE_ID = 'service_58z9fml';
    const EMAILJS_TEMPLATE_ID = 'template_0ej17sd';

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;

      // Get form values
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerText = AppState.language === 'am' ? '\u0548\u0552\u0542\u0531\u054C\u053F\u054E\u0548\u0552\u0544 \u0537...' :
                            AppState.language === 'ru' ? '\u041E\u0422\u041F\u0420\u0410\u0412\u041A\u0410...' : 'SENDING...';

      try {
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS not loaded');
        }

        // Send contact email to NOVA
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: 'novagiftshoparmenia@gmail.com'
        });

        // Success
        let successMsg = 'THANK YOU FOR CONTACTING NOVA. OUR CONCIERGE WILL REPLY WITHIN 24 HOURS.';
        if (AppState.language === 'am') {
          successMsg = '\u0547\u0546\u0548\u054c\u0540\u0531\u053f\u0531\u053c\u0548\u0552\u0539\u0545\u0548\u0552\u0546 NOVA-\u053b\u0546 \u0534\u053b\u0544\u0535\u053c\u0548\u0552 \u0540\u0531\u0544\u0531\u0550\u0589 \u0544\u0535\u054c \u053f\u0548\u0546\u054d\u0545\u0535\u054c\u053e\u0538 \u053f\u054a\u0531\u054f\u0531\u054d\u053d\u0531\u0546\u053b 24 \u053a\u0531\u0544\u054e\u0531 \u0538\u0546\u0539\u0531\u0551\u0554\u0548\u0552\u0544\u0589';
        } else if (AppState.language === 'ru') {
          successMsg = '\u0421\u041f\u0410\u0421\u0418\u0411\u041e \u0417\u0410 \u041e\u0411\u0420\u0410\u0429\u0415\u041d\u0418\u0415 \u0412 NOVA. \u041d\u0410\u0428 \u041a\u041e\u041d\u0421\u042c\u0415\u0420\u0416 \u041e\u0422\u0412\u0415\u0422\u0418\u0422 \u0412 \u0422\u0415\u0427\u0415\u041d\u0418\u0415 24 \u0427\u0410\u0421\u041e\u0412.';
        }
        showToast(successMsg);
        contactForm.reset();
      } catch (error) {
        console.error('EmailJS Error:', error);
        let errorMsg = 'SORRY, SOMETHING WENT WRONG. PLEASE TRY AGAIN OR EMAIL US DIRECTLY.';
        if (AppState.language === 'am') {
          errorMsg = '\u0546\u0535\u054c\u0548\u0542\u0548\u0552\u0539\u0545\u0548\u0552\u0546 \u0540\u0531\u0545\u0531\u054c\u0589 \u053d\u0546\u0534\u054c\u0565\u056c \u0553\u0578\u0580\u0571\u0565\u056c \u056f\u0580\u056f\u056b\u0576\u0589';
        } else if (AppState.language === 'ru') {
          errorMsg = '\u0418\u0417\u0412\u0418\u041d\u0418\u0422\u0415, \u041f\u0420\u041e\u0418\u0417\u041e\u0428\u041b\u0410 \u041e\u0428\u0418\u0411\u041a\u0410. \u041f\u041e\u041f\u0420\u041e\u0411\u0423\u0419\u0422\u0415 \u0415\u0429\u0401 \u0420\u0410\u0417.';
        }
        showToast(errorMsg);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }
    });
  }

// DEFAULT MOCK INSTAGRAM FEED SEED DATA
const DEFAULT_INSTAGRAM_POSTS = [
  {
    id: "insta-post-1",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Grasse, France",
    caption: "Santal N°01 captures the raw elegance of the Australian outback. Distilled in copper columns. ✨",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_1.webp"],
    likes: 420
  },
  {
    id: "insta-post-2",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Kyoto, Japan",
    caption: "A delicate dance of cherry blossom and soft cashmere musk. Fleur de Cerisier is Kyoto in springtime. 🌸",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_2.webp"],
    likes: 315
  },
  {
    id: "insta-post-3",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Amalfi, Italy",
    caption: "A sun-drenched explosion of Sicilian bergamot and salted sea air. Agrumes Frais in hand. 🍋",
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_3.webp"],
    likes: 512
  },
  {
    id: "insta-post-4",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Paris, France",
    caption: "Give the gift of olfactory poetry. Our signature discovery set wrapped in sustainable linen. 🎁",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_4.webp"],
    likes: 289
  },
  {
    id: "insta-post-5",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "London, United Kingdom",
    caption: "Pure botanical ingredients gathered from sustainable sources worldwide. Raw luxury. 🌿",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_5.webp"],
    likes: 340
  },
  {
    id: "insta-post-6",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Santorini, Greece",
    caption: "An opulent, velvet blanket of golden amber and toasted spices at the golden hour. 🌅",
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_6.webp"],
    likes: 476
  },
  {
    id: "insta-post-7",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "Milan, Italy",
    caption: "Every spray is a living composition that evolves on the skin over several hours. 💫",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_7.webp"],
    likes: 612
  },
  {
    id: "insta-post-8",
    username: "nova_giftshop",
    avatar: "assets/Favicon.svg",
    location: "St. Tropez, France",
    caption: "Bracingly fresh Vétiver Blanc. The olfactive equivalent of a tailored white shirt. 🌊",
    date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    images: ["assets/insta_8.webp"],
    likes: 395
  }
];

// Helper: add computed getters to product objects
function addProductGetters(productsArray) {
  productsArray.forEach(p => {
    // Only add if not already a getter
    const catDesc = Object.getOwnPropertyDescriptor(p, 'category');
    if (!catDesc || typeof catDesc.get !== 'function') {
      Object.defineProperty(p, 'category', {
        get() {
          const fam = window.GLOBAL_ATTRIBUTES.scent_families[p.scent_family];
          return fam ? fam.label.en : "";
        },
        configurable: true,
        enumerable: true
      });
    }
    const genDesc = Object.getOwnPropertyDescriptor(p, 'gender');
    if (!genDesc || typeof genDesc.get !== 'function') {
      Object.defineProperty(p, 'gender', {
        get() {
          const g = window.GLOBAL_ATTRIBUTES.genders[p.gender_id];
          return g ? g.label.en : "";
        },
        configurable: true,
        enumerable: true
      });
    }
  });
}

// Price range max for AMD currency (500,000 AMD)
const PRICE_RANGE_MAX = 500000;

// APP STATE
const AppState = {
  products: [], // Empty by default; loaded from Firestore on init (DO NOT pre-fill with INITIAL_PRODUCTS)
  cart: [],
  wishlist: [], // Wishlist product IDs
  instagramPosts: [...DEFAULT_INSTAGRAM_POSTS], // Will be overwritten by Firestore data on init
  currentRoute: 'home', // 'home', 'shop', 'checkout', 'admin', 'my-account'
  language: localStorage.getItem('nova_lang_choice') || 'am', // Default language is Armenian ('am')
  filters: {
    category: 'all',
    search: '',
    sort: 'default',
    brand: '',
    gender: '',
    tag: '',
    scent_families: [],
    genders: [],
    vibes: [],
    sizes: [],
    brands: [],
    priceRange: { min: 0, max: PRICE_RANGE_MAX }
  },
  selectedProduct: null,
  selectedSize: '100ml', // default size selection
  customer: {
    firstName: 'Norayr',
    lastName: 'Najaryan',
    email: 'norayrnajaryann@gmail.com',
    billing: {
      street: '221B Baker St',
      city: 'London',
      zip: 'NW1 6XE'
    },
    pastPurchases: [],
    discoverySamples: [],
    orders: []
  },
  outOfStockNotifications: []
};

window.saveProductsToStorage = async function() {
  console.log('[NOVA] saveProductsToStorage called with', AppState.products.length, 'products');
  await NovaSanity.saveAllProducts(AppState.products);
};

let TempMobileFilters = {};

function toggleFilterValue(arr, val) {
  const idx = arr.indexOf(val);
  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(val);
  }
}

// HELPERS FOR LOCALIZED STRINGS
function getTranslatedCategory(category) {
  const catMap = {
    Woody: { am: "Փայտային", ru: "Древесные", en: "Woody" },
    Floral: { am: "Ծաղկային", ru: "Цветочные", en: "Floral" },
    Citrus: { am: "Ցիտրուսային", ru: "Цитрусовые", en: "Citrus" },
    Amber: { am: "Ամբրային", ru: "Амбровые", en: "Amber" }
  };
  const key = category.trim();
  if (catMap[key]) {
    return catMap[key][AppState.language] || category;
  }
  return category;
}

function getTranslatedProduct(productId) {
  if (PRODUCT_TRANSLATIONS[AppState.language]) {
    return PRODUCT_TRANSLATIONS[AppState.language][productId];
  }
  return null;
}

// DOM CACHE
const DOM = {
  // Navigation
  navLinks: document.querySelectorAll('[data-route]'),
  routeViews: {
    home: document.getElementById('view-home'),
    shop: document.getElementById('view-shop'),
    checkout: document.getElementById('view-checkout'),
    admin: document.getElementById('view-admin'),
    about: document.getElementById('view-about'),
    contact: document.getElementById('view-contact'),
    'policy-shipping': document.getElementById('view-policy-shipping'),
    'policy-privacy': document.getElementById('view-policy-privacy'),
    wishlist: document.getElementById('view-wishlist'),
    'my-account': document.getElementById('view-my-account')
  },

  // Shop Elements
  shopProductsGrid: document.getElementById('shop-products-grid'),
  featuredProductsGrid: document.getElementById('featured-products-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  sortSelect: document.getElementById('sort-select'),
  searchInput: document.getElementById('search-input'),
  searchContainer: document.querySelector('.search-container'),

  // Cart Drawer Elements
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartCountBadge: document.getElementById('cart-count-badge'),

  // Wishlist Drawer Elements
  wishlistDrawerOverlay: document.getElementById('wishlist-drawer-overlay'),
  wishlistItemsContainer: document.getElementById('wishlist-items-container'),
  wishlistCountBadge: document.getElementById('wishlist-count-badge'),
  headerWishlistIcon: document.getElementById('header-wishlist-icon'),
  wishlistHeaderBtn: document.getElementById('wishlist-toggle-btn'),

  // Product Detail Modal
  modalOverlay: document.getElementById('modal-overlay'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  modalWishlistBtn: document.getElementById('modal-wishlist-btn'),

  // Toast
  toast: document.getElementById('toast-notification')
};

// INITIALIZATION
window.addEventListener('DOMContentLoaded', async () => {
  // --- FIREBASE: Load all shared data from Firestore before rendering ---
  try {
    await NovaDB.init();
    console.log('[NOVA] Firestore data loaded successfully');

    // Load products from Sanity CMS
    const sanityProducts = await NovaSanity.init();
    console.log('[NOVA] Sanity products:', sanityProducts ? sanityProducts.length : 'null');
    AppState.products = sanityProducts || [];
    addProductGetters(AppState.products);
    console.log('[NOVA] Loaded', AppState.products.length, 'products from Sanity CMS');

    // ONE-TIME MIGRATION: Fix all MANCERA product brands
    let brandFixCount = 0;
    AppState.products.forEach(p => {
      if (p.name && p.name.toUpperCase().includes('MANCERA') && p.brand !== 'MANCERA') {
        console.log(`[NOVA MIGRATION] Fixing brand: "${p.name}" ${p.brand} → MANCERA`);
        p.brand = 'MANCERA';
        brandFixCount++;
      }
    });
    if (brandFixCount > 0) {
      await saveProductsToStorage();
      console.log(`[NOVA MIGRATION] Fixed brand for ${brandFixCount} MANCERA product(s)`);
    }

    // Load orders from Firestore
    const firestoreOrders = NovaDB.getOrders();
    if (firestoreOrders) {
      WooCommerceAdmin.orders = firestoreOrders;
    }

    // Load Instagram posts from Firestore
    const firestoreInsta = NovaDB.getInstagramPosts();
    if (firestoreInsta && firestoreInsta.length > 0) {
      AppState.instagramPosts = firestoreInsta;
    } else {
      NovaDB.saveInstagramPosts(DEFAULT_INSTAGRAM_POSTS);
    }

    // Load product translations from Sanity (stored per-product)
    const sanityTranslations = NovaSanity.getProductTranslations();
    if (sanityTranslations) {
      // Merge saved translations into PRODUCT_TRANSLATIONS
      ['am', 'ru'].forEach(lang => {
        if (sanityTranslations[lang]) {
          if (!PRODUCT_TRANSLATIONS[lang]) PRODUCT_TRANSLATIONS[lang] = {};
          Object.assign(PRODUCT_TRANSLATIONS[lang], sanityTranslations[lang]);
        }
      });
      console.log('[NOVA] Loaded product translations from Sanity');
    }
  } catch (e) {
    console.warn('[NOVA] Firestore init failed, using defaults:', e);
  }

  const isProductPage = window.location.pathname.endsWith('/product') || window.location.pathname.endsWith('/product.html');
  if (isProductPage) {
    initProductPage();
  } else {
    initRouter();
  }
  initScrollHeader();
  initMegaMenu();
  initBrandsMegaMenu();
  initEventListeners();
  loadCartFromStorage();
  loadWishlistFromStorage();

  // Initialize default language
  changeLanguage(AppState.language);
});

// LANGUAGE CHANGE ACTION
window.changeLanguage = function (lang) {
  AppState.language = lang;
  localStorage.setItem('nova_lang_choice', lang);

  // Update active state on language dropdown items
  document.querySelectorAll('.lang-dropdown-item').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  // Update active state on lang-btn buttons (product.html)
  document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  // Update the dropdown toggle text (all headers)
  document.querySelectorAll('.lang-dropdown-current').forEach(el => {
    el.textContent = lang.toUpperCase();
  });

  // Loop through all data-trans elements and translate them
  document.querySelectorAll('[data-trans]').forEach(el => {
    const key = el.getAttribute('data-trans');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Loop through all data-trans-placeholder elements and translate them
  document.querySelectorAll('[data-trans-placeholder]').forEach(el => {
    const key = el.getAttribute('data-trans-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Translate placeholders and other dynamic inputs
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = TRANSLATIONS[lang]['search_placeholder'] || 'Search olfactory note...';
  }
  const floatingSearchInput = document.getElementById('floating-search-input');
  if (floatingSearchInput) {
    floatingSearchInput.placeholder = TRANSLATIONS[lang]['search_placeholder'] || 'Search olfactory note...';
  }

  const newsletterInput = document.querySelector('.newsletter-input');
  if (newsletterInput) {
    newsletterInput.placeholder = TRANSLATIONS[lang]['newsletter_placeholder'] || 'Your email address';
  }

  const staffInput = document.getElementById('new-staff-name');
  if (staffInput) {
    staffInput.placeholder = TRANSLATIONS[lang]['admin_staff_placeholder'] || 'Name (e.g. Elena)';
  }

  // Re-render components that are dynamically built
  renderFeaturedProducts();
  if (typeof renderBrandSlider === 'function') renderBrandSlider();
  if (typeof renderFilterWidgets === 'function') {
    renderFilterWidgets('desktop-sidebar-filters', false);
  }
  renderShop();
  updateCartUI();
  updateWishlistUI();
  initMegaMenu(); // Re-seed mega menu elements so their product names/taglines translate!
  initBrandsMegaMenu();

  // Update header dropdown greeting with actual customer name
  document.querySelectorAll('[data-trans="hello_user"]').forEach(el => {
    el.innerText = lang === 'am' ? `Ողջույն, ${AppState.customer.firstName}` :
                   lang === 'ru' ? `Привет, ${AppState.customer.firstName}` :
                   `Hello, ${AppState.customer.firstName}`;
  });

  // Translate plugin buttons dynamically based on their state (class)
  const pdfBtn = document.getElementById('plugin-btn-pdf');
  if (pdfBtn) {
    if (pdfBtn.classList.contains('btn-secondary')) {
      pdfBtn.innerText = lang === 'am' ? "Ապատեղադրել" : lang === 'ru' ? "Удалить" : "Uninstall";
    } else {
      pdfBtn.innerText = lang === 'am' ? "Տեղադրել" : lang === 'ru' ? "Установить" : "Install";
    }
  }
  const subsBtn = document.getElementById('plugin-btn-subs');
  if (subsBtn) {
    if (subsBtn.classList.contains('btn-secondary')) {
      subsBtn.innerText = lang === 'am' ? "Ապատեղադրել" : lang === 'ru' ? "Удалить" : "Uninstall";
    } else {
      subsBtn.innerText = lang === 'am' ? "Տեղադրել" : lang === 'ru' ? "Установить" : "Install";
    }
  }

  // If we are on checkout, refresh order summary translation
  if (AppState.currentRoute === 'checkout') {
    renderCheckoutPage();
  }

  // If we are on customer account page, refresh it to translate empty states and welcome text
  if (AppState.currentRoute === 'my-account') {
    renderMyAccount();
  }

  // If we are on admin dashboard, refresh it to translate stats grids, tables, logs, etc.
  if (AppState.currentRoute === 'admin') {
    refreshAdminDashboard();
  }

  // If we are on wishlist, refresh wishlist page translation
  if (AppState.currentRoute === 'wishlist') {
    renderWishlistPage();
  }

  // If we are on product page, refresh product details translation dynamically
  const isProductPage = window.location.pathname.endsWith('/product') || window.location.pathname.endsWith('/product.html');
  if (isProductPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    if (productId) {
      renderProductPage(productId);
    }
  }

  // Render Instagram dynamic feed on language change
  renderInstagramFeed();
};


// ROUTING SYSTEM (Hash-based)
function initRouter() {
  const handleRouteChange = () => {
    const hash = window.location.hash || '#/home';
    let route = hash.replace('#/', '');

    // Fallback if route does not exist
    if (!DOM.routeViews[route]) {
      route = 'home';
    }

    AppState.currentRoute = route;

    // Toggle View Sections
    Object.keys(DOM.routeViews).forEach(key => {
      if (key === route) {
        DOM.routeViews[key].classList.remove('hidden');
      } else {
        DOM.routeViews[key].classList.add('hidden');
      }
    });

    // Update Nav Active States
    DOM.navLinks.forEach(link => {
      if (link.getAttribute('href') === `#/${route}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Toggle header dark mode for non-home pages
    const mainHeader = document.getElementById('main-header');
    const headerLogo = mainHeader ? mainHeader.querySelector('.logo-img') : null;
    if (mainHeader) {
      if (route === 'home') {
        mainHeader.classList.remove('header-dark');
        if (headerLogo) headerLogo.src = 'assets/logo-light-transparent.png';
      } else {
        mainHeader.classList.add('header-dark');
        if (headerLogo) headerLogo.src = 'assets/logo-dark-transparent.png';
      }
    }

    // If entering admin dashboard, verify session and redirect if needed
    if (route === 'admin') {
      checkAdminSession();
    }

    // If entering wishlist page, populate it
    if (route === 'wishlist') {
      renderWishlistPage();
    }

    // If entering customer account dashboard, refresh it
    if (route === 'my-account') {
      renderMyAccount();
    }

    // If entering shop page, populate sidebar filters
    if (route === 'shop') {
      if (typeof renderFilterWidgets === 'function') {
        renderFilterWidgets('desktop-sidebar-filters', false);
      }
      renderShop();
    }
  };

  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange(); // Trigger on initial load
}

// SCROLL HEADER TRANSITION SYSTEM
function initScrollHeader() {
  const floatingHeader = document.getElementById('floating-header');
  if (!floatingHeader) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 400) {
      floatingHeader.classList.add('visible');
    } else if (currentScroll < 100) {
      floatingHeader.classList.remove('visible');
    }
  });
}

// PRODUCTS MEGA MENU HOVER SYSTEM
function initMegaMenu() {
  // Initialize for both main header and floating header
  _initMegaMenuFor('#mega-categories', 'mega-products-panel');
  _initMegaMenuFor('#floating-mega-categories', 'floating-mega-products-panel');
}

function _initMegaMenuFor(categoriesSelector, panelId) {
  const container = document.querySelector(categoriesSelector);
  const panel = document.getElementById(panelId);
  if (!container || !panel) return;

  const catItems = container.querySelectorAll('.mega-cat-item');

  const renderMegaCategory = (categoryName) => {
    panel.innerHTML = '';

    let filtered = [];
    if (categoryName === 'New' || categoryName === 'Gift') {
      filtered = AppState.products.filter(p => p.tags && p.tags.includes(categoryName));
    } else if (categoryName === 'Men' || categoryName === 'Women') {
      filtered = AppState.products.filter(p => p.gender === categoryName || p.gender === 'Unisex');
    } else {
      filtered = AppState.products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
    }

    if (filtered.length === 0) {
      panel.innerHTML = `<div style="grid-column: 1/-1; color: var(--color-medium-gray); font-size: 0.8rem;">No products.</div>`;
      return;
    }

    filtered.forEach(prod => {
      const item = document.createElement('div');
      item.className = 'mega-product-item';
      item.onclick = () => {
        openProductModal(prod.id);
      };
      item.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" class="mega-product-thumb">
        <div class="mega-product-info">
          <span class="mega-product-name">${prod.name}</span>
        </div>
      `;
      panel.appendChild(item);
    });
  };

  catItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const cat = item.getAttribute('data-mega-cat');
      renderMegaCategory(cat);
    });

    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-mega-cat');
      if (cat === 'New' || cat === 'Gift') {
        applyPresetFilter('tag', cat);
      } else if (cat === 'Men' || cat === 'Women') {
        applyPresetFilter('gender', cat);
      } else {
        applyPresetFilter('category', cat);
      }
    });
  });

  // Initial populate with Woody notes
  renderMegaCategory('Woody');
}

// BRANDS MEGA MENU HOVER SYSTEM
function initBrandsMegaMenu() {
  // Extract unique brands from actual products (skip empty)
  const brandSet = new Set();
  AppState.products.forEach(p => {
    if (p.brand && p.brand.trim()) brandSet.add(p.brand.trim());
  });
  const allBrands = [...brandSet].sort((a, b) => {
    // Put NOVA first, then alphabetical
    if (a.toUpperCase() === 'NOVA') return -1;
    if (b.toUpperCase() === 'NOVA') return 1;
    return a.localeCompare(b);
  });

  // Populate brand items into both containers
  ['brands-mega-categories', 'floating-brands-mega-categories'].forEach(containerId => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    allBrands.forEach((brand, idx) => {
      const div = document.createElement('div');
      div.className = 'mega-cat-item' + (idx === 0 ? ' active' : '');
      div.setAttribute('data-mega-brand', brand);
      div.innerHTML = `
        <div class="mega-cat-label">
          <span>${brand}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:12px; height:12px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      `;
      container.appendChild(div);
    });
  });

  // Initialize hover/click for both main header and floating header
  _initBrandsMegaMenuFor('#brands-mega-categories', 'brands-mega-products-panel');
  _initBrandsMegaMenuFor('#floating-brands-mega-categories', 'floating-brands-mega-products-panel');
}

function _initBrandsMegaMenuFor(categoriesSelector, panelId) {
  const container = document.querySelector(categoriesSelector);
  const panel = document.getElementById(panelId);
  if (!container || !panel) return;

  const brandItems = container.querySelectorAll('.mega-cat-item');

  const renderBrandsMegaCategory = (brandName) => {
    panel.innerHTML = '';

    const filtered = AppState.products.filter(p => p.brand.toLowerCase() === brandName.toLowerCase());

    if (filtered.length === 0) {
      panel.innerHTML = `<div style="grid-column: 1/-1; color: var(--color-medium-gray); font-size: 0.8rem;">No products.</div>`;
      return;
    }

    filtered.forEach(prod => {
      const item = document.createElement('div');
      item.className = 'mega-product-item';
      item.onclick = () => {
        openProductModal(prod.id);
      };
      item.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" class="mega-product-thumb">
        <div class="mega-product-info">
          <span class="mega-product-name">${prod.name}</span>
        </div>
      `;
      panel.appendChild(item);
    });
  };

  brandItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      brandItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const brand = item.getAttribute('data-mega-brand');
      renderBrandsMegaCategory(brand);
    });

    item.addEventListener('click', () => {
      const brand = item.getAttribute('data-mega-brand');
      applyPresetFilter('brand', brand);
    });
  });

  // Initial populate with first available brand (skip NOVA)
  const firstBrandEl = [...brandItems].find(i => (i.getAttribute('data-mega-brand') || '').toUpperCase() !== 'NOVA');
  if (firstBrandEl) {
    renderBrandsMegaCategory(firstBrandEl.getAttribute('data-mega-brand'));
    brandItems.forEach(i => i.classList.remove('active'));
    firstBrandEl.classList.add('active');
  }
}

// EVENT LISTENERS SETUP
function initEventListeners() {
  // Mobile Filter Drawer Toggle triggers
  const mobileToggle = document.getElementById('mobile-filter-toggle-btn');
  const drawerOverlay = document.getElementById('filter-drawer-overlay');
  const drawerClose = document.getElementById('filter-drawer-close-btn');
  const applyBtnMobile = document.getElementById('filter-apply-btn-mobile');
  const clearBtnMobile = document.getElementById('filter-clear-btn-mobile');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      // Deep copy filters
      TempMobileFilters = JSON.parse(JSON.stringify(AppState.filters));
      renderFilterWidgets('mobile-drawer-filters', true);
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent page scroll
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', () => {
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (applyBtnMobile) {
    applyBtnMobile.addEventListener('click', () => {
      AppState.filters = JSON.parse(JSON.stringify(TempMobileFilters));
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
      renderFilterWidgets('desktop-sidebar-filters', false);
      renderShop();
    });
  }

  if (clearBtnMobile) {
    clearBtnMobile.addEventListener('click', () => {
      TempMobileFilters.scent_families = [];
      TempMobileFilters.genders = [];
      TempMobileFilters.vibes = [];
      TempMobileFilters.sizes = [];
      TempMobileFilters.brands = [];
      TempMobileFilters.priceRange = { min: 0, max: PRICE_RANGE_MAX };
      TempMobileFilters.search = '';
      renderFilterWidgets('mobile-drawer-filters', true);
    });
  }

  // Sort dropdown change
  const sortDropdown = document.getElementById('custom-sort-dropdown');
  if (sortDropdown) {
    const trigger = sortDropdown.querySelector('#sort-dropdown-trigger');
    const valueSpan = sortDropdown.querySelector('#sort-dropdown-value');
    const items = sortDropdown.querySelectorAll('.dropdown-item');

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      sortDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      sortDropdown.classList.remove('active');
    });

    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = item.getAttribute('data-value');
        const transKey = item.getAttribute('data-trans');

        AppState.filters.sort = value;

        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        valueSpan.setAttribute('data-trans', transKey);
        valueSpan.innerText = TRANSLATIONS[AppState.language][transKey] || item.innerText;

        sortDropdown.classList.remove('active');
        renderShop();
      });
    });
  }

  // Init search popup system
  initSearch();

  // Close Modal trigger
  if (DOM.modalOverlay) {
    DOM.modalOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.modalOverlay) {
        closeProductModal();
      }
    });
  }

  if (DOM.modalCloseBtn) {
    DOM.modalCloseBtn.addEventListener('click', closeProductModal);
  }

  // Cart Drawer open/close triggers
  document.getElementById('cart-toggle-btn').addEventListener('click', openCartDrawer);
  document.getElementById('cart-drawer-close').addEventListener('click', closeCartDrawer);
  DOM.cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.cartDrawerOverlay) {
      closeCartDrawer();
    }
  });

  // Wishlist Drawer open/close triggers
  if (DOM.wishlistHeaderBtn) {
    DOM.wishlistHeaderBtn.addEventListener('click', openWishlistDrawer);
  }
  const wishlistCloseBtn = document.getElementById('wishlist-drawer-close');
  if (wishlistCloseBtn) {
    wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
  }
  if (DOM.wishlistDrawerOverlay) {
    DOM.wishlistDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === DOM.wishlistDrawerOverlay) {
        closeWishlistDrawer();
      }
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input').value;
      if (email) {
        showToast("THANK YOU FOR SUBSCRIBING TO NOVA JOURNEY.");
        newsletterForm.reset();
      }
    });
  }

  // Checkout shipping change
  const shippingSelect = document.getElementById('shipping-method');
  if (shippingSelect) {
    shippingSelect.addEventListener('change', () => {
      updateCheckoutTotals();
    });
  }

  // Custom Checkout Shipping Dropdown Events
  const checkoutShipping = document.getElementById('checkout-shipping-dropdown');
  if (checkoutShipping) {
    const trigger = checkoutShipping.querySelector('#checkout-shipping-trigger');
    const valueSpan = checkoutShipping.querySelector('#checkout-shipping-value');
    const items = checkoutShipping.querySelectorAll('.dropdown-item');

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      checkoutShipping.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      checkoutShipping.classList.remove('active');
    });

    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = item.getAttribute('data-value');

        if (shippingSelect) {
          shippingSelect.value = value;
          shippingSelect.dispatchEvent(new Event('change'));
        }

        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        valueSpan.innerText = item.innerText;
        valueSpan.setAttribute('data-value', value);

        checkoutShipping.classList.remove('active');
      });
    });
  }

  // Checkout form submit
  const checkoutForm = document.getElementById('checkout-billing-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processCheckout();
    });
  }



  // Language dropdown
  const langDropdown = document.getElementById('lang-dropdown');
  const langToggle = document.getElementById('lang-dropdown-toggle');
  const floatingLangDropdown = document.getElementById('floating-lang-dropdown');
  const floatingLangToggle = document.getElementById('floating-lang-toggle');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
      if (floatingLangDropdown) floatingLangDropdown.classList.remove('open');
    });
  }
  if (floatingLangToggle && floatingLangDropdown) {
    floatingLangToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingLangDropdown.classList.toggle('open');
      if (langDropdown) langDropdown.classList.remove('open');
    });
  }
  document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove('open');
    }
    if (floatingLangDropdown && !floatingLangDropdown.contains(e.target)) {
      floatingLangDropdown.classList.remove('open');
    }
  });

  document.querySelectorAll('.lang-dropdown-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      changeLanguage(selectedLang);
      if (langDropdown) langDropdown.classList.remove('open');
      if (floatingLangDropdown) floatingLangDropdown.classList.remove('open');
      // Sync active state across both dropdowns
      document.querySelectorAll('.lang-dropdown-item').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === selectedLang);
      });
      // Sync current label text
      const label = selectedLang.toUpperCase();
      document.querySelectorAll('.lang-dropdown-current').forEach(el => el.textContent = label);
    });
  });
  // Also bind lang-btn buttons (used on product.html)
  document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      changeLanguage(selectedLang);
      // Update active states on all lang-btn elements
      document.querySelectorAll('.lang-btn[data-lang]').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });

  // Mobile Menu Drawer triggers
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', openMobileMenu);
  }
  const mobileCloseBtn = document.getElementById('mobile-menu-drawer-close');
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }
  const mobileOverlay = document.getElementById('mobile-menu-drawer-overlay');
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) {
        closeMobileMenu();
      }
    });
  }

}

// RENDER FEATURED PRODUCTS ON HOME PAGE
function renderFeaturedProducts() {
  renderSliders();
  if (!DOM.featuredProductsGrid) return;
  DOM.featuredProductsGrid.innerHTML = '';

  const featured = AppState.products.filter(p => p.featured);

  featured.forEach(product => {
    DOM.featuredProductsGrid.appendChild(createProductCard(product));
  });
}

// HORIZONTAL SLIDERS RENDER
function renderSliders() {
  const bestSellersTrack = document.getElementById('best-sellers-track');
  const newArrivalsTrack = document.getElementById('new-arrivals-track');

  if (bestSellersTrack) {
    bestSellersTrack.innerHTML = '';
    const bestSellers = AppState.products.filter(p => p.tags && (p.tags.includes('Best Seller') || p.tags.includes('best-seller')));
    const bsBadge = TRANSLATIONS[AppState.language]['badge_bestseller'] || 'BEST SELLER';
    bestSellers.forEach(product => {
      bestSellersTrack.appendChild(createSliderProductCard(product, bsBadge));
    });
  }

  if (newArrivalsTrack) {
    newArrivalsTrack.innerHTML = '';
    const newArrivals = AppState.products.filter(p => p.tags && (p.tags.includes('New') || p.tags.includes('new')));
    const npBadge = TRANSLATIONS[AppState.language]['badge_new_product'] || 'NEW PRODUCT';
    newArrivals.forEach(product => {
      newArrivalsTrack.appendChild(createSliderProductCard(product, npBadge));
    });
  }
}

function createSliderProductCard(product, badgeText) {
  const card = document.createElement('div');
  card.className = 'product-card slider-product-card';
  card.onclick = () => openProductModal(product.id);

  const isWishlisted = AppState.wishlist.includes(product.id);
  const wishlistClass = isWishlisted ? 'active' : '';

  const transProd = getTranslatedProduct(product.id);
  const tagline = transProd ? transProd.tagline : product.tagline;
  const translatedCategory = getTranslatedCategory(product.category);

  const exploreLabel = TRANSLATIONS[AppState.language]['card_explore'] || 'Explore';
  const cartLabel = product.stock > 0
    ? (TRANSLATIONS[AppState.language]['card_add_to_cart'] || 'Add to Cart')
    : (TRANSLATIONS[AppState.language]['card_sold_out'] || 'Sold Out');

  const bsBadge = TRANSLATIONS[AppState.language]['badge_bestseller'] || 'BEST SELLER';
  const badgeClass = badgeText === bsBadge ? 'tag-bestseller' : 'tag-new';

  card.innerHTML = `
    <div class="product-card-image-wrap">
      ${badgeText ? `<div class="card-badge ${badgeClass}">${badgeText}</div>` : ''}
      <img src="${product.image}" alt="${product.name}" class="product-card-image" loading="lazy">
      
      <button class="card-wishlist ${wishlistClass}" onclick="event.stopPropagation(); toggleWishlist('${product.id}'); this.classList.toggle('active');" aria-label="Add to Wishlist">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <div class="product-card-actions">
        <button class="btn-secondary product-card-action-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')" ${product.stock <= 0 ? 'disabled' : ''}>
          ${cartLabel}
        </button>
      </div>
    </div>
    <div class="product-card-category">${product.brand}</div>
    <h3 class="product-card-name serif-title">${product.name}</h3>

    <div class="product-card-footer">
      <span class="product-card-price">֏${formatPrice(product.price)}</span>
      <div class="product-card-rating">
        <span class="rating-star">★</span>
        <span>${product.rating}</span>
      </div>
    </div>
  `;

  card.onclick = (e) => {
    if (!e.target.closest('button')) {
      openProductModal(product.id);
    }
  };
  return card;
}

window.scrollSlider = function (trackId, amount) {
  const track = document.getElementById(trackId);
  if (track) {
    track.scrollBy({ left: amount, behavior: 'smooth' });
  }
};

// RENDER CATALOG SHOP GRID
// RENDER CATALOG SHOP GRID
function renderShop() {
  if (!DOM.shopProductsGrid) return;

  // Fade out product grid to simulate AJAX load
  DOM.shopProductsGrid.style.transition = 'opacity 0.2s ease';
  DOM.shopProductsGrid.style.opacity = '0.3';

  setTimeout(() => {
    DOM.shopProductsGrid.innerHTML = '';

    let filtered = AppState.products;

    // Filter Scent Family (Multi-Select)
    if (AppState.filters.scent_families && AppState.filters.scent_families.length > 0) {
      filtered = filtered.filter(p => AppState.filters.scent_families.includes(p.scent_family));
    }

    // Filter Gender (Multi-Select)
    if (AppState.filters.genders && AppState.filters.genders.length > 0) {
      filtered = filtered.filter(p => AppState.filters.genders.includes(p.gender_id));
    }

    // Filter Vibe (Multi-Select)
    if (AppState.filters.vibes && AppState.filters.vibes.length > 0) {
      filtered = filtered.filter(p => p.vibes && p.vibes.some(v => AppState.filters.vibes.includes(v)));
    }

    // Filter Size (Multi-Select)
    if (AppState.filters.sizes && AppState.filters.sizes.length > 0) {
      filtered = filtered.filter(p => p.sizes && p.sizes.some(s => AppState.filters.sizes.includes(s.size)));
    }

    // Filter Brand (Multi-Select)
    if (AppState.filters.brands && AppState.filters.brands.length > 0) {
      filtered = filtered.filter(p => AppState.filters.brands.some(b => b.toLowerCase() === p.brand.toLowerCase()));
    }

    // Filter Tags Preset
    if (AppState.filters.tag) {
      const requestedTag = AppState.filters.tag.toLowerCase();
      filtered = filtered.filter(p => p.tags.some(t => t.toLowerCase() === requestedTag));
    }

    // Filter Search Query
    if (AppState.filters.search) {
      const query = AppState.filters.search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        (GLOBAL_ATTRIBUTES.scent_families[p.scent_family]?.label[AppState.language] || "").toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      );
    }

    // Filter Price Range (only apply when user has changed from defaults)
    if (AppState.filters.priceRange && (AppState.filters.priceRange.min > 0 || AppState.filters.priceRange.max < PRICE_RANGE_MAX)) {
      filtered = filtered.filter(p => {
        return p.price >= AppState.filters.priceRange.min && p.price <= AppState.filters.priceRange.max;
      });
    }

    // Sort Logic
    if (AppState.filters.sort === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.filters.sort === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.filters.sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Default restore array sorting by id
      filtered.sort((a, b) => a.id.localeCompare(b.id));
    }

    // Visual header tags on Shop view to clarify active presets
    renderActivePresetIndicators();

    if (filtered.length === 0) {
      const searchNoResultsText = TRANSLATIONS[AppState.language]['search_no_results'] || 'No fragrances found matching your filters.';
      DOM.shopProductsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: var(--color-medium-gray);">
          <p>${searchNoResultsText}</p>
        </div>
      `;
    } else {
      filtered.forEach(product => {
        DOM.shopProductsGrid.appendChild(createProductCard(product));
      });
    }

    // Fade back in
    DOM.shopProductsGrid.style.opacity = '1';
  }, 200); // 200ms delay for visual AJAX reload skeleton/fade simulation
}

// RENDER ACTIVE FILTER LABEL BAR ON SHOP
function renderActivePresetIndicators() {
  let subheader = document.getElementById('shop-presets-indicator');
  if (!subheader) {
    const headerSec = document.querySelector('.shop-header');
    if (!headerSec) return;
    subheader = document.createElement('div');
    subheader.id = 'shop-presets-indicator';
    subheader.className = 'shop-presets-indicator';
    subheader.style.cssText = 'display:flex; gap:8px; margin-bottom: 24px; flex-wrap:wrap;';
    headerSec.parentNode.insertBefore(subheader, headerSec.nextSibling);
  }

  subheader.innerHTML = '';

  const addIndicator = (label, onClear) => {
    const span = document.createElement('span');
    span.style.cssText = 'font-size:0.75rem; background:var(--color-sage-light); color:var(--color-black); padding:4px 12px; border-radius:12px; display:inline-flex; align-items:center; gap:8px;';
    span.innerHTML = `
      <span>${label}</span>
      <button style="font-weight:600; font-size:0.85rem; background:none; border:none; cursor:pointer;" onclick="${onClear}">×</button>
    `;
    subheader.appendChild(span);
  };

  // Indicators for brand
  if (AppState.filters.brands && AppState.filters.brands.length > 0) {
    AppState.filters.brands.forEach(brand => {
      addIndicator(`Brand: ${brand}`, `clearFilterItem('brands', '${brand}')`);
    });
  }
  // Indicators for scent family
  if (AppState.filters.scent_families && AppState.filters.scent_families.length > 0) {
    AppState.filters.scent_families.forEach(sf => {
      const label = GLOBAL_ATTRIBUTES.scent_families[sf]?.label[AppState.language] || sf;
      addIndicator(`Family: ${label}`, `clearFilterItem('scent_families', '${sf}')`);
    });
  }
  // Indicators for gender
  if (AppState.filters.genders && AppState.filters.genders.length > 0) {
    AppState.filters.genders.forEach(g => {
      const label = GLOBAL_ATTRIBUTES.genders[g]?.label[AppState.language] || g;
      addIndicator(`Gender: ${label}`, `clearFilterItem('genders', '${g}')`);
    });
  }
  // Indicators for vibe
  if (AppState.filters.vibes && AppState.filters.vibes.length > 0) {
    AppState.filters.vibes.forEach(v => {
      const label = GLOBAL_ATTRIBUTES.vibes[v]?.label[AppState.language] || v;
      addIndicator(`Vibe: ${label}`, `clearFilterItem('vibes', '${v}')`);
    });
  }
  // Indicators for size
  if (AppState.filters.sizes && AppState.filters.sizes.length > 0) {
    AppState.filters.sizes.forEach(s => {
      addIndicator(`Size: ${s}`, `clearFilterItem('sizes', '${s}')`);
    });
  }
  // Tag indicator (New, Best Seller, Gift)
  if (AppState.filters.tag) {
    addIndicator(`Tag: ${AppState.filters.tag}`, "clearPresetFilter('tag')");
  }

  if (subheader.children.length === 0) {
    subheader.style.display = 'none';
  } else {
    subheader.style.display = 'flex';
  }
}

// FILTER ITEMS ACTIONS
window.clearFilterItem = function (arrayName, value) {
  if (AppState.filters[arrayName]) {
    const idx = AppState.filters[arrayName].indexOf(value);
    if (idx > -1) {
      AppState.filters[arrayName].splice(idx, 1);
    }
  }
  renderFilterWidgets('desktop-sidebar-filters', false);
  renderShop();
};

window.applyPresetFilter = function (type, value) {
  AppState.filters.scent_families = [];
  AppState.filters.genders = [];
  AppState.filters.vibes = [];
  AppState.filters.sizes = [];
  AppState.filters.brands = [];
  AppState.filters.priceRange = { min: 0, max: PRICE_RANGE_MAX };
  AppState.filters.search = '';
  AppState.filters.tag = '';

  if (type === 'brand') {
    AppState.filters.brands = [value];
  } else if (type === 'gender') {
    AppState.filters.genders = [value.toLowerCase()];
  } else if (type === 'category') {
    AppState.filters.scent_families = [value.toLowerCase()];
  } else if (type === 'tag') {
    AppState.filters.tag = value;
  }

  window.location.hash = '#/shop';

  if (AppState.currentRoute === 'shop') {
    renderFilterWidgets('desktop-sidebar-filters', false);
    renderShop();
  }
};

window.clearPresetFilter = function (type) {
  if (type === 'tag') {
    AppState.filters.tag = '';
  }
  renderShop();
};

// DYNAMIC FILTER WIDGETS RENDERING
window.renderFilterWidgets = function (containerId, isMobile) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtersState = isMobile ? TempMobileFilters : AppState.filters;

  container.innerHTML = '';

  const lang = AppState.language;

  // Desktop sidebar filters header with Clear All link
  if (!isMobile) {
    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'sidebar-filters-header';
    sidebarHeader.innerHTML = `
      <h3 class="serif-title" style="font-size: 1.25rem; letter-spacing:0.05em; text-transform:uppercase;" data-trans="btn_filters">${TRANSLATIONS[lang]['btn_filters'] || 'Filters'}</h3>
      <button class="desktop-clear-all-btn" data-trans="btn_clear_all" style="font-size:0.75rem; text-decoration:underline; cursor:pointer; background:none; border:none; color: var(--color-medium-gray);">${TRANSLATIONS[lang]['btn_clear_all'] || 'Clear All'}</button>
    `;
    sidebarHeader.querySelector('.desktop-clear-all-btn').addEventListener('click', () => {
      AppState.filters.scent_families = [];
      AppState.filters.genders = [];
      AppState.filters.vibes = [];
      AppState.filters.sizes = [];
      AppState.filters.brands = [];
      AppState.filters.priceRange = { min: 0, max: PRICE_RANGE_MAX };
      AppState.filters.search = '';
      AppState.filters.tag = '';

      renderFilterWidgets(containerId, false);
      renderShop();
    });
    container.appendChild(sidebarHeader);
  }

  // 1. Search Box Group
  const searchGroup = document.createElement('div');
  searchGroup.className = 'filter-group search-filter-group';
  searchGroup.innerHTML = `
    <div class="search-input-wrapper">
      <input type="text" class="filter-search-input" placeholder="${TRANSLATIONS[lang]['search_placeholder'] || 'Search...'}" value="${filtersState.search || ''}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="filter-search-icon">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  `;
  const searchInput = searchGroup.querySelector('.filter-search-input');
  searchInput.addEventListener('input', (e) => {
    filtersState.search = e.target.value.toLowerCase();
    if (!isMobile) {
      AppState.filters.search = filtersState.search;
      renderShop();
    }
  });
  container.appendChild(searchGroup);

  const createFilterHeader = (transKey, defaultText) => {
    const h4 = document.createElement('h4');
    h4.className = 'filter-group-title';
    h4.setAttribute('data-trans', transKey);
    h4.innerText = TRANSLATIONS[lang][transKey] || defaultText;
    return h4;
  };

  // 2. Scent Family swatches (Visual color circles)
  const scentGroup = document.createElement('div');
  scentGroup.className = 'filter-group';
  scentGroup.appendChild(createFilterHeader('filter_scent_family', 'Scent Family'));
  const scentList = document.createElement('div');
  scentList.className = 'scent-swatches-grid';

  Object.keys(GLOBAL_ATTRIBUTES.scent_families).forEach(key => {
    const item = GLOBAL_ATTRIBUTES.scent_families[key];
    const isActive = filtersState.scent_families.includes(key);
    const swatch = document.createElement('button');
    swatch.className = `scent-swatch ${isActive ? 'active' : ''}`;
    swatch.style.setProperty('--swatch-color', item.color);
    swatch.innerHTML = `
      <span class="swatch-circle" style="background-color: ${item.color}"></span>
      <span class="swatch-label">${item.label[lang] || item.label.en}</span>
    `;
    swatch.addEventListener('click', () => {
      toggleFilterValue(filtersState.scent_families, key);
      if (!isMobile) {
        swatch.classList.toggle('active');
        renderShop();
      } else {
        renderFilterWidgets(containerId, isMobile);
      }
    });
    scentList.appendChild(swatch);
  });
  scentGroup.appendChild(scentList);
  container.appendChild(scentGroup);

  // 4. Gender swatches (Pills)
  const genGroup = document.createElement('div');
  genGroup.className = 'filter-group';
  genGroup.appendChild(createFilterHeader('filter_gender', 'Gender'));
  const genList = document.createElement('div');
  genList.className = 'swatches-wrap';

  Object.keys(GLOBAL_ATTRIBUTES.genders).forEach(key => {
    const item = GLOBAL_ATTRIBUTES.genders[key];
    const isActive = filtersState.genders.includes(key);
    const button = document.createElement('button');
    button.className = `swatch-pill ${isActive ? 'active' : ''}`;
    button.innerText = item.label[lang] || item.label.en;
    button.addEventListener('click', () => {
      toggleFilterValue(filtersState.genders, key);
      if (!isMobile) {
        button.classList.toggle('active');
        renderShop();
      } else {
        renderFilterWidgets(containerId, isMobile);
      }
    });
    genList.appendChild(button);
  });
  genGroup.appendChild(genList);
  container.appendChild(genGroup);

  // 5. Vibe / Occasion swatches (Pills)
  const vibeGroup = document.createElement('div');
  vibeGroup.className = 'filter-group';
  vibeGroup.appendChild(createFilterHeader('filter_vibe', 'Vibe / Occasion'));
  const vibeList = document.createElement('div');
  vibeList.className = 'swatches-wrap';

  Object.keys(GLOBAL_ATTRIBUTES.vibes).forEach(key => {
    const item = GLOBAL_ATTRIBUTES.vibes[key];
    const isActive = filtersState.vibes.includes(key);
    const button = document.createElement('button');
    button.className = `swatch-pill ${isActive ? 'active' : ''}`;
    button.innerText = item.label[lang] || item.label.en;
    button.addEventListener('click', () => {
      toggleFilterValue(filtersState.vibes, key);
      if (!isMobile) {
        button.classList.toggle('active');
        renderShop();
      } else {
        renderFilterWidgets(containerId, isMobile);
      }
    });
    vibeList.appendChild(button);
  });
  vibeGroup.appendChild(vibeList);
  container.appendChild(vibeGroup);

  // 6. Size swatches (Pills)
  const sizeGroup = document.createElement('div');
  sizeGroup.className = 'filter-group';
  sizeGroup.appendChild(createFilterHeader('filter_size', 'Size'));
  const sizeList = document.createElement('div');
  sizeList.className = 'swatches-wrap';

  const allSizes = ["50ml", "100ml", "200ml"];
  allSizes.forEach(size => {
    const isActive = filtersState.sizes.includes(size);
    const button = document.createElement('button');
    button.className = `swatch-pill ${isActive ? 'active' : ''}`;
    button.innerText = size;
    button.addEventListener('click', () => {
      toggleFilterValue(filtersState.sizes, size);
      if (!isMobile) {
        button.classList.toggle('active');
        renderShop();
      } else {
        renderFilterWidgets(containerId, isMobile);
      }
    });
    sizeList.appendChild(button);
  });
  sizeGroup.appendChild(sizeList);
  container.appendChild(sizeGroup);

  // 7. Brand swatches (Pills)
  const brandGroup = document.createElement('div');
  brandGroup.className = 'filter-group';
  brandGroup.appendChild(createFilterHeader('filter_brand', 'Brand'));
  const brandList = document.createElement('div');
  brandList.className = 'swatches-wrap';

  // Dynamically collect brands from actual products, excluding NOVA
  const allBrands = [...new Set(AppState.products.map(p => p.brand).filter(b => b && b.toUpperCase() !== 'NOVA'))].sort((a, b) => a.localeCompare(b));
  allBrands.forEach(brand => {
    const isActive = filtersState.brands.some(b => b.toLowerCase() === brand.toLowerCase());
    const button = document.createElement('button');
    button.className = `swatch-pill ${isActive ? 'active' : ''}`;
    button.innerText = brand;
    button.addEventListener('click', () => {
      const existingIdx = filtersState.brands.findIndex(b => b.toLowerCase() === brand.toLowerCase());
      if (existingIdx > -1) {
        filtersState.brands.splice(existingIdx, 1);
      } else {
        filtersState.brands.push(brand);
      }
      if (!isMobile) {
        button.classList.toggle('active');
        renderShop();
      } else {
        renderFilterWidgets(containerId, isMobile);
      }
    });
    brandList.appendChild(button);
  });
  brandGroup.appendChild(brandList);
  container.appendChild(brandGroup);

  // 8. Price Range Slider
  const priceGroup = document.createElement('div');
  priceGroup.className = 'filter-group price-filter-group';
  priceGroup.appendChild(createFilterHeader('filter_price', 'Price'));

  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'price-slider-container';

  const minVal = filtersState.priceRange.min;
  const maxVal = filtersState.priceRange.max;

  sliderContainer.innerHTML = `
    <div class="price-slider-track-wrap">
      <div class="price-slider-track" id="${isMobile ? 'm' : 'd'}-slider-track"></div>
      <input type="range" min="0" max="${PRICE_RANGE_MAX}" value="${minVal}" class="min-price-slider" id="${isMobile ? 'm' : 'd'}-min-price-input" aria-label="Min price">
      <input type="range" min="0" max="${PRICE_RANGE_MAX}" value="${maxVal}" class="max-price-slider" id="${isMobile ? 'm' : 'd'}-max-price-input" aria-label="Max price">
    </div>
    <div class="price-range-values">
      <span>֏<span id="${isMobile ? 'm' : 'd'}-min-val">${formatPrice(minVal)}</span></span>
      <span>֏<span id="${isMobile ? 'm' : 'd'}-max-val">${formatPrice(maxVal)}</span></span>
    </div>
  `;

  const minInput = sliderContainer.querySelector('.min-price-slider');
  const maxInput = sliderContainer.querySelector('.max-price-slider');
  const minText = sliderContainer.querySelector(`#${isMobile ? 'm' : 'd'}-min-val`);
  const maxText = sliderContainer.querySelector(`#${isMobile ? 'm' : 'd'}-max-val`);
  const track = sliderContainer.querySelector('.price-slider-track');

  function updateTrack() {
    const val1 = parseInt(minInput.value);
    const val2 = parseInt(maxInput.value);

    if (val1 > val2) {
      if (this === minInput) {
        minInput.value = val2;
      } else {
        maxInput.value = val1;
      }
    }

    const finalMin = Math.min(parseInt(minInput.value), parseInt(maxInput.value));
    const finalMax = Math.max(parseInt(minInput.value), parseInt(maxInput.value));

    minText.innerText = formatPrice(finalMin);
    maxText.innerText = formatPrice(finalMax);

    filtersState.priceRange.min = finalMin;
    filtersState.priceRange.max = finalMax;

    const pctMin = (finalMin / PRICE_RANGE_MAX) * 100;
    const pctMax = (finalMax / PRICE_RANGE_MAX) * 100;

    track.style.left = `${pctMin}%`;
    track.style.width = `${pctMax - pctMin}%`;
  }

  minInput.addEventListener('input', updateTrack);
  maxInput.addEventListener('input', updateTrack);

  const handlePointerMove = (e) => {
    const rect = minInput.getBoundingClientRect();
    if (rect.width === 0) return;
    const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
    const pct = (clientX - rect.left) / rect.width;
    const hoverVal = pct * 400;

    const val1 = parseInt(minInput.value);
    const val2 = parseInt(maxInput.value);

    const distMin = Math.abs(hoverVal - val1);
    const distMax = Math.abs(hoverVal - val2);

    if (distMin === distMax) {
      if (hoverVal < val1) {
        minInput.style.zIndex = '3';
        maxInput.style.zIndex = '1';
      } else {
        minInput.style.zIndex = '1';
        maxInput.style.zIndex = '3';
      }
    } else if (distMin < distMax) {
      minInput.style.zIndex = '3';
      maxInput.style.zIndex = '1';
    } else {
      minInput.style.zIndex = '1';
      maxInput.style.zIndex = '3';
    }
  };

  sliderContainer.addEventListener('mousemove', handlePointerMove);
  sliderContainer.addEventListener('touchmove', handlePointerMove);
  sliderContainer.addEventListener('mousedown', handlePointerMove);
  sliderContainer.addEventListener('touchstart', handlePointerMove);

  if (!isMobile) {
    minInput.addEventListener('change', () => {
      AppState.filters.priceRange.min = filtersState.priceRange.min;
      renderShop();
    });
    maxInput.addEventListener('change', () => {
      AppState.filters.priceRange.max = filtersState.priceRange.max;
      renderShop();
    });
  }

  priceGroup.appendChild(sliderContainer);
  container.appendChild(priceGroup);

  // Wait short delay to initialize CSS variables positions
  setTimeout(updateTrack, 0);
};

// CREATE COMPONENT FOR PRODUCT CARD
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => openProductModal(product.id);
  const isWishlisted = AppState.wishlist.includes(product.id);
  const wishlistClass = isWishlisted ? 'wishlist-filled' : '';

  // Get translations
  const transProd = getTranslatedProduct(product.id);
  const tagline = transProd ? transProd.tagline : product.tagline;
  const translatedCategory = getTranslatedCategory(product.category);

  const exploreLabel = TRANSLATIONS[AppState.language]['card_explore'] || 'Explore';
  const cartLabel = product.stock > 0
    ? (TRANSLATIONS[AppState.language]['card_add_to_cart'] || 'Add to Cart')
    : (TRANSLATIONS[AppState.language]['card_sold_out'] || 'Sold Out');

  let badgeText = product.tags && product.tags.length > 0 ? product.tags[0] : '';
  let badgeClass = '';
  if (badgeText) {
    if (badgeText.toLowerCase().includes('best seller') || badgeText.toLowerCase().includes('bestseller')) {
      badgeText = TRANSLATIONS[AppState.language]['badge_bestseller'] || 'BEST SELLER';
      badgeClass = 'tag-bestseller';
    } else if (badgeText.toLowerCase().includes('new')) {
      badgeText = TRANSLATIONS[AppState.language]['badge_new_product'] || 'NEW';
      badgeClass = 'tag-new';
    }
  }

  card.innerHTML = `
    <div class="product-card-image-wrap">
      ${badgeText ? `<div class="card-badge ${badgeClass}">${badgeText}</div>` : ''}
      <img src="${product.image}" alt="${product.name}" class="product-card-image" loading="lazy">
      
      <!-- Floating Card Wishlist Toggle -->
      <button class="product-card-wishlist-btn ${wishlistClass}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" aria-label="Add to Wishlist">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <div class="product-card-actions">
        <button class="btn-secondary product-card-action-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')" ${product.stock <= 0 ? 'disabled' : ''}>
          ${cartLabel}
        </button>
      </div>
    </div>
    <div class="product-card-category">${product.brand}</div>
    <h3 class="product-card-name serif-title">${product.name}</h3>

    <div class="product-card-footer">
      <span class="product-card-price">֏${formatPrice(product.price)}</span>
      <div class="product-card-rating">
        <span class="rating-star">★</span>
        <span>${product.rating}</span>
      </div>
    </div>
  `;
  return card;
}

// TOAST NOTIFICATIONS
function showToast(message) {
  const lang = AppState.language;
  let translatedMessage = message;
  const normMsg = message.trim().toUpperCase();

  if (normMsg.startsWith("UPDATED ") && normMsg.endsWith(" STOCK AND PRICE.")) {
    const prodName = message.substring(8, message.length - 16);
    translatedMessage = lang === 'am' ? `Թարմացվել է ${prodName}-ի պաշարը և գինը:` :
                        lang === 'ru' ? `Обновлены запас и цена для ${prodName}.` :
                        `Updated ${prodName} stock and price.`;
  } else if (normMsg.startsWith("ORDER #") && normMsg.includes(" SET TO ")) {
    const match = message.match(/ORDER #(.+?) SET TO (.+?)\./i);
    if (match) {
      const orderId = match[1];
      const status = match[2].toLowerCase();
      const transStatus = status === "pending" ? (lang === 'am' ? "Ընթացքի մեջ" : lang === 'ru' ? "В ожидании" : "Pending") :
                          status === "processing" ? (lang === 'am' ? "Մշակվում է" : lang === 'ru' ? "Обрабатывается" : "Processing") :
                          status === "completed" ? (lang === 'am' ? "Ավարտված" : lang === 'ru' ? "Выполнен" : "Completed") :
                          status === "failed" ? (lang === 'am' ? "Ձախողված" : lang === 'ru' ? "Ошибка" : "Failed") : status;
      translatedMessage = lang === 'am' ? `Պատվեր #${orderId}-ի կարգավիճակը սահմանվեց՝ ${transStatus.toUpperCase()}:` :
                          lang === 'ru' ? `Заказ #${orderId} переведен в статус ${transStatus.toUpperCase()}.` :
                          `Order #${orderId} set to ${transStatus.toUpperCase()}.`;
    }
  } else if (normMsg.startsWith("WELCOME BACK, ")) {
    const name = message.substring(14, message.length - 1);
    translatedMessage = lang === 'am' ? `Բարի վերադարձ, ${name}:` :
                        lang === 'ru' ? `С возвращением, ${name}.` :
                        `Welcome back, ${name}.`;
  } else if (normMsg.startsWith("PLUGIN ") && normMsg.endsWith(" INSTALLED.")) {
    const pluginId = message.substring(7, message.length - 11);
    translatedMessage = lang === 'am' ? `ՓԼԱԳԻՆ ${pluginId} ՏԵՂԱԴՐՎԱԾ Է:` :
                        lang === 'ru' ? `ПЛАГИН ${pluginId} УСТАНОВЛЕН.` :
                        `Plugin ${pluginId} installed.`;
  } else if (normMsg.startsWith("PLUGIN ") && normMsg.endsWith(" UNINSTALLED.")) {
    const pluginId = message.substring(7, message.length - 13);
    translatedMessage = lang === 'am' ? `ՓԼԱԳԻՆ ${pluginId} ԱՊԱՏԵՂԱԴՐՎԱԾ Է:` :
                        lang === 'ru' ? `ПЛАГИН ${pluginId} УДАЛЕН.` :
                        `Plugin ${pluginId} uninstalled.`;
  } else if (normMsg.startsWith("PAYMENT GATEWAY ") && (normMsg.endsWith(" ENABLED.") || normMsg.endsWith(" DISABLED."))) {
    const isEnabled = normMsg.endsWith(" ENABLED.");
    const gw = message.substring(16, message.length - (isEnabled ? 9 : 10));
    const statusText = isEnabled ? (lang === 'am' ? "ԱԿՏԻՎԱՑՎԱԾ Է" : lang === 'ru' ? "ВКЛЮЧЕН" : "ENABLED") : (lang === 'am' ? "ԱՊԱԱԿՏԻՎԱՑՎԱԾ Է" : lang === 'ru' ? "ОТКЛЮЧЕН" : "DISABLED");
    translatedMessage = lang === 'am' ? `ՎՃԱՐԱՅԻՆ ԴԱՐՊԱՍ ${gw} ${statusText}:` :
                        lang === 'ru' ? `ПЛАТЕЖНЫЙ ШЛЮЗ ${gw} ${statusText}.` :
                        `Payment gateway ${gw} ${isEnabled ? 'enabled' : 'disabled'}.`;
  } else if (normMsg.startsWith("STAFF PROFILE FOR ") && normMsg.endsWith(" CREATED.")) {
    const name = message.substring(18, message.length - 9);
    translatedMessage = lang === 'am' ? `ԱՆՁՆԱԿԱԶՄԻ ՊՐՈՖԻԼԸ ${name}-Ի ՀԱՄԱՐ ՍՏԵՂԾՎԱԾ Է:` :
                        lang === 'ru' ? `ПРОФИЛЬ СОТРУДНИКА ДЛЯ ${name} СОЗДАН.` :
                        `Staff profile for ${name} created.`;
  } else if (normMsg.startsWith("STAFF PROFILE FOR ") && normMsg.endsWith(" DELETED.")) {
    const name = message.substring(18, message.length - 9);
    translatedMessage = lang === 'am' ? `ԱՆՁՆԱԿԱԶՄԻ ՊՐՈՖԻԼԸ ${name}-Ի ՀԱՄԱՐ ՋՆՋՎԱԾ Է:` :
                        lang === 'ru' ? `ПРОФИЛЬ СОТРУДНИКА ДЛЯ ${name} УДАЛЕН.` :
                        `Staff profile for ${name} deleted.`;
  } else if (normMsg.startsWith("CANNOT ADD. ONLY ") && normMsg.endsWith(" ITEMS AVAILABLE IN STOCK.")) {
    const qty = message.match(/\d+/)[0];
    translatedMessage = lang === 'am' ? `ՀՆԱՐԱՎՈՐ ՉԷ ԱՎԵԼԱՑՆԵԼ: ՊԱՇԱՐՈՒՄ ԱՌԿԱ Է ԸՆԴԱՄԵՆԸ ${qty} ԱՊՐԱՆՔ:` :
                        lang === 'ru' ? `НЕВОЗМОЖНО ДОБАВИТЬ. НА СКЛАДЕ ОСТАЛОСЬ ВСЕГО ${qty} ШТ.` :
                        `Cannot add. Only ${qty} items available in stock.`;
  } else if (normMsg.startsWith("ONLY ") && normMsg.endsWith(" ITEMS AVAILABLE IN STOCK.")) {
    const qty = message.match(/\d+/)[0];
    translatedMessage = lang === 'am' ? `ՊԱՇԱՐՈՒՄ ԱՌԿԱ Է ԸՆԴԱՄԵՆԸ ${qty} ԱՊՐԱՆՔ:` :
                        lang === 'ru' ? `На складе осталось всего ${qty} шт.` :
                        `Only ${qty} items available in stock.`;
  } else if (normMsg.endsWith(" ADDED TO CART.")) {
    const details = message.substring(0, message.length - 15);
    translatedMessage = lang === 'am' ? `${details} ԱՎԵԼԱՑՎԵԼ Է ԶԱՄԲՅՈՒՂ:` :
                        lang === 'ru' ? `${details} добавлен в корзину.` :
                        `${details} added to cart.`;
  } else if (normMsg.endsWith(" REMOVED FROM CART.")) {
    const name = message.substring(0, message.length - 19);
    translatedMessage = lang === 'am' ? `${name} ՀԵՌԱՑՎԵԼ Է ԶԱՄԲՅՈՒՂԻՑ:` :
                        lang === 'ru' ? `${name} удален из корзины.` :
                        `${name} removed from cart.`;
  } else if (normMsg.endsWith(" REMOVED FROM WISHLIST.")) {
    const name = message.substring(0, message.length - 23);
    translatedMessage = lang === 'am' ? `${name} ՀԵՌԱՑՎԵԼ Է ՑԱՆԿՈՒԹՅՈՒՆՆԵՐԻՑ:` :
                        lang === 'ru' ? `${name} удален из списка желаний.` :
                        `${name} removed from wishlist.`;
  } else if (normMsg.endsWith(" SAVED TO WISHLIST.")) {
    const name = message.substring(0, message.length - 19);
    translatedMessage = lang === 'am' ? `${name} ԱՎԵԼԱՑՎԵԼ Է ՑԱՆԿՈՒԹՅՈՒՆՆԵՐԻ ՑՈՒՑԱԿՈՒՄ:` :
                        lang === 'ru' ? `${name} добавлен в список желаний.` :
                        `${name} saved to wishlist.`;
  } else if (normMsg.startsWith("ADDED ") && normMsg.endsWith(" FRAGRANCES TO BAG.")) {
    const qty = message.match(/\d+/)[0];
    translatedMessage = lang === 'am' ? `ԱՎԵԼԱՑՎԵԼ Է ${qty} ԲՈՒՅՐ ԶԱՄԲՅՈՒՂՈՒՄ:` :
                        lang === 'ru' ? `Добавлено ${qty} ароматов в корзину.` :
                        `Added ${qty} fragrances to bag.`;
  } else {
    const toastKeys = {
      "PASSWORD UPDATED SECURELY.": {
        am: "ԳԱՂՏՆԱԲԱՌԸ ԱՊԱՀՈՎ ԹԱՐՄԱՑՎԵԼ Է:",
        ru: "ПАРОЛЬ НАДЕЖНО ОБНОВЛЕН.",
        en: "PASSWORD UPDATED SECURELY."
      },
      "ACCOUNT DETAILS SAVED.": {
        am: "ՀԱՇՎԻ ՏՎՅԱԼՆԵՐԸ ՊԱՀՊԱՆՎԵԼ ԵՆ:",
        ru: "ДАННЫЕ АККАУНТА СОХРАНЕНЫ.",
        en: "ACCOUNT DETAILS SAVED."
      },
      "RESTOCK NOTIFICATION REMOVED.": {
        am: "ՊԱՇԱՐԻ ՀԱՄԱԼՐՄԱՆ ԾԱՆՈՒՑՈՒՄԸ ՀԵՌԱՑՎԱԾ Է:",
        ru: "УВЕДОМЛЕНИЕ О ПОСТУПЛЕНИИ УДАЛЕНО.",
        en: "RESTOCK NOTIFICATION REMOVED."
      },
      "RESTOCK NOTIFICATION ENABLED.": {
        am: "ՊԱՇԱՐԻ ՀԱՄԱԼՐՄԱՆ ԾԱՆՈՒՑՈՒՄԸ ԱԿՏԻՎԱՑՎԱԾ Է:",
        ru: "УВЕДОМЛЕНИЕ О ПОСТУПЛЕНИИ ВКЛЮЧЕНО.",
        en: "RESTOCK NOTIFICATION ENABLED."
      },
      "PLEASE FILL IN ALL FIELDS.": {
        am: "ԽՆԴՐՈՒՄ ԵՆՔ ԼՐԱՑՆԵԼ ԲՈԼՈՐ ԴԱՇՏԵՐԸ:",
        ru: "ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ВСЕ ПОЛЯ.",
        en: "PLEASE FILL IN ALL FIELDS."
      },
      "INVALID EMAIL OR PASSWORD.": {
        am: "ՍԽԱԼ ԷԼ. ՀԱՍՑԵ ԿԱՄ ԳԱՂՏՆԱԲԱՌ:",
        ru: "НЕВЕРНЫЙ EMAIL ИЛИ ПАРОЛЬ.",
        en: "INVALID EMAIL OR PASSWORD."
      },
      "LOGGED OUT OF WOOCOMMERCE ADMIN PANEL.": {
        am: "ԴՈՒՐՍ ԵՔ ԳՐՎԵԼ WOOCOMMERCE ԿԱՌԱՎԱՐՄԱՆ ՎԱՀԱՆԱԿԻՑ:",
        ru: "ВЫ ВЫШЛИ ИЗ ПАНЕЛИ УПРАВЛЕНИЯ WOOCOMMERCE.",
        en: "LOGGED OUT OF WOOCOMMERCE ADMIN PANEL."
      },
      "ACCESS DENIED. DEVELOPER SETTINGS RESTRICTED TO SUPER ADMIN.": {
        am: "ՄՈՒՏՔԸ ՄԵՐԺՎԱԾ Է: ՄՇԱԿՈՂԻ ԿԱՐԳԱՎՈՐՈՒՄՆԵՐԸ ՀԱՍԱՆԵԼԻ ԵՆ ՄԻԱՅՆ ՍՈՒՊԵՐ ԱԴՄԻՆԻՆ:",
        ru: "ДОСТУП ЗАПРЕЩЕН. НАСТРОЙКИ РАЗРАБОТЧИКА ДОСТУПНЫ ТОЛЬКО ДЛЯ СУПЕР АДМИНИСТРАТОРА.",
        en: "ACCESS DENIED. DEVELOPER SETTINGS RESTRICTED TO SUPER ADMIN."
      },
      "PROFILE ALREADY EXISTS.": {
        am: "ՊՐՈՖԻԼՆ ԱՐԴԵՆ ԳՈՅՈՒԹՅՈՒՆ ՈՒՆԻ:",
        ru: "ПРОФИЛЬ УЖЕ СУЩЕСТВУЕТ.",
        en: "PROFILE ALREADY EXISTS."
      },
      "CANNOT DELETE SUPER ADMIN ACCOUNT.": {
        am: "ՀՆԱՐԱՎՈՐ ՉԷ ՋՆՋԵԼ ՍՈՒՊԵՐ ԱԴՄԻՆԻ ՊՐՈՖԻԼԸ:",
        ru: "НЕВОЗМОЖНО УДАЛИТЬ УЧЕТНУЮ ЗАПИСЬ СУПЕР АДМИНИСТРАТОРА.",
        en: "CANNOT DELETE SUPER ADMIN ACCOUNT."
      },
      "ACCESS DENIED. ONLY SUPER ADMIN CAN CLEAR LOGS.": {
        am: "ՄՈՒՏՔԸ ՄԵՐԺՎԱԾ Է: ՄԻԱՅՆ ՍՈՒՊԵՐ ԱԴՄԻՆԸ ԿԱՐՈՂ Է ՄԱՔՐԵԼ ՄԱՏՅԱՆԸ:",
        ru: "ДОСТУП ЗАПРЕЩЕН. ТОЛЬКО СУПЕР АДМИНИСТРАТОР МОЖЕТ ОЧИСТИТЬ ЛОГИ.",
        en: "ACCESS DENIED. ONLY SUPER ADMIN CAN CLEAR LOGS."
      },
      "AUDIT LOGS HISTORY CLEARED.": {
        am: "ԱՈՒԴԻՏԻ ՄԱՏՅԱՆՆԵՐԻ ՊԱՏՄՈՒԹՅՈՒՆԸ ՄԱՔՐՎԵԼ Է:",
        ru: "ИСТОРИЯ ЖУРНАЛА АУДИТА ОЧИЩЕНА.",
        en: "AUDIT LOGS HISTORY CLEARED."
      },
      "INVALID PRICE VALUE.": {
        am: "ԱՆՎԱՎԵՐ ԳՆԻ ԱՐԺԵՔ:",
        ru: "НЕВЕРНОЕ ЗНАЧЕНИЕ ЦЕНЫ.",
        en: "INVALID PRICE VALUE."
      },
      "INVALID STOCK VALUE.": {
        am: "ԱՆՎԱՎԵՐ ՊԱՇԱՐԻ ԱՐԺԵՔ:",
        ru: "НЕВЕРНОЕ ЗНАЧЕНИЕ ЗАПАСА.",
        en: "INVALID STOCK VALUE."
      },
      "INVOICE DOWNLOAD SIMULATED": {
        am: "ՀԱՇՎԻ ՆԵՐԲԵՌՆՈՒՄԸ ՍԻՄՈՒԼԱՑՎԱԾ Է:",
        ru: "СКАЧИВАНИЕ СЧЕТА СИМУЛИРОВАНО",
        en: "Invoice download simulated"
      },
      "WISHLIST ITEMS ARE ALREADY IN BAG OR SOLD OUT.": {
        am: "ՑԱՆԿՈՒԹՅԱՆ ԲՈԼՈՐ ԱՊՐԱՆՔՆԵՐՆ ԱՐԴԵՆ ԶԱՄԲՅՈՒՂՈՒՄ ԵՆ ԿԱՄ ՍՊԱՌՎԱԾ ԵՆ:",
        ru: "ВСЕ ТОВАРЫ ИЗ СПИСКА ЖЕЛАНИЙ УЖЕ В КОРЗИНЕ ИЛИ РАСПРОДАНЫ.",
        en: "Wishlist items are already in bag or sold out."
      },
      "YOUR CART IS EMPTY.": {
        am: "ՁԵՐ ԶԱՄԲՅՈՒՂԸ ԴԱՏԱՐԿ Է:",
        ru: "ВАША КОРЗИНА ПУСТА.",
        en: "Your cart is empty."
      },
      "THANK YOU FOR SUBSCRIBING TO NOVA JOURNEY.": {
        am: "ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ NOVA-ԻՆ ԲԱԺԱՆՈՐԴԱԳՐՎԵԼՈՒ ՀԱՄԱՐ:",
        ru: "БЛАГОДАРИМ ЗА ПОДПИСКУ НА НОВОСТИ NOVA.",
        en: "Thank you for subscribing to NOVA journey."
      },
      "SORRY, THIS FRAGRANCE IS TEMPORARILY OUT OF STOCK.": {
        am: "ՑԱՎՈՒՄ ԵՆՔ, ԱՅՍ ԲՈՒՅՐԸ ԺԱՄԱՆԱԿԱՎՈՐԱՊԵՍ ՍՊԱՌՎԱԾ Է:",
        ru: "ИЗВИНИТЕ, ЭТОТ АРОМАТ ВРЕМЕННО ОТСУТСТВУЕТ НА СКЛАДЕ.",
        en: "Sorry, this fragrance is temporarily out of stock."
      }
    };

    if (toastKeys[normMsg] || toastKeys[message]) {
      const entry = toastKeys[normMsg] || toastKeys[message];
      translatedMessage = entry[lang] || entry['en'] || message;
    }
  }

  DOM.toast.innerText = translatedMessage;
  DOM.toast.classList.add('active');
  setTimeout(() => {
    DOM.toast.classList.remove('active');
  }, 3000);
}

// ADD TO CART SYSTEM (Quick Add)
window.quickAddToCart = function (productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showToast("SORRY, THIS FRAGRANCE IS TEMPORARILY OUT OF STOCK.");
    return;
  }

  addToCart(product, '100ml', 1);
};

// DETAILED ADD TO CART WITH SIZE & QTY
function addToCart(product, size, qty) {
  // Find current price matching this size
  const sizeObj = product.sizes.find(s => s.size === size);
  const itemPrice = sizeObj ? sizeObj.price : product.price;

  // Check if item already exists in cart
  const cartIndex = AppState.cart.findIndex(item => item.product.id === product.id && item.size === size);

  if (cartIndex > -1) {
    // Check stock limit
    const futureQty = AppState.cart[cartIndex].quantity + qty;
    if (futureQty > product.stock) {
      showToast(`CANNOT ADD. ONLY ${product.stock} ITEMS AVAILABLE IN STOCK.`);
      return;
    }
    AppState.cart[cartIndex].quantity = futureQty;
  } else {
    if (qty > product.stock) {
      showToast(`CANNOT ADD. ONLY ${product.stock} ITEMS AVAILABLE IN STOCK.`);
      return;
    }
    AppState.cart.push({
      product: product,
      size: size,
      quantity: qty,
      price: itemPrice
    });
  }

  saveCartToStorage();
  updateCartUI();

  // Bounce cart bubble count
  DOM.cartCountBadge.classList.add('bounce');
  setTimeout(() => DOM.cartCountBadge.classList.remove('bounce'), 400);

  showToast(`${product.name.toUpperCase()} (${size}) ADDED TO CART.`);
  openCartDrawer();
}

// CART SYSTEM UI UPDATES
function updateCartUI() {
  // Update badge number
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCountBadge.innerText = totalCount;

  const mobileCartBadge = document.getElementById('mobile-cart-count-badge');
  if (mobileCartBadge) {
    mobileCartBadge.innerText = totalCount;
  }

  // Sync floating header cart badge
  const floatingCartBadge = document.querySelector('.floating-cart-count');
  if (floatingCartBadge) {
    floatingCartBadge.innerText = totalCount;
  }

  // Fill Cart Items
  if (!DOM.cartItemsContainer) return;
  DOM.cartItemsContainer.innerHTML = '';

  if (AppState.cart.length === 0) {
    const cartEmptyMsg = TRANSLATIONS[AppState.language]['cart_empty_msg'] || 'Your shopping cart is currently empty.';
    const goShopBtnText = TRANSLATIONS[AppState.language]['go_to_shop_btn'] || 'Go to Shop';
    DOM.cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p style="font-weight: 300; font-size: 0.9rem; letter-spacing: 0.05em;">${cartEmptyMsg}</p>
        <button class="btn-primary" onclick="closeCartDrawer(); window.location.hash='#/shop';">${goShopBtnText}</button>
      </div>
    `;
    DOM.cartSubtotal.innerText = '֏0';
    return;
  }

  let subtotal = 0;

  let sizePrefix = "Size: ";
  if (AppState.language === 'am') sizePrefix = "Չափսը՝ ";
  else if (AppState.language === 'ru') sizePrefix = "Объем: ";

  AppState.cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.product.name}</h4>
        <div class="cart-item-meta">${sizePrefix}${item.size}</div>
        <div class="cart-item-row">
          <div class="cart-item-qty">
            <button class="cart-item-qty-btn" onclick="updateCartQty(${index}, -1)">−</button>
            <input type="text" class="cart-item-qty-input" value="${item.quantity}" readonly>
            <button class="cart-item-qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
          <span class="cart-item-price">֏${formatPrice(itemTotal)}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    `;
    DOM.cartItemsContainer.appendChild(itemDiv);
  });

  DOM.cartSubtotal.innerText = `֏${formatPrice(subtotal)}`;
}

window.updateCartQty = function (index, change) {
  const item = AppState.cart[index];
  const newQty = item.quantity + change;

  if (newQty <= 0) {
    removeCartItem(index);
    return;
  }

  // Stock safety check
  if (newQty > item.product.stock) {
    showToast(`SORRY, ONLY ${item.product.stock} ITEMS AVAILABLE IN STOCK.`);
    return;
  }

  item.quantity = newQty;
  saveCartToStorage();
  updateCartUI();

  // If we are on checkout, update checkout summaries too
  if (AppState.currentRoute === 'checkout') {
    updateCheckoutTotals();
  }
};

window.removeCartItem = function (index) {
  const name = AppState.cart[index].product.name;
  AppState.cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
  showToast(`${name.toUpperCase()} REMOVED FROM CART.`);

  if (AppState.currentRoute === 'checkout') {
    renderCheckoutPage();
  }
};

// CART STORAGE
function saveCartToStorage() {
  localStorage.setItem('nova_cart_storage', JSON.stringify(AppState.cart));
}

function loadCartFromStorage() {
  const saved = localStorage.getItem('nova_cart_storage');
  if (saved) {
    try {
      AppState.cart = JSON.parse(saved);
      // Re-map product references to our runtime state
      AppState.cart.forEach(item => {
        const productRef = AppState.products.find(p => p.id === item.product.id);
        if (productRef) {
          item.product = productRef;
        }
      });
    } catch (e) {
      AppState.cart = [];
    }
  }
}

// CART DRAWER NAV ACTIONS
function openCartDrawer() {
  DOM.cartDrawerOverlay.classList.add('active');
}

function closeCartDrawer() {
  DOM.cartDrawerOverlay.classList.remove('active');
}

window.openMobileMenu = function () {
  if (window.innerWidth > 768) {
    openDesktopMenu();
  } else {
    const overlay = document.getElementById('mobile-menu-drawer-overlay');
    if (overlay) overlay.classList.add('active');
  }
};

window.closeMobileMenu = function () {
  const overlay = document.getElementById('mobile-menu-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
};

window.openDesktopMenu = function () {
  const overlay = document.getElementById('desktop-menu-overlay');
  if (overlay) overlay.classList.add('active');
};

window.closeDesktopMenu = function () {
  const overlay = document.getElementById('desktop-menu-overlay');
  if (overlay) overlay.classList.remove('active');
};

// Close desktop menu on overlay click
(function() {
  const dOverlay = document.getElementById('desktop-menu-overlay');
  if (dOverlay) {
    dOverlay.addEventListener('click', function(e) {
      if (e.target === dOverlay) closeDesktopMenu();
    });
  }
})();

// WISHLIST FUNCTIONAL SYSTEM
window.toggleWishlist = function (productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    // Remove from wishlist
    AppState.wishlist.splice(index, 1);
    showToast(`${product.name.toUpperCase()} REMOVED FROM WISHLIST.`);
  } else {
    // Add to wishlist
    AppState.wishlist.push(productId);
    showToast(`${product.name.toUpperCase()} SAVED TO WISHLIST.`);
  }

  saveWishlistToStorage();
  updateWishlistUI();

  // Re-render shop and featured grids to reflect card heart state
  renderFeaturedProducts();
  renderShop();

  // If details modal is open on this product, toggle button class too
  if (AppState.selectedProduct && AppState.selectedProduct.id === productId) {
    const isWishlisted = AppState.wishlist.includes(productId);
    if (DOM.modalWishlistBtn) {
      if (isWishlisted) {
        DOM.modalWishlistBtn.classList.add('wishlist-filled');
      } else {
        DOM.modalWishlistBtn.classList.remove('wishlist-filled');
      }
    }
  }
};

function updateWishlistUI() {
  const count = AppState.wishlist.length;
  DOM.wishlistCountBadge.innerText = count;

  const mobileWishlistBadge = document.getElementById('mobile-wishlist-count-badge');
  if (mobileWishlistBadge) {
    mobileWishlistBadge.innerText = count;
  }

  // Sync floating header wishlist badge
  const floatingWishlistBadge = document.querySelector('.floating-wishlist-count');
  if (floatingWishlistBadge) {
    floatingWishlistBadge.innerText = count;
  }

  // Toggle header heart filled styling
  if (count > 0) {
    DOM.wishlistHeaderBtn.classList.add('wishlist-filled');
    DOM.wishlistCountBadge.classList.remove('hidden');
  } else {
    DOM.wishlistHeaderBtn.classList.remove('wishlist-filled');
    DOM.wishlistCountBadge.classList.add('hidden');
  }

  // Populate Wishlist Drawer items
  if (!DOM.wishlistItemsContainer) return;
  DOM.wishlistItemsContainer.innerHTML = '';

  if (count === 0) {
    const wishlistEmptyMsg = TRANSLATIONS[AppState.language]['wishlist_empty_msg'] || 'Your wishlist is currently empty.';
    const browseShopBtnText = TRANSLATIONS[AppState.language]['browse_shop_btn'] || 'Browse Shop';
    DOM.wishlistItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <p style="font-weight: 300; font-size: 0.9rem; letter-spacing: 0.05em;">${wishlistEmptyMsg}</p>
        <button class="btn-primary" onclick="closeWishlistDrawer(); window.location.hash='#/shop';">${browseShopBtnText}</button>
      </div>
    `;
    return;
  }

  AppState.wishlist.forEach(prodId => {
    const prod = AppState.products.find(p => p.id === prodId);
    if (!prod) return;

    const translatedCategory = getTranslatedCategory(prod.category);
    const addBtnLabel = prod.stock > 0
      ? (TRANSLATIONS[AppState.language]['card_add_to_cart'] || 'Add to Bag')
      : (TRANSLATIONS[AppState.language]['card_sold_out'] || 'Sold Out');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${prod.name}</h4>
        <div class="cart-item-meta">${translatedCategory} &bull; ${prod.brand}</div>
        <div class="cart-item-row" style="margin-top: 10px;">
          <span class="cart-item-price">֏${formatPrice(prod.price)}</span>
          <button class="btn-primary" style="font-size:0.7rem; padding: 6px 12px;" onclick="closeWishlistDrawer(); quickAddToCart('${prod.id}')" ${prod.stock <= 0 ? 'disabled' : ''}>
            ${addBtnLabel}
          </button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="toggleWishlist('${prod.id}')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    `;
    DOM.wishlistItemsContainer.appendChild(itemDiv);
  });

  if (AppState.currentRoute === 'wishlist') {
    renderWishlistPage();
  }
}

window.addAllWishlistToCart = function () {
  if (AppState.wishlist.length === 0) return;

  let addedCount = 0;
  AppState.wishlist.forEach(prodId => {
    const prod = AppState.products.find(p => p.id === prodId);
    if (prod && prod.stock > 0) {
      // Add standard 100ml size
      const cartIndex = AppState.cart.findIndex(item => item.product.id === prod.id && item.size === '100ml');
      if (cartIndex === -1) {
        AppState.cart.push({
          product: prod,
          size: '100ml',
          quantity: 1,
          price: prod.price
        });
        addedCount++;
      }
    }
  });

  if (addedCount > 0) {
    saveCartToStorage();
    updateCartUI();
    showToast(`ADDED ${addedCount} FRAGRANCES TO BAG.`);
  } else {
    showToast("WISHLIST ITEMS ARE ALREADY IN BAG OR SOLD OUT.");
  }

  closeWishlistDrawer();
  openCartDrawer();
};

function saveWishlistToStorage() {
  localStorage.setItem('nova_wishlist_storage', JSON.stringify(AppState.wishlist));
}

function loadWishlistFromStorage() {
  const saved = localStorage.getItem('nova_wishlist_storage');
  if (saved) {
    try {
      AppState.wishlist = JSON.parse(saved);
    } catch (e) {
      AppState.wishlist = [];
    }
  }
}

window.openWishlistDrawer = function () {
  DOM.wishlistDrawerOverlay.classList.add('active');
};

window.closeWishlistDrawer = function () {
  DOM.wishlistDrawerOverlay.classList.remove('active');
};

window.renderWishlistPage = function () {
  const container = document.getElementById('wishlist-page-container');
  if (!container) return;
  container.innerHTML = '';

  const count = AppState.wishlist.length;
  if (count === 0) {
    const wishlistEmptyMsg = TRANSLATIONS[AppState.language]['wishlist_empty_msg'] || 'Your wishlist is currently empty.';
    const browseShopBtnText = TRANSLATIONS[AppState.language]['browse_shop_btn'] || 'Browse Shop';
    container.innerHTML = `
      <div class="wishlist-page-empty">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <p style="font-weight: 300; font-size: 1.1rem; letter-spacing: 0.05em;">${wishlistEmptyMsg}</p>
        <button class="btn-primary" onclick="window.location.hash='#/shop';" style="padding: 12px 30px; border-radius: 8px;">${browseShopBtnText}</button>
      </div>
    `;
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'wishlist-page-grid';

  AppState.wishlist.forEach(prodId => {
    const prod = AppState.products.find(p => p.id === prodId);
    if (!prod) return;

    const translatedCategory = getTranslatedCategory(prod.category);
    const addBtnLabel = prod.stock > 0
      ? (TRANSLATIONS[AppState.language]['card_add_to_cart'] || 'Add to Bag')
      : (TRANSLATIONS[AppState.language]['card_sold_out'] || 'Sold Out');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'wishlist-page-item';
    itemDiv.innerHTML = `
      <div class="wishlist-page-image-wrap" style="cursor: pointer;" onclick="openProductModal('${prod.id}')">
        <img src="${prod.image}" alt="${prod.name}" class="wishlist-page-image">
      </div>
      <div class="wishlist-page-details">
        <div class="wishlist-page-meta">${translatedCategory} &bull; ${prod.brand}</div>
        <h4 class="wishlist-page-name" style="cursor: pointer;" onclick="openProductModal('${prod.id}')">${prod.name}</h4>
        <div class="wishlist-page-price">֏${formatPrice(prod.price)}</div>
        <div class="wishlist-page-actions">
          <button class="btn-primary wishlist-page-add-btn" onclick="quickAddToCart('${prod.id}')" ${prod.stock <= 0 ? 'disabled' : ''}>
            ${addBtnLabel}
          </button>
          <button class="wishlist-page-remove-btn" onclick="toggleWishlist('${prod.id}')" aria-label="Remove from Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(itemDiv);
  });

  container.appendChild(grid);
};

// PRODUCT DETAILS PAGE VIEW
window.openProductModal = function (productId) {
  window.location.href = 'product.html?id=' + productId;
};

window.initProductPage = function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  if (!productId) {
    window.location.href = 'index.html';
    return;
  }
  renderProductPage(productId);
  initProductInteractiveFeatures();
};

// SEARCH POPUP SYSTEM
function initSearch() {
  const containers = document.querySelectorAll('.search-container');
  if (!containers.length) return;

  // Collect all search inputs so we can sync them
  const allInputs = [];

  containers.forEach(container => {
    const input = container.querySelector('.search-input');
    const btn = container.querySelector('.search-btn');
    if (!input) return;

    allInputs.push(input);

    // Create dropdown element dynamically
    let dropdown = container.querySelector('.search-results-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      container.appendChild(dropdown);
    }

    // Toggle active on container when focused
    input.addEventListener('focus', () => {
      container.classList.add('active');
      renderSearchDropdown(input.value, dropdown);
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        if (document.activeElement !== input) {
          container.classList.remove('active');
          dropdown.classList.remove('active');
        }
      }, 200);
    });

    // Handle clicking the search button
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (!container.classList.contains('active')) {
          e.preventDefault();
          input.focus();
        } else if (input.value.trim() === '') {
          e.preventDefault();
          input.blur();
        }
      });
    }

    // Handle input event (typing) — sync all inputs
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      // Sync other search inputs
      allInputs.forEach(otherInput => {
        if (otherInput !== input) {
          otherInput.value = e.target.value;
        }
      });

      AppState.filters.search = query;
      const isProductPage = window.location.pathname.endsWith('/product') || window.location.pathname.endsWith('/product.html');
      if (!isProductPage && typeof renderShop === 'function') {
        renderShop();
      }

      renderSearchDropdown(query, dropdown);
    });
  });

  // Close search on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      allInputs.forEach(input => input.blur());
    }
  });
}

function initProductInteractiveFeatures() {
  // 1. Hover Inspect Zoom Magnifier
  const zoomContainer = document.getElementById('pp-zoom-container');
  const zoomImg = document.getElementById('pp-img');
  if (zoomContainer && zoomImg) {
    zoomContainer.addEventListener('mousemove', (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      zoomImg.style.transformOrigin = `${x}% ${y}%`;
    });
    zoomContainer.addEventListener('mouseenter', () => {
      zoomContainer.classList.add('is-zoomed');
    });
    zoomContainer.addEventListener('mouseleave', () => {
      zoomContainer.classList.remove('is-zoomed');
      zoomImg.style.transformOrigin = 'center center';
    });
  }

  // 2. Smooth FAQ Accordion Transitions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const summary = item.querySelector('summary');
    const content = item.querySelector('.faq-item-content');
    if (summary && content) {
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.hasAttribute('open')) {
          content.style.gridTemplateRows = '0fr';
          content.addEventListener('transitionend', function handler() {
            item.removeAttribute('open');
            content.removeEventListener('transitionend', handler);
          }, { once: true });
        } else {
          item.setAttribute('open', '');
          // trigger reflow
          content.offsetHeight;
          content.style.gridTemplateRows = '1fr';
        }
      });
    }
  });
}

function renderProductPage(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  // Determine available sizes and select first available
  const availableSizes = (product.sizes || []).filter(s => s.price && s.price > 0);
  AppState.selectedProduct = product;
  AppState.selectedSize = availableSizes.length > 0 ? availableSizes[0].size : '100ml';

  // Get translations
  const transProd = getTranslatedProduct(productId);
  const tagline = transProd ? transProd.tagline : product.tagline;
  const description = transProd ? transProd.description : product.description;
  const translatedCategory = getTranslatedCategory(product.category);
  const topNotes = transProd ? transProd.top.join(', ') : product.notes.top.join(', ');
  const heartNotes = transProd ? transProd.heart.join(', ') : product.notes.heart.join(', ');
  const baseNotes = transProd ? transProd.base.join(', ') : product.notes.base.join(', ');
  const reviewsText = TRANSLATIONS[AppState.language]['reviews_label'] || 'reviews';

  // Populate Product Page Fields
  const ppImg = document.getElementById('pp-img');
  const productImageSrc = product.image || (product.images && product.images[0]) || '';
  ppImg.src = productImageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='%23f5f5f5'%3E%3Crect width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ccc' font-size='14' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";
  document.getElementById('pp-category').innerText = `${translatedCategory} • ${product.brand}`;
  document.getElementById('pp-name').innerText = product.name;
  const ppTagline = document.getElementById('pp-tagline');
  if (ppTagline) ppTagline.style.display = 'none';
  
  // Description with "Read More" — split at section headers
  const descEl = document.getElementById('pp-desc');
  const readMoreBtn = document.getElementById('pp-read-more-btn');
  const descWrapper = document.getElementById('pp-desc-wrapper');
  
  if (descEl && description) {
    // Find a split point: look for section headers in the description
    const splitMarkers = [
      'Who It\'s For:', 'Who it\'s for:', 'Who Its For:',
      'Для кого:', 'Для кого это:', 'Кому подходит:',
      'Ում համար է:', 'Ում համար է',
      'Key Features:', 'Key features:',
      'Ключевые особенности:', 'Основные характеристики:',
      'Հիմնական հատկանիշներ:', 'Հիմնdelays առանձնահատկdelays:',
      'Fragrance Notes & Composition', 'Fragrance Notes',
      'Ноты и состав аромата', 'Ноты аромата',
      'Օdelays Նdelays:', 'Օdelays նdelays և delays:',
      'Բուdelays delays:', 'Հdelays delays:',
    ];
    
    let splitIdx = -1;
    let matchedMarker = '';
    for (const marker of splitMarkers) {
      const idx = description.indexOf(marker);
      if (idx > 0 && (splitIdx === -1 || idx < splitIdx)) {
        splitIdx = idx;
        matchedMarker = marker;
      }
    }
    
    // Fallback: if no marker found and text is long, split at ~250 chars on a sentence boundary
    if (splitIdx <= 0 && description.length > 300) {
      const searchArea = description.substring(200, 400);
      const sentenceEnd = searchArea.search(/[.։!?]\s/);
      if (sentenceEnd > 0) {
        splitIdx = 200 + sentenceEnd + 1;
        matchedMarker = '';
      } else {
        splitIdx = 250;
        matchedMarker = '';
      }
    }
    
    if (splitIdx > 0 && readMoreBtn) {
      const introText = description.substring(0, splitIdx + matchedMarker.length);
      const restText = description.substring(splitIdx + matchedMarker.length);
      
      descEl.textContent = introText;
      
      const lang = AppState.language;
      const readMoreLabel = lang === 'am' ? '\u053F\u0561\u0580\u0564\u0561\u056C \u0561\u057E\u0565\u056C\u056B\u0576' : lang === 'ru' ? '\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435' : 'Read More';
      const readLessLabel = lang === 'am' ? '\u0553\u0561\u056F\u0565\u056C' : lang === 'ru' ? '\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C' : 'Read Less';
      
      readMoreBtn.textContent = readMoreLabel;
      readMoreBtn.style.display = 'inline';
      if (descWrapper) descWrapper.classList.remove('collapsed');
      
      let expanded = false;
      readMoreBtn.onclick = () => {
        expanded = !expanded;
        if (expanded) {
          descEl.textContent = description;
          readMoreBtn.textContent = readLessLabel;
        } else {
          descEl.textContent = introText;
          readMoreBtn.textContent = readMoreLabel;
        }
      };
    } else {
      // No split point found — show full text, no button
      descEl.textContent = description;
      if (readMoreBtn) readMoreBtn.style.display = 'none';
    }
    if (descWrapper) {
      descWrapper.classList.remove('collapsed');
      descWrapper.classList.add('expanded');
    }
  }
  document.getElementById('pp-rating-val').innerText = `${product.rating} (${product.reviewsCount} ${reviewsText})`;

  // Show "Edit This Product" button for admins — inline with rating
  let editBtn = document.getElementById('pp-admin-edit-btn');
  if (editBtn) editBtn.remove();
  const adminSession = sessionStorage.getItem('nova_admin_session');
  if (adminSession) {
    editBtn = document.createElement('button');
    editBtn.id = 'pp-admin-edit-btn';
    editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:12px; height:12px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg> Edit`;
    editBtn.style.cssText = 'display:inline-flex; align-items:center; gap:4px; padding:3px 10px; font-size:0.65rem; font-weight:600; text-transform:uppercase; letter-spacing:0.04em; border:1px solid var(--color-sage); background:none; color:var(--color-sage); border-radius:3px; cursor:pointer; margin-left:12px; transition:all 0.2s; vertical-align:middle;';
    editBtn.addEventListener('mouseenter', () => { editBtn.style.background = 'var(--color-sage)'; editBtn.style.color = '#fff'; });
    editBtn.addEventListener('mouseleave', () => { editBtn.style.background = 'none'; editBtn.style.color = 'var(--color-sage)'; });
    editBtn.addEventListener('click', () => {
      window.openDetailedProductModal(product.id);
    });
    // Insert inside the rating row, after the rating text
    const ratingRow = document.querySelector('.pp-rating-row');
    if (ratingRow) {
      ratingRow.appendChild(editBtn);
    }
  }

  // Render thumbnails from product.images array only
  const allImages = [];
  if (product.image) allImages.push(product.image);
  if (product.images && Array.isArray(product.images)) {
    product.images.forEach(img => {
      if (!allImages.includes(img)) allImages.push(img);
    });
  }

  const thumbGrid = document.getElementById('pp-thumbnails');
  if (thumbGrid) {
    thumbGrid.innerHTML = '';
    if (allImages.length > 1) {
      allImages.forEach((src, idx) => {
        const thumbItem = document.createElement('div');
        thumbItem.className = `pp-thumbnail-item ${idx === 0 ? 'active' : ''}`;
        thumbItem.innerHTML = `<img src="${src}" alt="Thumbnail ${idx + 1}">`;
        thumbItem.addEventListener('click', () => {
          document.getElementById('pp-img').src = src;
          thumbGrid.querySelectorAll('.pp-thumbnail-item').forEach(btn => btn.classList.remove('active'));
          thumbItem.classList.add('active');
        });
        thumbGrid.appendChild(thumbItem);
      });
    }
  }

  // Populate Olfactory narrative notes
  const expTop = document.getElementById('exp-top-notes');
  const expHeart = document.getElementById('exp-heart-notes');
  const expBase = document.getElementById('exp-base-notes');
  if (expTop && expHeart && expBase) {
    expTop.innerText = topNotes;
    expHeart.innerText = heartNotes;
    expBase.innerText = baseNotes;
  }

  // Populate Suggested Products ("Complete the Ritual")
  const suggestionsGrid = document.getElementById('pp-suggestions-grid');
  if (suggestionsGrid) {
    suggestionsGrid.innerHTML = '';
    // filter out current product
    let recommendations = AppState.products.filter(p => p.id !== product.id);
    // prioritize same category
    let sameCat = recommendations.filter(p => p.category === product.category);
    let others = recommendations.filter(p => p.category !== product.category);
    let finalRecs = [...sameCat, ...others].slice(0, 4);

    finalRecs.forEach(rec => {
      suggestionsGrid.appendChild(createProductCard(rec));
    });
  }

  // Reset Quantity Input
  const qtyInput = document.getElementById('pp-qty-input');
  qtyInput.value = 1;

  // Manage Stock indicator
  const addBtn = document.getElementById('pp-add-btn');
  if (product.stock > 0) {
    addBtn.disabled = false;
    addBtn.innerText = TRANSLATIONS[AppState.language]['modal_add_to_cart'] || 'Add to Cart';
  } else {
    addBtn.disabled = true;
    addBtn.innerText = TRANSLATIONS[AppState.language]['card_sold_out'] || 'Sold Out';
  }

  // Populate Fragrance Pyramid
  document.getElementById('pp-top').innerText = topNotes;
  document.getElementById('pp-heart').innerText = heartNotes;
  document.getElementById('pp-base').innerText = baseNotes;

  // Size Selector options
  renderSizeSelectors(product);
  updateModalPrice(product);

  // Bind Add to Cart action inside modal
  addBtn.onclick = () => {
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(product, AppState.selectedSize, qty);
    openCartDrawer();
  };

  // Bind Qty buttons inside modal
  const minusBtn = document.getElementById('pp-qty-minus');
  const plusBtn = document.getElementById('pp-qty-plus');

  minusBtn.onclick = () => {
    let q = parseInt(qtyInput.value) || 1;
    if (q > 1) {
      qtyInput.value = q - 1;
    }
  };

  plusBtn.onclick = () => {
    let q = parseInt(qtyInput.value) || 1;
    if (q < product.stock) {
      qtyInput.value = q + 1;
    } else {
      showToast(`ONLY ${product.stock} ITEMS AVAILABLE IN STOCK.`);
    }
  };
}

function closeProductModal() { }

function renderSizeSelectors(product) {
  const container = document.getElementById('pp-sizes');
  container.innerHTML = '';

  // Only show sizes that have a valid price
  const validSizes = (product.sizes || []).filter(s => s.price && s.price > 0);
  
  validSizes.forEach(sizeObj => {
    const btn = document.createElement('button');
    btn.className = `size-btn ${sizeObj.size === AppState.selectedSize ? 'active' : ''}`;
    btn.innerText = sizeObj.size;
    btn.addEventListener('click', () => {
      // Toggle select size
      container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.selectedSize = sizeObj.size;
      updateModalPrice(product);
    });
    container.appendChild(btn);
  });
}

function updateModalPrice(product) {
  const sizeObj = product.sizes.find(s => s.size === AppState.selectedSize);
  const price = sizeObj ? sizeObj.price : product.price;
  document.getElementById('pp-price').innerText = `֏${formatPrice(price)}`;
}

// CHECKOUT LOGIC
window.goToCheckout = function () {
  if (AppState.cart.length === 0) {
    showToast("YOUR CART IS EMPTY.");
    return;
  }
  closeCartDrawer();
  // If on product page, redirect to main page checkout
  const isProductPage = window.location.pathname.endsWith('/product') || window.location.pathname.endsWith('/product.html');
  if (isProductPage) {
    window.location.href = 'index.html#/checkout';
    return;
  }
  window.location.hash = '#/checkout';
  renderCheckoutPage();
};

function renderCheckoutPage() {
  const summaryContainer = document.getElementById('checkout-items-list');
  if (!summaryContainer) return;
  summaryContainer.innerHTML = '';

  AppState.cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'order-summary-item';
    div.innerHTML = `
      <span>${item.product.name} (x${item.quantity}) - ${item.size}</span>
      <strong>֏${formatPrice(item.price * item.quantity)}</strong>
    `;
    summaryContainer.appendChild(div);
  });

  updateCheckoutTotals();
  prefillCheckoutForm();
}

// Pre-fill checkout form from saved billing info or logged-in user
function prefillCheckoutForm() {
  const saved = JSON.parse(localStorage.getItem('nova_billing_info') || 'null');
  const firstNameEl = document.getElementById('billing-first-name');
  const lastNameEl = document.getElementById('billing-last-name');
  const emailEl = document.getElementById('billing-email');
  const addressEl = document.getElementById('billing-address');
  const cityEl = document.getElementById('billing-city');
  const zipEl = document.getElementById('billing-zip');

  if (saved) {
    if (firstNameEl) firstNameEl.value = saved.firstName || '';
    if (lastNameEl) lastNameEl.value = saved.lastName || '';
    if (emailEl) emailEl.value = saved.email || '';
    if (addressEl) addressEl.value = saved.address || '';
    if (cityEl) cityEl.value = saved.city || '';
    if (zipEl) zipEl.value = saved.zip || '';
  } else if (AppState.customer && AppState.customer.firstName) {
    if (firstNameEl) firstNameEl.value = AppState.customer.firstName || '';
    if (lastNameEl) lastNameEl.value = AppState.customer.lastName || '';
    if (emailEl) emailEl.value = AppState.customer.email || '';
  }
}

function updateCheckoutTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const shippingSelect = document.getElementById('shipping-method');
  const shippingCost = shippingSelect ? parseInt(shippingSelect.value) : 0;
  const total = subtotal + shippingCost;

  document.getElementById('checkout-subtotal-val').innerText = `֏${formatPrice(subtotal)}`;
  document.getElementById('checkout-shipping-val').innerText = shippingCost === 0 ? 'Free' : `֏${formatPrice(shippingCost)}`;
  document.getElementById('checkout-total-val').innerText = `֏${formatPrice(total)}`;
}

async function processCheckout() {
  const shippingSelect = document.getElementById('shipping-method');
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingSelect ? parseInt(shippingSelect.value) : 0;
  const total = subtotal + shippingCost;

  const customerData = {
    firstName: document.getElementById('billing-first-name').value,
    lastName: document.getElementById('billing-last-name').value,
    email: document.getElementById('billing-email').value,
    address: document.getElementById('billing-address').value,
    city: document.getElementById('billing-city').value,
    zip: document.getElementById('billing-zip').value
  };

  // Save billing info to localStorage for next time
  localStorage.setItem('nova_billing_info', JSON.stringify(customerData));

  // Deduct products stocks
  AppState.cart.forEach(item => {
    const prod = AppState.products.find(p => p.id === item.product.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.quantity);
    }
  });
  await saveProductsToStorage();

  // Record order in WooCommerce database
  const order = WooCommerceAdmin.addOrder(customerData, AppState.cart, total);

  // Clear Cart
  AppState.cart = [];
  saveCartToStorage();
  updateCartUI();

  // Show Success Receipt view
  const checkoutContainer = document.getElementById('view-checkout');
  const successTitle = TRANSLATIONS[AppState.language]['order_success_title'] || 'Order Placed Successfully';
  const successDesc = (TRANSLATIONS[AppState.language]['order_success_desc'] || 'Thank you for choosing NOVA. Your order reference is <strong>#REF</strong>. We have sent a confirmation email to EMAIL.')
    .replace('#REF', `#${order.id}`)
    .replace('EMAIL', order.email);
  const orderDetailsLabel = TRANSLATIONS[AppState.language]['order_details'] || 'Order details';
  const orderDateLabel = TRANSLATIONS[AppState.language]['order_date'] || 'Date:';
  const orderShipToLabel = TRANSLATIONS[AppState.language]['order_ship_to'] || 'Ship to:';
  const orderTotalPaidLabel = TRANSLATIONS[AppState.language]['order_total_paid'] || 'Total paid:';
  const continueShoppingBtnText = TRANSLATIONS[AppState.language]['continue_shopping_btn'] || 'Continue Shopping';

  checkoutContainer.innerHTML = `
    <div class="container">
      <div class="checkout-success-view text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin: 0 auto 16px auto;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="serif-title" style="font-size: 2.2rem; margin-bottom: 12px;">${successTitle}</h2>
        <p style="font-size: 0.9rem; color: var(--color-medium-gray); margin-bottom: 24px;">
          ${successDesc}
        </p>
        <div style="border-top: 1px solid var(--color-border); padding-top: 24px; text-align: left; margin-bottom: 24px;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">${orderDetailsLabel}</h4>
          <div style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;">
            <div style="display:flex; justify-content:space-between;"><span>${orderDateLabel}</span><span>${order.date}</span></div>
            <div style="display:flex; justify-content:space-between;"><span>${orderShipToLabel}</span><span>${customerData.address}, ${customerData.city}</span></div>
            <div style="display:flex; justify-content:space-between; font-weight: 600;"><span>${orderTotalPaidLabel}</span><span>֏${formatPrice(order.total)}</span></div>
          </div>
        </div>
        <button class="btn-primary" onclick="restoreCheckoutPage(); window.location.hash='#/shop';">${continueShoppingBtnText}</button>
      </div>
    </div>
  `;

  // Send purchase confirmation email to customer
  if (typeof emailjs !== 'undefined') {
    const shippingSelect = document.getElementById('shipping-method');
    const shippingVal = shippingSelect ? parseInt(shippingSelect.value) : 0;
    const ordersList = order.items.map(i => {
      const prod = AppState.products.find(p => p.name === i.name);
      const itemPrice = prod ? prod.price : 0;
      return {
        name: i.name,
        price: `֏${formatPrice(itemPrice)}`,
        qty: i.qty,
        bunch: i.qty
      };
    });

    emailjs.send('service_58z9fml', 'template_zpv3fet', {
      email: customerData.email,
      order_id: order.id,
      orders: ordersList,
      cost: {
        shipping: shippingVal === 0 ? 'Free' : `֏${formatPrice(shippingVal)}`,
        tax: '֏0',
        total: `֏${formatPrice(order.total)}`
      }
    }).catch(err => console.error('Order confirmation email error:', err));
  }
}

// Restore default checkout page format after success screen
window.restoreCheckoutPage = function () {
  const checkoutContainer = document.getElementById('view-checkout');
  checkoutContainer.innerHTML = `
    <div class="container">
      <div class="checkout-grid">
        <!-- Billing Details Form -->
        <div class="admin-card">
          <h2 class="checkout-section-title serif-title">Billing Details</h2>
          <form id="checkout-billing-form">
            <div class="form-row">
              <div class="form-group">
                <label for="billing-first-name">First Name *</label>
                <input type="text" id="billing-first-name" required placeholder="John">
              </div>
              <div class="form-group">
                <label for="billing-last-name">Last Name *</label>
                <input type="text" id="billing-last-name" required placeholder="Doe">
              </div>
            </div>
            <div class="form-group">
              <label for="billing-email">Email Address *</label>
              <input type="email" id="billing-email" required placeholder="john@example.com">
            </div>
            <div class="form-group">
              <label for="billing-address">Street Address *</label>
              <input type="text" id="billing-address" placeholder="House number and street name" required value="221B Baker St">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="billing-city">City *</label>
                <input type="text" id="billing-city" required placeholder="Yerevan">
              </div>
              <div class="form-group">
                <label for="billing-zip">ZIP / Postal Code *</label>
                <input type="text" id="billing-zip" required placeholder="0000">
              </div>
            </div>
            <div class="form-group">
              <label for="shipping-method">Shipping *</label>
              <select id="shipping-method" style="display: none;">
                <option value="0">Standard Shipping (Free)</option>
                <option value="15">Express Delivery (֏15)</option>
              </select>
              <div class="custom-dropdown" id="checkout-shipping-dropdown">
                <button type="button" class="dropdown-trigger" id="checkout-shipping-trigger">
                  <span id="checkout-shipping-value" data-value="0">Standard Shipping (Free)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="chevron-icon" style="width: 10px; height: 10px; transition: transform 0.2s;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <ul class="dropdown-menu" id="checkout-shipping-menu">
                  <li class="dropdown-item active" data-value="0">Standard Shipping (Free)</li>
                  <li class="dropdown-item" data-value="15">Express Delivery (֏15)</li>
                </ul>
              </div>
            </div>
            <div style="margin-top: var(--spacing-lg);">
              <h3 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Payment</h3>
              <p style="font-size: 0.8rem; color: var(--color-medium-gray); margin-bottom: var(--spacing-sm);">Demo payment: Simulator mode. No real cards will be charged.</p>
              <div class="form-group">
                <input type="text" placeholder="Card Number" value="4111 2222 3333 4444" disabled style="background-color: var(--color-light-gray);">
              </div>
            </div>
            <button type="submit" class="btn-primary place-order-btn">Place Order</button>
          </form>
        </div>
        
        <!-- Order Summary Column -->
        <div class="order-summary-box">
          <h2 class="checkout-section-title serif-title">Your Order</h2>
          <div id="checkout-items-list" style="margin-bottom: var(--spacing-lg);">
            <!-- Populated dynamically -->
          </div>
          <div style="font-size: 0.9rem; display: flex; flex-direction: column; gap: 8px;">
            <div style="display:flex; justify-content:space-between;">
              <span>Subtotal:</span>
              <strong id="checkout-subtotal-val">֏0</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Shipping:</span>
              <strong id="checkout-shipping-val">Free</strong>
            </div>
            <div class="order-summary-total-row">
              <span>Total:</span>
              <strong id="checkout-total-val" style="font-size: 1.3rem;">֏0</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  // Re-bind listeners
  initEventListeners();
};

// BRIDGE FUNCTIONS FOR WOOCOMMERCE DASHBOARD
// (refreshAdminDashboard defined below with full implementation)

// Global scope hooks for Admin edits
window.saveProductInventory = async function (productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const priceInput = document.getElementById(`inv-price-${productId}`);
  const stockInput = document.getElementById(`inv-stock-${productId}`);

  if (priceInput && stockInput) {
    const newPrice = parseFloat(priceInput.value);
    const newStock = parseInt(stockInput.value);

    if (isNaN(newPrice) || newPrice <= 0) {
      showToast("INVALID PRICE VALUE.");
      return;
    }
    if (isNaN(newStock) || newStock < 0) {
      showToast("INVALID STOCK VALUE.");
      return;
    }

    product.price = newPrice;
    product.stock = newStock;

    // Recalculate stock badge (fully translated)
    const badge = document.getElementById(`inv-badge-${productId}`);
    if (badge) {
      badge.className = `admin-status-badge ${newStock > 0 ? 'badge-instock' : 'badge-outofstock'}`;
      const lang = AppState.language;
      const inStockText = (TRANSLATIONS[lang] && TRANSLATIONS[lang]['in_stock_label']) || 'In Stock';
      const outOfStockText = (TRANSLATIONS[lang] && TRANSLATIONS[lang]['out_of_stock_label']) || 'Out of Stock';
      badge.innerText = newStock > 0 ? inStockText : outOfStockText;
    }

    // Update size prices proportionally (with safety checks)
    if (product.sizes && product.sizes.length >= 3) {
      product.sizes[0].price = Math.round(newPrice * 0.615); // 50ml price ratio
      product.sizes[1].price = newPrice;                      // 100ml price
      product.sizes[2].price = Math.round(newPrice * 1.59);   // 200ml price
    } else if (product.sizes && product.sizes.length > 0) {
      // For products with fewer than 3 sizes, update the first one
      product.sizes[0].price = newPrice;
    }

    // Save to storage (await to ensure it persists to Sanity)
    try {
      await saveProductsToStorage();
    } catch (e) {
      console.error('[NOVA] Failed to save product inventory to Sanity:', e);
      showToast("ERROR: FAILED TO SAVE TO DATABASE. PLEASE TRY AGAIN.");
      return;
    }

    // Re-render shop views
    renderFeaturedProducts();
    renderShop();

    // Refresh dashboard calculations
    refreshAdminDashboard();

    // Log admin activity
    const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
    if (session) {
      logAdminActivity(session.name, `Updated inventory for ${product.name}: Price=֏${formatPrice(newPrice)}, Stock=${newStock}`);
    }

    showToast(`UPDATED ${product.name.toUpperCase()} STOCK AND PRICE.`);
  }
};

window.updateOrderState = async function (orderId, newStatus) {
  const success = WooCommerceAdmin.updateOrderStatus(orderId, newStatus);
  if (success) {
    // Ensure the save completes before continuing
    await WooCommerceAdmin.saveOrdersToStorage();
    refreshAdminDashboard();
    
    // Log admin activity
    const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
    if (session) {
      logAdminActivity(session.name, `Updated order status of #${orderId} to ${newStatus}`);
    }

    showToast(`ORDER #${orderId} SET TO ${newStatus.toUpperCase()}.`);
  }
};

// Reviews Slider Pagination Logic
document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('review-next');
  const prevBtn = document.getElementById('review-prev');
  const slider = document.getElementById('reviews-slider');

  if (nextBtn && prevBtn && slider) {
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 350, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -350, behavior: 'smooth' });
    });
  }

  const aboutNextBtn = document.getElementById('about-review-next');
  const aboutPrevBtn = document.getElementById('about-review-prev');
  const aboutSlider = document.getElementById('about-reviews-slider');

  if (aboutNextBtn && aboutPrevBtn && aboutSlider) {
    aboutNextBtn.addEventListener('click', () => {
      aboutSlider.scrollBy({ left: 350, behavior: 'smooth' });
    });
    aboutPrevBtn.addEventListener('click', () => {
      aboutSlider.scrollBy({ left: -350, behavior: 'smooth' });
    });
  }
});

// Rotate scroll text SVG on scroll
window.addEventListener('scroll', () => {
  const scrollSvg = document.querySelector('.scroll-svg');
  if (scrollSvg) {
    scrollSvg.style.transform = `rotate(${window.scrollY / 4}deg)`;
  }
});



function renderSearchDropdown(query, dropdown) {
  if (!query) {
    dropdown.classList.remove('active');
    dropdown.innerHTML = '';
    return;
  }

  const matches = AppState.products.filter(p => {
    const nameMatch = p.name && p.name.toLowerCase().includes(query);
    const taglineMatch = p.tagline && p.tagline.toLowerCase().includes(query);
    const categoryMatch = p.category && p.category.toLowerCase().includes(query);
    const brandMatch = p.brand && p.brand.toLowerCase().includes(query);
    const notesMatch = p.notes && (
      (p.notes.top && p.notes.top.some(n => n.toLowerCase().includes(query))) ||
      (p.notes.heart && p.notes.heart.some(n => n.toLowerCase().includes(query))) ||
      (p.notes.base && p.notes.base.some(n => n.toLowerCase().includes(query)))
    );
    return nameMatch || taglineMatch || categoryMatch || brandMatch || notesMatch;
  });

  if (matches.length === 0) {
    const noResultsText = TRANSLATIONS[AppState.language]['search_no_results'] || 'No olfactory notes found.';
    dropdown.innerHTML = `<div class="search-no-results">${noResultsText}</div>`;
  } else {
    dropdown.innerHTML = '';
    matches.slice(0, 5).forEach(prod => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.onclick = () => {
        openProductModal(prod.id);
      };

      item.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" class="search-result-thumb">
        <div class="search-result-info">
          <span class="search-result-name">${prod.name}</span>

        </div>
        <span class="search-result-price">֏${formatPrice(prod.price)}</span>
      `;
      dropdown.appendChild(item);
    });
  }

  dropdown.classList.add('active');
}

// ==========================================
// --- CUSTOM MY ACCOUNT ECOSYSTEM ---
// ==========================================

window.switchAccountTab = function(tabId) {
  // Toggle active tab buttons
  const sidebar = document.querySelector('.my-account-sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('.account-nav-btn').forEach(btn => {
      if (btn.getAttribute('data-account-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Toggle panels
  const content = document.querySelector('.my-account-content');
  if (content) {
    content.querySelectorAll('.account-panel').forEach(panel => {
      if (panel.id === `account-sec-${tabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }
};

window.saveCustomerDetails = function(event) {
  event.preventDefault();
  AppState.customer.firstName = document.getElementById('acc-first-name').value;
  AppState.customer.lastName = document.getElementById('acc-last-name').value;
  AppState.customer.email = document.getElementById('acc-email').value;
  AppState.customer.billing.street = document.getElementById('acc-billing-street').value;
  AppState.customer.billing.city = document.getElementById('acc-billing-city').value;
  AppState.customer.billing.zip = document.getElementById('acc-billing-zip').value;

  const passwordVal = document.getElementById('acc-password').value;
  if (passwordVal) {
    showToast("PASSWORD UPDATED SECURELY.");
    document.getElementById('acc-password').value = '';
  }

  // Update greeting
  const greetingEl = document.getElementById('customer-welcome-greeting');
  if (greetingEl) {
    greetingEl.innerText = AppState.language === 'am' ? `Ողջույն, ${AppState.customer.firstName}` :
                           AppState.language === 'ru' ? `Привет, ${AppState.customer.firstName}` :
                           `Hello, ${AppState.customer.firstName}`;
  }

  // Update header dropdown greeting too
  document.querySelectorAll('[data-trans="hello_user"]').forEach(el => {
    el.innerText = AppState.language === 'am' ? `Ողջույն, ${AppState.customer.firstName}` :
                   AppState.language === 'ru' ? `Привет, ${AppState.customer.firstName}` :
                   `Hello, ${AppState.customer.firstName}`;
  });

  showToast("ACCOUNT DETAILS SAVED.");
  renderMyAccount();
};

window.buyAgain = function(productId) {
  const prod = AppState.products.find(p => p.id === productId);
  if (prod) {
    addToCart(prod, '100ml', 1);
    openCartDrawer();
  }
};

window.toggleOutofStockNotification = function(productId) {
  const idx = AppState.outOfStockNotifications.indexOf(productId);
  if (idx > -1) {
    AppState.outOfStockNotifications.splice(idx, 1);
    showToast("RESTOCK NOTIFICATION REMOVED.");
  } else {
    AppState.outOfStockNotifications.push(productId);
    showToast("RESTOCK NOTIFICATION ENABLED.");
  }
  renderMyAccount();
};

window.renderMyAccount = function() {
  const customer = AppState.customer;
  
  // 1. Update Welcome Greeting
  const greetingEl = document.getElementById('customer-welcome-greeting');
  if (greetingEl) {
    greetingEl.innerText = AppState.language === 'am' ? `Ողջույն, ${customer.firstName}` :
                           AppState.language === 'ru' ? `Привет, ${customer.firstName}` :
                           `Hello, ${customer.firstName}`;
  }

  // 2. Populate Account Settings fields
  const fnInput = document.getElementById('acc-first-name');
  const lnInput = document.getElementById('acc-last-name');
  const emailInput = document.getElementById('acc-email');
  const streetInput = document.getElementById('acc-billing-street');
  const cityInput = document.getElementById('acc-billing-city');
  const zipInput = document.getElementById('acc-billing-zip');
  
  if (fnInput) fnInput.value = customer.firstName;
  if (lnInput) lnInput.value = customer.lastName;
  if (emailInput) emailInput.value = customer.email;
  if (streetInput) streetInput.value = customer.billing.street;
  if (cityInput) cityInput.value = customer.billing.city;
  if (zipInput) zipInput.value = customer.billing.zip;

  // 3. Render Scent Profile Summary Bars
  const barsContainer = document.getElementById('scent-wardrobe-summary-bars');
  if (barsContainer) {
    barsContainer.innerHTML = '';
    
    // Count scent families from pastPurchases
    const counts = { Woody: 0, Floral: 0, Citrus: 0, Amber: 0 };
    customer.pastPurchases.forEach(purchase => {
      const prod = AppState.products.find(p => p.id === purchase.id);
      if (prod) {
        counts[prod.category] = (counts[prod.category] || 0) + 1;
      }
    });

    const totalPurchases = customer.pastPurchases.length;
    
    if (totalPurchases === 0) {
      barsContainer.innerHTML = `<p style="font-size: 0.82rem; color: var(--color-medium-gray); font-style: italic;">No scent profile data available yet.</p>`;
    } else {
      Object.keys(counts).forEach(family => {
        const count = counts[family];
        const pct = Math.round((count / totalPurchases) * 100);
        
        const barDiv = document.createElement('div');
        barDiv.innerHTML = `
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
            <span>${family}</span>
            <span>${pct}%</span>
          </div>
          <div style="background-color: var(--color-light-gray); height: 6px; border-radius:3px; overflow:hidden;">
            <div style="background-color: var(--color-sage); width: ${pct}%; height: 100%;"></div>
          </div>
        `;
        barsContainer.appendChild(barDiv);
      });
    }
  }

  // 4. Render Scent Wardrobe Grid
  const wardrobeGrid = document.getElementById('account-wardrobe-grid');
  if (wardrobeGrid) {
    wardrobeGrid.innerHTML = '';
    if (customer.pastPurchases.length === 0) {
      wardrobeGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-medium-gray); padding: 40px 0; font-size: 0.9rem;" data-trans="acc_wardrobe_empty">Your scent wardrobe is empty.</div>`;
    } else {
      customer.pastPurchases.forEach(purchase => {
        const prod = AppState.products.find(p => p.id === purchase.id);
        if (prod) {
          const card = document.createElement('div');
          card.className = 'wardrobe-card';
          card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" class="wardrobe-img">
            <div class="wardrobe-info">
              <h4 class="serif-title" style="font-size: 1.1rem;">${prod.name}</h4>
              <p style="font-size: 0.75rem; color: var(--color-medium-gray);">${purchase.size} • Purchased on ${purchase.date}</p>
              <button class="btn-primary" onclick="buyAgain('${prod.id}')" style="font-size:0.7rem; padding: 6px 12px; margin-top: 8px;">Buy Again</button>
            </div>
          `;
          wardrobeGrid.appendChild(card);
        }
      });
    }
  }

  // 5. Render Personal Discount
  renderPersonalDiscount();

  // 6. Render Order History
  const ordersTbody = document.getElementById('account-orders-tbody');
  if (ordersTbody) {
    ordersTbody.innerHTML = '';
    if (customer.orders.length === 0) {
      ordersTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--color-medium-gray); padding: 30px;" data-trans="acc_orders_empty">No orders placed yet.</td></tr>`;
    } else {
      customer.orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>#${order.id}</strong></td>
          <td>${order.date}</td>
          <td>${order.items}</td>
          <td><strong>${order.total}</strong></td>
          <td><span class="admin-status-badge badge-${order.status}">${order.status}</span></td>
          <td><button class="btn-secondary" style="font-size:0.65rem; padding:4px 8px;" onclick="showToast('INVOICE DOWNLOAD SIMULATED')">Invoice</button></td>
        `;
        ordersTbody.appendChild(tr);
      });
    }
  }

  // 7. Render Wishlist
  const wishlistGrid = document.getElementById('account-wishlist-grid');
  if (wishlistGrid) {
    wishlistGrid.innerHTML = '';
    if (AppState.wishlist.length === 0) {
      wishlistGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-medium-gray); padding: 40px 0; font-size: 0.9rem;" data-trans="wishlist_empty_msg">Your wishlist is currently empty.</div>`;
    } else {
      AppState.wishlist.forEach(productId => {
        const prod = AppState.products.find(p => p.id === productId);
        if (prod) {
          const card = document.createElement('div');
          card.className = 'product-card';
          
          const isNotified = AppState.outOfStockNotifications.includes(prod.id);
          const notifyBtnText = isNotified ? 'Notification Active' : 'Notify Restock';
          const notifyBtnClass = isNotified ? 'btn-secondary' : 'btn-primary';
          
          card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" class="product-img">
            <div class="product-info">
              <h4 class="serif-title" style="font-size: 1.1rem;">${prod.name}</h4>
              <p style="font-size: 0.75rem; color: var(--color-medium-gray);">${prod.tagline}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                <strong>֏${formatPrice(prod.price)}</strong>
                ${prod.stock > 0 ? 
                  `<button class="btn-primary" onclick="buyAgain('${prod.id}')" style="font-size:0.65rem; padding: 4px 8px;">Add to Bag</button>` :
                  `<button class="${notifyBtnClass}" onclick="toggleOutofStockNotification('${prod.id}')" style="font-size:0.65rem; padding: 4px 8px;">${notifyBtnText}</button>`
                }
              </div>
            </div>
          `;
          wishlistGrid.appendChild(card);
        }
      });
    }
  }
};

function initMyAccountNavigation() {
  const sidebar = document.querySelector('.my-account-sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('.account-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-account-tab');
        if (tabId) {
          switchAccountTab(tabId);
        }
      });
    });
  }
}

// ==========================================
// --- WOOCOMMERCE ADMIN ACCESS CONTROL ---
// ==========================================

async function initStaffProfiles() {
  await NovaDB.whenReady();
  let parsed = NovaDB.getStaffProfiles() || {};
  
  if (!parsed['norayrnajaryann@gmail.com']) {
    parsed['norayrnajaryann@gmail.com'] = {
      username: 'norayrnajaryann@gmail.com',
      name: 'Norayr Najaryan',
      role: 'Super Admin',
      password: 'Ananan05021998!'
    };
    parsed['sarah@example.com'] = {
      username: 'sarah@example.com',
      name: 'Sarah Vance',
      role: 'Shop Manager',
      password: 'sarah123'
    };
    parsed['david@example.com'] = {
      username: 'david@example.com',
      name: 'David Cole',
      role: 'Shop Manager',
      password: 'david123'
    };
    NovaDB.saveStaffProfiles(parsed);
  }
}

function getStaffProfiles() {
  initStaffProfiles();
  return NovaDB.getStaffProfiles() || {};
}

function saveStaffProfiles(profiles) {
  NovaDB.saveStaffProfiles(profiles);
}

// submitAdminCredentials is defined in the Admin Access Control System section below

window.handleAdminLogout = function() {
  const currentSession = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (currentSession) {
    logAdminActivity(currentSession.name, "Logged out");
  }
  sessionStorage.removeItem('nova_admin_session');
  showToast("LOGGED OUT OF WOOCOMMERCE ADMIN PANEL.");
  
  document.getElementById('admin-dashboard-wrapper').classList.add('hidden');
  document.getElementById('admin-login-wrapper').classList.remove('hidden');
};

window.switchAdminTab = function(tabId) {
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (!session) return;
  
  // Block non-superadmin from developer settings tab
  if (tabId === 'developer' && session.role !== 'Super Admin') {
    showToast("ACCESS DENIED. DEVELOPER SETTINGS RESTRICTED TO SUPER ADMIN.");
    return;
  }

  // Toggle active tab buttons
  const sidebar = document.querySelector('.admin-sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('.admin-nav-item').forEach(btn => {
      if (btn.getAttribute('data-admin-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Toggle panels
  const content = document.querySelector('.admin-content');
  if (content) {
    content.querySelectorAll('.admin-panel-sub').forEach(panel => {
      if (panel.id === `admin-sec-${tabId}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }
  
  if (tabId === 'logs') {
    renderAuditLogsTable();
  }
};



window.logAdminActivity = function(actor, action) {
  let logs = NovaDB.getAuditLogs() || [];
  
  const dateObj = new Date();
  const timestamp = dateObj.getFullYear() + '-' + 
    String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + 
    String(dateObj.getDate()).padStart(2, '0') + ' ' + 
    String(dateObj.getHours()).padStart(2, '0') + ':' + 
    String(dateObj.getMinutes()).padStart(2, '0') + ':' +
    String(dateObj.getSeconds()).padStart(2, '0');
    
  logs.unshift({
    timestamp: timestamp,
    operator: actor,
    action: action
  });
  
  if (logs.length > 100) {
    logs = logs.slice(0, 100);
  }
  
  NovaDB.saveAuditLogs(logs);
};

window.clearAuditLogs = function() {
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (!session) return;
  
  if (session.role !== 'Super Admin') {
    showToast("ACCESS DENIED. ONLY SUPER ADMIN CAN CLEAR LOGS.");
    return;
  }
  
  NovaDB.saveAuditLogs([]);
  logAdminActivity(session.name, "Cleared platform audit logs history");
  showToast("AUDIT LOGS HISTORY CLEARED.");
  renderAuditLogsTable();
};

window.renderAuditLogsTable = function() {
  const tbody = document.getElementById('admin-audit-logs-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  let logs = NovaDB.getAuditLogs() || [];
  
  const lang = AppState.language;
  if (logs.length === 0) {
    const emptyText = TRANSLATIONS[lang]['admin_logs_empty'] || 'No logs recorded.';
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--color-medium-gray); padding: 20px;">${emptyText}</td></tr>`;
    return;
  }
  
  logs.forEach(log => {
    let actionText = log.action;
    
    // Localize log actions based on standard templates
    if (log.action.startsWith("Logged in successfully as ")) {
      const role = log.action.replace("Logged in successfully as ", "");
      const transRole = role === "Super Admin" ? (lang === 'am' ? "Սուպեր Ադմին" : lang === 'ru' ? "Супер Администратор" : "Super Admin") : (lang === 'am' ? "Խանութի Մենեջեր" : lang === 'ru' ? "Менеджер магазина" : "Shop Manager");
      actionText = lang === 'am' ? `Հաջողությամբ մուտք է գործել որպես ${transRole}` :
                   lang === 'ru' ? `Успешно вошел в систему как ${transRole}` :
                   `Logged in successfully as ${role}`;
    } else if (log.action === "Logged out") {
      actionText = lang === 'am' ? "Դուրս է գործել" :
                   lang === 'ru' ? "Вышел из системы" :
                   "Logged out";
    } else if (log.action.startsWith("Installed plugin: ")) {
    } else if (log.action.startsWith("Updated inventory for ")) {
      const match = log.action.match(/Updated inventory for (.+?): Price=\$(.+?), Stock=(.+)/);
      if (match) {
        const name = match[1];
        const price = match[2];
        const stock = match[3];
        actionText = lang === 'am' ? `Թարմացրել է ${name}-ի պաշարը՝ Գին=֏${price}, Քանակ=${stock}` :
                     lang === 'ru' ? `Обновил запасы для ${name}: Цена=֏${price}, Количество=${stock}` :
                     `Updated inventory for ${name}: Price=֏${price}, Stock=${stock}`;
      }
    } else if (log.action.startsWith("Updated order status of ")) {
      const match = log.action.match(/Updated order status of (.+?) to (.+)/);
      if (match) {
        const orderId = match[1];
        const status = match[2];
        const transStatus = status === 'pending' ? (lang === 'am' ? 'Ընթացքի մեջ' : lang === 'ru' ? 'В ожидании' : 'Pending') :
                            status === 'processing' ? (lang === 'am' ? 'Մշակվում է' : lang === 'ru' ? 'Обработка' : 'Processing') :
                            status === 'completed' ? (lang === 'am' ? 'Ավարտված' : lang === 'ru' ? 'Завершен' : 'Completed') :
                            status === 'failed' ? (lang === 'am' ? 'Ձախողված' : lang === 'ru' ? 'Ошибка' : 'Failed') : status;
        actionText = lang === 'am' ? `Փոխել է ${orderId} պատվերի կարգավիճակը՝ ${transStatus}` :
                     lang === 'ru' ? `Обновил статус заказа ${orderId} на ${transStatus}` :
                     `Updated order status of ${orderId} to ${status}`;
      }
    } else if (log.action.startsWith("Created/Edited detailed product fields for: ")) {
      const name = log.action.replace("Created/Edited detailed product fields for: ", "");
      actionText = lang === 'am' ? `Ստեղծել/Խմբագրել է ${name}-ի մանրամասն տվյալները` :
                   lang === 'ru' ? `Создал/Изменил подробные поля товара для: ${name}` :
                   `Created/Edited detailed product fields for: ${name}`;
    } else if (log.action === "Cleared platform audit logs history") {
      actionText = lang === 'am' ? "Մաքրել է հարթակի աուդիտի մատյանների պատմությունը" :
                   lang === 'ru' ? "Очистил историю журнала аудита платформы" :
                   "Cleared platform audit logs history";
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color: var(--color-medium-gray); font-family: monospace; font-size: 0.75rem;">${log.timestamp}</td>
      <td><strong>${log.operator}</strong></td>
      <td>${actionText}</td>
    `;
    tbody.appendChild(tr);
  });
};

window.refreshAdminDashboard = function() {
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (session) {
    const badge = document.getElementById('admin-user-role-badge');
    const nameEl = document.getElementById('admin-user-profile-name');
    if (badge) {
      const lang = AppState.language;
      const transRole = session.role === "Super Admin" ? 
        (lang === 'am' ? "Սուպեր Ադմին" : lang === 'ru' ? "Супер Администратор" : "Super Admin") : 
        (lang === 'am' ? "Խանութի Մենեջեր" : lang === 'ru' ? "Менеджер магазина" : "Shop Manager");
      badge.innerText = transRole;
      badge.style.display = 'inline-block';
    }
    if (nameEl) {
      nameEl.innerText = AppState.language === 'am' ? `Մուտք գործած է որպես ${session.name}` :
                         AppState.language === 'ru' ? `Вошел как ${session.name}` :
                         `Logged in as ${session.name}`;
    }
    
    // Hide/disable developer tab in sidebar for non-superadmin
    const devNavItem = document.getElementById('admin-nav-item-dev');
    if (devNavItem) {
      if (session.role === 'Super Admin') {
        devNavItem.style.opacity = '1';
        devNavItem.style.cursor = 'pointer';
      } else {
        devNavItem.style.opacity = '0.4';
        devNavItem.style.cursor = 'not-allowed';
      }
    }
  }
  
  if (typeof WooCommerceAdmin !== 'undefined') {
    WooCommerceAdmin.renderDashboard(AppState.products);
    WooCommerceAdmin.renderInventoryTable(AppState.products);
  }
  renderAuditLogsTable();
  if (typeof renderAdminAccessList === 'function') {
    renderAdminAccessList();
  }
};

window.checkAdminSession = function() {
  const loginWrapper = document.getElementById('admin-login-wrapper');
  const dashboardWrapper = document.getElementById('admin-dashboard-wrapper');
  
  // Already has admin session
  const adminSession = sessionStorage.getItem('nova_admin_session');
  if (adminSession) {
    if (loginWrapper) loginWrapper.classList.add('hidden');
    if (dashboardWrapper) dashboardWrapper.classList.remove('hidden');
    refreshAdminDashboard();
    return;
  }

  // Auto-login if current auth session is an admin email
  try {
    const authSession = JSON.parse(localStorage.getItem('nova_session'));
    if (authSession && typeof isAdminEmail === 'function' && isAdminEmail(authSession.email)) {
      const profile = {
        username: authSession.email,
        name: (authSession.firstName || '') + ' ' + (authSession.lastName || ''),
        role: authSession.email === 'norayrnajaryann@gmail.com' ? 'Super Admin' : 'Shop Manager'
      };
      sessionStorage.setItem('nova_admin_session', JSON.stringify(profile));
      if (loginWrapper) loginWrapper.classList.add('hidden');
      if (dashboardWrapper) dashboardWrapper.classList.remove('hidden');
      if (typeof logAdminActivity === 'function') {
        logAdminActivity(profile.name.trim(), 'Auto-authenticated as ' + profile.role);
      }
      refreshAdminDashboard();
      return;
    }
  } catch(e) {}

  // Not admin — show login form
  if (loginWrapper) loginWrapper.classList.remove('hidden');
  if (dashboardWrapper) dashboardWrapper.classList.add('hidden');
};

function initAdminNavigation() {
  const adminSidebar = document.querySelector('.admin-sidebar');
  if (adminSidebar) {
    adminSidebar.querySelectorAll('.admin-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-admin-tab');
        if (tabId) {
          switchAdminTab(tabId);
        }
      });
    });
  }
}

// Run initializations directly
initStaffProfiles();
initMyAccountNavigation();
initAdminNavigation();

// INSTAGRAM POST FEED INTERACTIONS
window.toggleInstaLike = function(btn, postId) {
  const card = btn.closest('.insta-post-card');
  if (card) {
    const likesEl = card.querySelector('.insta-post-likes strong');
    if (likesEl) {
      let currentLikes = parseInt(likesEl.innerText.replace(/,/g, ''), 10) || 0;
      let liked = btn.classList.toggle('liked');
      if (liked) {
        currentLikes += 1;
        let likedToast = 'POST LIKED';
        if (AppState.language === 'am') {
          likedToast = 'ՀԱՎԱՆԵԼ ԵՔ ԳՐԱՌՈՒՄԸ';
        } else if (AppState.language === 'ru') {
          likedToast = 'ВАМ ПОНРАВИЛАСЬ ЗАПИСЬ';
        }
        showToast(likedToast);
      } else {
        currentLikes -= 1;
      }
      likesEl.innerText = currentLikes.toLocaleString('en-US');

      // Update state and save
      if (postId) {
        const post = AppState.instagramPosts.find(p => p.id === postId);
        if (post) {
          post.likes = currentLikes;
          // Silently save to storage (don't re-render to avoid losing class active state)
          NovaDB.saveInstagramPosts(AppState.instagramPosts);
        }
      }
    }
  }
};

window.toggleInstaSave = function(btn) {
  const isSaved = btn.classList.toggle('saved');
  if (isSaved) {
    let saveToast = 'POST SAVED TO SCENT WARDROBE';
    if (AppState.language === 'am') {
      saveToast = 'ԳՐԱՌՈՒՄԸ ՊԱՀՊԱՆՎԵԼ Է ԲՈՒՅՐԵՐԻ ՊԱՀԱՐԱՆՈՒՄ';
    } else if (AppState.language === 'ru') {
      saveToast = 'ЗАПИСЬ СОХРАНЕНА В ГАРДЕРОБ АРОМАТОВ';
    }
    showToast(saveToast);
  }
};

// DYNAMIC INSTAGRAM MANAGER AND RENDERER
function saveInstagramPosts(posts) {
  NovaDB.saveInstagramPosts(posts);
  AppState.instagramPosts = posts;
  renderInstagramFeed();
}

function formatInstagramDate(dateStr, lang) {
  const postDate = new Date(dateStr);
  const today = new Date();
  
  // Set both to midnight to compare days
  postDate.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  
  const diffTime = today.getTime() - postDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 0) {
    if (lang === 'am') return 'ԱՅՍՕՐ';
    if (lang === 'ru') return 'СЕГОДНЯ';
    return 'TODAY';
  } else if (diffDays === 1) {
    if (lang === 'am') return '1 ՕՐ ԱՌԱՋ';
    if (lang === 'ru') return '1 ДЕНЬ НАЗАД';
    return '1 DAY AGO';
  } else if (diffDays < 7) {
    if (lang === 'am') return `${diffDays} ՕՐ ԱՌԱՋ`;
    if (lang === 'ru') {
      if (diffDays === 2 || diffDays === 3 || diffDays === 4) {
        return `${diffDays} ДНЯ НАЗАД`;
      }
      return `${diffDays} ДНЕЙ НАЗАД`;
    }
    return `${diffDays} DAYS AGO`;
  } else {
    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) {
      if (lang === 'am') return '1 ՇԱԲԱԹ ԱՌԱՋ';
      if (lang === 'ru') return '1 НЕДЕЛЮ НАЗАД';
      return '1 WEEK AGO';
    } else {
      if (lang === 'am') return `${diffWeeks} ՇԱԲԱԹ ԱՌԱՋ`;
      if (lang === 'ru') {
        if (diffWeeks === 2 || diffWeeks === 3 || diffWeeks === 4) {
          return `${diffWeeks} НЕДЕЛИ НАЗАД`;
        }
        return `${diffWeeks} НЕДЕЛЬ НАЗАД`;
      }
      return `${diffWeeks} WEEKS AGO`;
    }
  }
}

function renderInstagramFeed() {
  // Old manual IG grids removed. Live feed handled by IIFE at bottom of file.
}

function parseAndRenderShortcodes() {
  // Old shortcode parser removed. No longer needed.
}

window.switchCarouselImage = function(postId, index, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const card = document.getElementById(`insta-card-${postId}`);
  if (!card) return;
  const wrap = card.querySelector('.insta-post-image-wrap');
  if (!wrap) return;

  wrap.setAttribute('data-current-index', index);

  // Update active image
  const imgs = wrap.querySelectorAll('.insta-post-img');
  imgs.forEach((img, idx) => {
    if (idx === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });

  // Update active dot
  const dots = wrap.querySelectorAll('.carousel-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

window.navigateCarousel = function(postId, direction, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const card = document.getElementById(`insta-card-${postId}`);
  if (!card) return;
  const wrap = card.querySelector('.insta-post-image-wrap');
  if (!wrap) return;

  const imgs = wrap.querySelectorAll('.insta-post-img');
  const len = imgs.length;
  if (len <= 1) return;

  let currentIndex = parseInt(wrap.getAttribute('data-current-index') || '0', 10);
  let newIndex = (currentIndex + direction + len) % len;

  window.switchCarouselImage(postId, newIndex, event);
};



// --- FULL-PAGE PRODUCT EDITOR (WordPress-style) ---

// Helper to set checkbox states (works with pe- prefixed IDs)
function setEditorCheckboxes(prefix, values) {
  document.querySelectorAll(`[id^="${prefix}"]`).forEach(cb => cb.checked = false);
  (values || []).forEach(val => {
    const cb = document.getElementById(`${prefix}${val.toLowerCase().replace(/\s+/g, '')}`);
    if (cb) cb.checked = true;
  });
}

function getEditorCheckboxValues(prefix) {
  const values = [];
  document.querySelectorAll(`[id^="${prefix}"]`).forEach(cb => {
    if (cb.checked) values.push(cb.value);
  });
  return values;
}

// Populate brand dropdown in editor
function populateEditorBrandDropdown(selectedBrand) {
  const select = document.getElementById('pe-brand');
  if (!select) return;
  select.innerHTML = '';
  
  // Collect brands from DB, existing products, and ensure selected is included
  const dbBrands = NovaDB.getBrands() || [];
  const brandSet = new Set(Array.isArray(dbBrands) ? dbBrands.map(b => typeof b === 'string' ? b : (b.name || b)) : []);
  // Note: NOVA brand excluded from public-facing areas but available in admin editor
  
  // Add brands from all existing products
  if (AppState.products && AppState.products.length > 0) {
    AppState.products.forEach(p => {
      if (p.brand && p.brand.trim()) brandSet.add(p.brand.trim());
    });
  }
  
  // Always include the selected brand
  if (selectedBrand && selectedBrand.trim()) brandSet.add(selectedBrand.trim());
  
  // Sort alphabetically, but keep NOVA first
  const brandList = [...brandSet].sort((a, b) => {
    if (a === 'NOVA') return -1;
    if (b === 'NOVA') return 1;
    return a.localeCompare(b);
  });
  
  brandList.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    if (name === selectedBrand) opt.selected = true;
    select.appendChild(opt);
  });
}

// Tab switching
function initEditorTabs() {
  const nav = document.getElementById('pe-tabs-nav');
  if (!nav) return;
  nav.addEventListener('click', function(e) {
    const btn = e.target.closest('.pe-tab-btn');
    if (!btn) return;
    const tabId = btn.getAttribute('data-pe-tab');
    nav.querySelectorAll('.pe-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.pe-tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(`pe-panel-${tabId}`);
    if (panel) panel.classList.add('active');
  });
}

// Auto-generate slug from name
function initSlugGenerator() {
  const nameInput = document.getElementById('pe-product-name');
  const slugEl = document.getElementById('pe-slug');
  if (!nameInput || !slugEl) return;
  nameInput.addEventListener('input', function() {
    const slug = this.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    slugEl.textContent = slug || '\u2014';
  });
}

// Image handling for editor
window._editorUploadedImages = [];

function renderEditorImageGallery() {
  const previewWrap = document.getElementById('pe-image-preview-wrap');
  const galleryWrap = document.getElementById('pe-gallery');
  if (!previewWrap || !galleryWrap) return;
  const images = window._editorUploadedImages;
  if (images.length > 0) {
    previewWrap.innerHTML = `<img src="${images[0]}" class="pe-image-preview" alt="Product">`;
  } else {
    previewWrap.innerHTML = `<div class="pe-image-placeholder" onclick="document.getElementById('pe-image-file').click()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
      Click to upload
    </div>`;
  }
  galleryWrap.innerHTML = '';
  images.forEach((img, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'pe-gallery-thumb' + (idx === 0 ? ' active' : '');
    thumb.draggable = true;
    thumb.setAttribute('data-img-idx', idx);
    thumb.innerHTML = `
      <img src="${img}" alt="Gallery ${idx+1}">
      <button type="button" class="pe-gallery-remove" onclick="event.stopPropagation(); removeEditorImage(${idx})">\u00d7</button>
    `;
    thumb.addEventListener('click', () => setEditorMainImage(idx));
    // Drag & drop handlers
    thumb.addEventListener('dragstart', (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', idx.toString());
      thumb.classList.add('pe-dragging');
    });
    thumb.addEventListener('dragend', () => {
      thumb.classList.remove('pe-dragging');
      document.querySelectorAll('.pe-gallery-thumb.pe-drag-over').forEach(el => el.classList.remove('pe-drag-over'));
    });
    thumb.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      thumb.classList.add('pe-drag-over');
    });
    thumb.addEventListener('dragleave', () => {
      thumb.classList.remove('pe-drag-over');
    });
    thumb.addEventListener('drop', (e) => {
      e.preventDefault();
      thumb.classList.remove('pe-drag-over');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
      const toIdx = idx;
      if (fromIdx !== toIdx && !isNaN(fromIdx)) {
        const imgs = window._editorUploadedImages;
        const [moved] = imgs.splice(fromIdx, 1);
        imgs.splice(toIdx, 0, moved);
        renderEditorImageGallery();
        document.getElementById('pe-image-url').value = imgs[0] || '';
      }
    });
    galleryWrap.appendChild(thumb);
  });
  // Add "+" button to add more images
  const addBtn = document.createElement('div');
  addBtn.className = 'pe-gallery-add';
  addBtn.title = 'Add more images';
  addBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  addBtn.addEventListener('click', () => document.getElementById('pe-image-file').click());
  galleryWrap.appendChild(addBtn);
}

window.setEditorMainImage = function(idx) {
  const images = window._editorUploadedImages;
  if (idx >= 0 && idx < images.length) {
    const [img] = images.splice(idx, 1);
    images.unshift(img);
    renderEditorImageGallery();
    document.getElementById('pe-image-url').value = images[0] || '';
  }
};

window.removeEditorImage = function(idx) {
  window._editorUploadedImages.splice(idx, 1);
  renderEditorImageGallery();
  document.getElementById('pe-image-url').value = window._editorUploadedImages[0] || '';
};

// Convert any image data URL to WebP format using Canvas API
// Quality: starts at 0.92, iteratively reduces to fit under 200KB, never below 0.90
function convertToWebP(dataUrl, quality = 0.92) {
  return new Promise((resolve) => {
    if (!dataUrl.startsWith('data:image/')) {
      resolve(dataUrl);
      return;
    }
    const MAX_SIZE_BYTES = 200 * 1024; // 200 KB
    const MIN_QUALITY = 0.90;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // Iteratively reduce quality to stay under 200KB
      let currentQuality = quality;
      let webpUrl = canvas.toDataURL('image/webp', currentQuality);
      while (webpUrl.length > MAX_SIZE_BYTES * 1.37 && currentQuality > MIN_QUALITY) {
        // 1.37 factor: base64 is ~37% larger than raw bytes
        currentQuality -= 0.01;
        webpUrl = canvas.toDataURL('image/webp', currentQuality);
      }
      // If still too large at min quality, scale down the image dimensions
      if (webpUrl.length > MAX_SIZE_BYTES * 1.37) {
        const scale = Math.sqrt((MAX_SIZE_BYTES * 1.37) / webpUrl.length);
        canvas.width = Math.round(img.naturalWidth * scale);
        canvas.height = Math.round(img.naturalHeight * scale);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        webpUrl = canvas.toDataURL('image/webp', MIN_QUALITY);
      }
      const finalSizeKB = (webpUrl.length / 1024 / 1.37).toFixed(0);
      console.log(`[NOVA] WebP: quality=${currentQuality.toFixed(2)}, ~${finalSizeKB}KB`);
      resolve(webpUrl);
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function initEditorImageHandlers() {
  const fileInput = document.getElementById('pe-image-file');
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      Array.from(this.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = async function(e) {
          // Convert to WebP before storing
          const webpData = await convertToWebP(e.target.result);
          if (!window._editorUploadedImages.includes(webpData)) {
            window._editorUploadedImages.push(webpData);
          }
          renderEditorImageGallery();
          document.getElementById('pe-image-url').value = window._editorUploadedImages[0] || '';
        };
        reader.readAsDataURL(file);
      });
      this.value = '';
    });
  }
  const urlInput = document.getElementById('pe-image-url');
  if (urlInput) {
    urlInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const url = this.value.trim();
        if (url && !window._editorUploadedImages.includes(url)) {
          window._editorUploadedImages.unshift(url);
          renderEditorImageGallery();
        }
      }
    });
  }
}

// Stock status updater
function initStockStatus() {
  const stockInput = document.getElementById('pe-stock');
  const statusEl = document.getElementById('pe-stock-status');
  if (!stockInput || !statusEl) return;
  function updateStatus() {
    const val = parseInt(stockInput.value, 10);
    if (isNaN(val) || val <= 0) { statusEl.textContent = 'Out of stock'; statusEl.style.color = '#d63638'; }
    else if (val <= 5) { statusEl.textContent = `Low stock (${val} remaining)`; statusEl.style.color = '#dba617'; }
    else { statusEl.textContent = `In stock (${val} available)`; statusEl.style.color = '#00a32a'; }
  }
  stockInput.addEventListener('input', updateStatus);
  updateStatus();
}

// ---- DYNAMIC SIZE ROWS ----
let _sizeCounter = 0;

function createSizeRow(sizeLabel, priceValue, allowRemove) {
  _sizeCounter++;
  const uid = 'pe-size-' + _sizeCounter;
  const field = document.createElement('div');
  field.className = 'pe-price-field';
  field.setAttribute('data-size', sizeLabel);
  field.id = uid;
  field.innerHTML = `
    <label class="pe-label" style="font-size:0.7rem;font-weight:400;">${sizeLabel.toUpperCase()}</label>
    <span class="pe-currency">֏</span>
    <input type="number" class="pe-input" min="1" placeholder="—" value="${priceValue !== '' && priceValue !== undefined ? priceValue : ''}">
    ${allowRemove ? `<button type="button" class="pe-size-remove" title="Remove size" onclick="removeSizeRow('${uid}')">×</button>` : ''}
  `;
  return field;
}

function initDynamicSizes(sizesArray) {
  const container = document.getElementById('pe-sizes-container');
  if (!container) return;
  container.innerHTML = '';
  _sizeCounter = 0;
  sizesArray.forEach((s, i) => {
    // First size (100ml default) cannot be removed; all others can
    container.appendChild(createSizeRow(s.size, s.price, i > 0));
  });
}

window.addSizeRow = function() {
  const sizeValue = prompt('Enter size value (e.g. 30, 120, 250):');
  if (!sizeValue) return;
  const numericSize = parseInt(sizeValue.replace(/[^0-9]/g, ''), 10);
  if (isNaN(numericSize) || numericSize <= 0) {
    showToast('PLEASE ENTER A VALID SIZE NUMBER.');
    return;
  }
  const sizeLabel = numericSize + 'ml';
  // Check if this size already exists
  const existing = document.querySelector(`#pe-sizes-container .pe-price-field[data-size="${sizeLabel}"]`);
  if (existing) {
    showToast(`SIZE ${sizeLabel.toUpperCase()} ALREADY EXISTS.`);
    return;
  }
  const container = document.getElementById('pe-sizes-container');
  container.appendChild(createSizeRow(sizeLabel, '', true));
};

window.removeSizeRow = function(uid) {
  const field = document.getElementById(uid);
  if (field) field.remove();
};

// ---- OPEN PRODUCT EDITOR ----
window.openProductEditor = function(productId) {
  const page = document.getElementById('product-editor-page');
  if (!page) return;
  const isNew = !productId;
  const product = isNew ? null : AppState.products.find(p => p.id === productId);
  if (!isNew && !product) return;
  document.getElementById('pe-page-title').textContent = isNew ? 'Add New Product' : 'Edit Product';
  document.getElementById('pe-product-id').value = isNew ? '__NEW__' : product.id;
  const pubBtn = page.querySelector('.pe-publish-btn');
  if (pubBtn) pubBtn.textContent = isNew ? 'Publish' : 'Update';
  if (isNew) {
    document.getElementById('pe-product-name').value = '';
    document.getElementById('pe-slug').textContent = '\u2014';
    populateEditorBrandDropdown('NOVA');
    document.getElementById('pe-sku').value = '';
    document.getElementById('pe-tagline').value = '';
    document.getElementById('pe-description').value = '';
    document.getElementById('pe-ingredients').value = '';
    initDynamicSizes([{ size: '100ml', price: '' }]);
    document.getElementById('pe-stock').value = 0;
    document.getElementById('pe-notes-top').value = '';
    document.getElementById('pe-notes-heart').value = '';
    document.getElementById('pe-notes-base').value = '';
    document.getElementById('pe-family').value = 'woody';
    document.getElementById('pe-gender').value = 'unisex';
    document.getElementById('pe-rating').value = '';
    document.getElementById('pe-reviews').value = '';
    document.getElementById('pe-featured').checked = false;
    document.getElementById('pe-image-url').value = '';
    setEditorCheckboxes('pe-tag-', []);
    setEditorCheckboxes('pe-vibe-', []);
    window._editorUploadedImages = [];
  } else {
    document.getElementById('pe-product-name').value = product.name;
    document.getElementById('pe-slug').textContent = product.id;
    populateEditorBrandDropdown(product.brand || 'NOVA');
    document.getElementById('pe-sku').value = product.sku || '';
    document.getElementById('pe-tagline').value = product.tagline || '';
    document.getElementById('pe-description').value = product.description || '';
    document.getElementById('pe-ingredients').value = product.ingredients || '';
    const existingSizes = (product.sizes || []).length > 0
      ? product.sizes.map(s => ({ size: s.size, price: s.price > 0 ? s.price : '' }))
      : [{ size: '100ml', price: '' }];
    initDynamicSizes(existingSizes);
    document.getElementById('pe-stock').value = product.stock || 0;
    document.getElementById('pe-notes-top').value = product.notes?.top?.join(', ') || '';
    document.getElementById('pe-notes-heart').value = product.notes?.heart?.join(', ') || '';
    document.getElementById('pe-notes-base').value = product.notes?.base?.join(', ') || '';
    document.getElementById('pe-family').value = product.scent_family || 'woody';
    document.getElementById('pe-gender').value = product.gender_id || 'unisex';
    document.getElementById('pe-rating').value = product.rating || '';
    document.getElementById('pe-reviews').value = product.reviewsCount || '';
    document.getElementById('pe-featured').checked = !!product.featured;
    document.getElementById('pe-image-url').value = product.image || '';
    setEditorCheckboxes('pe-tag-', product.tags || []);
    setEditorCheckboxes('pe-vibe-', product.vibes || []);
    window._editorUploadedImages = [];
    if (product.image) window._editorUploadedImages.push(product.image);
    if (product.images) {
      product.images.forEach(img => {
        if (!window._editorUploadedImages.includes(img)) window._editorUploadedImages.push(img);
      });
    }
  }
  renderEditorImageGallery();
  initStockStatus();
  document.querySelectorAll('.pe-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pe-tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector('[data-pe-tab="general"]')?.classList.add('active');
  document.getElementById('pe-panel-general')?.classList.add('active');
  page.style.display = 'block';
  page.scrollTop = 0;
  document.body.style.overflow = 'hidden';
};

// Backward-compatible aliases
window.openDetailedProductModal = function(productId) { window.openProductEditor(productId); };
window.openNewProductModal = function() { window.openProductEditor(null); };

// ---- CLOSE PRODUCT EDITOR ----
window.closeProductEditor = function() {
  const page = document.getElementById('product-editor-page');
  if (page) { page.style.display = 'none'; document.body.style.overflow = ''; }
};
window.closeDetailedProductModal = function() { window.closeProductEditor(); };

// ---- SAVE FROM EDITOR ----
window.saveProductFromEditor = async function() {
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (!session) { showToast("ADMIN SESSION EXPIRED. PLEASE RE-LOGIN."); return; }

  // ---- Button loading animation ----
  const publishBtn = document.querySelector('.pe-publish-btn');
  const originalBtnText = publishBtn ? publishBtn.textContent : 'Update';
  if (publishBtn) {
    publishBtn.textContent = 'SAVING...';
    publishBtn.disabled = true;
    publishBtn.classList.add('pe-btn-saving');
  }

  try {
    const productId = document.getElementById('pe-product-id').value;
    const isNewProduct = (productId === '__NEW__');
    let product = isNewProduct ? {} : AppState.products.find(p => p.id === productId);
    if (!product) { _restoreBtn(); return; }
    const newName = document.getElementById('pe-product-name').value.trim();
    const newBrand = document.getElementById('pe-brand').value.trim();
    const newSku = document.getElementById('pe-sku').value.trim();
    const newTagline = document.getElementById('pe-tagline').value.trim();
    const newDescription = document.getElementById('pe-description').value.trim();
    const newIngredients = document.getElementById('pe-ingredients').value.trim();
    const newImage = document.getElementById('pe-image-url').value.trim() || (window._editorUploadedImages[0] || '');
    const newScentFamily = document.getElementById('pe-family').value;
    const newGenderId = document.getElementById('pe-gender').value;
    // Collect dynamic sizes from all size rows
    const newSizes = [];
    document.querySelectorAll('#pe-sizes-container .pe-price-field').forEach(field => {
      const sizeLabel = field.getAttribute('data-size');
      const priceInput = field.querySelector('.pe-input');
      const priceVal = priceInput ? parseFloat(priceInput.value) : NaN;
      if (sizeLabel && !isNaN(priceVal) && priceVal > 0) {
        newSizes.push({ size: sizeLabel, price: Math.round(priceVal) });
      }
    });
    const newStock = parseInt(document.getElementById('pe-stock').value, 10);
    const notesTop = document.getElementById('pe-notes-top').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const notesHeart = document.getElementById('pe-notes-heart').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const notesBase = document.getElementById('pe-notes-base').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const newTags = getEditorCheckboxValues('pe-tag-');
    const newVibes = getEditorCheckboxValues('pe-vibe-');
    const newRating = parseFloat(document.getElementById('pe-rating').value) || 0;
    const newReviewsCount = parseInt(document.getElementById('pe-reviews').value, 10) || 0;
    const newFeatured = document.getElementById('pe-featured').checked;
    if (!newName || !newBrand || !newDescription || newSizes.length === 0 || isNaN(newStock)) {
      showToast("PLEASE FILL IN ALL REQUIRED FIELDS. AT LEAST ONE SIZE PRICE IS REQUIRED.");
      _restoreBtn();
      return;
    }
    if (isNewProduct && !newImage) {
      showToast("PLEASE ADD AT LEAST ONE PRODUCT IMAGE.");
      _restoreBtn();
      return;
    }

    // Generate product ID early for new products (needed for image upload path)
    if (isNewProduct) {
      product.id = newName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);
    }

    // ---- Upload images to Sanity Assets ----
    const finalProductId = isNewProduct ? product.id : productId;
    const uploadedImages = [];
    if (publishBtn) publishBtn.textContent = 'UPLOADING...';

    for (let i = 0; i < window._editorUploadedImages.length; i++) {
      const imgSrc = window._editorUploadedImages[i];
      if (imgSrc.startsWith('data:')) {
        // Base64 image — upload to Sanity
        const url = await NovaSanity.uploadImage(imgSrc, finalProductId, i);
        uploadedImages.push(url);
      } else {
        // Already a URL — keep as-is
        uploadedImages.push(imgSrc);
      }
    }

    // Also handle the main image URL if it was pasted (not from the gallery)
    let finalMainImage = uploadedImages[0] || '';
    if (newImage && newImage.startsWith('data:') && !uploadedImages.includes(newImage)) {
      finalMainImage = await NovaSanity.uploadImage(newImage, finalProductId, 999);
    } else if (newImage && !newImage.startsWith('data:')) {
      finalMainImage = newImage;
    }

    if (publishBtn) publishBtn.textContent = 'SAVING...';

    const mainPrice = newSizes[0].price;
    product.name = newName;
    product.brand = newBrand;
    product.tagline = newTagline;
    product.description = newDescription;
    product.ingredients = newIngredients;
    product.image = finalMainImage;
    product.images = uploadedImages;
    product.scent_family = newScentFamily;
    product.gender_id = newGenderId;
    product.price = mainPrice;
    product.stock = newStock;
    product.tags = newTags;
    product.vibes = newVibes;
    product.rating = newRating;
    product.reviewsCount = newReviewsCount;
    product.featured = newFeatured;
    product.sizes = newSizes;
    product.sku = newSku;
    product.notes = { top: notesTop, heart: notesHeart, base: notesBase };

    // Update the editor gallery with uploaded URLs (replace base64 with URLs)
    window._editorUploadedImages = uploadedImages;
    document.getElementById('pe-image-url').value = finalMainImage;

    if (isNewProduct) {
      Object.defineProperty(product, 'category', {
        get() { const fam = window.GLOBAL_ATTRIBUTES.scent_families[product.scent_family]; return fam ? fam.label.en : ""; },
        configurable: true, enumerable: true
      });
      Object.defineProperty(product, 'gender', {
        get() { const g = window.GLOBAL_ATTRIBUTES.genders[product.gender_id]; return g ? g.label.en : ""; },
        configurable: true, enumerable: true
      });
      AppState.products.push(product);
      logAdminActivity(session.name, `Created new product: ${product.name}`);
      showToast(`SUCCESSFULLY CREATED ${product.name.toUpperCase()}.`);
    } else {
      logAdminActivity(session.name, `Edited product details for: ${product.name}`);
      showToast(`SUCCESSFULLY UPDATED ${product.name.toUpperCase()} DETAILS.`);
    }
    await saveProductsToStorage();
    
    // Auto-translate product text to RU/HY
    showToast('TRANSLATING PRODUCT TO RU/HY...');
    try {
      await translateProductFields(product);
      await saveAllTranslations();
    } catch (e) {
      console.warn('[NOVA] Auto-translation failed:', e);
    }
    
    renderFeaturedProducts();
    renderShop();
    refreshAdminDashboard();
    closeProductEditor();
  } catch (err) {
    console.error('[NOVA] Save failed:', err);
    showToast('SAVE FAILED: ' + err.message);
  } finally {
    _restoreBtn();
  }

  function _restoreBtn() {
    if (publishBtn) {
      publishBtn.textContent = originalBtnText;
      publishBtn.disabled = false;
      publishBtn.classList.remove('pe-btn-saving');
    }
  }
};

// Keep old function name as alias
window.saveDetailedProduct = function(event) {
  if (event) event.preventDefault();
  window.saveProductFromEditor();
};

// Initialize editor event handlers on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  initEditorTabs();
  initSlugGenerator();
  initEditorImageHandlers();
});

// --- PRODUCT MANAGEMENT ACTIONS ---

// Trash management
function getTrash() {
  return NovaDB.getTrash() || [];
}

function saveTrash(trash) {
  NovaDB.saveTrash(trash);
}

window.deleteProduct = async function(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;
  
  if (!confirm(`Move "${product.name}" to trash?`)) return;
  
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  const idx = AppState.products.findIndex(p => p.id === productId);
  if (idx !== -1) {
    // Move to trash with deletion timestamp
    const trashedProduct = { ...product, deletedAt: new Date().toISOString() };
    const trash = getTrash();
    trash.unshift(trashedProduct);
    saveTrash(trash);

    AppState.products.splice(idx, 1);
    await saveProductsToStorage();
    renderFeaturedProducts();
    renderShop();
    refreshAdminDashboard();
    
    if (session) {
      logAdminActivity(session.name, `Moved to trash: ${product.name}`);
    }
    showToast(`"${product.name.toUpperCase()}" MOVED TO TRASH.`);
  }
};

window.restoreFromTrash = function(productId) {
  const trash = getTrash();
  const idx = trash.findIndex(p => p.id === productId);
  if (idx === -1) return;

  const product = { ...trash[idx] };
  delete product.deletedAt;
  trash.splice(idx, 1);
  saveTrash(trash);

  AppState.products.push(product);
  saveProductsToStorage();
  renderFeaturedProducts();
  renderShop();
  refreshAdminDashboard();
  renderTrashList();

  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (session) logAdminActivity(session.name, `Restored from trash: ${product.name}`);
  showToast(`"${product.name.toUpperCase()}" RESTORED.`);
};

window.permanentlyDelete = function(productId) {
  if (!confirm('Permanently delete this product? This cannot be undone.')) return;
  const trash = getTrash().filter(p => p.id !== productId);
  saveTrash(trash);
  renderTrashList();
  showToast('PRODUCT PERMANENTLY DELETED.');
};

window.emptyTrash = function() {
  const trash = getTrash();
  if (trash.length === 0) { showToast('TRASH IS ALREADY EMPTY.'); return; }
  if (!confirm(`Permanently delete all ${trash.length} product(s) in trash?`)) return;
  saveTrash([]);
  renderTrashList();
  showToast('TRASH EMPTIED.');
};

function renderTrashList() {
  const container = document.getElementById('admin-trash-list');
  const emptyMsg = document.getElementById('admin-trash-empty');
  if (!container) return;

  const trash = getTrash();
  
  if (trash.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  container.innerHTML = trash.map(product => {
    const deletedDate = product.deletedAt ? new Date(product.deletedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Unknown';
    return `
      <div style="display:flex; align-items:center; gap:14px; padding:12px 14px; border:1px solid var(--color-border); border-radius:6px; background:var(--color-white); margin-bottom:8px; flex-wrap:wrap;">
        <input type="checkbox" class="trash-row-checkbox" value="${product.id}" style="cursor:pointer;">
        <img src="${product.image}" alt="${product.name}" style="width:50px; height:50px; object-fit:cover; border-radius:4px; border:1px solid var(--color-border);">
        <div style="flex:1; min-width:120px;">
          <div style="font-size:0.85rem; font-weight:600;">${product.name}</div>
          <div style="font-size:0.7rem; color:var(--color-medium-gray);">${product.brand} · Deleted ${deletedDate}</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button onclick="restoreFromTrash('${product.id}')" style="padding:6px 14px; font-size:0.7rem; border:1px solid var(--color-sage); background:none; color:var(--color-sage); border-radius:4px; cursor:pointer; font-weight:600; text-transform:uppercase; transition:all 0.2s;" onmouseover="this.style.background='var(--color-sage)';this.style.color='#fff'" onmouseout="this.style.background='none';this.style.color='var(--color-sage)'">Restore</button>
          <button onclick="permanentlyDelete('${product.id}')" style="padding:6px 14px; font-size:0.7rem; border:1px solid #c00; background:none; color:#c00; border-radius:4px; cursor:pointer; font-weight:600; text-transform:uppercase; transition:all 0.2s;" onmouseover="this.style.background='#c00';this.style.color='#fff'" onmouseout="this.style.background='none';this.style.color='#c00'">Delete</button>
        </div>
      </div>
    `;
  }).join('');

  // Reset select-all
  const selectAll = document.getElementById('trash-select-all');
  if (selectAll) selectAll.checked = false;
}

window.toggleAllTrashCheckboxes = function(checked) {
  document.querySelectorAll('.trash-row-checkbox').forEach(cb => { cb.checked = checked; });
};

window.executeTrashBulkAction = function() {
  const actionSelect = document.getElementById('trash-bulk-action-select');
  const action = actionSelect ? actionSelect.value : '';

  if (!action) { showToast('PLEASE SELECT A BULK ACTION.'); return; }

  const checkedIds = [];
  document.querySelectorAll('.trash-row-checkbox:checked').forEach(cb => { checkedIds.push(cb.value); });

  if (checkedIds.length === 0) { showToast('NO PRODUCTS SELECTED.'); return; }

  if (action === 'restore') {
    if (!confirm(`Restore ${checkedIds.length} product(s)?`)) return;
    const trash = getTrash();
    const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));

    checkedIds.forEach(id => {
      const idx = trash.findIndex(p => p.id === id);
      if (idx !== -1) {
        const product = { ...trash[idx] };
        delete product.deletedAt;
        trash.splice(idx, 1);
        AppState.products.push(product);
      }
    });

    saveTrash(trash);
    saveProductsToStorage();
    renderFeaturedProducts();
    renderShop();
    refreshAdminDashboard();
    renderTrashList();
    if (session) logAdminActivity(session.name, `Bulk restored ${checkedIds.length} product(s) from trash`);
    showToast(`${checkedIds.length} PRODUCT(S) RESTORED.`);
  }

  if (action === 'delete') {
    if (!confirm(`Permanently delete ${checkedIds.length} product(s)? This cannot be undone.`)) return;
    let trash = getTrash().filter(p => !checkedIds.includes(p.id));
    saveTrash(trash);
    renderTrashList();
    showToast(`${checkedIds.length} PRODUCT(S) PERMANENTLY DELETED.`);
  }

  if (actionSelect) actionSelect.value = '';
};

window.toggleProductFeatured = function(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;
  
  product.featured = !product.featured;
  saveProductsToStorage();
  renderFeaturedProducts();
  refreshAdminDashboard();
  
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (session) {
    logAdminActivity(session.name, `${product.featured ? 'Featured' : 'Unfeatured'} product: ${product.name}`);
  }
  showToast(`${product.name.toUpperCase()} ${product.featured ? 'MARKED AS FEATURED' : 'REMOVED FROM FEATURED'}.`);
};

window.deleteProduct = async function(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;
  
  const confirmed = confirm(`Are you sure you want to delete "${product.name}"? This cannot be undone.`);
  if (!confirmed) return;
  
  // Remove from AppState
  AppState.products = AppState.products.filter(p => p.id !== productId);
  
  // Delete from Sanity CMS
  try {
    await NovaSanity.deleteProduct(productId);
  } catch (e) {
    console.warn('[NOVA] Failed to delete from Sanity:', e);
  }
  
  // Update local storage and UI
  saveProductsToStorage();
  renderShop();
  renderFeaturedProducts();
  refreshAdminDashboard();
  
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (session) {
    logAdminActivity(session.name, `Deleted product: ${product.name}`);
  }
  showToast(`"${product.name}" HAS BEEN DELETED.`);
};

window.filterInventoryTable = function(query) {
  const tbody = document.getElementById('admin-inventory-tbody');
  if (!tbody) return;
  
  const rows = tbody.querySelectorAll('tr');
  const q = query.toLowerCase().trim();
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = !q || text.includes(q) ? '' : 'none';
  });
};

// --- BULK ACTIONS ---
window.toggleAllInventoryCheckboxes = function(checked) {
  document.querySelectorAll('.inv-row-checkbox').forEach(cb => {
    // Only toggle visible rows
    const row = cb.closest('tr');
    if (row && row.style.display !== 'none') {
      cb.checked = checked;
    }
  });
};

window.executeBulkAction = async function() {
  const actionSelect = document.getElementById('bulk-action-select');
  const action = actionSelect ? actionSelect.value : '';
  
  if (!action) {
    showToast('PLEASE SELECT A BULK ACTION.');
    return;
  }

  const checkedIds = [];
  document.querySelectorAll('.inv-row-checkbox:checked').forEach(cb => {
    checkedIds.push(cb.value);
  });

  if (checkedIds.length === 0) {
    showToast('NO PRODUCTS SELECTED.');
    return;
  }

  if (action === 'trash') {
    if (!confirm(`Move ${checkedIds.length} product(s) to trash?`)) return;

    const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
    const trash = getTrash();
    const names = [];

    checkedIds.forEach(productId => {
      const idx = AppState.products.findIndex(p => p.id === productId);
      if (idx !== -1) {
        const product = AppState.products[idx];
        names.push(product.name);
        trash.unshift({ ...product, deletedAt: new Date().toISOString() });
        AppState.products.splice(idx, 1);
      }
    });

    saveTrash(trash);
    await saveProductsToStorage();
    renderFeaturedProducts();
    renderShop();
    refreshAdminDashboard();

    if (session) {
      logAdminActivity(session.name, `Bulk moved to trash: ${names.join(', ')}`);
    }
    showToast(`${checkedIds.length} PRODUCT(S) MOVED TO TRASH.`);
    
    // Reset select-all checkbox
    const selectAll = document.getElementById('inv-select-all');
    if (selectAll) selectAll.checked = false;
    
    // Reset dropdown
    if (actionSelect) actionSelect.value = '';
  }
};

// --- ORDER MANAGEMENT ACTIONS ---

window.deleteOrder = async function(orderId) {
  if (!confirm(`Are you sure you want to delete order #${orderId}? This action cannot be undone.`)) return;
  
  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (typeof WooCommerceAdmin !== 'undefined') {
    const idx = WooCommerceAdmin.orders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
      WooCommerceAdmin.orders.splice(idx, 1);
      await WooCommerceAdmin.saveOrdersToStorage();
      refreshAdminDashboard();
      
      if (session) {
        logAdminActivity(session.name, `Deleted order #${orderId}`);
      }
      showToast(`ORDER #${orderId} DELETED.`);
    }
  }
};
// ============================================
// BRAND MANAGEMENT SYSTEM
// ============================================

// Default brands
const DEFAULT_BRANDS = ['Dior', 'Chanel', 'Tom Ford', 'Versace', 'Paco Rabanne', 'Yves Saint Laurent', 'Giorgio Armani', 'Gucci', 'Burberry', 'Dolce & Gabbana', 'Hermès', 'Lancôme', 'Calvin Klein', 'Hugo Boss', 'Givenchy', 'Prada', 'Valentino', 'Bvlgari', 'Montblanc'];

function getBrands() {
  const stored = NovaDB.getBrands();
  if (stored !== null) {
    // Document exists in Firestore — use it (even if empty, that means admin deleted all)
    return stored;
  }
  // First run ONLY: no brands doc exists in Firestore — seed with defaults
  const productBrands = (AppState.products || []).map(p => p.brand).filter(Boolean);
  const allBrands = [...new Set([...DEFAULT_BRANDS, ...productBrands])].sort((a, b) => a.localeCompare(b));
  NovaDB.saveBrands(allBrands);
  return allBrands;
}

// Render the homepage brand slider from admin Brands list
function renderBrandSlider() {
  const list1 = document.getElementById('brand-slider-list-1');
  const list2 = document.getElementById('brand-slider-list-2');
  if (!list1 || !list2) return;

  const brands = getBrands().filter(b => b.toUpperCase() !== 'NOVA');
  const buildItems = () => brands.map(brand => {
    const span = document.createElement('span');
    span.className = 'brand-slider-item';
    span.textContent = brand;
    span.addEventListener('click', () => {
      window.location.hash = '#/shop';
      if (typeof applyPresetFilter === 'function') applyPresetFilter('brand', brand);
    });
    return span;
  });

  list1.innerHTML = '';
  list2.innerHTML = '';
  buildItems().forEach(el => list1.appendChild(el));
  buildItems().forEach(el => list2.appendChild(el));
}

function saveBrands(brands) {
  NovaDB.saveBrands(brands);
  renderBrandSlider();
}

window.addNewBrand = function() {
  const input = document.getElementById('admin-new-brand-input');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;

  const brands = getBrands();
  if (brands.some(b => b.toLowerCase() === name.toLowerCase())) {
    showToast('BRAND ALREADY EXISTS.');
    return;
  }
  brands.push(name);
  brands.sort((a, b) => a.localeCompare(b));
  saveBrands(brands);
  input.value = '';
  renderBrandsList();
  showToast(`BRAND "${name}" ADDED.`);
};

window.removeBrand = function(brandName) {
  const brands = getBrands().filter(b => b !== brandName);
  saveBrands(brands);
  renderBrandsList();
  showToast(`BRAND "${brandName}" REMOVED.`);
};

function renderBrandsList() {
  const container = document.getElementById('admin-brands-list');
  if (!container) return;
  const brands = getBrands();
  container.innerHTML = brands.map(brand => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border:1px solid var(--color-border); border-radius:6px; background:var(--color-white);">
      <span style="font-size:0.85rem; font-weight:500;">${brand}</span>
      <button type="button" onclick="removeBrand('${brand.replace(/'/g, "\\'")}')" style="background:none; border:none; cursor:pointer; color:var(--color-medium-gray); font-size:1.1rem; padding:0 4px; line-height:1; transition:color 0.2s;" onmouseover="this.style.color='#c00'" onmouseout="this.style.color='var(--color-medium-gray)'">&times;</button>
    </div>
  `).join('');
}

function populateBrandDropdown(selectedBrand) {
  const select = document.getElementById('modal-product-brand');
  if (!select) return;
  const brands = getBrands();
  select.innerHTML = brands.map(b => `<option value="${b}" ${b === selectedBrand ? 'selected' : ''}>${b}</option>`).join('');
}

// Inventory sub-tab switching
window.switchInventorySubTab = function(tabName) {
  document.querySelectorAll('.inv-sub-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.inventory-sub-tab').forEach(btn => {
    btn.style.color = 'var(--color-medium-gray)';
    btn.style.borderBottomColor = 'transparent';
    btn.classList.remove('active');
  });

  const panel = document.getElementById('inv-sub-' + tabName);
  if (panel) panel.style.display = 'block';

  const tab = document.querySelector(`.inventory-sub-tab[data-inv-tab="${tabName}"]`);
  if (tab) {
    tab.style.color = 'var(--color-black)';
    tab.style.borderBottomColor = 'var(--color-black)';
    tab.classList.add('active');
  }

  if (tabName === 'brands') {
    renderBrandsList();
  } else if (tabName === 'trash') {
    renderTrashList();
  }
};

// Multi-image gallery for product modal
window._modalUploadedImages = [];

function renderModalImageGallery() {
  const gallery = document.getElementById('modal-product-images-gallery');
  if (!gallery) return;
  gallery.innerHTML = '';

  window._modalUploadedImages.forEach((imgSrc, idx) => {
    const thumb = document.createElement('div');
    thumb.style.cssText = 'position:relative; width:70px; height:70px; border:1px solid var(--color-border); border-radius:6px; overflow:hidden; cursor:grab; flex-shrink:0;';
    thumb.draggable = true;
    thumb.dataset.imgIdx = idx;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = 'width:100%; height:100%; object-fit:cover;';
    thumb.appendChild(img);

    // Index badge
    const badge = document.createElement('span');
    badge.textContent = idx + 1;
    badge.style.cssText = 'position:absolute; top:2px; left:2px; background:rgba(0,0,0,0.6); color:#fff; font-size:0.6rem; padding:1px 5px; border-radius:3px;';
    thumb.appendChild(badge);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerHTML = '&times;';
    removeBtn.style.cssText = 'position:absolute; top:2px; right:2px; background:rgba(0,0,0,0.6); color:#fff; border:none; border-radius:50%; width:18px; height:18px; font-size:0.75rem; cursor:pointer; display:flex; align-items:center; justify-content:center; line-height:1; padding:0;';
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window._modalUploadedImages.splice(idx, 1);
      syncMainImageFromGallery();
      renderModalImageGallery();
    });
    thumb.appendChild(removeBtn);

    // Drag events
    thumb.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', idx);
      thumb.style.opacity = '0.4';
    });
    thumb.addEventListener('dragend', () => { thumb.style.opacity = '1'; });
    thumb.addEventListener('dragover', (e) => {
      e.preventDefault();
      thumb.style.outline = '2px solid var(--color-sage)';
    });
    thumb.addEventListener('dragleave', () => { thumb.style.outline = 'none'; });
    thumb.addEventListener('drop', (e) => {
      e.preventDefault();
      thumb.style.outline = 'none';
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'));
      const toIdx = idx;
      if (fromIdx === toIdx) return;
      const [moved] = window._modalUploadedImages.splice(fromIdx, 1);
      window._modalUploadedImages.splice(toIdx, 0, moved);
      syncMainImageFromGallery();
      renderModalImageGallery();
    });

    gallery.appendChild(thumb);
  });
}

function syncMainImageFromGallery() {
  const urlField = document.getElementById('modal-product-image');
  if (urlField && window._modalUploadedImages.length > 0) {
    urlField.value = window._modalUploadedImages[0];
  }
}

// Convert an image file to WebP using Canvas API
// Same quality constraints: 92% start, 90% min, 200KB max
function convertFileToWebP(file, quality = 0.92) {
  return new Promise((resolve) => {
    const MAX_SIZE_BYTES = 200 * 1024;
    const MIN_QUALITY = 0.90;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        let currentQuality = quality;
        let webpDataUrl = canvas.toDataURL('image/webp', currentQuality);
        while (webpDataUrl.length > MAX_SIZE_BYTES * 1.37 && currentQuality > MIN_QUALITY) {
          currentQuality -= 0.01;
          webpDataUrl = canvas.toDataURL('image/webp', currentQuality);
        }
        if (webpDataUrl.length > MAX_SIZE_BYTES * 1.37) {
          const scale = Math.sqrt((MAX_SIZE_BYTES * 1.37) / webpDataUrl.length);
          canvas.width = Math.round(img.naturalWidth * scale);
          canvas.height = Math.round(img.naturalHeight * scale);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          webpDataUrl = canvas.toDataURL('image/webp', MIN_QUALITY);
        }
        resolve(webpDataUrl);
      };
      img.onerror = () => {
        resolve(e.target.result);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const modalImgFile = document.getElementById('modal-product-image-file');
  if (modalImgFile) {
    modalImgFile.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files);
      for (const file of files) {
        const webpDataUrl = await convertFileToWebP(file);
        window._modalUploadedImages.push(webpDataUrl);
        syncMainImageFromGallery();
        renderModalImageGallery();
      }
      // Reset input so same files can be re-selected
      e.target.value = '';
    });
  }
});



// ============================================
// LIVE INSTAGRAM FEED - @nova_giftshop
// Uses Instagram Basic Display API
// ============================================
(function() {
  // Instagram Basic Display API access token
  // To get your token:
  // 1. Go to https://developers.facebook.com and create an app
  // 2. Add "Instagram Basic Display" product
  // 3. Generate a User Token for @nova_giftshop
  // 4. Paste the long-lived token below
  const INSTAGRAM_ACCESS_TOKEN = localStorage.getItem('nova_ig_token') || '';
  const INSTAGRAM_USERNAME = 'nova_giftshop';
  const FEED_COUNT = 6;

  function initLiveInstagramFeed() {
    const grids = [
      document.getElementById('instagram-live-feed'),
      document.getElementById('instagram-live-feed-about')
    ].filter(Boolean);
    if (grids.length === 0) return;

    if (INSTAGRAM_ACCESS_TOKEN) {
      fetchInstagramPosts(grids);
    } else {
      // No token - use a proxy approach via RSS/scraping service
      fetchViaProxy(grids);
    }
  }

  // Method 1: Direct API call with token
  async function fetchInstagramPosts(grids) {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${FEED_COUNT}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      grids.forEach(g => renderFeed(g, data.data));
    } catch (e) {
      console.warn('Instagram API failed, trying proxy...', e);
      fetchViaProxy(grids);
    }
  }

  // Method 2: Proxy approach (no auth needed)
  async function fetchViaProxy(grids) {
    try {
      // Try multiple proxy endpoints
      const proxyUrls = [
        `https://www.instagram.com/${INSTAGRAM_USERNAME}/?__a=1&__d=dis`,
        `https://instagram-media-api.herokuapp.com/user/${INSTAGRAM_USERNAME}`,
      ];

      let posts = null;

      // Try fetching via Instagram's public JSON endpoint
      try {
        const res = await fetch(`https://www.instagram.com/${INSTAGRAM_USERNAME}/?__a=1`, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (res.ok) {
          const data = await res.json();
          const edges = data?.graphql?.user?.edge_owner_to_timeline_media?.edges;
          if (edges) {
            posts = edges.slice(0, FEED_COUNT).map(e => ({
              id: e.node.id,
              media_url: e.node.display_url,
              thumbnail_url: e.node.thumbnail_src,
              permalink: `https://www.instagram.com/p/${e.node.shortcode}/`,
              caption: e.node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
              media_type: e.node.is_video ? 'VIDEO' : 'IMAGE',
              likes: e.node.edge_liked_by?.count || 0,
              comments: e.node.edge_media_to_comment?.count || 0,
            }));
          }
        }
      } catch(e) { /* silent */ }

      if (posts && posts.length > 0) {
        grids.forEach(g => renderFeed(g, posts));
      } else {
        // Fallback: render placeholder cards with link to profile
        grids.forEach(g => renderFallback(g));
      }
    } catch (e) {
      grids.forEach(g => renderFallback(g));
    }
  }

  function renderFeed(grid, posts) {
    grid.innerHTML = '';
    
    posts.forEach(post => {
      const imgUrl = post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url;
      const caption = post.caption ? post.caption.substring(0, 80) + (post.caption.length > 80 ? '...' : '') : '';
      
      const card = document.createElement('a');
      card.href = post.permalink || `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'ig-live-card';
      
      card.innerHTML = `
        <img src="${imgUrl}" alt="${caption}" loading="lazy">
        <div class="ig-live-overlay">
          ${post.media_type === 'VIDEO' ? `
            <div class="ig-stat">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          ` : `
            <div class="ig-stat">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
          `}
        </div>
      `;
      
      grid.appendChild(card);
    });
  }

  function renderFallback(grid) {
    grid.innerHTML = '';
    
    // Use existing site instagram posts as fallback, or show placeholder
    const existingPosts = (window.AppState && window.AppState.instagramPosts) || [];
    
    if (existingPosts.length > 0) {
      const postsToShow = existingPosts.slice(0, FEED_COUNT);
      postsToShow.forEach(post => {
        const imgUrl = post.images && post.images.length > 0 ? post.images[0] : 'assets/insta_1.webp';
        const card = document.createElement('a');
        card.href = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'ig-live-card';
        card.innerHTML = `
          <img src="${imgUrl}" alt="@${INSTAGRAM_USERNAME}" loading="lazy">
          <div class="ig-live-overlay">
            <div class="ig-stat">
              <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              <span>View</span>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    } else {
      // Show "follow us" placeholder
      grid.innerHTML = `
        <div class="ig-live-error" style="grid-column: 1 / -1;">
          <a href="https://www.instagram.com/${INSTAGRAM_USERNAME}/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
            <svg style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--color-sage);" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
            <p style="font-size: 1rem;">Follow us <strong>@${INSTAGRAM_USERNAME}</strong></p>
            <p style="font-size: 0.8rem; margin-top: 6px; opacity: 0.7;">View our latest posts on Instagram</p>
          </a>
        </div>
      `;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initLiveInstagramFeed, 500);
    });
  } else {
    setTimeout(initLiveInstagramFeed, 500);
  }

  // Also re-render when navigating to home
  const originalNavigate = window.navigateTo;
  if (originalNavigate) {
    window.navigateTo = function(route) {
      originalNavigate(route);
      if (route === 'home' || route === '' || route === 'about') {
        setTimeout(initLiveInstagramFeed, 300);
      }
    };
  }
})();


// ============================================
// LOCAL AUTH SYSTEM
// ============================================
(function() {
  const USERS_KEY = 'nova_users';
  const SESSION_KEY = 'nova_session';

  // Get all registered users
  function getUsers() {
    return NovaDB.getUsers() || [];
  }

  // Save users array
  async function saveUsers(users) {
    await NovaDB.saveUsers(users);
  }

  // Get current session
  function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
    catch(e) { return null; }
  }

  // Save session
  function saveSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  // Clear session
  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  // Hash password (simple hash for localStorage - NOT production-secure)
  function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'h_' + Math.abs(hash).toString(36);
  }

  // Update UI based on auth state
  function updateAuthUI(user) {
    if (user) {
      document.body.classList.add('user-logged-in');

      // Update header greeting
      const greetingEl = document.getElementById('header-greeting');
      if (greetingEl) {
        const lang = AppState.language;
        greetingEl.innerText = lang === 'am' ? `\u0555\u0572\u057b\u0578\u0582\u0575\u0576, ${user.firstName}` :
                               lang === 'ru' ? `\u041f\u0440\u0438\u0432\u0435\u0442, ${user.firstName}` :
                               `Hello, ${user.firstName}`;
      }

      // Update AppState customer
      AppState.customer.firstName = user.firstName;
      AppState.customer.lastName = user.lastName;
      AppState.customer.email = user.email;

      // Update dashboard greeting
      const dashGreeting = document.getElementById('customer-welcome-greeting');
      if (dashGreeting) {
        const lang = AppState.language;
        dashGreeting.innerText = lang === 'am' ? `\u0555\u0572\u057b\u0578\u0582\u0575\u0576, ${user.firstName}` :
                                 lang === 'ru' ? `\u041f\u0440\u0438\u0432\u0435\u0442, ${user.firstName}` :
                                 `Hello, ${user.firstName}`;
      }

      // Update account details form
      const fnInput = document.getElementById('acc-first-name');
      const lnInput = document.getElementById('acc-last-name');
      const emailInput = document.getElementById('acc-email');
      if (fnInput) fnInput.value = user.firstName;
      if (lnInput) lnInput.value = user.lastName;
      if (emailInput) emailInput.value = user.email;

    } else {
      document.body.classList.remove('user-logged-in');
    }
  }

  // Switch between sign-in and sign-up tabs
  window.switchAuthTab = function(tab) {
    const signinForm = document.getElementById('auth-signin-form');
    const signupForm = document.getElementById('auth-signup-form');
    const signinTab = document.getElementById('auth-tab-signin');
    const signupTab = document.getElementById('auth-tab-signup');

    if (tab === 'signin') {
      if (signinForm) signinForm.classList.remove('hidden');
      if (signupForm) signupForm.classList.add('hidden');
      if (signinTab) signinTab.classList.add('active');
      if (signupTab) signupTab.classList.remove('active');
    } else {
      if (signinForm) signinForm.classList.add('hidden');
      if (signupForm) signupForm.classList.remove('hidden');
      if (signinTab) signinTab.classList.remove('active');
      if (signupTab) signupTab.classList.add('active');
    }

    // Clear errors
    document.querySelectorAll('.auth-error').forEach(el => el.classList.add('hidden'));
  };

  // Handle Sign Up
  window.handleSignUp = async function(event) {
    event.preventDefault();
    const firstName = document.getElementById('signup-first-name').value.trim();
    const lastName = document.getElementById('signup-last-name').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-password-confirm').value;
    const errorEl = document.getElementById('signup-error');

    // Validate
    if (password !== confirmPassword) {
      errorEl.textContent = 'Passwords do not match.';
      errorEl.classList.remove('hidden');
      return;
    }

    if (password.length < 6) {
      errorEl.textContent = 'Password must be at least 6 characters.';
      errorEl.classList.remove('hidden');
      return;
    }

    // Check if email already exists in nova_users
    const users = getUsers();
    const existingUser = users.find(u => u.email === email);

    // Also check nova_staff_profiles (from admin grant) 
    const staffProfiles = NovaDB.getStaffProfiles() || {};
    const staffEntry = staffProfiles[email];

    if (existingUser) {
      errorEl.textContent = 'An account with this email already exists.';
      errorEl.classList.remove('hidden');
      return;
    }

    // Create user
    const newUser = {
      id: Date.now().toString(36),
      firstName,
      lastName,
      email,
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString(),
      billing: { street: '', city: '', zip: '' }
    };

    users.push(newUser);
    await saveUsers(users);
    saveSession(newUser);
    updateAuthUI(newUser);

    // If this email was pre-granted admin access, sync the staff profile
    if (staffEntry) {
      staffEntry.name = firstName + ' ' + lastName;
      staffEntry.password = password;
      staffProfiles[email] = staffEntry;
      NovaDB.saveStaffProfiles(staffProfiles);
    }

    // If this user is an admin, auto-establish admin session
    if (typeof isAdminEmail === 'function' && isAdminEmail(email)) {
      const profile = staffEntry || {
        username: email,
        name: firstName + ' ' + lastName,
        role: 'Shop Manager',
        password: password
      };
      if (!staffEntry) {
        staffProfiles[email] = profile;
        NovaDB.saveStaffProfiles(staffProfiles);
      }
      sessionStorage.setItem('nova_admin_session', JSON.stringify(profile));
    }

    // Clear form
    event.target.reset();
    errorEl.classList.add('hidden');

    showToast('ACCOUNT CREATED SUCCESSFULLY!');
    if (typeof renderMyAccount === 'function') renderMyAccount();
    if (typeof updateAdminVisibility === 'function') updateAdminVisibility();
  };

  // Handle Sign In
  window.handleSignIn = async function(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value.trim().toLowerCase();
    const password = document.getElementById('signin-password').value;
    const errorEl = document.getElementById('signin-error');

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      // Check if they were granted admin but never signed up
      if (typeof isAdminEmail === 'function' && isAdminEmail(email)) {
        errorEl.textContent = 'Admin access was granted, but you need to Sign Up first to create your account.';
      } else {
        errorEl.textContent = 'No account found with this email.';
      }
      errorEl.classList.remove('hidden');
      return;
    }

    if (user.passwordHash !== hashPassword(password)) {
      errorEl.textContent = 'Incorrect password. Please try again.';
      errorEl.classList.remove('hidden');
      return;
    }

    saveSession(user);
    updateAuthUI(user);

    // Clear form
    event.target.reset();
    errorEl.classList.add('hidden');

    // If this user is an admin, auto-establish admin session too
    if (typeof isAdminEmail === 'function' && isAdminEmail(email)) {
      const staff = NovaDB.getStaffProfiles() || {};
      let profile = staff[email];
      if (!profile) {
        // Create staff profile on the fly if missing
        profile = {
          username: email,
          name: (user.firstName || '') + ' ' + (user.lastName || ''),
          role: email === 'norayrnajaryann@gmail.com' ? 'Super Admin' : 'Shop Manager',
          password: password
        };
        staff[email] = profile;
        NovaDB.saveStaffProfiles(staff);
      } else {
        // Sync the staff profile password with the user's actual password
        profile.password = password;
        profile.name = (user.firstName || '') + ' ' + (user.lastName || '');
        staff[email] = profile;
        NovaDB.saveStaffProfiles(staff);
      }
      sessionStorage.setItem('nova_admin_session', JSON.stringify(profile));
    }

    showToast('WELCOME BACK, ' + user.firstName.toUpperCase() + '!');
    if (typeof renderMyAccount === 'function') renderMyAccount();
    if (typeof updateAdminVisibility === 'function') updateAdminVisibility();
  };

  // Handle Logout
  window.handleLogout = function() {
    clearSession();
    sessionStorage.removeItem('nova_admin_session');
    updateAuthUI(null);
    if (typeof updateAdminVisibility === 'function') updateAdminVisibility();
    showToast('LOGGED OUT SUCCESSFULLY.');
    if (typeof navigateTo === 'function') {
      setTimeout(() => navigateTo('home'), 100);
    }
  };

  // Initialize on page load
  function initAuth() {
    const session = getSession();
    if (session) {
      updateAuthUI(session);
    } else {
      updateAuthUI(null);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }

  // Also update when saving account details
  const origSave = window.saveCustomerDetails;
  window.saveCustomerDetails = async function(event) {
    if (origSave) origSave(event);
    // Sync changes back to stored user
    const session = getSession();
    if (session) {
      const users = getUsers();
      const idx = users.findIndex(u => u.email === session.email);
      if (idx > -1) {
        users[idx].firstName = AppState.customer.firstName;
        users[idx].lastName = AppState.customer.lastName;
        users[idx].billing = AppState.customer.billing;
        await saveUsers(users);
        saveSession(users[idx]);
        updateAuthUI(users[idx]);
      }
    }
  };
})();

// ============================================
// ADMIN CLIENTS PANEL
// ============================================
(function() {
  window.renderAdminClients = function() {
    const tbody = document.getElementById('admin-clients-tbody');
    const countEl = document.getElementById('admin-clients-count');
    if (!tbody) return;

    let users = NovaDB.getUsers() || [];

    if (countEl) countEl.textContent = users.length + ' client' + (users.length !== 1 ? 's' : '');

    if (users.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--color-medium-gray); padding:40px 20px; font-size:0.85rem;">No registered clients yet.</td></tr>';
      return;
    }

    // Sort newest first
    const sorted = [...users].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    tbody.innerHTML = sorted.map((user, idx) => {
      const date = user.createdAt ? new Date(user.createdAt) : new Date();
      const dateStr = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const timeStr = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

      return `
        <tr>
          <td style="color:var(--color-medium-gray);">${idx + 1}</td>
          <td>
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:32px; height:32px; border-radius:50%; background:var(--color-sage); color:white; display:flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:600; flex-shrink:0;">
                ${user.firstName ? user.firstName[0].toUpperCase() : ''}${user.lastName ? user.lastName[0].toUpperCase() : ''}
              </div>
              <div>
                <div style="font-weight:500;">${user.firstName || ''} ${user.lastName || ''}</div>
              </div>
            </div>
          </td>
          <td style="color:var(--color-medium-gray);">${user.email || ''}</td>
          <td>
            <div style="font-size:0.75rem;">${dateStr}</div>
            <div style="font-size:0.65rem; color:var(--color-medium-gray);">${timeStr}</div>
          </td>
          <td>
            <button onclick="deleteClient('${user.id}')" style="background:none; border:1px solid var(--color-border); border-radius:4px; padding:4px 8px; cursor:pointer; color:var(--color-medium-gray); font-size:0.7rem; transition:all 0.2s;" onmouseover="this.style.color='#C0392B'; this.style.borderColor='#E6B0AA'" onmouseout="this.style.color='var(--color-medium-gray)'; this.style.borderColor='var(--color-border)'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:14px; height:14px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  };

  window.deleteClient = async function(userId) {
    if (!confirm('Remove this client?')) return;
    let users = NovaDB.getUsers() || [];
    users = users.filter(u => u.id !== userId);
    await NovaDB.saveUsers(users);
    renderAdminClients();
    showToast('CLIENT REMOVED.');
  };

  // Auto-render when switching to clients tab
  const origSwitchTab = window.switchAdminTab;
  if (origSwitchTab) {
    const _origSwitch = origSwitchTab;
    window.switchAdminTab = function(tabId) {
      _origSwitch(tabId);
      if (tabId === 'clients') {
        renderAdminClients();
      }
    };
  }

  // Also hook into admin tab click events
  document.addEventListener('click', function(e) {
    const navItem = e.target.closest('[data-admin-tab="clients"]');
    if (navItem) {
      setTimeout(renderAdminClients, 50);
    }
  });
})();

// ============================================
// ADMIN ACCESS CONTROL SYSTEM
// ============================================
(function() {
  const ADMIN_EMAILS_KEY = 'nova_admin_emails';
  const SUPER_ADMIN = 'norayrnajaryann@gmail.com';

  // Initialize admin emails list
  function getAdminEmails() {
    const saved = NovaDB.getAdminEmails();
    if (Array.isArray(saved)) return saved;
    // Default: only super admin
    const defaults = [SUPER_ADMIN];
    NovaDB.saveAdminEmails(defaults);
    return defaults;
  }

  function saveAdminEmails(emails) {
    NovaDB.saveAdminEmails(emails);
  }

  // Check if an email has admin access
  window.isAdminEmail = function(email) {
    if (!email) return false;
    return getAdminEmails().includes(email.toLowerCase());
  };

  // Check if current session is admin
  window.isCurrentUserAdmin = function() {
    try {
      const session = JSON.parse(localStorage.getItem('nova_session'));
      return session && isAdminEmail(session.email);
    } catch(e) { return false; }
  };

  // Check if current user is super admin
  window.isSuperAdmin = function() {
    try {
      const session = JSON.parse(localStorage.getItem('nova_session'));
      return session && session.email.toLowerCase() === SUPER_ADMIN;
    } catch(e) { return false; }
  };

  // Update admin UI visibility
  window.updateAdminVisibility = function() {
    const isAdmin = isCurrentUserAdmin();
    const isLoggedIn = !!localStorage.getItem('nova_session');

    // Show/hide WooCommerce link in dropdown
    document.querySelectorAll('.admin-only-link').forEach(el => {
      el.style.display = isAdmin && isLoggedIn ? 'block' : 'none';
    });

    // If on admin page and not admin, redirect to home
    if (AppState.currentRoute === 'admin' && !isAdmin) {
      // They can still see the login form, but check after login
    }
  };

  // Override the admin login to check auth session first
  const origSubmitAdmin = window.submitAdminCredentials;
  window.submitAdminCredentials = async function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('admin-email-input');
    const passInput = document.getElementById('admin-pass-input');
    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passInput ? passInput.value : '';

    if (!email || !password) {
      showToast("PLEASE FILL IN ALL FIELDS.");
      return;
    }

    // Check if this email has admin access
    if (!isAdminEmail(email)) {
      showToast("ACCESS DENIED. THIS ACCOUNT DOES NOT HAVE ADMIN PRIVILEGES.");
      return;
    }

    // First, try to authenticate via the main nova_users auth system
    const users = NovaDB.getUsers() || [];
    const authUser = users.find(u => u.email === email);

    // Also check staff profiles as a fallback
    const staff = NovaDB.getStaffProfiles() || {};
    let profile = staff[email];

    // Verify password: check nova_users first (primary), then staff profiles (legacy fallback)
    let authenticated = false;
    if (authUser && authUser.passwordHash === hashPwd(password)) {
      authenticated = true;
    } else if (profile && profile.password === password) {
      authenticated = true;
    }

    if (!authenticated) {
      showToast("INVALID EMAIL OR PASSWORD.");
      return;
    }

    // Ensure staff profile exists and is synced
    if (!profile) {
      profile = {
        username: email,
        name: authUser ? (authUser.firstName + ' ' + (authUser.lastName || '')).trim() : email.split('@')[0],
        role: email === SUPER_ADMIN ? 'Super Admin' : 'Shop Manager',
        password: password
      };
      staff[email] = profile;
      NovaDB.saveStaffProfiles(staff);
    } else {
      // Sync password and name
      profile.password = password;
      if (authUser) {
        profile.name = (authUser.firstName + ' ' + (authUser.lastName || '')).trim();
      }
      staff[email] = profile;
      NovaDB.saveStaffProfiles(staff);
    }

    // Also sign into the main auth system if not already
    let session = null;
    try { session = JSON.parse(localStorage.getItem('nova_session')); } catch(e) {}
    
    if (!session || session.email !== email) {
      // Use existing user data or create session from profile
      const sessionData = authUser || {
        id: Date.now().toString(36),
        firstName: profile.name.split(' ')[0] || profile.name,
        lastName: profile.name.split(' ').slice(1).join(' ') || '',
        email: email,
        passwordHash: hashPwd(password),
        createdAt: new Date().toISOString(),
        billing: { street: '', city: '', zip: '' }
      };
      localStorage.setItem('nova_session', JSON.stringify(sessionData));
      document.body.classList.add('user-logged-in');
      
      // Also ensure this user exists in nova_users
      if (!authUser) {
        users.push(sessionData);
        await NovaDB.saveUsers(users);
      }

      // Update header greeting
      const greetingEl = document.getElementById('header-greeting');
      if (greetingEl) greetingEl.innerText = 'Hello, ' + sessionData.firstName;
    }

    // Successful admin login
    sessionStorage.setItem('nova_admin_session', JSON.stringify(profile));
    showToast('WELCOME BACK, ' + profile.name.toUpperCase() + '.');

    if (typeof logAdminActivity === 'function') {
      logAdminActivity(profile.name, 'Logged in successfully as ' + profile.role);
    }

    document.getElementById('admin-login-wrapper').classList.add('hidden');
    document.getElementById('admin-dashboard-wrapper').classList.remove('hidden');

    if (emailInput) emailInput.value = '';
    if (passInput) passInput.value = '';

    updateAdminVisibility();
    if (typeof refreshAdminDashboard === 'function') refreshAdminDashboard();
  };

  // Also ensure auto-login to admin if session is admin and navigating to admin page
  const origNavigate = window.navigateTo;
  if (origNavigate) {
    const _nav = origNavigate;
    window.navigateTo = function(route) {
      _nav(route);
      
      if (route === 'admin') {
        // If the current session is an admin, auto-authenticate
        if (isCurrentUserAdmin()) {
          const session = JSON.parse(localStorage.getItem('nova_session'));
          const adminSession = sessionStorage.getItem('nova_admin_session');
          
          if (!adminSession && session) {
            // Auto-login to admin
            const staff = NovaDB.getStaffProfiles() || {};
            const profile = staff[session.email];
            if (profile) {
              sessionStorage.setItem('nova_admin_session', JSON.stringify(profile));
              setTimeout(() => {
                document.getElementById('admin-login-wrapper')?.classList.add('hidden');
                document.getElementById('admin-dashboard-wrapper')?.classList.remove('hidden');
                if (typeof refreshAdminDashboard === 'function') refreshAdminDashboard();
              }, 100);
            }
          }
        }
      }
      
      // Re-check visibility on every nav
      setTimeout(updateAdminVisibility, 100);
    };
  }

  // Grant admin access (super admin only)
  window.grantAdminAccess = function(email) {
    if (!isSuperAdmin()) {
      showToast("ONLY THE SUPER ADMIN CAN GRANT ACCESS.");
      return;
    }
    email = email.trim().toLowerCase();
    if (!email) return;

    const emails = getAdminEmails();
    if (emails.includes(email)) {
      showToast("THIS EMAIL ALREADY HAS ADMIN ACCESS.");
      return;
    }

    emails.push(email);
    saveAdminEmails(emails);

    // Check if user already exists in nova_users (the main auth system)
    const users = NovaDB.getUsers() || [];
    const existingUser = users.find(u => u.email === email);

    // Add to staff profiles, using real name from nova_users if available
    const staff = NovaDB.getStaffProfiles() || {};
    if (!staff[email]) {
      const userName = existingUser 
        ? (existingUser.firstName + ' ' + (existingUser.lastName || '')).trim()
        : email.split('@')[0];
      staff[email] = {
        username: email,
        name: userName,
        role: 'Shop Manager',
        password: 'temp_' + Math.random().toString(36).substr(2, 6)
      };
      NovaDB.saveStaffProfiles(staff);
    } else if (existingUser) {
      // Update staff profile name from actual user data
      staff[email].name = (existingUser.firstName + ' ' + (existingUser.lastName || '')).trim();
      NovaDB.saveStaffProfiles(staff);
    }

    showToast('ADMIN ACCESS GRANTED TO ' + email.toUpperCase());
    renderAdminAccessList();
    if (typeof renderStaffTable === 'function') renderStaffTable();
  };

  // Revoke admin access
  window.revokeAdminAccess = function(email) {
    if (!isSuperAdmin()) {
      showToast("ONLY THE SUPER ADMIN CAN REVOKE ACCESS.");
      return;
    }
    if (email === SUPER_ADMIN) {
      showToast("CANNOT REVOKE SUPER ADMIN ACCESS.");
      return;
    }

    let emails = getAdminEmails();
    emails = emails.filter(e => e !== email);
    saveAdminEmails(emails);
    showToast('ADMIN ACCESS REVOKED FOR ' + email.toUpperCase());
    renderAdminAccessList();
  };

  // Render admin access list in developer section
  window.renderAdminAccessList = function() {
    const container = document.getElementById('admin-access-list');
    if (!container) return;

    const emails = getAdminEmails();
    container.innerHTML = emails.map(email => {
      const isSA = email === SUPER_ADMIN;
      return '<div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--color-light-gray); font-size:0.8rem;">' +
        '<div style="display:flex; align-items:center; gap:8px;">' +
          '<span style="width:28px; height:28px; border-radius:50%; background:' + (isSA ? 'var(--color-black)' : 'var(--color-sage)') + '; color:white; display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:600;">' + (isSA ? 'SA' : 'A') + '</span>' +
          '<span>' + email + '</span>' +
          (isSA ? '<span style="font-size:0.6rem; background:var(--color-black); color:white; padding:2px 6px; border-radius:3px; text-transform:uppercase; letter-spacing:0.05em;">Super Admin</span>' : '') +
        '</div>' +
        (isSA ? '' : '<button onclick="revokeAdminAccess(\'' + email + '\')" style="background:none; border:1px solid var(--color-border); border-radius:4px; padding:3px 8px; cursor:pointer; color:var(--color-medium-gray); font-size:0.65rem;" onmouseover="this.style.color=\'#C0392B\'" onmouseout="this.style.color=\'var(--color-medium-gray)\'">Revoke</button>') +
      '</div>';
    }).join('');
  };

  // Initialize on load
  async function initAdminAccess() {
    // Wait for Firestore data to be loaded
    await NovaDB.whenReady();

    // Ensure super admin user account exists in auth system
    let users = NovaDB.getUsers() || [];
    const superAdminExists = users.find(u => u.email === SUPER_ADMIN);
    if (!superAdminExists) {
      users.push({
        id: 'superadmin',
        firstName: 'Norayr',
        lastName: 'Najaryan',
        email: SUPER_ADMIN,
        passwordHash: hashPwd('Ananan05021998!'),
        createdAt: new Date().toISOString(),
        billing: { street: '', city: '', zip: '' }
      });
      await NovaDB.saveUsers(users);
    }

    // Ensure admin emails list exists
    getAdminEmails();
    updateAdminVisibility();
  }

  // Simple hash (must match the one in auth system)
  function hashPwd(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'h_' + Math.abs(hash).toString(36);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminAccess);
  } else {
    initAdminAccess();
  }

  // Hook into admin tab switch to render access list
  document.addEventListener('click', function(e) {
    const navItem = e.target.closest('[data-admin-tab="developer"]');
    if (navItem) {
      setTimeout(renderAdminAccessList, 50);
    }
  });
})();

// ============================================
// PERSONAL DISCOUNT SYSTEM
// ============================================

const DISCOUNT_PERCENT = 10;
const DISCOUNT_CYCLE_DAYS = 14;

function getActiveDiscount() {
  const brands = typeof getBrands === 'function' ? getBrands() : [];
  if (brands.length === 0) return null;

  // Calculate which 14-day cycle we're in based on a fixed epoch
  const epoch = new Date('2025-01-01T00:00:00Z').getTime();
  const now = Date.now();
  const cycleIndex = Math.floor((now - epoch) / (DISCOUNT_CYCLE_DAYS * 24 * 60 * 60 * 1000));
  
  // Pick brand deterministically from cycle index
  const brandIndex = cycleIndex % brands.length;
  const brand = brands[brandIndex];

  // Calculate expiry
  const cycleStartMs = epoch + cycleIndex * DISCOUNT_CYCLE_DAYS * 24 * 60 * 60 * 1000;
  const cycleEndMs = cycleStartMs + DISCOUNT_CYCLE_DAYS * 24 * 60 * 60 * 1000;
  const daysLeft = Math.max(0, Math.ceil((cycleEndMs - now) / (24 * 60 * 60 * 1000)));

  // Generate code from brand name
  const code = 'NOVA' + brand.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 8) + DISCOUNT_PERCENT;

  return { brand, code, percent: DISCOUNT_PERCENT, daysLeft, cycleIndex };
}

function renderPersonalDiscount() {
  const discount = getActiveDiscount();
  if (!discount) return;

  const titleEl = document.getElementById('discount-brand-title');
  const descEl = document.getElementById('discount-description');
  const codeEl = document.getElementById('discount-code-display');
  const amountEl = document.getElementById('discount-amount-display');
  const brandEl = document.getElementById('discount-brand-display');
  const expiresEl = document.getElementById('discount-expires-display');

  if (titleEl) titleEl.textContent = `${discount.percent}% Off All ${discount.brand} Products`;
  if (descEl) descEl.textContent = `Enjoy ${discount.percent}% off on all ${discount.brand} products! A new brand is featured every ${DISCOUNT_CYCLE_DAYS} days. Use the code below at checkout.`;
  if (codeEl) {
    codeEl.textContent = discount.code;
    codeEl.onclick = () => {
      navigator.clipboard.writeText(discount.code).then(() => {
        showToast('DISCOUNT CODE COPIED!');
      }).catch(() => {});
    };
  }
  if (amountEl) amountEl.textContent = `${discount.percent}%`;
  if (brandEl) brandEl.textContent = discount.brand;
  if (expiresEl) expiresEl.textContent = `${discount.daysLeft} day${discount.daysLeft !== 1 ? 's' : ''}`;
}

// Active applied discount state
let appliedDiscount = null;

window.applyDiscountCode = function() {
  const input = document.getElementById('checkout-discount-input');
  const msgEl = document.getElementById('checkout-discount-msg');
  if (!input || !msgEl) return;

  const enteredCode = input.value.trim().toUpperCase();
  
  if (!enteredCode) {
    msgEl.style.display = 'block';
    msgEl.style.color = '#c00';
    msgEl.textContent = 'Please enter a discount code.';
    return;
  }

  const discount = getActiveDiscount();
  if (!discount) {
    msgEl.style.display = 'block';
    msgEl.style.color = '#c00';
    msgEl.textContent = 'No active discount available.';
    return;
  }

  if (enteredCode !== discount.code) {
    msgEl.style.display = 'block';
    msgEl.style.color = '#c00';
    msgEl.textContent = 'Invalid discount code.';
    appliedDiscount = null;
    updateCheckoutTotals();
    return;
  }

  // Check if any cart items match the discount brand
  const matchingItems = AppState.cart.filter(item => {
    return item.product && item.product.brand && item.product.brand.toLowerCase() === discount.brand.toLowerCase();
  });

  if (matchingItems.length === 0) {
    msgEl.style.display = 'block';
    msgEl.style.color = '#c00';
    msgEl.textContent = `This code is valid only for ${discount.brand} products. Your cart has no ${discount.brand} items.`;
    appliedDiscount = null;
    updateCheckoutTotals();
    return;
  }

  // Apply discount
  appliedDiscount = discount;
  msgEl.style.display = 'block';
  msgEl.style.color = 'var(--color-sage)';
  msgEl.textContent = `✓ ${discount.percent}% discount applied to ${matchingItems.length} ${discount.brand} item(s)!`;
  updateCheckoutTotals();
};

// Override updateCheckoutTotals to account for discounts
const _originalUpdateCheckoutTotals = updateCheckoutTotals;
window.updateCheckoutTotals = function() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingSelect = document.getElementById('shipping-method');
  const shippingCost = shippingSelect ? parseInt(shippingSelect.value) : 0;

  let discountAmount = 0;
  if (appliedDiscount) {
    AppState.cart.forEach(item => {
      if (item.product && item.product.brand && item.product.brand.toLowerCase() === appliedDiscount.brand.toLowerCase()) {
        discountAmount += Math.round((item.price * item.quantity) * appliedDiscount.percent / 100);
      }
    });
  }

  const total = subtotal + shippingCost - discountAmount;

  const subtotalEl = document.getElementById('checkout-subtotal-val');
  const shippingValEl = document.getElementById('checkout-shipping-val');
  const totalEl = document.getElementById('checkout-total-val');
  if (!subtotalEl || !totalEl) return;

  subtotalEl.innerText = `֏${formatPrice(subtotal)}`;
  if (shippingValEl) shippingValEl.innerText = shippingCost === 0 ? 'Free' : `֏${formatPrice(shippingCost)}`;
  totalEl.innerText = `֏${formatPrice(total)}`;

  const discountRow = document.getElementById('checkout-discount-row');
  const discountVal = document.getElementById('checkout-discount-val');
  if (discountRow && discountVal) {
    if (discountAmount > 0) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-֏${formatPrice(discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
};

// --- CSV IMPORT SYSTEM ---

// Parse CSV text into array of objects using header row as keys
function parseCSV(text) {
  // Strip BOM character if present (common with Excel/Google Sheets exports)
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  
  // Parse the entire text character-by-character to handle multi-line quoted fields
  const records = [];
  let current = '';
  let inQuotes = false;
  let row = [];
  
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && i + 1 < text.length && text[i + 1] === '"') {
        current += '"'; // escaped quote ""
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      // End of row (skip \r in \r\n)
      if (ch === '\r' && i + 1 < text.length && text[i + 1] === '\n') i++;
      row.push(current.trim());
      current = '';
      if (row.some(cell => cell.length > 0)) records.push(row);
      row = [];
    } else if (ch === ',' && !inQuotes) {
      // Field separator
      row.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  // Last field/row
  row.push(current.trim());
  if (row.some(cell => cell.length > 0)) records.push(row);

  if (records.length < 2) return [];
  
  // Auto-detect delimiter from the header row
  // If header row only has 1 field, it wasn't split by commas — try tab/semicolon
  let headers = records[0];
  let delimiter = null;
  
  if (headers.length <= 1) {
    // Not comma-separated — re-parse with tab or semicolon
    const headerStr = headers[0] || '';
    if (headerStr.includes('\t')) {
      delimiter = '\t';
    } else if (headerStr.includes(';')) {
      delimiter = ';';
    }
    
    if (delimiter) {
      // Re-parse all records with the detected delimiter
      const reParsed = [];
      for (const rec of records) {
        const joined = rec.join(','); // rejoin since commas weren't the delimiter
        reParsed.push(joined.split(delimiter).map(s => s.trim()));
      }
      records.length = 0;
      reParsed.forEach(r => records.push(r));
      headers = records[0];
    }
  }
  
  console.log(`[NOVA CSV] Parsed ${records.length - 1} data rows, ${headers.length} columns`);
  console.log('[NOVA CSV] Columns:', headers.join(', '));
  
  const rows = [];
  for (let i = 1; i < records.length; i++) {
    const values = records[i];
    if (values.length < 2) continue;
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = values[idx] || '';
    });
    rows.push(obj);
  }
  return rows;
}

// Map gender string to gender_id
function mapGender(genderStr) {
  if (!genderStr) return 'unisex';
  const g = genderStr.toLowerCase().trim();
  if (g.includes('men') && !g.includes('women') && !g.includes('unisex')) return 'men';
  if (g.includes('women') || g.includes('female') || g.includes('her')) return 'women';
  if (g.includes('unisex') || g.includes('both')) return 'unisex';
  if (g === 'm' || g === 'male' || g === 'him') return 'men';
  if (g === 'f' || g === 'w') return 'women';
  return 'unisex';
}

// Map scent family string
function mapFamily(familyStr) {
  if (!familyStr) return 'woody';
  const f = familyStr.toLowerCase().trim();
  if (f.includes('wood') || f.includes('oud')) return 'woody';
  if (f.includes('floral') || f.includes('flower') || f.includes('rose')) return 'floral';
  if (f.includes('citrus') || f.includes('fresh') || f.includes('aqua') || f.includes('marine')) return 'citrus';
  if (f.includes('amber') || f.includes('oriental') || f.includes('spicy') || f.includes('warm') || f.includes('vanilla')) return 'amber';
  if (f.includes('aromatic') || f.includes('herbal') || f.includes('herb') || f.includes('lavender') || f.includes('sage') || f.includes('fougere') || f.includes('fougère')) return 'aromatic';
  return 'woody';
}

// Map vibe string to vibes array
function mapVibes(vibeStr) {
  if (!vibeStr) return ['daily'];
  const v = vibeStr.toLowerCase().trim();
  const vibes = [];
  if (v.includes('romantic') || v.includes('evening') || v.includes('date') || v.includes('night')) vibes.push('romantic');
  if (v.includes('daily') || v.includes('fresh') || v.includes('casual') || v.includes('day')) vibes.push('daily');
  if (v.includes('business') || v.includes('professional') || v.includes('elegant') || v.includes('office') || v.includes('formal')) vibes.push('professional');
  if (v.includes('warm') || v.includes('cozy') || v.includes('comfort') || v.includes('winter')) vibes.push('cozy');
  if (v.includes('myster') || v.includes('bold') || v.includes('dark') || v.includes('intense') || v.includes('powerful')) vibes.push('mysterious');
  return vibes.length > 0 ? vibes : ['daily'];
}

// Map tags string to tags array
function mapTags(tagStr) {
  if (!tagStr) return [];
  const tags = [];
  const t = tagStr.toLowerCase().trim();
  if (t.includes('best') || t.includes('seller') || t.includes('popular')) tags.push('Best Seller');
  if (t.includes('new') || t.includes('arrival')) tags.push('New');
  if (t.includes('gift')) tags.push('Gift');
  if (t.includes('home')) tags.push('Home');
  // If comma-separated, parse directly
  if (tagStr.includes(',')) {
    tagStr.split(',').forEach(tag => {
      const trimmed = tag.trim();
      if (trimmed && !tags.includes(trimmed)) tags.push(trimmed);
    });
  }
  return tags;
}

// Parse notes string into array
function parseNotes(notesStr) {
  if (!notesStr) return [];
  return notesStr.split(',').map(n => n.trim()).filter(n => n.length > 0);
}


// Generate a slug/ID from product name
function generateProductId(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    + '-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
}

// Generate placeholder tagline from available data
function generatePlaceholderTagline(brand, productName, family, topNotes, heartNotes, baseNotes) {
  const familyAdjectives = {
    woody: ['earthy', 'grounding', 'warm', 'sophisticated'],
    floral: ['elegant', 'romantic', 'delicate', 'captivating'],
    citrus: ['vibrant', 'fresh', 'energizing', 'sparkling'],
    amber: ['opulent', 'sensual', 'rich', 'enveloping']
  };
  const adj = familyAdjectives[family] || familyAdjectives.woody;
  const mainAdj = adj[Math.floor(Math.random() * adj.length)];
  
  const keyNotes = [];
  if (topNotes.length > 0) keyNotes.push(topNotes[0]);
  if (heartNotes.length > 0) keyNotes.push(heartNotes[0]);
  if (baseNotes.length > 0) keyNotes.push(baseNotes[0]);
  
  const notesStr = keyNotes.length > 0 ? keyNotes.join(', ') : 'rare ingredients';
  return `A ${mainAdj} fragrance crafted with ${notesStr} — awaiting expert description.`;
}

// Generate placeholder description
function generatePlaceholderDescription(name, brand, family, topNotes, heartNotes, baseNotes, ingredients) {
  const topStr = topNotes.length > 0 ? topNotes.join(', ') : 'citrus and aromatic notes';
  const heartStr = heartNotes.length > 0 ? heartNotes.join(', ') : 'floral and spicy accords';
  const baseStr = baseNotes.length > 0 ? baseNotes.join(', ') : 'woody and musky foundations';
  const ingredientsStr = ingredients || 'Alcohol Denat., Parfum (Fragrance), Aqua (Water).';

  return `${name} is a premium fragrance by ${brand} that captures attention from the very first spray.\n\nFragrance Notes & Composition\n\nTop Notes: ${topStr} — creating an immediate, captivating first impression.\n\nHeart Notes: ${heartStr} — forming the rich, complex core of this sophisticated composition.\n\nBase Notes (The Trail): ${baseStr} — providing depth, longevity, and an unforgettable sillage.\n\nBottle & Quality Guarantee:\nThis premium formulation is manufactured to meet strict international quality standards.\n\nIngredients: ${ingredientsStr}`;
}

// ---- AUTO-TRANSLATION SYSTEM ----

// Translate text using free Google Translate endpoint (no API key needed)
async function translateText(text, targetLang) {
  if (!text || text.trim().length === 0) return '';
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    // data[0] is array of [translatedSegment, originalSegment] arrays
    return data[0].map(segment => segment[0]).join('');
  } catch (e) {
    console.warn(`[NOVA Translation] Failed to translate to ${targetLang}:`, e.message);
    return ''; // Return empty — English fallback will be used
  }
}

// Translate all product text fields into Russian (ru) and Armenian (hy)
async function translateProductFields(product) {
  const langMap = { ru: 'ru', am: 'hy' }; // am uses 'hy' language code for Armenian
  
  for (const [dictKey, langCode] of Object.entries(langMap)) {
    if (!PRODUCT_TRANSLATIONS[dictKey]) PRODUCT_TRANSLATIONS[dictKey] = {};
    
    const translatedTagline = await translateText(product.tagline, langCode);
    await new Promise(r => setTimeout(r, 200)); // Rate limit delay
    
    const translatedDescription = await translateText(product.description, langCode);
    await new Promise(r => setTimeout(r, 200));
    
    // Translate notes
    const topNotes = product.notes?.top || [];
    const heartNotes = product.notes?.heart || [];
    const baseNotes = product.notes?.base || [];
    
    const translatedTop = [];
    for (const note of topNotes) {
      translatedTop.push(await translateText(note, langCode));
      await new Promise(r => setTimeout(r, 100));
    }
    
    const translatedHeart = [];
    for (const note of heartNotes) {
      translatedHeart.push(await translateText(note, langCode));
      await new Promise(r => setTimeout(r, 100));
    }
    
    const translatedBase = [];
    for (const note of baseNotes) {
      translatedBase.push(await translateText(note, langCode));
      await new Promise(r => setTimeout(r, 100));
    }
    
    PRODUCT_TRANSLATIONS[dictKey][product.id] = {
      tagline: translatedTagline || product.tagline,
      description: translatedDescription || product.description,
      top: translatedTop.length > 0 ? translatedTop : topNotes,
      heart: translatedHeart.length > 0 ? translatedHeart : heartNotes,
      base: translatedBase.length > 0 ? translatedBase : baseNotes
    };
  }
}

// Save all dynamically generated translations to Sanity (per-product)
async function saveAllTranslations() {
  // Collect only dynamically generated translations (not hardcoded ones)
  // We save the entire PRODUCT_TRANSLATIONS dict since hardcoded ones get overwritten on load anyway
  const toSave = { am: {}, ru: {} };
  ['am', 'ru'].forEach(lang => {
    if (PRODUCT_TRANSLATIONS[lang]) {
      Object.assign(toSave[lang], PRODUCT_TRANSLATIONS[lang]);
    }
  });
  try {
    await NovaSanity.saveAllTranslations(toSave);
    console.log('[NOVA] Product translations saved to Sanity');
  } catch (e) {
    console.warn('[NOVA] Failed to save translations:', e);
  }
}

// Main CSV import handler
window.handleCSVImport = async function(input) {
  const file = input.files[0];
  if (!file) return;
  
  // Validate file type
  if (!file.name.toLowerCase().endsWith('.csv')) {
    showToast('INVALID FILE TYPE. PLEASE UPLOAD A .CSV FILE ONLY.');
    input.value = '';
    return;
  }

  const session = JSON.parse(sessionStorage.getItem('nova_admin_session'));
  if (!session) {
    showToast('ADMIN SESSION EXPIRED. PLEASE RE-LOGIN.');
    input.value = '';
    return;
  }

  try {
    const text = await file.text();
    const rows = parseCSV(text);
    
    if (rows.length === 0) {
      showToast('CSV FILE IS EMPTY OR INVALID.');
      input.value = '';
      return;
    }

    // Expected column names (exact match from user spec)
    const REQUIRED_COLUMNS = [
      'Brand', 'Product', 'Gender', 'Size (ml)', 'Price (AMD)', 'SKU',
      'Vibe', 'Tag', 'Rating', 'Reviews Count', 'Amount', 'Family',
      'Top Notes', 'Heart Notes', 'Base Notes', 'Ingridients',
      'Description', 'Tagline', 'Product Name'
    ];

    // Check which columns exist
    const csvColumns = Object.keys(rows[0]);
    const missingColumns = REQUIRED_COLUMNS.filter(col => !csvColumns.includes(col));
    
    if (missingColumns.length > 0) {
      // Try case-insensitive match
      const csvLower = csvColumns.map(c => c.toLowerCase().trim());
      const stillMissing = REQUIRED_COLUMNS.filter(col => 
        !csvColumns.includes(col) && !csvLower.includes(col.toLowerCase().trim())
      );
      if (stillMissing.length > 3) {
        showToast(`MISSING CSV COLUMNS: ${stillMissing.slice(0, 3).join(', ')}...`);
        input.value = '';
        return;
      }
    }

    // Helper: get value from row with case-insensitive fallback
    const getVal = (row, colName) => {
      if (row[colName] !== undefined) return row[colName];
      const key = Object.keys(row).find(k => k.toLowerCase().trim() === colName.toLowerCase().trim());
      return key ? row[key] : '';
    };

    let importedCount = 0;
    let skippedCount = 0;

    for (const row of rows) {
      const brand = getVal(row, 'Brand').trim();
      const product = getVal(row, 'Product').trim();
      const productName = getVal(row, 'Product Name').trim();
      
      if (!brand || !productName) {
        if (skippedCount === 0) {
          console.log('[NOVA CSV] First row skipped. brand:', JSON.stringify(brand), 'productName:', JSON.stringify(productName));
          console.log('[NOVA CSV] Row keys:', Object.keys(row).join(', '));
          console.log('[NOVA CSV] Row values:', Object.values(row).slice(0, 5).join(' | '));
        }
        skippedCount++;
        continue;
      }

      // Display name comes from "Product Name" column
      const name = productName;
      
      // Parse fields
      const gender = mapGender(getVal(row, 'Gender'));
      const sizeStr = getVal(row, 'Size (ml)');
      const priceStr = getVal(row, 'Price (AMD)');
      const sku = getVal(row, 'SKU').trim();
      const vibes = mapVibes(getVal(row, 'Vibe'));
      const tags = mapTags(getVal(row, 'Tag'));
      const rating = parseFloat(getVal(row, 'Rating')) || 0;
      const reviewsCount = parseInt(getVal(row, 'Reviews Count'), 10) || 0;
      const stock = parseInt(getVal(row, 'Amount'), 10) || 0;
      const family = mapFamily(getVal(row, 'Family'));
      const topNotes = parseNotes(getVal(row, 'Top Notes'));
      const heartNotes = parseNotes(getVal(row, 'Heart Notes'));
      const baseNotes = parseNotes(getVal(row, 'Base Notes'));
      const ingredients = getVal(row, 'Ingridients').trim();

      // Parse size and price
      const size = parseInt(sizeStr, 10) || 100;
      const price = parseInt(priceStr, 10) || 0;


      // Build sizes array
      const sizes = [];
      if (size && price > 0) {
        sizes.push({ size: `${size}ml`, price: price });
      }

      // Read description, tagline from CSV (fallback to auto-generated if empty)
      const csvTagline = getVal(row, 'Tagline').trim();
      const csvDescription = getVal(row, 'Description').trim();
      
      const finalName = productName;
      const tagline = csvTagline || generatePlaceholderTagline(brand, product, family, topNotes, heartNotes, baseNotes);
      const description = csvDescription || generatePlaceholderDescription(finalName, brand, family, topNotes, heartNotes, baseNotes, ingredients);

      // Check if a product with the same name already exists (update it)
      const existingIdx = AppState.products.findIndex(p => p.name.toLowerCase().trim() === finalName.toLowerCase().trim());
      
      if (existingIdx >= 0) {
        // Update existing product, preserving its id and images
        const existing = AppState.products[existingIdx];
        existing.name = finalName;
        existing.brand = brand;
        existing.scent_family = family;
        existing.gender_id = gender;
        existing.vibes = vibes;
        existing.price = price;
        existing.tags = tags;
        existing.rating = rating;
        existing.reviewsCount = reviewsCount;
        existing.tagline = tagline;
        existing.description = description;
        existing.ingredients = ingredients;
        existing.notes = { top: topNotes, heart: heartNotes, base: baseNotes };
        existing.sizes = sizes;
        existing.stock = stock;
        existing.sku = sku;
        console.log(`[NOVA CSV] Updated existing product: "${existing.name}" | brand="${existing.brand}" | sku="${existing.sku}"`);
        importedCount++;
      } else {
        // Create new product object
        const newProduct = {
          id: generateProductId(finalName),
          name: finalName,
          brand: brand,
          scent_family: family,
          gender_id: gender,
          vibes: vibes,
          price: price,
          image: '',
          images: [],
          tags: tags,
          rating: rating,
          reviewsCount: reviewsCount,
          tagline: tagline,
          description: description,
          ingredients: ingredients,
          notes: {
            top: topNotes,
            heart: heartNotes,
            base: baseNotes
          },
          sizes: sizes,
          stock: stock,
          featured: false,
          sku: sku
        };

        // Add computed getters
        Object.defineProperty(newProduct, 'category', {
          get() { const fam = window.GLOBAL_ATTRIBUTES.scent_families[newProduct.scent_family]; return fam ? fam.label.en : ""; },
          configurable: true, enumerable: true
        });
        Object.defineProperty(newProduct, 'gender', {
          get() { const g = window.GLOBAL_ATTRIBUTES.genders[newProduct.gender_id]; return g ? g.label.en : ""; },
          configurable: true, enumerable: true
        });

        AppState.products.push(newProduct);
        console.log(`[NOVA CSV] New product imported: "${newProduct.name}" | brand="${newProduct.brand}" | sku="${newProduct.sku}"`);
        importedCount++;
      }
    }

    if (importedCount > 0) {
      await saveProductsToStorage();
      
      // Auto-translate all imported products
      const importedProducts = AppState.products.slice(-importedCount);
      showToast(`TRANSLATING ${importedCount} PRODUCT(S) TO RU/HY...`);
      
      for (let i = 0; i < importedProducts.length; i++) {
        showToast(`TRANSLATING PRODUCT ${i + 1}/${importedProducts.length}...`);
        try {
          await translateProductFields(importedProducts[i]);
        } catch (e) {
          console.warn(`[NOVA] Translation failed for ${importedProducts[i].name}:`, e);
        }
      }
      
      // Save translations to Firestore
      await saveAllTranslations();
      showToast('TRANSLATIONS COMPLETE.');
      
      renderFeaturedProducts();
      renderShop();
      refreshAdminDashboard();
      logAdminActivity(session.name, `Imported ${importedCount} product(s) from CSV: ${file.name}`);
    }

    const msg = `IMPORTED ${importedCount} PRODUCT(S) FROM CSV.` + 
      (skippedCount > 0 ? ` SKIPPED ${skippedCount} ROW(S).` : '');
    showToast(msg);
    console.log(`[NOVA CSV Import] ${importedCount} imported, ${skippedCount} skipped from "${file.name}"`);

  } catch (e) {
    console.error('[NOVA CSV Import] Error:', e);
    showToast('ERROR READING CSV FILE: ' + e.message);
  }

  input.value = ''; // Reset file input
};

