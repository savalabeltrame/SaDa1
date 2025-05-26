// SaDa-feature-core-functionality-updates/i18n.js
document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = 'en';
    let currentLanguage = defaultLanguage;
    let translations = {};

    // --- DOM Elements ---
    const languageSwitcherLI = document.querySelector('.language-switcher'); 
    const languageSwitcherButton = document.querySelector('.current-language'); 
    const languageDropdown = document.querySelector('.language-options'); 
    const currentLanguageFlag = document.querySelector('.current-language img'); 
    const selectedLanguageText = document.querySelector('.current-language span[data-translate-key="currentLang"]');

    // --- Helper Functions ---
    function getNestedTranslation(key) {
        if (!translations || typeof key !== 'string') return key; 
        return key.split('.').reduce((obj, k) => (obj && typeof obj[k] !== 'undefined') ? obj[k] : key, translations);
    }

    async function fetchTranslations(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                console.error(`Error loading translations for ${lang}: ${response.statusText}`);
                if (lang !== defaultLanguage) { 
                    return fetchTranslations(defaultLanguage);
                }
                return; 
            }
            translations = await response.json();
            applyTranslations();
            updateLanguageSwitcherButton(lang); 
        } catch (error) {
            console.error(`Error fetching translations for ${lang}:`, error);
            if (lang !== defaultLanguage) { 
                return fetchTranslations(defaultLanguage);
            }
        }
    }

    function applyTranslations() {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            element.textContent = getNestedTranslation(key);
        });
        document.querySelectorAll('[data-translate-alt]').forEach(element => {
            const key = element.getAttribute('data-translate-alt');
            element.alt = getNestedTranslation(key);
        });
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            element.placeholder = getNestedTranslation(key);
        });
        document.querySelectorAll('[data-translate-aria-label]').forEach(element => {
            const key = element.getAttribute('data-translate-aria-label');
            element.setAttribute('aria-label', getNestedTranslation(key));
        });
    }
    
    function updateLanguageSwitcherButton(lang) {
        if (selectedLanguageText) {
             // The text for the current language (e.g., "EN", "ES") is set by applyTranslations
             // using its data-translate-key="currentLang". We need to ensure the JSON files
             // have a "currentLang" key like: "currentLang": "EN" in en.json, "currentLang": "ES" in es.json.
             // Or, more simply, update it directly based on the lang code.
             selectedLanguageText.textContent = lang.toUpperCase();
        }

        if (currentLanguageFlag) {
            const flagFileName = lang === 'en' ? 'gb' : lang;
            currentLanguageFlag.src = `images/flags/${flagFileName}.svg`;
            // Alt text for the current flag image is handled by applyTranslations
            // via its data-translate-alt="altText.currentLanguageFlag" attribute.
        }
    }

    async function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        await fetchTranslations(lang); 
        
        if (languageSwitcherLI && languageDropdown && languageSwitcherButton) {
            languageSwitcherLI.classList.remove('open');
            languageSwitcherButton.setAttribute('aria-expanded', 'false');
        }
    }

    function toggleDropdown() {
        if (languageSwitcherLI && languageDropdown && languageSwitcherButton) {
            const isOpen = languageSwitcherLI.classList.toggle('open');
            languageSwitcherButton.setAttribute('aria-expanded', isOpen.toString());
        }
    }

    function initI18n() {
        if (!languageSwitcherButton || !languageDropdown || !languageSwitcherLI) {
            console.warn("Language switcher UI elements not found. Skipping i18n initialization for switcher.");
            const savedLang = localStorage.getItem('preferredLanguage') || defaultLanguage;
            fetchTranslations(savedLang);
            return;
        }

        languageSwitcherButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toggleDropdown();
        });

        document.querySelectorAll('.language-options a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const lang = link.getAttribute('data-lang');
                if (lang) {
                    setLanguage(lang);
                }
            });
        });

        document.addEventListener('click', (event) => {
            if (languageSwitcherLI && !languageSwitcherLI.contains(event.target) && languageSwitcherLI.classList.contains('open')) {
                toggleDropdown();
            }
        });

        const savedLang = localStorage.getItem('preferredLanguage') || defaultLanguage;
        setLanguage(savedLang); 
    }

    initI18n();
});
