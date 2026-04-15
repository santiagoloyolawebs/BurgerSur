// BASE DE DATOS COMPLETA
const menuData = [
    {
        category: "Lo más destacado",
        items: [
            { id: 1, name: "Box Estándar", price: 57173, img: "445555", desc: "Incluye Harley davidson, Doble chesse, Doble bacon, Doble libra del sur y Papas." },
            { id: 2, name: "Doble Tasty Libra", price: 16632, img: "556888", desc: "Doble medallón de 140g, base de salsa libra y salsa tasty. Incluye papas." },
            { id: 3, name: "R-Burger", price: 17152, img: "161219", desc: "Medallones, cheddar, panceta, bbq y bastones de mozzarella X3" },
            { id: 4, name: "Sándwich Milanesa Napolitana", price: 18000, img: "161282", desc: "Salsa de la casa, Mozzarella. Incluye papas." },
            { id: 5, name: "Sándwich carne desmenuzada", price: 16830, img: "570203", desc: "300gr carne desmenuzada, queso. Incluye papas." }
        ]
    },
    { category: "Burger DEL MES", items: [ { id: 6, name: "Burger de cordero", price: 16000, img: "641378", desc: "Doble medallón de cordero, chimi, criolla, provo y morrón asado. Con papas." } ] },
    {
        category: "Salsa de autor",
        items: [
            { id: 7, name: "Queen Burger", price: 18480, img: "564064", desc: "Doble 100g, salsa BG, lechuga, cheddar, cebolla picada y pepinillos." },
            { id: 8, name: "Classic Tasty Libra", price: 13283, img: "556887", desc: "Medallón 160g, base de salsa libra y tasty. Con papas." },
            { id: 9, name: "Doble Tasty Libra", price: 16632, img: "556888", desc: "Doble medallón 140g, base salsa libra y tasty. Con papas." },
            { id: 10, name: "Bstacker Triple", price: 20790, img: "587944", desc: "Triple hamburguesa, cuádruple cheddar, salsa stacker y bacon." },
            { id: 11, name: "Island Burger", price: 18480, img: "587945", desc: "Doble hamburguesa, cuádruple cheddar, salsa de la casa y pepinillos." }
        ]
    },
    {
        category: "PROMOS DUO",
        items: [
            { id: 12, name: "Duo libra del sur", price: 26565, img: "583403", desc: "2 libra del sur + 2 latas bebidas + papas." },
            { id: 13, name: "Duo classic sur", price: 27720, img: "583389", desc: "2 classic sur + 2 latas bebidas + papas." },
            { id: 14, name: "Duo classic atomic", price: 28875, img: "583396", desc: "2 atomic + 2 latas bebidas + papas." },
            { id: 15, name: "Duo Mila", price: 39900, img: "583532", desc: "2 sándwich de mila (bajonera o napo) + Coca grande + papas." }
        ]
    },
    {
        category: "Icónicas",
        items: [
            { id: 16, name: "Hamsur", price: 14091, img: "161194", desc: "Medallón, jamón, queso cremoso y huevo. Con papas." },
            { id: 17, name: "Harley Davidson", price: 13514, img: "161197", desc: "Medallón, cheddar, panceta, barbacoa y queso cremoso." },
            { id: 18, name: "Especial Burger Sur", price: 13860, img: "161195", desc: "Medallón, cheddar, panceta, cebolla caramelizada, cremoso y bbq." },
            { id: 19, name: "Atomic", price: 13860, img: "161196", desc: "Medallón, 2 aros de cebolla, cheddar, panceta, huevo y bbq." },
            { id: 20, name: "R-Burger", price: 17152, img: "161219", desc: "Medallones, cheddar, panceta, bbq y 3 bastones de mozza." }
        ]
    },
    {
        category: "Más burgers",
        items: [
            { id: 21, name: "Chesse", price: 12359, img: "161189", desc: "Medallón de carne, cheddar, pan de papa." },
            { id: 22, name: "Bacon", price: 12936, img: "161190", desc: "Medallón 160g, doble cheddar y doble panceta." },
            { id: 23, name: "Libra del sur", price: 12821, img: "161193", desc: "Medallón 160g, ketchup, mostaza, cebolla brunoise, doble cheddar." },
            { id: 24, name: "Classic burger", price: 13514, img: "161192", desc: "Medallón, tomate, lechuga, pepinillos y cheddar." },
            { id: 25, name: "Wooper sur clásica", price: 12705, img: "423762", desc: "Medallón ahumado, vegetales, ketchup y mayo." },
            { id: 26, name: "Wooper Sur Doble", price: 17210, img: "423766", desc: "Doble carne 140g, vegetales, ketchup y mayo." },
            { id: 27, name: "Onion Crazy", price: 12821, img: "161191", desc: "Medallón, cebolla caramelizada en base, cheddar." },
            { id: 28, name: "Doble Chesse Extreme", price: 19635, img: "161205", desc: "2 medallones 140g, séxtuple cheddar." },
            { id: 29, name: "Doble Bacon Extreme", price: 19635, img: "161206", desc: "2 medallones, cuádruple cheddar y séxtuple panceta." },
            { id: 30, name: "Alemania", price: 18249, img: "349878", desc: "Doble medallón, cuádruple cheddar, salchicha salteada, miel y mostaza." },
            { id: 31, name: "Dip Bacon", price: 18480, img: "188185", desc: "Medallón, cheddar, bacon y DIP de panceta." },
            { id: 32, name: "Crispy Sur", price: 22292, img: "161227", desc: "3 Medallones, cuádruple cheddar, doble panceta y cebolla Crispy." },
            { id: 33, name: "Sur Melt", price: 12590, img: "466316", desc: "Cheddar líquido, caramelizada, medallón, cheddar, bacon." }
        ]
    },
    {
        category: "Línea GOURMET",
        items: [
            { id: 34, name: "Doble Chesse Gourmet", price: 13860, img: "578173", desc: "Doble medallón 110g, cheddar x3. Con papas." },
            { id: 35, name: "Doble Bacon Gourmet", price: 15015, img: "578174", desc: "Doble medallón 110g, cheddar x3 + Bacon." },
            { id: 36, name: "Doble Libra del Sur Gourmet", price: 15015, img: "578177", desc: "Doble medallón 110g, cheddar x3 + Cebolla y salsa libra." },
            { id: 37, name: "Harley Davidson Gourmet", price: 16170, img: "578181", desc: "Doble medallón 110g, cheddar x2, Queso cremoso, BBQ + Bacon." },
            { id: 38, name: "Doble Chesse Extreme Gourmet", price: 16748, img: "578175", desc: "Doble medallón 110g, cheddar x5." },
            { id: 39, name: "Atomic Gourmet", price: 16748, img: "578179", desc: "Doble medallón 110g, cheddar x2, BBQ, huevo, 2 Aros, bacon." },
            { id: 40, name: "Doble Bacon Extreme Gourmet", price: 16748, img: "578176", desc: "Doble medallón 110g, cheddar x3 + bacon ahumado x4." },
            { id: 41, name: "Especial Burger Sur Gourmet", price: 16748, img: "578180", desc: "Doble medallón, cheddar x2, Cremoso, BBQ, Caramelizada + bacon." }
        ]
    },
    {
        category: "Línea SMASH",
        items: [
            { id: 42, name: "Doble Chesse SMASH", price: 16170, img: "564376", desc: "2 medallones de 100gr, quíntuple cheddar." },
            { id: 43, name: "Doble Chesse bacon SMASH", price: 17325, img: "564377", desc: "2 medallones 100gr, quíntuple cheddar, bacon x2." },
            { id: 44, name: "Fried Onnion SMASH", price: 16170, img: "564378", desc: "2 medallones 100gr, quíntuple cheddar, cocción de cebolla." },
            { id: 45, name: "Doble Turbo Bacon", price: 19058, img: "576652", desc: "Tasty, bacon picado, doble bacon y cuádruple cheddar." },
            { id: 46, name: "Triple Turbo Bacon", price: 21368, img: "576653", desc: "Triple smash, Tasty, bacon, cuádruple cheddar, vegetales." }
        ]
    },
    {
        category: "Milanesas al plato",
        items: [
            { id: 47, name: "Milanesa Napolitana", price: 18500, img: "161275", desc: "Nalga o pollo, salsa, jamón, mozzarella. Con papas/puré." },
            { id: 48, name: "Milanesa Bajonera", price: 18000, img: "161279", desc: "Cheddar y bacon." },
            { id: 49, name: "Milanesa 4 Quesos", price: 19000, img: "161280", desc: "Roquefort, cremoso, mozzarella, parmesano." },
            { id: 50, name: "Milanesa a Caballo", price: 16500, img: "185176", desc: "Con huevos fritos. Papas o puré." },
            { id: 51, name: "Milanesa La Maleducada", price: 19000, img: "295514", desc: "Mozzarella, bacon, caramelizada, tomate y BBQ." },
            { id: 52, name: "Mila-Z", price: 18500, img: "475817", desc: "Cebolla condimentada, mozzarella, panceta en cubitos." },
            { id: 53, name: "Milanesa Especial BS", price: 19100, img: "571071", desc: "Cebolla caramelizada, cremoso, BBQ, cheddar y bacon." }
        ]
    },
    {
        category: "Mila Sándwich",
        items: [
            { id: 54, name: "Milanesa Melt Sándwich", price: 20000, img: "466318", desc: "Cheddar líquido, caramelizada, lluvia bacon, más cheddar." },
            { id: 55, name: "Sándwich Mila Napolitana", price: 18000, img: "161282", desc: "Salsa de la casa, Mozzarella." },
            { id: 56, name: "Sándwich Mila Bajonera", price: 20000, img: "161283", desc: "Cheddar y Bacon." },
            { id: 57, name: "Sándwich Mila 4 Quesos", price: 20000, img: "161284", desc: "Roquefort, Cremoso, Mozzarella, Parmesano." },
            { id: 58, name: "Sándwich Mila La Maleducada", price: 20000, img: "295513", desc: "Mozzarella, bacon, caramelizada, tomate y BBQ." },
            { id: 59, name: "Sándwich de Mila-Z", price: 20000, img: "475818", desc: "Cebolla, mozzarella, panceta en cubos." },
            { id: 60, name: "Sándwich Mila Especial BS", price: 20000, img: "571070", desc: "Cebolla caramelizada, cremoso, BBQ, cheddar y bacon." }
        ]
    },
    {
        category: "Lomitos & Asado",
        items: [
            { id: 61, name: "Lomito Clásico", price: 20000, img: "161285", desc: "Lomo ternera, lechuga, tomate, jamón, queso." },
            { id: 62, name: "Lomito Napolitano", price: 20000, img: "161286", desc: "Lomo ternera, salsa tomate, queso mozzarella." },
            { id: 63, name: "Lomito Bajonero", price: 20000, img: "161287", desc: "Lomo ternera, cheddar y bacon." },
            { id: 64, name: "Lomito Gallego", price: 20000, img: "201664", desc: "Lomo ternera, morrón, cebolla, huevo, panceta, vegetales." },
            { id: 65, name: "Papas Bandeja carne", price: 12100, img: "570202", desc: "150gr carne desmenuzada, queso derretido, alioli, criolla." },
            { id: 66, name: "Burger Mech", price: 15400, img: "570204", desc: "200gr carne mechada, alioli, queso, criolla." }
        ]
    },
    {
        category: "Pollo Krispy",
        items: [
            { id: 67, name: "Classic Krispy", price: 12320, img: "242265", desc: "Pollo krispy, tomate, lechuga, pepinillos, doble cheddar." },
            { id: 68, name: "Shopo BBQ", price: 11990, img: "242266", desc: "Pollo krispy, barbacoa, cebolla crispy, cheddar y bacon." },
            { id: 69, name: "Krispy Premium", price: 12540, img: "242267", desc: "Pollo krispy, cheddar, barbacoa, panceta, caramelizada, huevo." },
            { id: 70, name: "Long Krispy Classic", price: 15400, img: "164642", desc: "Salsa queso crema, pollo crispy, vegetales, cheddar." },
            { id: 71, name: "Long Krispy BBQ", price: 15400, img: "388538", desc: "Pollo krispy, barbacoa, cebolla crispy y cheddar." },
            { id: 72, name: "Long Rodeo", price: 15950, img: "164644", desc: "Barbacoa, doble carne, doble cheddar y 4 aros de cebolla." },
            { id: 73, name: "Long Krispy Primavera", price: 15400, img: "582112", desc: "Salsa golf, doble pollo krispy, jamón, queso, vegetales." }
        ]
    },
    {
        category: "Philly Cheese",
        items: [
            { id: 74, name: "Harley Stone", price: 24000, img: "161289", desc: "Carne a cuchillo, lluvia panceta, cremoso, cheddar y BBQ." },
            { id: 75, name: "Especial Millenials", price: 24000, img: "161290", desc: "Carne a cuchillo, panceta, cremoso, caramelizada, cheddar, BBQ." },
            { id: 76, name: "Philadelphia", price: 24000, img: "161291", desc: "Carne a cuchillo, cebolla a la plancha y cheddar." },
            { id: 77, name: "Bacon Philly", price: 24000, img: "161292", desc: "Carne a cuchillo, lluvia de panceta y cheddar." }
        ]
    },
    {
        category: "Papas & Snacks",
        items: [
            { id: 78, name: "Bandeja Papas XL", price: 8000, img: "161294", desc: "Papas fritas clásicas." },
            { id: 79, name: "Papas Cheddar XL", price: 9500, img: "161295", desc: "Papas bañadas en cheddar." },
            { id: 80, name: "Papas Cheddar y Bacon XL", price: 11000, img: "161296", desc: "Papas con cheddar y bacon crocante." },
            { id: 81, name: "Papas Salchicha XL", price: 11000, img: "161297", desc: "Papas con cheddar y salchicha." },
            { id: 82, name: "Papas Ranch", price: 11500, img: "424934", desc: "Papas, salchicha BBQ, cheddar, huevo revuelto." },
            { id: 83, name: "Chicken Fries BS", price: 11800, img: "576170", desc: "Papas, cheddar, bacon, verdeo, salsa blanca, pollo frito." },
            { id: 84, name: "Aros de Cebolla", price: 7000, img: "161300", desc: "Porción de 9 aros." },
            { id: 85, name: "Bastones de Mozzarella", price: 6000, img: "161301", desc: "Porción de 6 bastones." },
            { id: 86, name: "Bastones de Pollo", price: 6000, img: "499051", desc: "Porción de 6 bastones de pollo." },
            { id: 87, name: "Tequeños Clásicos", price: 7500, img: "220285", desc: "Porción de 6 tequeños." },
            { id: 88, name: "Picada Caliente BS", price: 22000, img: "333007", desc: "Nuggets, aros, bastones mozza/pollo, tequeños y papas." }
        ]
    },
    {
        category: "Menú Kids",
        items: [
            { id: 89, name: "Classic Chesse Kids", price: 10395, img: "161199", desc: "Medallón 100g y Cheddar." },
            { id: 90, name: "Classic Bacon Kids", price: 11445, img: "161200", desc: "Medallón 100g, Cheddar y Bacon." },
            { id: 91, name: "Classic Burger Kids", price: 11445, img: "161201", desc: "Medallón 100g, Cheddar, Tomate, Lechuga." },
            { id: 92, name: "Box kids", price: 16800, img: "173590", desc: "Burger con queso, NUGGETS x5 o bastones pollo x6, papitas." }
        ]
    },
    {
        category: "Postres",
        items: [
            { id: 93, name: "Oreo", price: 6000, img: "606710", desc: "Oreo, dulce de leche y crema." },
            { id: 94, name: "Durazno con crema", price: 6000, img: "606711", desc: "Durazno y crema." },
            { id: 95, name: "Chocotorta", price: 6000, img: "606712", desc: "Chocolinas, queso crema y dulce de leche." },
            { id: 96, name: "Tiramisu", price: 6000, img: "606713", desc: "Vainillas en café, crema tiramisu y chocolate amargo." },
            { id: 97, name: "Chessecake de frutilla", price: 6000, img: "606714", desc: "Base de vainilla, crema Chessecake y frutilla." },
            { id: 98, name: "Banana split", price: 6000, img: "606715", desc: "Base de vainilla, dulce de leche, banana y crema." }
        ]
    },
    {
        category: "Boxs & Promos",
        items: [
            { id: 99, name: "Box Premium", price: 69300, img: "445554", desc: "Variedad de burgers, Nuggetsx12, Papas cheddar. Gaseosa regalo." },
            { id: 100, name: "Box Piletón", price: 63063, img: "565884", desc: "4 doble chesse smash, 12 bastones pollo, 4 potes cheddar." },
            { id: 101, name: "x2 Classic Chesse", price: 21344, img: "161303", desc: "2 Medallones 110g, cheddar." },
            { id: 102, name: "x2 Doble Chesse", price: 27166, img: "161306", desc: "2 Medallones 110g, doble cheddar." },
            { id: 103, name: "x2 Classic Bacon", price: 22557, img: "161312", desc: "Medallón 110g, bacon y cheddar." },
            { id: 104, name: "x2 Doble Bacon", price: 29349, img: "161315", desc: "2 Medallones 110g, bacon y doble cheddar." }
        ]
    },
    {
        category: "Bebidas",
        items: [
            { id: 105, name: "Corona 710ml", price: 7000, img: "466618", desc: "Cerveza Corona." },
            { id: 106, name: "Heineken 710ml", price: 6000, img: "570200", desc: "Latona Heineken." },
            { id: 107, name: "Imperial Golden 330ml", price: 4000, img: "577336", desc: "Cerveza Imperial." },
            { id: 108, name: "Pinta Honey 500ml", price: 5000, img: "606718", desc: "Cerveza Artesanal Honey." },
            { id: 109, name: "Pinta Golden 500ml", price: 5000, img: "606719", desc: "Cerveza Artesanal Golden." },
            { id: 110, name: "Pinta Session IPA 500ml", price: 5000, img: "606720", desc: "Cerveza Artesanal IPA." },
            { id: 111, name: "Coca Cola 2.25 L", price: 7000, img: "474764", desc: "Gaseosa." },
            { id: 112, name: "Paso de los Toros 2.25 L", price: 5000, img: "582029", desc: "Gaseosa." },
            { id: 113, name: "Coca Cola 500ml", price: 2500, img: "494564", desc: "Gaseosa chica." },
            { id: 114, name: "Fanta 500ml", price: 2500, img: "161322", desc: "Gaseosa chica." },
            { id: 115, name: "Sprite 500ml", price: 2500, img: "161323", desc: "Gaseosa chica." }
        ]
    },
    {
        category: "Extras",
        items: [
            { id: 116, name: "Tostado Clásico", price: 6000, img: "211979", desc: "Jamón, queso, huevo en pan de papa tostado." },
            { id: 117, name: "Tostado C&B", price: 6000, img: "211985", desc: "Cheddar y Bacon en pan de papa tostado." },
            { id: 118, name: "Tostado Italiano", price: 6000, img: "211986", desc: "Tomate, queso, huevo." },
            { id: 119, name: "Pote Cheddar Grande", price: 5000, img: "163488", desc: "Extra de cheddar." },
            { id: 120, name: "Pote Barbacoa", price: 1000, img: "163489", desc: "Salsa BBQ." },
            { id: 121, name: "Pote Tasty", price: 2000, img: "163491", desc: "Salsa Tasty." }
        ]
    }
];

// ESTADO DE LA APLICACIÓN
let cart = [];
const productMap = new Map();
menuData.forEach(cat => cat.items.forEach(item => productMap.set(item.id, item)));

const domElements = {
    categoryNav: document.getElementById('category-nav'),
    menuContainer: document.getElementById('menu-container'),
    sidebar: document.getElementById('cart-sidebar'),
    overlay: document.getElementById('cart-overlay'),
    body: document.body,
    cartItemsContainer: document.getElementById('cart-items'),
    cartCount: document.getElementById('cart-count'),
    totalPriceEl: document.getElementById('total-price'),
    deliveryMethod: document.getElementById('delivery-method'),
    deliveryAddress: document.getElementById('delivery-address'),
    deliveryWarning: document.getElementById('delivery-warning'), 
    addressError: document.getElementById('address-error'),
    paymentMethod: document.getElementById('payment-method'),
    toastContainer: document.getElementById('toast-container'),
    backToTopBtn: document.getElementById('back-to-top'),
    menuAnchor: document.getElementById('menu-anchor')
};

// 1. RENDERIZAR MENÚ Y BOTONES DE CATEGORÍAS
function renderMenu() {
    let menuHTML = '';
    let navHTML = '';

    menuData.forEach((category, index) => {
        const sectionId = `cat-${index}`;
        
        navHTML += `<button class="cat-btn" onclick="scrollToSection('${sectionId}')">${category.category}</button>`;

        let gridHTML = `
            <div id="${sectionId}" class="category-section">
                <h2 class="category-title">${category.category}</h2>
                <div class="product-grid">
        `;
        
        gridHTML += category.items.map(item => `
            <div class="card">
                <img src="assets/${item.img}" onerror="this.src='assets/logo'" loading="lazy" alt="${item.name}">
                <div class="card-info">
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                    </div>
                    <div class="card-bottom">
                        <span class="price">$${item.price.toLocaleString('es-AR')}</span>
                        <button class="add-btn" onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}')">Agregar</button>
                    </div>
                </div>
            </div>
        `).join('');

        gridHTML += `</div></div>`;
        menuHTML += gridHTML;
    });

    domElements.categoryNav.innerHTML = navHTML;
    domElements.menuContainer.innerHTML = menuHTML;
}

// 2. FUNCIONES DE SCROLL
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        const headerOffset = window.innerWidth > 768 ? 80 : 140; 
        const y = section.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function scrollToMenu() {
    if (domElements.menuAnchor) {
        const y = domElements.menuAnchor.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        domElements.backToTopBtn.classList.add('show');
    } else {
        domElements.backToTopBtn.classList.remove('show');
    }
});

// 3. LÓGICA DEL CARRITO
function toggleCart() {
    domElements.sidebar.classList.toggle('open');
    domElements.overlay.classList.toggle('show');
    domElements.body.classList.toggle('no-scroll'); 
}

function addToCart(id, name) {
    const product = productMap.get(id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartUI();
    showToast(name);
}

// 4. NOTIFICACIONES (TOAST)
function showToast(productName) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span><b>${productName}</b> al pedido</span>`;
    
    domElements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 5. ACTUALIZAR UI DEL CARRITO
function updateQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    }
}

function updateCartUI() {
    if (cart.length === 0) {
        domElements.cartItemsContainer.innerHTML = '<p class="empty-cart">El carrito está vacío :(</p>';
        domElements.cartCount.innerText = 0;
        domElements.totalPriceEl.innerText = '$0';
        return;
    }

    let total = 0;
    let count = 0;

    const cartHTML = cart.map(item => {
        total += item.price * item.qty;
        count += item.qty;
        
        return `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span>$${(item.price * item.qty).toLocaleString('es-AR')}</span>
                </div>
                <div class="item-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');

    domElements.cartItemsContainer.innerHTML = cartHTML;
    domElements.cartCount.innerText = count;
    domElements.totalPriceEl.innerText = `$${total.toLocaleString('es-AR')}`;
}

// 6. MOSTRAR/OCULTAR INPUT DE DIRECCIÓN Y AVISO DE ZONA
domElements.deliveryMethod.addEventListener('change', (e) => {
    domElements.deliveryAddress.classList.remove('error');
    domElements.addressError.classList.add('hidden');

    if (e.target.value === 'Envío a domicilio') {
        domElements.deliveryAddress.classList.remove('hidden');
        domElements.deliveryWarning.classList.remove('hidden'); 
    } else {
        domElements.deliveryAddress.classList.add('hidden');
        domElements.deliveryWarning.classList.add('hidden'); 
        domElements.deliveryAddress.value = ''; 
    }
});

domElements.deliveryAddress.addEventListener('input', () => {
    domElements.deliveryAddress.classList.remove('error');
    domElements.addressError.classList.add('hidden');
});

// 7. GENERAR EL MENSAJE DE WHATSAPP
function sendOrder() {
    if (cart.length === 0) {
        alert("¡Agregá algo al carrito primero!"); 
        return;
    }

    const delivery = domElements.deliveryMethod.value;
    const payment = domElements.paymentMethod.value;
    const address = domElements.deliveryAddress.value.trim(); 
    
    if (delivery === 'Envío a domicilio' && address === '') {
        domElements.deliveryAddress.classList.add('error');
        domElements.addressError.classList.remove('hidden');
        domElements.deliveryAddress.focus(); 
        return;
    }

    let total = 0;
    
    let orderDetails = cart.map(item => {
        total += item.price * item.qty;
        return `🔸 ${item.qty}x ${item.name} ($${item.price.toLocaleString('es-AR')} c/u)`;
    }).join('\n');

    let text = `🍔 *NUEVO PEDIDO - BURGERSUR* 🍔\n\n`;
    text += `*Detalle del pedido:*\n${orderDetails}\n\n`;
    text += `💳 *Método de pago:* ${payment}\n`;
    text += `🛵 *Entrega:* ${delivery}\n`;
    
    if (delivery === 'Envío a domicilio') {
        text += `📍 *Dirección:* ${address}\n`;
    }
    
    text += `\n💰 *TOTAL A ABONAR: $${total.toLocaleString('es-AR')}*\n\n`;
    text += `¡Muchas gracias! 🍔 @burgersur.arg`;

    const phone = "541122454518"; 
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
}

// INICIALIZAR LA APLICACIÓN
renderMenu();