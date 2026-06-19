// --- STATE MANAGEMENT ---
let appState = {
    cart: JSON.parse(localStorage.getItem('perfume_palette_cart')) || [],
    selectedVariants: {} // key: product name, value: selected size variant
};

// --- PRICE FORMATTING HELPER ---
function formatPrice(value) {
    return 'Rp ' + Number(value).toLocaleString('id-ID');
}

// --- PRODUCTS DATABASE (15 Luxury Reseller Fragrances) ---
const products = {
    "Dior Sauvage": {
        name: "Dior Sauvage",
        brand: "Dior",
        tagline: "Raw, Fresh & Noble",
        description: "A radically fresh composition dictated by a name that has the ring of a manifesto. Radiant top notes burst with the juicy freshness of Reggio bergamot.",
        price: 1850000,
        sizes: {
            "10ml Travel": 420000,
            "50ml": 1850000,
            "100ml": 2850000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop"
    },
    "Baccarat Rouge 540": {
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        tagline: "Amber, Floral & Woody",
        description: "A poetic alchemy where the aerial notes of jasmine and the radiance of saffron carry ambergris facets and woody tones of freshly cut cedar.",
        price: 2950000,
        sizes: {
            "10ml Travel": 680000,
            "50ml": 2950000,
            "100ml": 4850000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop"
    },
    "Chanel No. 5": {
        name: "Chanel No. 5",
        brand: "Chanel",
        tagline: "Legendary Aldehydic Floral",
        description: "The very essence of femininity. An abstract, mysterious, powdered floral bouquet. The ultimate landmark in perfume history.",
        price: 1950000,
        sizes: {
            "10ml Travel": 450000,
            "50ml": 1950000,
            "100ml": 2950000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
    },
    "Creed Aventus": {
        name: "Creed Aventus",
        brand: "Creed",
        tagline: "Bold, Fruity & Woody Strength",
        description: "The exceptional Aventus features crisp notes of blackcurrant, pineapple, and French apples, drying down to a rich birch and patchouli heart.",
        price: 3200000,
        sizes: {
            "10ml Travel": 720000,
            "50ml": 3200000,
            "100ml": 4950000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=600&auto=format&fit=crop"
    },
    "Tom Ford Oud Wood": {
        name: "Tom Ford Oud Wood",
        brand: "Tom Ford",
        tagline: "Smoky, Exotic & Warm Oud",
        description: "One of the most rare, precious, and expensive ingredients in a perfumer's arsenal, oud wood is often burned in incense-filled temples.",
        price: 2450000,
        sizes: {
            "10ml Travel": 580000,
            "50ml": 2450000,
            "100ml": 3850000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop"
    },
    "Byredo Gypsy Water": {
        name: "Byredo Gypsy Water",
        brand: "Byredo",
        tagline: "Woody Aromatic Gypsy Spirit",
        description: "A glamorization of the Romany lifestyle, based on a fascination for the myth. The scent of fresh soil, deep forests and campfires.",
        price: 1850000,
        sizes: {
            "10ml Travel": 420000,
            "50ml": 1850000,
            "100ml": 2850000
        },
        trending: true,
        imageSrc: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=600&auto=format&fit=crop"
    },
    "Bleu de Chanel": {
        name: "Bleu de Chanel",
        brand: "Chanel",
        tagline: "Fresh, Clean & Woody Aromatic",
        description: "An unexpected strike of fresh citrus followed by warm cedarwood notes, projecting a clean, masculine confidence.",
        price: 1800000,
        sizes: {
            "10ml Travel": 410000,
            "50ml": 1800000,
            "100ml": 2750000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop"
    },
    "Dior J'adore": {
        name: "Dior J'adore",
        brand: "Dior",
        tagline: "Opulent Golden Floral",
        description: "An ode to women, their audacity and beauty. A magnificent bouquet of Ylang-Ylang, Damascus Rose, and Jasmine.",
        price: 1850000,
        sizes: {
            "10ml Travel": 420000,
            "50ml": 1850000,
            "100ml": 2850000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=600&auto=format&fit=crop"
    },
    "Tom Ford Lost Cherry": {
        name: "Tom Ford Lost Cherry",
        brand: "Tom Ford",
        tagline: "Lush, Sweet & Tempting Cherry",
        description: "A full-bodied journey into the once-forbidden; a contrasting scent that reveals a tempting dichotomy of playful, candy-like gleam.",
        price: 2950000,
        sizes: {
            "10ml Travel": 680000,
            "50ml": 2950000,
            "100ml": 4850000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=600&auto=format&fit=crop"
    },
    "Creed Green Irish Tweed": {
        name: "Creed Green Irish Tweed",
        brand: "Creed",
        tagline: "Fresh, Green & Country Gentleman",
        description: "A classic green scent blending lemon verbena, violet leaves, Florentine iris, sandalwood, and ambergris.",
        price: 2750000,
        sizes: {
            "10ml Travel": 620000,
            "50ml": 2750000,
            "100ml": 4250000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop"
    },
    "Byredo Bal d'Afrique": {
        name: "Byredo Bal d'Afrique",
        brand: "Byredo",
        tagline: "Warm, Sweet & Parisian African Vibe",
        description: "A warm and romantic vetiver inspired by Paris in the late 1920s and its infatuation with African culture, art, music and dance.",
        price: 1850000,
        sizes: {
            "10ml Travel": 420000,
            "50ml": 1850000,
            "100ml": 2850000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=600&auto=format&fit=crop"
    },
    "Dior Gris Dior": {
        name: "Dior Gris Dior",
        brand: "Dior",
        tagline: "Floral, Woody & Elegant Chypre",
        description: "The fragrance of grey, the landmark shade of the Couture House. A subtle, multi-layered blend of jasmine, bergamot, and damp undergrowth.",
        price: 2200000,
        sizes: {
            "10ml Travel": 520000,
            "50ml": 2200000,
            "100ml": 3400000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=600&auto=format&fit=crop"
    },
    "YSL Libre": {
        name: "YSL Libre",
        brand: "Yves Saint Laurent",
        tagline: "Lavender, Orange Blossom & Freedom",
        description: "The fragrance of freedom. The tension of French lavender mixed with the sensual burning orange blossom from Morocco.",
        price: 1750000,
        sizes: {
            "10ml Travel": 390000,
            "50ml": 1750000,
            "100ml": 2650000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=600&auto=format&fit=crop"
    },
    "Le Labo Santal 33": {
        name: "Le Labo Santal 33",
        brand: "Le Labo",
        tagline: "Woody, Spicy, Leather & Musk",
        description: "An open fire... The soft drift of smoke... Where woodiness, cardamom, and leather notes blend in a hypnotic, signature trail.",
        price: 2450000,
        sizes: {
            "10ml Travel": 580000,
            "50ml": 2450000,
            "100ml": 3850000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=600&auto=format&fit=crop"
    },
    "Jo Malone English Pear & Freesia": {
        name: "Jo Malone English Pear & Freesia",
        brand: "Jo Malone",
        tagline: "Autumnal Fresh Pear & White Freesia",
        description: "The essence of autumn. The sensuous freshness of just-ripe pears is wrapped in a bouquet of white freesias, and mellowed by amber.",
        price: 1550000,
        sizes: {
            "10ml Travel": 360000,
            "50ml": 1550000,
            "100ml": 2350000
        },
        trending: false,
        imageSrc: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=600&auto=format&fit=crop"
    }
};

// --- DENSE REVIEWS FEED DATA ---
const reviews = [
    {
        name: "Aisha M.",
        product: "Baccarat Rouge 540",
        headline: "Absolutely Heavenly!",
        comment: "This is easily the best scent in my collection. Perfume Palette delivered a 100% original bottle, verified the batch tag on WhatsApp before shipping. Massive longevity!",
        verified: true
    },
    {
        name: "Kevin S.",
        product: "Dior Sauvage",
        headline: "Perfect Daily Driver",
        comment: "Received my bottle in Jakarta within 2 days. The packaging was immaculate. Sauvage is the ultimate compliment getter. Scent trail is incredible.",
        verified: true
    },
    {
        name: "Amanda R.",
        product: "Jo Malone English Pear",
        headline: "Delicate & Timeless",
        comment: "Bought the 10ml travel decant to test first. Scent matches the counter perfectly. It is fresh, crisp, and perfect for morning meetings.",
        verified: true
    },
    {
        name: "Rian H.",
        product: "Creed Aventus",
        headline: "King of Fragrances",
        comment: "Exceptional service! Quick WhatsApp checkout, secure payment. Aventus smells rich, smoky, and projects with major authority.",
        verified: true
    },
    {
        name: "Laras W.",
        product: "Tom Ford Oud Wood",
        headline: "Enigmatic & Cozy Wood",
        comment: "Authenticity checked. Smells wonderfully rich and woodsy. Very glad to have a trustworthy authorized reseller in Indonesia.",
        verified: true
    },
    {
        name: "Daniel T.",
        product: "Byredo Gypsy Water",
        headline: "Light, Earthy & Beautiful",
        comment: "Beautiful incense and soft vanilla dry down. Highly recommend Perfume Palette, fast responses and professional logistics.",
        verified: true
    }
];

// --- RENDER DOM CONTROLLERS ---

function renderBestsellersHero() {
    const gridEl = document.getElementById('hero-bestsellers-grid');
    if (!gridEl) return;

    // Filter top 6 trending
    const trendingList = Object.values(products).filter(p => p.trending).slice(0, 6);
    
    gridEl.innerHTML = trendingList.map(product => {
        const selectedSize = appState.selectedVariants[product.name] || Object.keys(product.sizes)[0];
        const price = product.sizes[selectedSize];
        
        return `
        <div class="compact-card" data-product-name="${product.name}">
            <div class="compact-img-wrap" style="cursor: pointer;" onclick="scrollToSection('top-picks')">
                <img src="${product.imageSrc}" alt="${product.name}">
            </div>
            <div>
                <span class="compact-brand">${product.brand}</span>
                <h4 class="compact-name">${product.name}</h4>
            </div>
            <div class="compact-footer">
                <span class="compact-price">${formatPrice(price)}</span>
                <button class="btn-compact-add" onclick="addProductToCart('${product.name}')">Add</button>
            </div>
        </div>
        `;
    }).join('');
}

function renderTopPicksGrid() {
    const gridEl = document.getElementById('top-picks-grid');
    if (!gridEl) return;

    gridEl.innerHTML = Object.values(products).map(product => {
        const selectedSize = appState.selectedVariants[product.name] || "50ml"; // default size variant
        const price = product.sizes[selectedSize] || product.price;
        
        return `
        <div class="top-pick-card" data-product-name="${product.name}">
            <div class="card-img-wrap">
                <img src="${product.imageSrc}" alt="${product.name}">
            </div>
            <div>
                <span class="card-brand">${product.brand}</span>
                <h3 class="card-name">${product.name}</h3>
                <p class="card-desc">${product.description}</p>
            </div>
            <div>
                <div class="card-variants">
                    ${Object.keys(product.sizes).map(size => {
                        const activeClass = size === selectedSize ? 'active' : '';
                        return `<button class="variant-pill-btn ${activeClass}" data-size="${size}" onclick="selectProductSize('${product.name}', '${size}')">${size}</button>`;
                    }).join('')}
                </div>
                <div class="card-footer">
                    <span class="card-price">${formatPrice(price)}</span>
                    <button class="btn-card-add" onclick="addProductToCart('${product.name}')">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderScentVoicesFeed() {
    const feedEl = document.getElementById('reviews-dense-feed');
    if (!feedEl) return;

    feedEl.innerHTML = reviews.map(rev => {
        return `
        <div class="review-card-dense" style="animation: fadeInUp 0.5s ease-out;">
            <div class="review-dense-header">
                <div class="review-dense-user">
                    <span>${rev.name}</span>
                    ${rev.verified ? `
                        <span class="review-dense-badge">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="9 11 11 13 15 9"/></svg>
                            Verified Buyer
                        </span>
                    ` : ''}
                </div>
                <span class="review-dense-product">${rev.product}</span>
            </div>
            <h4 class="review-dense-headline">${rev.headline}</h4>
            <p class="review-dense-comment">"${rev.comment}"</p>
        </div>
        `;
    }).join('');
}

// --- INTERACTIVE VARIANT TOGGLER ---
window.selectProductSize = function(productName, sizeName) {
    appState.selectedVariants[productName] = sizeName;
    
    const product = products[productName];
    const newPrice = product.sizes[sizeName];
    const formattedPrice = formatPrice(newPrice);
    
    // Update all matching cards in the DOM (Hero bestseller section or Grid section)
    document.querySelectorAll(`[data-product-name="${productName}"]`).forEach(card => {
        // Toggle active button highlight
        card.querySelectorAll('.variant-pill-btn').forEach(btn => {
            if (btn.getAttribute('data-size') === sizeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update price text
        const priceEl = card.querySelector('.card-price, .compact-price');
        if (priceEl) {
            priceEl.textContent = formattedPrice;
        }
    });
};

// --- CART DRAWER OPERATIONS ---
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartBadge = document.getElementById('cart-badge-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal-price');

function toggleCartDrawer() {
    cartDrawer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

window.addProductToCart = function(productName) {
    const product = products[productName];
    const selectedSize = appState.selectedVariants[productName] || "50ml";
    const price = product.sizes[selectedSize];
    const cartId = `${productName}_${selectedSize}`;
    
    const existing = appState.cart.find(item => item.id === cartId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        appState.cart.push({
            id: cartId,
            name: productName,
            size: selectedSize,
            price: price,
            quantity: 1,
            imageSrc: product.imageSrc
        });
    }

    updateCartState();
    showToast(`Added ${productName} (${selectedSize}) to cart`, "🛍️");
    
    // Slide drawer open automatically
    setTimeout(() => {
        if (!cartDrawer.classList.contains('active')) {
            toggleCartDrawer();
        }
    }, 200);
};

window.updateCartQty = function(cartId, delta) {
    const item = appState.cart.find(item => item.id === cartId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        appState.cart = appState.cart.filter(i => i.id !== cartId);
    }
    
    updateCartState();
};

window.removeCartItem = function(cartId) {
    appState.cart = appState.cart.filter(i => i.id !== cartId);
    updateCartState();
};

function updateCartState() {
    localStorage.setItem('perfume_palette_cart', JSON.stringify(appState.cart));
    
    const totalQty = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalQty;
    
    renderCartList();
}

function renderCartList() {
    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h4 class="serif-font" style="font-size: 20px; margin-bottom: 8px;">Your wardrobe is empty</h4>
                <p style="font-size: 13px;">Explore our catalog to add your authentic scents.</p>
            </div>
        `;
        cartSubtotal.textContent = "Rp 0";
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = appState.cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
        <div class="cart-item-card" style="animation: fadeIn 0.3s ease-out;">
            <div class="cart-item-img-wrap">
                <img src="${item.imageSrc}" alt="${item.name}">
            </div>
            
            <div class="cart-item-details">
                <div>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-meta">${item.size}</span>
                </div>
                
                <div class="cart-item-price-qty">
                    <span class="cart-item-price">${formatPrice(item.price)}</span>
                    <div class="qty-counter">
                        <button class="btn-qty" onclick="updateCartQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="btn-qty" onclick="updateCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
                    </div>
                </div>
            </div>

            <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" aria-label="Remove item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        `;
    }).join('');

    cartSubtotal.textContent = formatPrice(subtotal);
}

// --- SMOOTH SCROLL ROUTINE ---
window.scrollToSection = function(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- ACTIVE NAVIGATION ACCENT HIGH-LIGHTER ON SCROLL ---
function trackActiveNavigationLink() {
    const sections = ['top-picks', 'all-brands', 'scent-voices', 'about-us'];
    const scrollPos = window.scrollY + 120; // offset for triggers
    
    sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (!el) return;
        
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        const navLink = document.querySelector(`.nav-tab[href="#${secId}"]`);
        
        if (navLink) {
            if (scrollPos >= top && scrollPos < bottom) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

// --- TOAST SYSTEMS ---
function showToast(message, icon) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span style="font-size:16px;">${icon || '✨'}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

// --- DOM INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    // Render components
    renderBestsellersHero();
    renderTopPicksGrid();
    renderScentVoicesFeed();
    updateCartState();

    // Sticky Header styles on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        trackActiveNavigationLink();
    });

    // Header smooth scroll click overrides
    document.querySelectorAll('.nav-tab, .logo').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });

    // Drawer triggers
    document.getElementById('btn-cart-nav').addEventListener('click', toggleCartDrawer);
    document.getElementById('btn-close-cart').addEventListener('click', toggleCartDrawer);
    cartOverlay.addEventListener('click', toggleCartDrawer);

    // Checkout Action (Directs to WhatsApp with cart items audit list)
    document.getElementById('btn-checkout-action').addEventListener('click', () => {
        if (appState.cart.length === 0) return;
        
        showToast("Redirecting to WhatsApp to complete your order...", "💬");
        
        // Construct WhatsApp Message with items and totals
        let messageText = "Halo Perfume Palette, saya ingin memesan:\n";
        appState.cart.forEach(item => {
            messageText += `- ${item.name} (${item.size}) x${item.quantity}: ${formatPrice(item.price * item.quantity)}\n`;
        });
        const totalSub = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        messageText += `Total: ${formatPrice(totalSub)}\n\nApakah barang di atas ready stock? Terima kasih!`;
        
        const waLink = `https://wa.link/x68he8?text=${encodeURIComponent(messageText)}`;
        
        setTimeout(() => {
            window.open(waLink, "_blank");
            appState.cart = [];
            updateCartState();
            toggleCartDrawer();
        }, 1200);
    });
});
