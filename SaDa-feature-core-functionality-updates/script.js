// SaDa Store - Main JavaScript File

// --- Product Data ---
const products = [
    {
        id: "sada001",
        name: "Men's Performance T-Shirt",
        description: "Lightweight and breathable t-shirt, perfect for workouts or casual wear. Made with moisture-wicking fabric.",
        price: 30.00,
        discountedPrice: 24.99,
        imageUrl: "images/products/men_tshirt_blue.png",
        category: "men",
        gender: "male",
        tags: ["sport", "summer", "activewear"]
    },
    {
        id: "sada002",
        name: "Women's Yoga Leggings",
        description: "High-waisted, stretchy leggings providing maximum comfort and flexibility for yoga or everyday activities.",
        price: 45.00,
        discountedPrice: 45.00,
        imageUrl: "images/products/women_leggings_black.png",
        category: "women",
        gender: "female",
        tags: ["sport", "comfort", "activewear"]
    },
    {
        id: "sada003",
        name: "Kids' Dino Explorer Cap",
        description: "Fun and durable cap with a dinosaur print, adjustable strap for a perfect fit. Protects from the sun.",
        price: 15.00,
        discountedPrice: 12.50,
        imageUrl: "images/products/kids_cap_red.png",
        category: "kids",
        gender: "unisex",
        tags: ["summer", "outdoor", "accessory"]
    },
    {
        id: "sada004",
        name: "Eco-Friendly Water Bottle",
        description: "Reusable and stylish water bottle, 500ml capacity. Keeps drinks cold or hot for hours.",
        price: 22.00,
        discountedPrice: 22.00,
        imageUrl: "images/products/accessory_bottle_green.png",
        category: "accessories",
        gender: "unisex",
        tags: ["eco", "hydration", "outdoor"]
    },
    {
        id: "sada005",
        name: "Men's Cargo Shorts",
        description: "Comfortable and practical cargo shorts with multiple pockets. Ideal for outdoor adventures or casual summer days.",
        price: 40.00,
        discountedPrice: 34.99,
        imageUrl: "images/products/men_shorts_grey.png",
        category: "men",
        gender: "male",
        tags: ["summer", "outdoor", "casual"]
    },
    {
        id: "sada006",
        name: "Women's Quilted Jacket",
        description: "Lightweight yet warm quilted jacket, perfect for transitional weather. Features a sleek, modern design.",
        price: 75.00,
        discountedPrice: 65.00,
        imageUrl: "images/products/women_jacket_pink.png",
        category: "women",
        gender: "female",
        tags: ["spring", "autumn", "outerwear"]
    },
    {
        id: "sada007",
        name: "Kids' Striped Beanie",
        description: "Soft and cozy beanie with colorful stripes. Keeps little heads warm during colder months.",
        price: 12.00,
        discountedPrice: 12.00,
        imageUrl: "images/products/kids_beanie_striped.png",
        category: "kids",
        gender: "unisex",
        tags: ["winter", "accessory", "warm"]
    },
    {
        id: "sada008",
        name: "Unisex Classic Backpack",
        description: "Durable and spacious backpack with multiple compartments, suitable for school, work, or travel.",
        price: 55.00,
        discountedPrice: 48.00,
        imageUrl: "images/products/accessory_backpack_black.png",
        category: "accessories",
        gender: "unisex",
        tags: ["travel", "school", "utility"]
    },
    {
        id: "sada009",
        name: "Men's Sports Hoodie",
        description: "Comfortable and warm hoodie for sports or casual layered looks in cooler weather.",
        price: 55.00,
        discountedPrice: 49.99,
        imageUrl: "images/products/men_hoodie_sports.png",
        category: "men",
        gender: "male",
        tags: ["sport", "winter", "casual", "activewear"]
    },
    {
        id: "sada010",
        name: "Men's Linen Shirt",
        description: "Lightweight and breathable linen shirt, perfect for summer days and smart-casual occasions.",
        price: 42.00,
        discountedPrice: 42.00,
        imageUrl: "images/products/men_shirt_linen.png",
        category: "men",
        gender: "male",
        tags: ["summer", "casual", "smart-casual"]
    },
    {
        id: "sada011",
        name: "Men's Winter Parka",
        description: "Heavy-duty winter parka with faux fur hood, designed to keep you warm in the coldest conditions.",
        price: 120.00,
        discountedPrice: 110.00,
        imageUrl: "images/products/men_parka_winter.png",
        category: "men",
        gender: "male",
        tags: ["winter", "outerwear", "warm"]
    },
    {
        id: "sada012",
        name: "Women's Running Shorts",
        description: "Lightweight running shorts with inner lining and moisture-wicking technology for optimal performance.",
        price: 28.00,
        discountedPrice: 28.00,
        imageUrl: "images/products/women_shorts_running.png",
        category: "women",
        gender: "female",
        tags: ["sport", "summer", "activewear"]
    },
    {
        id: "sada013",
        name: "Women's Summer Dress",
        description: "Flowy and elegant summer dress with floral print, perfect for sunny days and garden parties.",
        price: 60.00,
        discountedPrice: 54.50,
        imageUrl: "images/products/women_dress_summer.png",
        category: "women",
        gender: "female",
        tags: ["summer", "casual", "party", "floral"]
    },
    {
        id: "sada014",
        name: "Women's Knit Sweater",
        description: "Cozy and stylish knit sweater, a versatile piece for autumn and winter layering.",
        price: 48.00,
        discountedPrice: 48.00,
        imageUrl: "images/products/women_sweater_knit.png",
        category: "women",
        gender: "female",
        tags: ["winter", "autumn", "casual", "warm"]
    },
    {
        id: "sada015",
        name: "Women's Business Suit Set",
        description: "Elegant two-piece business suit set (blazer and trousers), perfect for formal occasions and office wear.",
        price: 150.00,
        discountedPrice: 135.00,
        imageUrl: "images/products/women_suit_set.png",
        category: "women",
        gender: "female",
        tags: ["formal", "office", "set", "professional"]
    },
    {
        id: "sada016",
        name: "Kids' Swimsuit",
        description: "Fun and colorful swimsuit for kids, UV protection and chlorine resistant fabric.",
        price: 25.00,
        discountedPrice: 25.00,
        imageUrl: "images/products/kids_swimsuit.png",
        category: "kids",
        gender: "unisex",
        tags: ["summer", "sport", "swimwear"]
    },
    {
        id: "sada017",
        name: "Kids' Jeans and T-shirt Set",
        description: "Comfortable and durable set of denim jeans and a printed t-shirt for everyday play.",
        price: 35.00,
        discountedPrice: 30.00,
        imageUrl: "images/products/kids_jeans_tshirt_set.png",
        category: "kids",
        gender: "unisex",
        tags: ["casual", "set", "everyday"]
    },
    {
        id: "sada018",
        name: "Leather Belt",
        description: "Classic genuine leather belt, a timeless accessory for any wardrobe. Unisex design.",
        price: 30.00,
        discountedPrice: 30.00,
        imageUrl: "images/products/accessory_belt_leather.png",
        category: "accessories",
        gender: "unisex",
        tags: ["classic", "formal", "casual"]
    },
    {
        id: "sada019",
        name: "Silk Scarf",
        description: "Luxurious 100% silk scarf with elegant print, can be styled in multiple ways.",
        price: 40.00,
        discountedPrice: 35.00,
        imageUrl: "images/products/accessory_scarf_silk.png",
        category: "accessories",
        gender: "unisex", 
        tags: ["luxury", "formal", "fashion"]
    },
    {
        id: "sada020",
        name: "Sunglasses Aviator",
        description: "Classic aviator sunglasses with UV400 protection and metal frame. Unisex style.",
        price: 25.00,
        discountedPrice: 22.00,
        imageUrl: "images/products/accessory_sunglasses_aviator.png",
        category: "accessories",
        gender: "unisex",
        tags: ["summer", "classic", "eyewear"]
    }
];

// --- Cart Functionality ---
let cart = []; 

function updateCartIcon() {
    const cartIconCounter = document.getElementById('cart-item-count');
    if (cartIconCounter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartIconCounter.textContent = `(${totalItems})`;
    }
    // console.log("updateCartIcon called. Current total items in cart:", cart.reduce((sum, item) => sum + item.quantity, 0));
}

function handleAddToCart(event) {
    const productId = event.target.dataset.productId;
    if (!productId) {
        console.error("Product ID not found on button.");
        return;
    }
    const productToAdd = products.find(p => p.id === productId);
    if (productToAdd) {
        const existingCartItem = cart.find(item => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cart.push({ 
                id: productToAdd.id, 
                name: productToAdd.name,
                price: (productToAdd.discountedPrice && productToAdd.discountedPrice < productToAdd.price) ? productToAdd.discountedPrice : productToAdd.price,
                imageUrl: productToAdd.imageUrl,
                quantity: 1 
            });
        }
        updateCartIcon();
        if (document.getElementById('cart-table')) { // If on cart page, re-render
             renderCartPage();
        }
        event.target.textContent = 'Added!';
        setTimeout(() => {
            event.target.textContent = 'Add to Cart';
        }, 1500);
    } else {
        console.warn(`Product with ID ${productId} not found in products list.`);
    }
}

function updateCartItemQuantity(productId, newQuantity) {
    const itemInCart = cart.find(item => item.id === productId);
    if (itemInCart) {
        const quantity = parseInt(newQuantity, 10);
        if (quantity >= 1) {
            itemInCart.quantity = quantity;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
    }
    updateCartIcon();
    renderCartPage(); 
    displayCheckoutOrderSummary(); // Update checkout summary if on checkout page
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartIcon();
    renderCartPage();
    displayCheckoutOrderSummary(); // Update checkout summary if on checkout page
}

function renderCartPage() {
    const cartTable = document.getElementById('cart-table');
    if (!cartTable) return;

    const cartTbody = cartTable.querySelector('tbody');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    if (!cartTbody || !subtotalEl || !totalEl) {
        console.error("Cart table body or summary elements not found on cart.html.");
        return;
    }
    cartTbody.innerHTML = ''; 
    if (cart.length === 0) {
        cartTbody.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is currently empty.</td></tr>';
        subtotalEl.textContent = '$0.00';
        totalEl.textContent = '$0.00';
        return;
    }
    let currentSubtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        currentSubtotal += itemTotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${item.imageUrl || 'images/placeholder-image.png'}" alt="${item.name}" class="cart-item-image">
                <span class="cart-item-name">${item.name}</span>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-product-id="${item.id}">
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td>
                <button class="remove-item-btn" data-product-id="${item.id}">Remove</button>
            </td>
        `;
        cartTbody.appendChild(row);
    });
    subtotalEl.textContent = `$${currentSubtotal.toFixed(2)}`;
    totalEl.textContent = `$${currentSubtotal.toFixed(2)}`; 
    cartTbody.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            removeFromCart(event.target.dataset.productId);
        });
    });
    cartTbody.querySelectorAll('.cart-quantity-input').forEach(input => {
        input.addEventListener('change', (event) => {
            const newQuantity = parseInt(event.target.value, 10);
            updateCartItemQuantity(event.target.dataset.productId, newQuantity);
        });
    });
}

function initializeAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        if (!button.dataset.listenerAttached) {
            button.addEventListener('click', handleAddToCart);
            button.dataset.listenerAttached = 'true';
        }
    });
}

function createProductCardHTML(product) {
    const originalPriceHTML = product.discountedPrice && product.discountedPrice < product.price
        ? `<del>$${product.price.toFixed(2)}</del>`
        : '';
    const displayPrice = product.discountedPrice && product.discountedPrice < product.price
        ? product.discountedPrice
        : product.price;
    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p class="price">
                ${originalPriceHTML}
                <span>$${displayPrice.toFixed(2)}</span>
            </p>
            <p class="description">${product.description.substring(0, 100)}...</p>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
}

function renderProducts(productList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = productList.map(createProductCardHTML).join('');
    initializeAddToCartButtons();
}

// --- Page Specific Logic ---
function initProductsPage() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) {
        console.warn("Product grid container 'product-grid' not found.");
        return;
    }

    let productsToRender = products; // Por defecto, mostrar todos los productos
    let pageTitle = "Our Products"; // Default title

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');

        if (category) {
            const validCategories = ["men", "women", "kids", "accessories"];
            if (validCategories.includes(category.toLowerCase())) {
                productsToRender = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
                pageTitle = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
                
            } else {
                console.warn(`Invalid category '${category}' in URL. Showing all products.`);
                pageTitle = "All Products"; // Or keep "Our Products"
            }
        }
    } catch (e) {
        console.warn("Could not parse URL parameters for category filtering, showing all products.", e);
    }

    // Actualizar el título H1 en la página products.html
    const pageTitleElement = document.querySelector('main.container > h1'); 
    if (pageTitleElement) {
        pageTitleElement.textContent = pageTitle;
    } else {
        // Fallback si el H1 no se encuentra con ese selector específico,
        // podríamos intentar cambiar el título del documento como alternativa.
        document.title = `SaDa Store - ${pageTitle}`;
    }
    

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p>No products found for this category.</p>';
    } else {
        renderProducts(productsToRender, 'product-grid');
    }
}

function initHomepage() {
    const featuredProducts = products.slice(0, 4);
    renderProducts(featuredProducts, 'featured-product-list');
}

function initProductDetailPage() {
    let selectedProductId = "sada001"; 
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const idFromUrl = urlParams.get('id');
        if (idFromUrl && products.find(p => p.id === idFromUrl)) {
            selectedProductId = idFromUrl;
        }
    } catch (e) { console.warn("Could not parse URL for product ID.", e); }

    const product = products.find(p => p.id === selectedProductId);
    if (!product) {
        const mainContent = document.querySelector('.product-detail-layout');
        if (mainContent) mainContent.innerHTML = "<p>Product not found.</p>";
        return;
    }
    document.getElementById('product-name-detail').textContent = product.name;
    const productImageEl = document.getElementById('product-image-detail');
    productImageEl.src = product.imageUrl;
    productImageEl.alt = product.name;
    document.getElementById('product-description-detail').textContent = product.description;
    const originalPriceEl = document.getElementById('product-original-price-detail');
    const discountedPriceEl = document.getElementById('product-discounted-price-detail');
    if (product.discountedPrice && product.discountedPrice < product.price) {
        originalPriceEl.textContent = `$${product.price.toFixed(2)}`;
        originalPriceEl.style.display = '';
        discountedPriceEl.textContent = `$${product.discountedPrice.toFixed(2)}`;
    } else {
        originalPriceEl.style.display = 'none';
        discountedPriceEl.textContent = `$${product.price.toFixed(2)}`;
    }
    const addToCartButton = document.querySelector('.product-info .add-to-cart-btn');
    if (addToCartButton) {
        addToCartButton.dataset.productId = product.id;
        initializeAddToCartButtons(); 
    }
    const productInfoDiv = document.querySelector('.product-info');
    if (productInfoDiv) {
        productInfoDiv.dataset.productId = product.id;
    }

    renderRelatedProducts(selectedProductId); // Call to render related products
}

// --- Related Products Rendering ---
/**
 * Renders related products on the product detail page.
 * @param {string} currentProductId - The ID of the product currently being viewed.
 */
function renderRelatedProducts(currentProductId) {
    const relatedProductsContainer = document.querySelector('#related-products .product-list');

    if (!relatedProductsContainer) {
        console.warn("Related products container not found.");
        return;
    }

    relatedProductsContainer.innerHTML = ''; // Clear existing content

    const relatedToShow = products
        .filter(p => p.id !== currentProductId) // Exclude the current product
        .slice(0, 4); // Show up to 4 related products

    if (relatedToShow.length === 0) {
        // Optionally, display a message like "No related products found."
        // relatedProductsContainer.innerHTML = "<p>No related products to show.</p>";
        console.log("No related products to show for ID:", currentProductId);
        return;
    }

    let relatedProductsHTML = "";
    relatedToShow.forEach(product => {
        relatedProductsHTML += createProductCardHTML(product);
    });
    relatedProductsContainer.innerHTML = relatedProductsHTML;

    // Re-initialize "Add to Cart" buttons for these newly added dynamic elements
    const dynamicAddToCartButtons = relatedProductsContainer.querySelectorAll('.add-to-cart-btn');
    dynamicAddToCartButtons.forEach(button => {
        // Ensure no duplicate listeners if createProductCardHTML or global listeners might also attach them.
        // A simple way is to remove if already present, then add. Or use a flag.
        // For this setup, assuming createProductCardHTML doesn't attach listeners,
        // and global initializeAddToCartButtons runs on DOMContentLoaded for static buttons.
        // So, attaching here for dynamic content is appropriate.
        if (!button.dataset.listenerAttached) { // Check if listener already attached by global initializer
             button.addEventListener('click', handleAddToCart);
             button.dataset.listenerAttached = 'true'; // Mark as listener attached
        } else {
            // If listener was attached by global init, but we want to be sure it's the right one or refresh:
            // This can be tricky. A robust way is to clone and replace if needed, but for now,
            // let's assume the global one is sufficient or this specific re-attachment is needed.
            // If createProductCardHTML itself doesn't add listeners, this is fine:
            button.removeEventListener('click', handleAddToCart); // Remove potential old one
            button.addEventListener('click', handleAddToCart); // Add fresh one
        }
    });
    console.log(`Initialized ${dynamicAddToCartButtons.length} 'Add to Cart' button(s) in related products.`);
}


// --- Checkout Page Specific Logic ---
/**
 * Handles the "Same as Shipping" checkbox functionality on the checkout page.
 */
function handleSameAsShippingCheckbox() {
    const checkbox = document.getElementById('same-as-shipping');
    const billingFieldsDiv = document.getElementById('billing-address-fields');

    if (!checkbox || !billingFieldsDiv) {
        // console.log("Checkbox or billing fields div not found for checkout page.");
        return;
    }

    if (checkbox.checked) {
        billingFieldsDiv.style.display = 'none';
        // Optional: copy shipping values to billing inputs
        // document.getElementById('bill-fullname').value = document.getElementById('ship-fullname').value;
        // ... and so on for other fields ...
    } else {
        billingFieldsDiv.style.display = 'block'; // Or 'flex', or remove style attribute depending on CSS
        // Optional: clear billing inputs if you don't want them to retain copied values
        // document.getElementById('bill-fullname').value = '';
    }
}

/**
 * Calculates and displays the order summary total on the checkout page.
 */
function displayCheckoutOrderSummary() {
    const checkoutTotalEl = document.getElementById('checkout-total');
    if (!checkoutTotalEl) { // Only run if on checkout page
        // console.log("Checkout total element not found.");
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    checkoutTotalEl.textContent = `$${total.toFixed(2)}`;
    // console.log("displayCheckoutOrderSummary called. Checkout total:", total.toFixed(2));
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // console.log("SaDa Store script loaded and DOM fully parsed.");

    updateCartIcon(); 
    initializeAddToCartButtons(); 

    if (document.getElementById('product-grid')) {
        initProductsPage();
    }
    if (document.getElementById('featured-product-list')) {
        initHomepage();
    }
    if (document.querySelector('.product-detail-layout')) {
        initProductDetailPage();
    }
    if (document.getElementById('cart-table')) { 
        renderCartPage(); 
    }
    // Checkout page specific initialization
    if (document.getElementById('checkout-form')) { // Check if on checkout.html
        displayCheckoutOrderSummary(); // Display total on load
        
        const sameAsShippingCheckbox = document.getElementById('same-as-shipping');
        if (sameAsShippingCheckbox) {
            sameAsShippingCheckbox.addEventListener('change', handleSameAsShippingCheckbox);
            // Call once on load to set initial state based on checkbox's default checked status
            handleSameAsShippingCheckbox(); 
        }
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                // console.log(`Newsletter subscription for: ${emailInput.value}`);
                alert(`Thank you for subscribing, ${emailInput.value}!`);
                emailInput.value = '';
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }
});

// console.log("script.js parsed. All functions defined.");
