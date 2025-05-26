// SaDa Store - Language Switching Functionality

const translations = {
    en: {
        nav_home: "Home",
        nav_men: "Men",
        nav_women: "Women",
        nav_kids: "Kids",
        nav_accessories: "Accessories",
        nav_blog: "Blog",
        nav_cart_aria_label: "View Shopping Cart",
        nav_location_aria_label: "View Store Location: Rua Devaldino Josoel Benelli 140, São Cristóvão, Concórdia - Santa Catarina, Brazil on Google Maps",
        search_placeholder: "Search products...",
        search_button: "Search",
        hero_title: "Welcome to SaDa Store",
        hero_subtitle: "Your one-stop shop for the latest fashion trends.",
        hero_cta_button: "Shop Now",
        featured_products_title: "Featured Products",
        shop_by_category_title: "Shop by Category",
        category_men_link: "Men",
        category_women_link: "Women",
        category_kids_link: "Kids",
        category_accessories_link: "Accessories",
        newsletter_title: "Subscribe to our Newsletter",
        newsletter_subtitle: "Get the latest updates on new products and upcoming sales.",
        newsletter_email_placeholder: "Enter your email",
        newsletter_cta_button: "Subscribe",
        footer_copyright: "© 2023 SaDa Store. All rights reserved.",
        footer_contact: "Contact Us",
        footer_about: "About Us",
        footer_faq: "FAQ",
        footer_terms: "Terms & Conditions",
        lang_en: "EN",
        lang_es: "ES",
    },
    es: {
        nav_home: "Inicio",
        nav_men: "Hombres",
        nav_women: "Mujeres",
        nav_kids: "Niños",
        nav_accessories: "Accesorios",
        nav_blog: "Blog",
        nav_cart_aria_label: "Ver Carrito de Compras",
        nav_location_aria_label: "Ver Ubicación de la Tienda: Rua Devaldino Josoel Benelli 140, São Cristóvão, Concórdia - Santa Catarina, Brasil en Google Maps",
        search_placeholder: "Buscar productos...",
        search_button: "Buscar",
        hero_title: "Bienvenido a SaDa Store",
        hero_subtitle: "Tu tienda única para las últimas tendencias de moda.",
        hero_cta_button: "Comprar Ahora",
        featured_products_title: "Productos Destacados",
        shop_by_category_title: "Comprar por Categoría",
        category_men_link: "Hombres",
        category_women_link: "Mujeres",
        category_kids_link: "Niños",
        category_accessories_link: "Accesorios",
        newsletter_title: "Suscríbete a nuestro Boletín",
        newsletter_subtitle: "Recibe las últimas actualizaciones sobre nuevos productos y próximas ventas.",
        newsletter_email_placeholder: "Ingresa tu correo electrónico",
        newsletter_cta_button: "Suscribirse",
        footer_copyright: "© 2023 SaDa Store. Todos los derechos reservados.",
        footer_contact: "Contáctanos",
        footer_about: "Sobre Nosotros",
        footer_faq: "Preguntas Frecuentes",
        footer_terms: "Términos y Condiciones",
        lang_en: "EN",
        lang_es: "ES",
    }
};

let currentLanguage = 'en'; // Default language

/**
 * Updates the page content based on the current language.
 */
function updatePageContent() {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        element.textContent = getTranslation(key);
    });
    document.querySelectorAll('[data-translate-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder-key');
        element.placeholder = getTranslation(key);
    });
    document.querySelectorAll('[data-translate-alt-key]').forEach(element => {
        const key = element.getAttribute('data-translate-alt-key');
        element.alt = getTranslation(key);
    });
    document.querySelectorAll('[data-translate-aria-label-key]').forEach(element => {
        const key = element.getAttribute('data-translate-aria-label-key');
        element.setAttribute('aria-label', getTranslation(key));
    });

    // Update active language link
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active-lang');
        if (link.getAttribute('data-lang') === currentLanguage) {
            link.classList.add('active-lang');
        }
    });
    console.log("Page content updated for language:", currentLanguage);
}

/**
 * Sets the current language.
 * @param {string} lang - The language code (e.g., 'en', 'es').
 */
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        console.log(`Language set to: ${lang}`);
        updatePageContent(); // Update content after setting language
    } else {
        console.warn(`Language '${lang}' not supported.`);
    }
}

/**
 * Retrieves a translation for a given key in the current language.
 * @param {string} key - The translation key.
 * @returns {string} The translated string, or the key itself if not found.
 */
function getTranslation(key) {
    return translations[currentLanguage]?.[key] || translations['en']?.[key] || key; // Fallback to current lang, then English, then key
}

/**
 * Initializes language settings and event listeners.
 */
function initializeLanguageSwitcher() {
    const languageLinks = document.querySelectorAll('.lang-link');
    languageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage);
    } else {
        setLanguage('en'); // Default to English and update page content (which includes setting active-lang)
    }
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    console.log("language.js loaded and language switcher initialized.");
});

// Expose functions if needed (optional)
// window.SaDaLang = { setLanguage, getTranslation, updatePageContent };
