// --- STATE MANAGEMENT ---
let appState = {
    activePage: 'home', // 'home' | 'product' | 'reviews'
    selectedProductId: 'Santal Nectar',
    selectedSize: '50ml Eau de Parfum',
    cart: JSON.parse(localStorage.getItem('perfume_palette_cart')) || [],
    reviews: [
        {
            id: 7,
            name: "Genevieve R.",
            stars: 5,
            headline: "Simply unmatched luxury and performance!",
            text: "Santal Nectar is a stellar composition. The opening cardamom and violet leaves offer a crisp, spicy freshness that gently transitions into a buttery sandalwood dry-down. What makes this experience truly standout is the brand's direct WhatsApp ordering—super fast, responsive, and I received two premium samples of Amber Velvet and Citrus Breeze! A complete masterclass in modern perfumery.",
            product: "Santal Nectar",
            family: "Woody",
            longevity: "Long-Lasting",
            sillage: "Strong",
            occasion: "Special Date",
            verified: true,
            date: "June 17, 2026"
        },
        {
            id: 1,
            name: "Alexander K.",
            stars: 5,
            headline: "An absolute masterpiece of sandalwood",
            text: "I have been wearing Santal Nectar for 3 months now. The creaminess of the Mysore sandalwood paired with violet leaf in the opening is incredible. It gets a lot of compliments and easily lasts 8+ hours on my skin. Worth every single penny.",
            product: "Santal Nectar",
            family: "Woody",
            longevity: "Long-Lasting",
            sillage: "Moderate",
            occasion: "Daily",
            verified: true,
            date: "June 10, 2026"
        },
        {
            id: 2,
            name: "Sophia L.",
            stars: 5,
            headline: "Beautiful, airy, and fresh!",
            text: "Citrus Breeze is my absolute favorite morning fragrance. It's like waking up in an orange grove near the Italian coast. The sea spray note gives it a clean, salty skin vibe. Great for warm summer days.",
            product: "Citrus Breeze",
            family: "Citrus",
            longevity: "Moderate",
            sillage: "Moderate",
            occasion: "Summer Breeze",
            verified: true,
            date: "June 14, 2026"
        },
        {
            id: 3,
            name: "Camila M.",
            stars: 4,
            headline: "Pure romantic elegance",
            text: "Rose Couture is a stunning, sophisticated floral. It's not a dusty, old rose; it is fresh, modern, and has a slight sweet lychee undertone that keeps it playful. Sillage is quite strong, so spray lightly!",
            product: "Rose Couture",
            family: "Floral",
            longevity: "Long-Lasting",
            sillage: "Strong",
            occasion: "Special Date",
            verified: true,
            date: "May 28, 2026"
        },
        {
            id: 4,
            name: "Marcus V.",
            stars: 5,
            headline: "Opulent and hypnotic evening scent",
            text: "Amber Velvet is rich, smoky, and sweet all at once. The tobacco and cinnamon make it so comforting yet mysterious. The longevity is massive - I can still smell it on my coat days later. Perfect for cold nights out.",
            product: "Amber Velvet",
            family: "Oriental",
            longevity: "Long-Lasting",
            sillage: "Strong",
            occasion: "Night Out",
            verified: true,
            date: "June 02, 2026"
        },
        {
            id: 5,
            name: "Daniel T.",
            stars: 4,
            headline: "Incredibly versatile daily wearer",
            text: "Santal Nectar has become my signature scent for the office. It's smooth, woodsy, and clean without being overbearing. It sits beautifully on the skin and lasts all day. Highly recommended.",
            product: "Santal Nectar",
            family: "Woody",
            longevity: "Long-Lasting",
            sillage: "Moderate",
            occasion: "Daily",
            verified: false,
            date: "June 12, 2026"
        },
        {
            id: 6,
            name: "Olivia H.",
            stars: 3,
            headline: "Smells divine but fades quickly",
            text: "I adore the zesty opening of Citrus Breeze! It is so bright and uplifting. However, on my skin, it becomes an intimate scent after about 3 hours. I wish the citrus notes lingered a bit longer.",
            product: "Citrus Breeze",
            family: "Citrus",
            longevity: "Weak",
            sillage: "Intimate",
            occasion: "Summer Breeze",
            verified: true,
            date: "May 15, 2026"
        }
    ],
    reviewFilters: {
        families: [],
        longevity: [],
        occasion: []
    },
    quizStep: 1,
    quizAnswers: {}
};

// --- PRODUCTS DATABASE ---
const products = {
    "Santal Nectar": {
        name: "Santal Nectar",
        family: "Woody",
        tagline: "Earthy, Warm & Grounding",
        description: "A creamy wood symphony combining Mysore sandalwood, deep amber wood, and soft vanilla bean highlights.",
        longDescription: "A warm, grounding masterpiece. Santal Nectar captures the timeless depth of Australian sandalwood, sweetened with a hint of warm vanilla pod, and balanced by rich cedarwood and amber. It feels like a soft velvet blanket, leaving an elegant scent trail that makes a statement without shouting.",
        price: 120,
        sizes: {
            "50ml Eau de Parfum": 120,
            "100ml Eau de Parfum": 185,
            "10ml Concentrated Oil": 45
        },
        notes: {
            top: "Cardamom, Violet Leaves",
            heart: "Papyrus, Iris, Cedarwood",
            base: "Mysore Sandalwood, Amber, Vanilla Pod"
        },
        longevity: 8.5, // 0 - 10 scale
        sillage: 7.2,    // 0 - 10 scale
        colorGradient: "linear-gradient(135deg, #EADBC8 0%, #C5A880 100%)",
        liquidColor: "#E2C39B",
        accentColor: "#8C6A40",
        imageSrc: "assets/images/santal_nectar.png"
    },
    "Citrus Breeze": {
        name: "Citrus Breeze",
        family: "Citrus",
        tagline: "Zesty, Fresh & Energizing",
        description: "Zesty sun-drenched bergamot, crisp sea salt, and a green patchouli base.",
        longDescription: "An energetic burst of pure Mediterranean sunshine. Citrus Breeze opens with sparkling bergamot, fresh lemon zest, and clean grapefruit, drifting into a heart of fresh sea spray and jasmine, before drying down to a delicate, earthy vetiver and green patchouli base. The ultimate morning signature scent.",
        price: 95,
        sizes: {
            "50ml Eau de Parfum": 95,
            "100ml Eau de Parfum": 145,
            "10ml Concentrated Oil": 35
        },
        notes: {
            top: "Bergamot, Lemon Zest, Grapefruit",
            heart: "Sea Spray, Jasmine, Neroli",
            base: "Vetiver, Oakmoss, Green Patchouli"
        },
        longevity: 5.8,
        sillage: 6.5,
        colorGradient: "linear-gradient(135deg, #F0E6D2 0%, #D4CE99 100%)",
        liquidColor: "#EAE7BD",
        accentColor: "#7D8C40",
        imageSrc: "assets/images/citrus_breeze.png"
    },
    "Rose Couture": {
        name: "Rose Couture",
        family: "Floral",
        tagline: "Sweet, Elegant & Romantic",
        description: "Damask rose petals, fresh peony bloom, and a soft velvet musk base.",
        longDescription: "A romantic walk through a blooming French garden. Rose Couture is a modern tribute to the timeless rose. It blends luscious Damask rose buds with soft peony petals, highlighted by juicy lychee top notes, and settles into a sophisticated base of powdery iris and creamy cashmere musk.",
        price: 110,
        sizes: {
            "50ml Eau de Parfum": 110,
            "100ml Eau de Parfum": 165,
            "10ml Concentrated Oil": 40
        },
        notes: {
            top: "Lychee, Bergamot, Pink Pepper",
            heart: "Damask Rose, Peony, Jasmine Sambac",
            base: "Cashmere Musk, Cedarwood, Ambergris"
        },
        longevity: 7.8,
        sillage: 7.5,
        colorGradient: "linear-gradient(135deg, #F5E5E3 0%, #DFB4B0 100%)",
        liquidColor: "#ECC1BD",
        accentColor: "#A35C55",
        imageSrc: "assets/images/rose_couture.png"
    },
    "Amber Velvet": {
        name: "Amber Velvet",
        family: "Oriental",
        tagline: "Spicy, Rich & Exotic",
        description: "A dark, seductive blend of amber wood, exotic spices, and sweet honeyed tobacco.",
        longDescription: "Seductive, mysterious, and deeply luxurious. Amber Velvet surrounds you with an opulent cloud of sweet honeyed tobacco leaves and warm amber resin, spiced with Madagascar cinnamon, and layered over a heavy, sophisticated base of dark vanilla, labdanum, and Tonka bean. Perfect for cold evenings and grand galas.",
        price: 135,
        sizes: {
            "50ml Eau de Parfum": 135,
            "100ml Eau de Parfum": 210,
            "10ml Concentrated Oil": 50
        },
        notes: {
            top: "Honey, Tobacco Leaves, Coriander",
            heart: "Madagascar Cinnamon, Labdanum, Benzoin",
            base: "Amber Resin, Vanilla Bean, Tonka Bean"
        },
        longevity: 9.2,
        sillage: 8.8,
        colorGradient: "linear-gradient(135deg, #EDDCDB 0%, #CFA5A2 100%)",
        liquidColor: "#DBA597",
        accentColor: "#914F3D",
        imageSrc: "assets/images/amber_velvet.png"
    },
    "Ocean Mist": {
        name: "Ocean Mist",
        family: "Citrus",
        tagline: "Crisp, Marine & Aquatic",
        description: "A cooling sea salt breeze with fresh mineral notes, cucumber slice, and driftwood base.",
        longDescription: "An immersive dive into the cold, deep ocean. Ocean Mist opens with a crisp breeze of sea salt and mineral accord, layered with fresh cucumber slice and green algae, before drying down to a calming driftwood and white musk foundation. Perfect for active days and bright summer mornings.",
        price: 105,
        sizes: {
            "50ml Eau de Parfum": 105,
            "100ml Eau de Parfum": 155,
            "10ml Concentrated Oil": 38
        },
        notes: {
            top: "Sea Salt, Cucumber",
            heart: "Algae, Mineral Accord",
            base: "Driftwood, White Musk"
        },
        longevity: 6.2,
        sillage: 5.5,
        colorGradient: "linear-gradient(135deg, #E0F2F1 0%, #008080 100%)",
        liquidColor: "#C4E9E7",
        accentColor: "#006666",
        imageSrc: ""
    },
    "Vanilla Royale": {
        name: "Vanilla Royale",
        family: "Oriental",
        tagline: "Sweet, Opulent & Seductive",
        description: "Rich black vanilla pod, warm toasted tonka bean, and a splash of spiced gold rum.",
        longDescription: "An indulgent, velvet night. Vanilla Royale is an opulent oriental blend opening with sweet spiced gold rum and night-blooming orchids. The heart is filled with toasted tonka bean and heliotrope, melting into a heavy, intoxicating base of Madagascar black vanilla pod, rich benzoin, and amber crystals.",
        price: 125,
        sizes: {
            "50ml Eau de Parfum": 125,
            "100ml Eau de Parfum": 190,
            "10ml Concentrated Oil": 48
        },
        notes: {
            top: "Spiced Rum, Orchid",
            heart: "Toasted Tonka, Heliotrope",
            base: "Madagascar Vanilla, Benzoin"
        },
        longevity: 8.8,
        sillage: 8.0,
        colorGradient: "linear-gradient(135deg, #ECC89C 0%, #5C3A21 100%)",
        liquidColor: "#D3AC86",
        accentColor: "#5C3A21",
        imageSrc: ""
    }
};

// --- DYNAMIC PREMIUM SVG ASSETS ---
function getPerfumeBottleSvg(productName, width = "100%", height = "100%") {
    const prod = products[productName];
    const liquid = prod.liquidColor;
    const accent = prod.accentColor;
    
    return `
    <svg width="${width}" height="${height}" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-height: 100%; transition: all 0.5s ease;">
        <!-- Definitions for gradients and shadows -->
        <defs>
            <filter id="glass-shadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#1a1a1a" flood-opacity="0.12"/>
            </filter>
            <!-- Cap Reflection Gradient -->
            <linearGradient id="cap-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.5"/>
                <stop offset="30%" stop-color="#ffffff" stop-opacity="0.1"/>
                <stop offset="70%" stop-color="#C5A880" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="#C5A880" stop-opacity="0.6"/>
            </linearGradient>
            <!-- Liquid Fill Gradient -->
            <linearGradient id="liquid-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${liquid}" stop-opacity="0.8"/>
                <stop offset="70%" stop-color="${liquid}" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="${accent}" stop-opacity="0.5"/>
            </linearGradient>
            <!-- Gold Cap Metallic Gradient -->
            <linearGradient id="gold-metallic" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#DFD0BC"/>
                <stop offset="50%" stop-color="#C5A880"/>
                <stop offset="100%" stop-color="#8B704E"/>
            </linearGradient>
            <!-- Glass Bottle Body Highlight -->
            <linearGradient id="glass-reflect" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
                <stop offset="15%" stop-color="#ffffff" stop-opacity="0.1"/>
                <stop offset="85%" stop-color="#ffffff" stop-opacity="0.0"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.3"/>
            </linearGradient>
        </defs>

        <g filter="url(#glass-shadow)">
            <!-- 1. Spray Nozzle & Pump Stem (Inside Bottle) -->
            <rect x="98" y="70" width="4" height="135" fill="#C5A880" fill-opacity="0.4" rx="2"/>
            <rect x="94" y="65" width="12" height="15" fill="url(#gold-metallic)"/>
            
            <!-- 2. The Liquid (Inner container shape) -->
            <rect x="42" y="86" width="116" height="124" rx="12" fill="url(#liquid-grad)"/>

            <!-- 3. Glass Bottle Body Outer Shell -->
            <rect x="36" y="80" width="128" height="136" rx="18" fill="url(#glass-reflect)" stroke="#C5A880" stroke-width="1.5" stroke-opacity="0.3"/>
            <!-- Glass Inner Contour for Thickness effect -->
            <rect x="40" y="84" width="120" height="128" rx="14" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4"/>

            <!-- 4. Luxury Label Frame (Center of bottle) -->
            <rect x="55" y="125" width="90" height="50" rx="4" fill="#FAF8F5" stroke="url(#gold-metallic)" stroke-width="1.2"/>
            <!-- Inner thin boundary line -->
            <rect x="59" y="129" width="82" height="42" rx="2" fill="none" stroke="#C5A880" stroke-width="0.5" stroke-dasharray="2 1"/>
            
            <!-- Label Text -->
            <text x="100" y="145" text-anchor="middle" font-family="'Playfair Display', serif" font-size="10" fill="#1a1a1a" letter-spacing="1">PERFUME</text>
            <text x="100" y="153" text-anchor="middle" font-family="'Playfair Display', serif" font-size="7" font-style="italic" fill="#C5A880" letter-spacing="0.5">palette</text>
            <rect x="85" y="157" width="30" height="0.5" fill="#C5A880"/>
            <text x="100" y="165" text-anchor="middle" font-family="'Inter', sans-serif" font-size="6.5" font-weight="600" fill="#1a1a1a" letter-spacing="1">${prod.name.toUpperCase()}</text>

            <!-- 5. Gold Metallic Neck Collar -->
            <rect x="78" y="55" width="44" height="26" rx="3" fill="url(#gold-metallic)"/>
            <!-- Neck collar highlights -->
            <line x1="84" y1="58" x2="84" y2="78" stroke="#ffffff" stroke-opacity="0.4" stroke-width="1.5"/>
            <line x1="116" y1="58" x2="116" y2="78" stroke="#1a1a1a" stroke-opacity="0.2" stroke-width="1.5"/>

            <!-- 6. Heavy Glass Transparent Cap -->
            <rect x="65" y="16" width="70" height="40" rx="10" fill="none" stroke="#C5A880" stroke-width="1.5" stroke-opacity="0.3"/>
            <rect x="65" y="16" width="70" height="40" rx="10" fill="url(#cap-grad)"/>
            <!-- Highlight curves on cap -->
            <path d="M72 23 C 85 20, 115 20, 128 23" stroke="#ffffff" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"/>
        </g>
    </svg>`;
}

function getProductImageHtml(productName, style = '', widthClass = '') {
    const prod = products[productName];
    if (prod && prod.imageSrc) {
        return `<img src="${prod.imageSrc}" alt="${prod.name}" class="product-img-asset ${widthClass}" style="${style}; max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.08)); transition: var(--transition-smooth);" onerror="this.onerror=null; this.outerHTML=getPerfumeBottleSvg('${productName}')"/>`;
    }
    return getPerfumeBottleSvg(productName);
}

// --- DYNAMIC CONTENT INJECTIONS (SPA RENDERS) ---

function renderHome() {
    const contentPort = document.getElementById('app-content');
    
    // Check if Santal Nectar exists, fallback to first product
    const signatureProduct = products[appState.selectedProductId] || Object.values(products)[0];
    
    contentPort.innerHTML = `
        <!-- Luxury Hero Section -->
        <section class="hero-section">
            <div class="container hero-grid">
                <div class="hero-content">
                    <span class="gold-badge hero-tagline">Artisan Fragrance House</span>
                    <h1 class="hero-title">Find Your Perfect<br><span>Scent Profile</span>.</h1>
                    <p class="hero-description">Discover a signature scent that reflects your true essence. Explore our curated collections bridging high-end luxury and everyday accessibility.</p>
                    <div class="hero-actions">
                        <button class="btn-primary" id="btn-hero-quiz">Take the Scent Quiz</button>
                        <button class="btn-secondary" id="btn-hero-explore">Shop Best Sellers</button>
                    </div>
                </div>
                <div class="hero-image-container">
                    <div class="hero-bg-shape"></div>
                    <div class="hero-perfume-img" style="width: 320px; height: 380px; display: flex; justify-content: center; align-items: center;">
                        ${getProductImageHtml(signatureProduct.name, "height: 340px;")}
                    </div>
                </div>
            </div>
        </section>

        <!-- Shop by Fragrance Family -->
        <section class="section-padding container">
            <div class="section-title-wrap text-center">
                <span class="section-subtitle">Categorized Masterpieces</span>
                <h2 class="section-title">Shop by Fragrance Family</h2>
            </div>
            
            <div class="category-grid">
                <!-- Woody Card -->
                <div class="category-card" data-family="Woody">
                    <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600&auto=format&fit=crop" alt="Woody family background" class="category-card-bg">
                    <!-- SVG Tree Icon -->
                    <svg class="category-icon" viewBox="0 0 24 24">
                        <path d="M12 2L3 9h3v10h12V9h3L12 2z"/>
                        <path d="M12 22V12M9 15h6"/>
                    </svg>
                    <h3 class="category-name">Woody</h3>
                    <p class="category-desc">Earthy, warm woods, cedar, and deep cream sandalwood undertones.</p>
                </div>
                <!-- Citrus Card -->
                <div class="category-card" data-family="Citrus">
                    <img src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop" alt="Citrus family background" class="category-card-bg">
                    <!-- SVG Lemon Icon -->
                    <svg class="category-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        <path d="M2 12h20"/>
                    </svg>
                    <h3 class="category-name">Citrus</h3>
                    <p class="category-desc">Fresh bergamot, lemon harvests, and crisp zesty energy bursts.</p>
                </div>
                <!-- Floral Card -->
                <div class="category-card" data-family="Floral">
                    <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop" alt="Floral family background" class="category-card-bg">
                    <!-- SVG Flower Icon -->
                    <svg class="category-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 5c-1.5-2-4-2-5.5-.5S6 8.5 8 10c-2 1.5-2 4-.5 5.5s4 1.5 5.5-.5c1.5 2 4 2 5.5.5s1.5-4-.5-5.5c2-1.5 2-4 .5-5.5S13.5 3 12 5z"/>
                    </svg>
                    <h3 class="category-name">Floral</h3>
                    <p class="category-desc">Sweet Damask rose petals, velvet peony, and romantic bouquets.</p>
                </div>
                <!-- Oriental Card -->
                <div class="category-card" data-family="Oriental">
                    <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600&auto=format&fit=crop" alt="Oriental family background" class="category-card-bg">
                    <!-- SVG Incense/Spice Icon -->
                    <svg class="category-icon" viewBox="0 0 24 24">
                        <path d="M12 2c1.2 0 2 1 2 2v6c0 1.2-1 2-2 2s-2-.8-2-2V4c0-1.2.8-2 2-2z"/>
                        <path d="M6 18c0-2 2-3 2-5h8c0 2 2 3 2 5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"/>
                        <circle cx="12" cy="16" r="1.5"/>
                    </svg>
                    <h3 class="category-name">Oriental</h3>
                    <p class="category-desc">Spicy cinnamon warmth, golden amber resin, and rich exotic luxury.</p>
                </div>
            </div>
        </section>

        <!-- Best Sellers Product Carousel -->
        <section class="section-padding best-sellers-section">
            <div class="container">
                <div class="carousel-header-wrap">
                    <div>
                        <span class="section-subtitle">Customer Favorites</span>
                        <h2 class="section-title">The Best Sellers</h2>
                    </div>
                    <div class="carousel-nav-btns">
                        <button class="carousel-nav-btn" id="carousel-prev" aria-label="Previous Products">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button class="carousel-nav-btn" id="carousel-next" aria-label="Next Products">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>

                <div class="carousel-container">
                    <div class="carousel-track-wrapper">
                        <div class="carousel-track" id="carousel-track-el">
                            ${Object.values(products).map(product => {
                                return `
                                <div class="product-card" data-product-name="${product.name}">
                                    <div class="product-image-container">
                                        <span class="product-badge">Bestseller</span>
                                        <div style="width: 140px; height: 160px; display: flex; justify-content: center; align-items: center;">
                                            ${getProductImageHtml(product.name, "height: 140px;")}
                                        </div>
                                    </div>
                                    <div class="product-info">
                                        <div>
                                            <span class="product-family-label">${product.family}</span>
                                            <h3 class="product-name">${product.name}</h3>
                                            <div class="product-rating">
                                                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                <span class="rating-value">4.9</span>
                                            </div>
                                        </div>
                                        <div class="product-footer">
                                            <span class="product-price">$${product.price}</span>
                                            <a href="https://wa.link/x68he8" target="_blank" class="btn-card-action" aria-label="Order on WhatsApp" style="display: flex; justify-content: center; align-items: center;">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;">
                                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trust and Security Bar -->
        <section class="trust-bar">
            <div class="container trust-grid">
                <div class="trust-item">
                    <svg class="trust-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l3 3"></path>
                    </svg>
                    <div>
                        <h4 class="trust-title">Fast Shipping</h4>
                        <p class="trust-desc">Complimentary shipping on orders over $150.</p>
                    </div>
                </div>
                <div class="trust-item">
                    <svg class="trust-icon" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <div>
                        <h4 class="trust-title">100% Organic Trust</h4>
                        <p class="trust-desc">Unbiased, community reviews and verified checks.</p>
                    </div>
                </div>
                <div class="trust-item">
                    <svg class="trust-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <div>
                        <h4 class="trust-title">Premium Samples</h4>
                        <p class="trust-desc">Receive 2 complimentary samples with every order.</p>
                    </div>
                </div>
                <div class="trust-item">
                    <svg class="trust-icon" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <div>
                        <h4 class="trust-title">Secure Payments</h4>
                        <p class="trust-desc">Encrypting checkout gateways for peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Hook up Event Listeners inside Home Page
    document.getElementById('btn-hero-quiz').addEventListener('click', toggleQuizModal);
    document.getElementById('btn-hero-explore').addEventListener('click', () => {
        document.getElementById('carousel-track-el').scrollIntoView({ behavior: 'smooth' });
    });

    // Category Card click to shop specific family in catalog or navigate
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const family = card.getAttribute('data-family');
            navigateToPage('reviews');
            // Check matching checkboxes
            document.querySelectorAll('.filter-checkbox-label input').forEach(input => {
                if(input.value === family) {
                    input.checked = true;
                    // Trigger state update
                    handleFilterChange();
                } else {
                    input.checked = false;
                }
            });
        });
    });

    // Best Sellers Carousel logic
    const track = document.getElementById('carousel-track-el');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // View Details triggers (clicking on the product card elements, except the whatsapp link)
    document.querySelectorAll('.product-card').forEach(card => {
        const prodName = card.getAttribute('data-product-name');
        
        // Image click
        const imgContainer = card.querySelector('.product-image-container');
        if (imgContainer) {
            imgContainer.style.cursor = 'pointer';
            imgContainer.addEventListener('click', () => {
                appState.selectedProductId = prodName;
                appState.selectedSize = Object.keys(products[prodName].sizes)[0];
                navigateToPage('product');
            });
        }
        
        // Name click
        const nameEl = card.querySelector('.product-name');
        if (nameEl) {
            nameEl.style.cursor = 'pointer';
            nameEl.addEventListener('click', () => {
                appState.selectedProductId = prodName;
                appState.selectedSize = Object.keys(products[prodName].sizes)[0];
                navigateToPage('product');
            });
        }
    });
}

function renderProduct() {
    const contentPort = document.getElementById('app-content');
    const product = products[appState.selectedProductId];
    
    contentPort.innerHTML = `
        <div class="container section-padding" style="padding-top: 40px;">
            <!-- Back button -->
            <button class="back-link-btn" id="btn-back-product">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Brand Homepage
            </button>

            <!-- Product Grid -->
            <div class="product-detail-grid">
                <!-- Gallery Columns -->
                <div class="product-detail-gallery">
                    <div class="gallery-main-img-wrap">
                        <div class="gallery-main-img" style="width: 280px; height: 320px; display: flex; justify-content: center; align-items: center;">
                            ${getProductImageHtml(product.name, "height: 280px;")}
                        </div>
                    </div>
                    <div class="gallery-thumbs">
                        <div class="thumb-card active" data-img="main">
                            <div style="width: 45px; height: 55px; display: flex; justify-content: center; align-items: center;">
                                ${getProductImageHtml(product.name, "height: 45px;")}
                            </div>
                        </div>
                        <div class="thumb-card" data-img="top">
                            <div class="serif-font" style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold-hover); font-weight: bold;">Top Notes</div>
                        </div>
                        <div class="thumb-card" data-img="heart">
                            <div class="serif-font" style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold-hover); font-weight: bold;">Heart Notes</div>
                        </div>
                        <div class="thumb-card" data-img="base">
                            <div class="serif-font" style="font-size: 11px; text-transform: uppercase; color: var(--accent-gold-hover); font-weight: bold;">Base Notes</div>
                        </div>
                    </div>
                </div>

                <!-- Product Specifications Info -->
                <div class="product-detail-info">
                    <span class="gold-badge" style="margin-bottom:14px;">${product.family} Olfactory Family</span>
                    <h1 class="product-detail-title">${product.name}</h1>
                    
                    <div class="product-detail-meta">
                        <div class="product-rating" style="margin-bottom:0px;">
                            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <span class="rating-value" style="font-size:13px; font-weight:600;">4.9 / 5.0</span>
                        </div>
                        <a href="#" class="rating-value" style="text-decoration: underline;" id="btn-jump-reviews">Read Scent Voices</a>
                    </div>

                    <div class="product-detail-price" id="detail-price-display">$${product.sizes[appState.selectedSize]}</div>
                    <p class="product-detail-description">${product.longDescription}</p>

                    <!-- Sizes Option Selector -->
                    <div class="product-option-section">
                        <h4 class="option-title">Select Size / Medium</h4>
                        <div class="size-selector-wrap">
                            ${Object.entries(product.sizes).map(([sizeName, priceVal]) => {
                                const activeClass = sizeName === appState.selectedSize ? 'active' : '';
                                return `<button class="size-pill-btn ${activeClass}" data-size="${sizeName}">${sizeName}</button>`;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Cart Actions -->
                    <div class="detail-actions-wrap">
                        <a href="https://wa.link/x68he8" target="_blank" class="btn-add-to-cart" style="text-decoration: none; display: flex; justify-content: center; align-items: center; gap: 10px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Order via WhatsApp
                        </a>
                        <button class="btn-add-to-cart" id="btn-add-detail-cart" style="background-color: var(--bg-cream-dark); color: var(--text-charcoal); flex-grow: 0; min-width: 140px;">
                            Add to Cart
                        </button>
                        <button class="btn-wishlist" id="btn-wishlist-toggle" aria-label="Add to Wishlist">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                    </div>

                    <!-- Unique Scent Notes breakdown -->
                    <div class="fragrance-notes-section">
                        <h4 class="option-title" style="margin-bottom:20px; border-bottom:1px solid rgba(197,168,128,0.25); padding-bottom:8px;">Olfactory Notes Pyramid</h4>
                        <div class="notes-straight-list" style="display: flex; flex-direction: column; gap: 20px;">
                            
                            <!-- Top Notes Row -->
                            <div class="note-straight-row" style="display: flex; flex-direction: column; border-bottom: 1px solid rgba(197,168,128,0.15); padding-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                    <div style="text-align: left;">
                                        <span class="gold-badge" style="font-size: 10px; padding: 3px 10px; margin-bottom: 5px;">Top Notes</span>
                                        <div style="font-family:'Playfair Display', serif; font-size:18px; font-weight: 500; color:var(--text-charcoal);">${product.notes.top}</div>
                                    </div>
                                    <button class="btn-quiz-nav btn-quiz-back note-desc-toggle-btn" data-target="desc-top" style="padding: 8px 16px; font-size: 11px; margin-left: 15px;">Note Profile</button>
                                </div>
                                <div id="desc-top" class="note-expandable-desc" style="max-height: 0px; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); color: var(--text-muted); font-size: 13px; text-align: left; margin-top: 0;">
                                    <p style="padding-top: 10px;"><strong>Opening Note Description:</strong> The top notes represent the initial burst of fragrance upon application. They consist of light, evaporating molecules that form your immediate impression, fading gracefully over 15 to 30 minutes to make way for the heart of the scent.</p>
                                </div>
                            </div>

                            <!-- Heart Notes Row -->
                            <div class="note-straight-row" style="display: flex; flex-direction: column; border-bottom: 1px solid rgba(197,168,128,0.15); padding-bottom: 15px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                    <div style="text-align: left;">
                                        <span class="gold-badge" style="font-size: 10px; padding: 3px 10px; margin-bottom: 5px; background-color: var(--text-charcoal); color: var(--bg-alabaster);">Heart Notes</span>
                                        <div style="font-family:'Playfair Display', serif; font-size:18px; font-weight: 500; color:var(--text-charcoal);">${product.notes.heart}</div>
                                    </div>
                                    <button class="btn-quiz-nav btn-quiz-back note-desc-toggle-btn" data-target="desc-heart" style="padding: 8px 16px; font-size: 11px; margin-left: 15px;">Note Profile</button>
                                </div>
                                <div id="desc-heart" class="note-expandable-desc" style="max-height: 0px; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); color: var(--text-muted); font-size: 13px; text-align: left; margin-top: 0;">
                                    <p style="padding-top: 10px;"><strong>Heart Note Description:</strong> Often called the 'middle notes', the heart represents the true character of the fragrance. Revealing itself after the top notes disperse (around 20-30 minutes), it creates the core theme of the scent and lingers for up to 4 hours.</p>
                                </div>
                            </div>

                            <!-- Base Notes Row -->
                            <div class="note-straight-row" style="display: flex; flex-direction: column; padding-bottom: 5px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                    <div style="text-align: left;">
                                        <span class="gold-badge" style="font-size: 10px; padding: 3px 10px; margin-bottom: 5px;">Base Notes</span>
                                        <div style="font-family:'Playfair Display', serif; font-size:18px; font-weight: 500; color:var(--text-charcoal);">${product.notes.base}</div>
                                    </div>
                                    <button class="btn-quiz-nav btn-quiz-back note-desc-toggle-btn" data-target="desc-base" style="padding: 8px 16px; font-size: 11px; margin-left: 15px;">Note Profile</button>
                                </div>
                                <div id="desc-base" class="note-expandable-desc" style="max-height: 0px; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); color: var(--text-muted); font-size: 13px; text-align: left; margin-top: 0;">
                                    <p style="padding-top: 10px;"><strong>Dry Down Note Description:</strong> The base notes contain the heaviest, slowest-evaporating molecules. Providing the dry-down signature, they bind the lighter ingredients, giving depth, structure, and massive longevity, remaining detectable on skin or clothes for 8 to 24+ hours.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Customer-rated Sliders -->
                    <div class="sliders-section">
                        <h4 class="option-title" style="margin-bottom:20px;">Customer-Rated Scent Performance</h4>
                        
                        <!-- Longevity Slider -->
                        <div class="slider-group">
                            <div class="slider-label-wrap">
                                <span class="slider-title">Longevity</span>
                                <span class="slider-score" id="longevity-score-display">${product.longevity} / 10</span>
                            </div>
                            <div class="slider-track-container">
                                <div class="slider-track">
                                    <div class="slider-fill" id="longevity-slider-fill" style="width: 0%;"></div>
                                    <div class="slider-handle" id="longevity-slider-handle" style="left: 0%;"></div>
                                </div>
                            </div>
                            <div class="slider-markers">
                                <span class="slider-marker-text">Weak</span>
                                <span class="slider-marker-text">Moderate (4-6 hrs)</span>
                                <span class="slider-marker-text">Long-Lasting (8hrs+)</span>
                            </div>
                        </div>

                        <!-- Sillage Slider -->
                        <div class="slider-group" style="margin-top: 24px;">
                            <div class="slider-label-wrap">
                                <span class="slider-title">Sillage (Scent Trail)</span>
                                <span class="slider-score" id="sillage-score-display">${product.sillage} / 10</span>
                            </div>
                            <div class="slider-track-container">
                                <div class="slider-track">
                                    <div class="slider-fill" id="sillage-slider-fill" style="width: 0%;"></div>
                                    <div class="slider-handle" id="sillage-slider-handle" style="left: 0%;"></div>
                                </div>
                            </div>
                            <div class="slider-markers">
                                <span class="slider-marker-text">Intimate (Skin)</span>
                                <span class="slider-marker-text">Moderate (Arm's length)</span>
                                <span class="slider-marker-text">Strong (Leaves a trail)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    // Trigger Sliders Micro-animation on mount
    setTimeout(() => {
        const longPercent = product.longevity * 10;
        const sillPercent = product.sillage * 10;
        
        const longFill = document.getElementById('longevity-slider-fill');
        const longHandle = document.getElementById('longevity-slider-handle');
        const sillFill = document.getElementById('sillage-slider-fill');
        const sillHandle = document.getElementById('sillage-slider-handle');
        
        if (longFill && longHandle) {
            longFill.style.width = `${longPercent}%`;
            longHandle.style.left = `${longPercent}%`;
        }
        if (sillFill && sillHandle) {
            sillFill.style.width = `${sillPercent}%`;
            sillHandle.style.left = `${sillPercent}%`;
        }
    }, 150);

    // Gallery tab swaps
    const galleryMain = document.querySelector('.gallery-main-img');
    const thumbCards = document.querySelectorAll('.thumb-card');
    
    thumbCards.forEach(card => {
        card.addEventListener('click', () => {
            thumbCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const type = card.getAttribute('data-img');
            if (type === 'main') {
                galleryMain.innerHTML = getProductImageHtml(product.name, "height: 280px;");
            } else if (type === 'top') {
                galleryMain.innerHTML = `
                    <div style="text-align:center; padding:20px; color:var(--text-charcoal); animation: fadeIn 0.4s ease-out;">
                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:60px; height:60px; stroke-width:1; color:var(--accent-gold); margin-bottom:15px;"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
                        <h4 class="serif-font" style="font-size:24px; margin-bottom:10px;">Top Notes</h4>
                        <p style="font-size:14px; max-width:250px; line-height:1.5; color:var(--text-muted);">${product.notes.top}</p>
                    </div>`;
            } else if (type === 'heart') {
                galleryMain.innerHTML = `
                    <div style="text-align:center; padding:20px; color:var(--text-charcoal); animation: fadeIn 0.4s ease-out;">
                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:60px; height:60px; stroke-width:1; color:var(--accent-gold); margin-bottom:15px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <h4 class="serif-font" style="font-size:24px; margin-bottom:10px;">Heart Notes</h4>
                        <p style="font-size:14px; max-width:250px; line-height:1.5; color:var(--text-muted);">${product.notes.heart}</p>
                    </div>`;
            } else if (type === 'base') {
                galleryMain.innerHTML = `
                    <div style="text-align:center; padding:20px; color:var(--text-charcoal); animation: fadeIn 0.4s ease-out;">
                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:60px; height:60px; stroke-width:1; color:var(--accent-gold); margin-bottom:15px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        <h4 class="serif-font" style="font-size:24px; margin-bottom:10px;">Base Notes</h4>
                        <p style="font-size:14px; max-width:250px; line-height:1.5; color:var(--text-muted);">${product.notes.base}</p>
                    </div>`;
            }
        });
    });

    // Size Selection toggler
    const sizeBtns = document.querySelectorAll('.size-pill-btn');
    const priceDisplay = document.getElementById('detail-price-display');
    
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const size = btn.getAttribute('data-size');
            appState.selectedSize = size;
            priceDisplay.textContent = `$${product.sizes[size]}`;
        });
    });

    // Back to homepage click
    document.getElementById('btn-back-product').addEventListener('click', () => {
        navigateToPage('home');
    });

    // Review page link jump
    document.getElementById('btn-jump-reviews').addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('reviews');
    });

    // Add to cart click
    document.getElementById('btn-add-detail-cart').addEventListener('click', () => {
        const itemPrice = product.sizes[appState.selectedSize];
        addToCart(product.name, appState.selectedSize, itemPrice);
    });

    // Wishlist alert
    document.getElementById('btn-wishlist-toggle').addEventListener('click', () => {
        const btn = document.getElementById('btn-wishlist-toggle');
        btn.style.color = '#e07a5f';
        btn.style.borderColor = '#e07a5f';
        showToast("Added to your wishlist", "❤️");
    });

    // Notes description toggler
    document.querySelectorAll('.note-desc-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const descEl = document.getElementById(targetId);
            
            if (descEl) {
                const isOpen = descEl.style.maxHeight !== '0px' && descEl.style.maxHeight !== '';
                
                // Close all others first
                document.querySelectorAll('.note-expandable-desc').forEach(el => {
                    el.style.maxHeight = '0px';
                    el.style.marginTop = '0px';
                });
                document.querySelectorAll('.note-desc-toggle-btn').forEach(b => {
                    b.textContent = 'Note Profile';
                    b.style.backgroundColor = 'transparent';
                    b.style.color = 'var(--text-muted)';
                });

                if (!isOpen) {
                    descEl.style.maxHeight = '150px'; // ample height
                    descEl.style.marginTop = '10px';
                    btn.textContent = 'Hide Profile';
                    btn.style.backgroundColor = 'var(--text-charcoal)';
                    btn.style.color = 'var(--bg-alabaster)';
                }
            }
        });
    });
}

function renderReviews() {
    const contentPort = document.getElementById('app-content');
    
    contentPort.innerHTML = `
        <div class="container section-padding" style="padding-top: 40px;">
            <div class="section-title-wrap text-center" style="margin-bottom: 40px;">
                <span class="section-subtitle">Community & Reviews</span>
                <h1 class="section-title">Scent Voices</h1>
                <p style="color:var(--text-muted); font-size:15px; margin-top:10px;">100% organic, unbiased user comments and fragrance reviews.</p>
            </div>

            <!-- Average Dashboard Section -->
            <div class="reviews-dashboard-grid" id="reviews-dashboard-panel">
                <!-- Calculated dynamically in renderReviewsDashboard() -->
            </div>

            <!-- Reviews and Filter Split Column -->
            <div class="reviews-content-grid">
                <!-- Filter Sidebar -->
                <aside class="filter-sidebar">
                    <h3 class="filter-sidebar-title serif-font">Filters</h3>
                    
                    <!-- Family Filters -->
                    <div class="filter-section">
                        <h4 class="filter-title">Fragrance Family</h4>
                        <div class="filter-options">
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="family-filter-input" value="Woody">
                                <span class="custom-checkbox"></span>
                                Woody
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="family-filter-input" value="Citrus">
                                <span class="custom-checkbox"></span>
                                Citrus
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="family-filter-input" value="Floral">
                                <span class="custom-checkbox"></span>
                                Floral
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="family-filter-input" value="Oriental">
                                <span class="custom-checkbox"></span>
                                Oriental
                            </label>
                        </div>
                    </div>

                    <!-- Longevity Filters -->
                    <div class="filter-section">
                        <h4 class="filter-title">Longevity</h4>
                        <div class="filter-options">
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="longevity-filter-input" value="Weak">
                                <span class="custom-checkbox"></span>
                                Weak
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="longevity-filter-input" value="Moderate">
                                <span class="custom-checkbox"></span>
                                Moderate
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="longevity-filter-input" value="Long-Lasting">
                                <span class="custom-checkbox"></span>
                                Long-Lasting
                            </label>
                        </div>
                    </div>

                    <!-- Occasion Filters -->
                    <div class="filter-section">
                        <h4 class="filter-title">Occasion</h4>
                        <div class="filter-options">
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter-input" value="Daily">
                                <span class="custom-checkbox"></span>
                                Daily Wear
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter-input" value="Night Out">
                                <span class="custom-checkbox"></span>
                                Night Out
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter-input" value="Special Date">
                                <span class="custom-checkbox"></span>
                                Special Date
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter-input" value="Summer Breeze">
                                <span class="custom-checkbox"></span>
                                Summer Breeze
                            </label>
                        </div>
                    </div>
                </aside>

                <!-- Reviews Cards list container -->
                <div class="reviews-list-container" id="reviews-cards-list">
                    <!-- Dynamically drawn by renderReviewsList() -->
                </div>
            </div>
        </div>
    `;

    // Populate Sub-components
    renderReviewsDashboard();
    renderReviewsList();

    // Hook up checkboxes
    document.querySelectorAll('.filter-checkbox-label input').forEach(input => {
        input.addEventListener('change', handleFilterChange);
    });
}

function renderReviewsDashboard() {
    const dashboard = document.getElementById('reviews-dashboard-panel');
    if (!dashboard) return;

    const totalReviews = appState.reviews.length;
    let sumStars = 0;
    let distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    appState.reviews.forEach(r => {
        sumStars += r.stars;
        distribution[r.stars] = (distribution[r.stars] || 0) + 1;
    });

    const average = totalReviews > 0 ? (sumStars / totalReviews).toFixed(1) : "0.0";
    
    dashboard.innerHTML = `
        <div class="rating-summary-left">
            <span class="big-rating-number">${average}</span>
            <div class="dashboard-stars">
                ${getStarsHtml(Math.round(parseFloat(average)))}
            </div>
            <span class="review-count-text">Based on ${totalReviews} community voices</span>
            <button class="btn-write-review" id="btn-trigger-write-review">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Write a Review
            </button>
        </div>
        <div class="rating-histogram">
            ${[5, 4, 3, 2, 1].map(star => {
                const count = distribution[star] || 0;
                const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
                return `
                <div class="histogram-row">
                    <span class="histogram-label">
                        ${star}
                        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </span>
                    <div class="histogram-bar-track">
                        <div class="histogram-bar-fill" style="width: ${percentage}%;"></div>
                    </div>
                    <span class="histogram-percentage">${percentage}%</span>
                </div>
                `;
            }).join('')}
        </div>
    `;

    document.getElementById('btn-trigger-write-review').addEventListener('click', toggleWriteReviewModal);
}

function renderReviewsList() {
    const listContainer = document.getElementById('reviews-cards-list');
    if (!listContainer) return;

    // Filter reviews
    const f = appState.reviewFilters;
    const filtered = appState.reviews.filter(rev => {
        // Family filter
        if (f.families.length > 0 && !f.families.includes(rev.family)) return false;
        // Longevity filter
        if (f.longevity.length > 0 && !f.longevity.includes(rev.longevity)) return false;
        // Occasion filter
        if (f.occasion.length > 0 && !f.occasion.includes(rev.occasion)) return false;
        return true;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="reviews-no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 class="serif-font" style="font-size:22px; margin-bottom:8px;">No reviews found</h3>
                <p>Try clearing your filter criteria to see other reviews.</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = filtered.map(rev => {
        const initial = rev.name.charAt(0);
        return `
        <div class="review-card" style="animation: fadeInUp 0.5s ease-out;">
            <div class="review-card-header">
                <div class="review-user-info">
                    <div class="user-avatar-initial">${initial}</div>
                    <div class="user-name-meta">
                        <span class="user-name">${rev.name}</span>
                        ${rev.verified ? `
                            <span class="verified-buyer-badge">
                                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="9 11 11 13 15 9"/></svg>
                                Verified Buyer
                            </span>
                        ` : ''}
                    </div>
                </div>
                <span class="review-date">${rev.date}</span>
            </div>
            
            <div class="review-rating-block">
                <div class="review-stars">
                    ${getStarsHtml(rev.stars)}
                </div>
                <span class="review-product-tag">${rev.product}</span>
            </div>

            <h3 class="review-headline">${rev.headline}</h3>
            <p class="review-text">"${rev.text}"</p>

            <div class="review-attributes-bar">
                <div class="review-attribute-item">Family: <span>${rev.family}</span></div>
                <div class="review-attribute-item">Longevity: <span>${rev.longevity}</span></div>
                <div class="review-attribute-item">Sillage: <span>${rev.sillage}</span></div>
                <div class="review-attribute-item">Occasion: <span>${rev.occasion}</span></div>
            </div>
        </div>
        `;
    }).join('');
}

function getStarsHtml(stars) {
    let html = '';
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            html += `<svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
        } else {
            html += `<svg class="star-icon" viewBox="0 0 24 24" style="fill:var(--bg-cream-dark);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
        }
    }
    return html;
}

function handleFilterChange() {
    const families = [];
    document.querySelectorAll('.family-filter-input:checked').forEach(c => families.push(c.value));
    
    const longevity = [];
    document.querySelectorAll('.longevity-filter-input:checked').forEach(c => longevity.push(c.value));
    
    const occasion = [];
    document.querySelectorAll('.occasion-filter-input:checked').forEach(c => occasion.push(c.value));

    appState.reviewFilters = { families, longevity, occasion };
    renderReviewsList();
}

// --- NAVIGATION ROUTING ---
function navigateToPage(pageId) {
    appState.activePage = pageId;
    
    // Toggle active links
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-page') === pageId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Reset window scroll position
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (pageId === 'home') {
        renderHome();
    } else if (pageId === 'product') {
        renderProduct();
    } else if (pageId === 'reviews') {
        renderReviews();
    }
}

// --- MODAL CONTROLS ---

// 1. Scent Quiz Modal Controls
const quizOverlay = document.getElementById('quiz-overlay');
const quizSteps = document.querySelectorAll('.quiz-step');
const btnQuizBack = document.getElementById('btn-quiz-back');
const btnQuizNext = document.getElementById('btn-quiz-next');
const quizProgress = document.getElementById('quiz-progress-indicator');

function toggleQuizModal() {
    quizOverlay.classList.toggle('active');
    
    if (quizOverlay.classList.contains('active')) {
        resetQuiz();
    }
}

function resetQuiz() {
    appState.quizStep = 1;
    appState.quizAnswers = {};
    showQuizStep(1);
    
    // De-select options
    document.querySelectorAll('.quiz-option-btn').forEach(btn => btn.classList.remove('selected'));
}

function showQuizStep(stepNum) {
    appState.quizStep = stepNum;
    
    quizSteps.forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) === stepNum) {
            step.classList.add('active');
        }
    });

    // Update Progress bar
    const progressPercent = (stepNum / 4) * 100;
    quizProgress.style.width = `${progressPercent}%`;

    // Footer actions visibility
    const footer = document.getElementById('quiz-modal-footer');
    if (stepNum === 4) {
        // Result step, hide footer navigation
        footer.style.display = 'none';
        calculateQuizRecommendation();
    } else {
        footer.style.display = 'flex';
        // Show/hide Back button
        if (stepNum === 1) {
            btnQuizBack.style.visibility = 'hidden';
        } else {
            btnQuizBack.style.visibility = 'visible';
        }
        
        // Toggle Next button text or state
        btnQuizNext.textContent = 'Next';
    }
}

function selectQuizOption(btn) {
    // Deselect siblings
    const stepEl = btn.closest('.quiz-step');
    stepEl.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
    
    btn.classList.add('selected');
    const answer = btn.getAttribute('data-answer');
    const stepNum = parseInt(stepEl.getAttribute('data-step'));
    
    appState.quizAnswers[stepNum] = answer;
    
    // Auto advance after 250ms for nice response
    setTimeout(() => {
        if(appState.quizStep < 3) {
            showQuizStep(appState.quizStep + 1);
        } else {
            showQuizStep(4);
        }
    }, 300);
}

function calculateQuizRecommendation() {
    // Take answers, select product
    // Default to Santal Nectar
    let matchedName = "Santal Nectar";
    const profile = appState.quizAnswers[1];
    
    if (profile === "Citrus") matchedName = "Citrus Breeze";
    else if (profile === "Floral") matchedName = "Rose Couture";
    else if (profile === "Oriental") matchedName = "Amber Velvet";
    
    const prod = products[matchedName];
    
    document.getElementById('quiz-result-name').textContent = prod.name;
    document.getElementById('quiz-result-description').textContent = prod.description;
    
    // Inject custom bottle SVG
    const imgHolder = document.getElementById('quiz-result-image-holder');
    imgHolder.innerHTML = getProductImageHtml(prod.name, "height: 100px;");
    
    // Bind click trigger to product view
    const viewBtn = document.getElementById('btn-quiz-view-product');
    viewBtn.onclick = () => {
        appState.selectedProductId = prod.name;
        appState.selectedSize = Object.keys(prod.sizes)[0];
        toggleQuizModal();
        navigateToPage('product');
    };
}

// 2. Write Review Modal Controls
const reviewOverlay = document.getElementById('review-overlay');
let selectedStarRating = 5;

function toggleWriteReviewModal() {
    reviewOverlay.classList.toggle('active');
    if (reviewOverlay.classList.contains('active')) {
        document.getElementById('write-review-form').reset();
        setReviewFormStars(5);
    }
}

function setReviewFormStars(rating) {
    selectedStarRating = rating;
    const starBtns = document.querySelectorAll('#review-star-selector button');
    starBtns.forEach((btn, idx) => {
        if (idx < rating) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handleReviewFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('review-input-name').value;
    const productName = document.getElementById('review-select-fragrance').value;
    const headline = document.getElementById('review-input-headline').value;
    const text = document.getElementById('review-input-text').value;
    const longevity = document.getElementById('review-select-longevity').value;
    const sillage = document.getElementById('review-select-sillage').value;
    const occasion = document.getElementById('review-select-occasion').value;
    const verified = document.getElementById('review-check-verified').checked;

    const matchedProduct = products[productName];

    const newRev = {
        id: appState.reviews.length + 1,
        name,
        stars: selectedStarRating,
        headline,
        text,
        product: productName,
        family: matchedProduct.family,
        longevity,
        sillage,
        occasion,
        verified,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })
    };

    appState.reviews.unshift(newRev); // Add to top
    
    // Re-render
    renderReviewsDashboard();
    renderReviewsList();
    
    // Close modal
    toggleWriteReviewModal();
    
    showToast("Review posted successfully! Thank you.", "✨");
}

// --- CART DRAWER CONTROLS ---
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartBadge = document.getElementById('cart-badge-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal-price');

function toggleCartDrawer() {
    cartDrawer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

function addToCart(prodName, sizeName, price) {
    const cartId = `${prodName}_${sizeName}`;
    const existing = appState.cart.find(item => item.id === cartId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        appState.cart.push({
            id: cartId,
            name: prodName,
            size: sizeName,
            price: price,
            quantity: 1
        });
    }

    updateCartState();
    showToast(`Added ${prodName} (${sizeName}) to cart`, "🛍️");
    
    // Slide drawer open automatically to show item
    setTimeout(() => {
        if (!cartDrawer.classList.contains('active')) {
            toggleCartDrawer();
        }
    }, 300);
}

function updateCartQty(cartId, delta) {
    const item = appState.cart.find(item => item.id === cartId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        appState.cart = appState.cart.filter(i => i.id !== cartId);
    }
    
    updateCartState();
}

function removeCartItem(cartId) {
    appState.cart = appState.cart.filter(i => i.id !== cartId);
    updateCartState();
}

function updateCartState() {
    // Save to local storage
    localStorage.setItem('perfume_palette_cart', JSON.stringify(appState.cart));
    
    // Update Badge
    const totalQty = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalQty;
    
    // Render list
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
                <h4 class="serif-font" style="font-size: 20px; margin-bottom: 8px;">Your palette is empty</h4>
                <p style="font-size: 13px;">Explore our families and pick your perfect matches.</p>
            </div>
        `;
        cartSubtotal.textContent = "$0.00";
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = appState.cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
        <div class="cart-item-card" style="animation: fadeIn 0.3s ease-out;">
            <div class="cart-item-img-wrap">
                <div style="width: 45px; height: 50px; display: flex; justify-content: center; align-items: center;">
                    ${getProductImageHtml(item.name, "height: 45px;")}
                </div>
            </div>
            
            <div class="cart-item-details">
                <div>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-meta">${item.size}</span>
                </div>
                
                <div class="cart-item-price-qty">
                    <span class="cart-item-price">$${item.price}</span>
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

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Global scope bindings for inline onclick attributes
window.updateCartQty = updateCartQty;
window.removeCartItem = removeCartItem;

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
    
    // Trigger slide-in
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);

    // Fade-out and destroy after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

// --- GLOBAL EVENT LISTENERS BINDINGS ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Page Render
    navigateToPage('home');
    updateCartState();

    // 2. Navigation events
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const page = tab.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    document.getElementById('logo-link').addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('home');
    });

    // Footer links bindings
    document.querySelectorAll('.footer-family-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const family = link.getAttribute('data-family');
            navigateToPage('reviews');
            // Check that box in review and trigger filter
            setTimeout(() => {
                document.querySelectorAll('.family-filter-input').forEach(checkbox => {
                    if (checkbox.value === family) {
                        checkbox.checked = true;
                        handleFilterChange();
                    } else {
                        checkbox.checked = false;
                    }
                });
            }, 100);
        });
    });

    // Header scrolling styles
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Modals and drawers event bindings
    document.getElementById('btn-cart-nav').addEventListener('click', toggleCartDrawer);
    document.getElementById('btn-close-cart').addEventListener('click', toggleCartDrawer);
    cartOverlay.addEventListener('click', toggleCartDrawer);
    
    document.getElementById('btn-close-quiz').addEventListener('click', toggleQuizModal);
    quizOverlay.addEventListener('click', (e) => {
        if(e.target === quizOverlay) toggleQuizModal();
    });

    // Scent Quiz Wizard Next/Back
    document.querySelectorAll('.quiz-options-list').forEach(list => {
        list.addEventListener('click', (e) => {
            const btn = e.target.closest('.quiz-option-btn');
            if (btn) {
                selectQuizOption(btn);
            }
        });
    });

    btnQuizBack.addEventListener('click', () => {
        if (appState.quizStep > 1) {
            showQuizStep(appState.quizStep - 1);
        }
    });

    btnQuizNext.addEventListener('click', () => {
        // Only advance if they've answered this step
        if (appState.quizAnswers[appState.quizStep]) {
            showQuizStep(appState.quizStep + 1);
        } else {
            showToast("Please choose an option first", "☝️");
        }
    });

    // Write a review modal close
    document.getElementById('btn-close-review-modal').addEventListener('click', toggleWriteReviewModal);
    reviewOverlay.addEventListener('click', (e) => {
        if(e.target === reviewOverlay) toggleWriteReviewModal();
    });

    // Review Form submission
    document.getElementById('write-review-form').addEventListener('submit', handleReviewFormSubmit);

    // Stars selector click in Review Form
    document.querySelectorAll('#review-star-selector button').forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = parseInt(btn.getAttribute('data-rating'));
            setReviewFormStars(rating);
        });
    });

    // Search action toast
    document.getElementById('btn-search-nav').addEventListener('click', () => {
        showToast("Search is currently offline for luxury maintenance.", "🔍");
    });

    // Checkout Action (Directs to WhatsApp)
    document.getElementById('btn-checkout-action').addEventListener('click', () => {
        showToast("Redirecting to WhatsApp to complete your order...", "💬");
        setTimeout(() => {
            window.open("https://wa.link/x68he8", "_blank");
            appState.cart = [];
            updateCartState();
            toggleCartDrawer();
        }, 1200);
    });
});
