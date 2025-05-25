class MobileNavbar {
    constructor(mobileMenuSelector, navListSelector, navLinksSelector) {
        this.mobileMenu = document.querySelector(mobileMenuSelector);
        this.navList = document.querySelector(navListSelector);
        this.navLinks = document.querySelectorAll(navLinksSelector);
        this.activeClass = "active"; // CSS class to toggle

        this.handleClick = this.handleClick.bind(this); // Ensure 'this' context
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7 + 0.3)}s`);
        });
    }

    handleClick() {
        if (this.navList && this.mobileMenu) {
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass); // For hamburger icon animation
            this.animateLinks();
        } else {
            console.error("Mobile menu or nav list not found for handleClick.");
        }
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        } else {
            console.error("Mobile menu element not found to attach click event.");
        }
    }

    init() {
        if (this.mobileMenu && this.navList && this.navLinks.length > 0) {
            this.addClickEvent();
        } else {
            console.warn("MobileNavbar not fully initialized due to missing elements. Ensure a #menu-toggle-button, a .nav-list, and .nav-list li elements exist in your HTML.");
        }
        return this;
    }
}

// Instantiate and initialize
const mobileNavbar = new MobileNavbar(
    "#menu-toggle-button", // Selector for the hamburger button
    ".nav-list",          // Selector for the UL navigation list
    ".nav-list li"        // Selector for the LI items for animation
);
mobileNavbar.init(); // Initialize the instance

// Add a simple console log to confirm script execution
console.log("main.js for MobileNavbar loaded and initialized.");
