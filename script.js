/* product data arrays
    (name, price, and details)
*/
const cakes = [
    {
        id: 1,
        name: 'Elderflower & Lemon Curd',
        image: 'assets/images/elderflower-square.png',
        price: 60,
        subtitle: '8”',
        description: 'Old-fashioned elderflower pound cake with lemon curd glaze, buttercream, and blue cornflowers.',
        ingredients: 'Butter (Dairy), Flour (Gluten), Eggs, Yoghurt, Almonds (Nuts), and Milk.',
        sizes: ['5”', '8”', '10”']
    },
    {
        id: 2,
        name: 'Double Choc (Choc Ganache Icing)',
        image: 'assets/images/double-choc-square.png',
        price: 40,
        subtitle: '5"',
        description: 'A luscious dark choc ganache cake, makes a grand party entrance.',
        ingredients: 'Chocolate, Flour, Dairy, Eggs, Soy, Sprinkles (Gelatine).',
        sizes: ['5”', '8”', '10”']
    },
    {
        id: 3,
        name: 'Raspberry & Lemon',
        image: 'assets/images/raspberry-lemon-square.png',
        price: 60,
        subtitle: '8"',
        description: 'Old-fashioned pound cake with pink buttercream, meringue, and edible flowers.',
        ingredients: 'Butter (Dairy), Flour (Gluten), Eggs, Yoghurt, Almonds (Nuts), and Milk.',
        sizes: ['5”', '8”', '10”']
    },
    {
        id: 4,
        name: 'Salted Caramel Chocolate (WF)',
        image: 'assets/images/salted-caramel-choc-square.png',
        price: 80, 
        subtitle: '8"',
        description: 'Luxurious chocolate cake topped with caramel buttercream, dark chocolate ganache, and gold.',
        ingredients: 'Almond Meal (Nuts), Butter (Dairy), Dark Chocolate, Eggs, Soy, and Coffee.',
        sizes: ['5”', '8”', '10”']
    },
    {
        id: 5,
        name: 'Berry Velvet',
        image: 'assets/images/berry-velvet-square.png',
        price: 85, 
        subtitle: '8"',
        description: 'A vibrant red velvet cake with a burst of berry flavor, topped with cream cheese frosting and freeze-dried berries.',
        ingredients: 'FR Egg, Flour, Cocoa, Potato Flour, Milk Solids, Raising Agents, Natural Raspberry Flavour, Cream Cheese, Butter, Icing Sugar, Lemon Juice, Berries.',
        sizes: ['8”', '10”']
    }
];

const liteBites = [
    {
        id: 6,
        name: 'Anzac Biscuits',
        image: 'assets/images/anzac-biscuit-square.png',
        price: 40,
        subtitle: '8pcs',
        description: 'Golden, crunchy oat biscuits made with sweet coconut and a touch of golden syrup.',
        ingredients: 'Butter (Dairy), Oats, Flour (Gluten), Coconut, Golden Syrup, and Sugar.'
    },
    {
        id: 7,
        name: 'Choc & Jam Lamingtons',
        image: 'assets/images/lamingtons-square.png',
        price: 45,
        subtitle: '6pcs',
        description: 'Airy sponge cakes with housemade raspberry jam, coated in rich chocolate and coconut.',
        ingredients: 'Egg, Flour (Gluten), Dairy, Raspberry Jam, Chocolate, Soy.'
    },
    {
        id: 8,
        name: 'Salted Caramel Brownie (WF)',
        image: 'assets/images/brownie-square.png',
        price: 42,
        subtitle: '6pcs',
        description: 'Decadent salted caramel brownie with rich layers, proving that sometimes more is more.',
        ingredients: 'Butter (Dairy), Chocolate, Eggs, Cream, GF Flour, and Soy.'
    },
    {
        id: 9,
        name: 'Anzac Caramel Slice',
        image: 'assets/images/caramel-slice-square.png',
        price: 70,
        subtitle: '10pcs',
        description: 'Lush golden caramel sandwiched between a crunchy Anzac biscuit base and coconut topping.',
        ingredients: 'Condensed Milk (Dairy), Oats, Butter, Coconut, Flour (Gluten), and Golden Syrup.'
    }
];

const toppers = [
    {
        id: 10,
        name: '"Hooray" - Confetti',
        image: 'assets/images/hooray-confetti-square.png',
        price: 24,
        subtitle: '1pc',
        description: 'Premium cake toppers sourced from the USA and England. The perfect way to add a celebratory pop of confetti to any of our signature cakes.',
        ingredients: ''
    }, 
    {
        id: 11,
        name: 'Pom Poms',
        image: 'assets/images/pom-pom-square.png',
        price: 27,
        subtitle: '1pc',
        description: 'Add whimsical charm to your celebration with our curated Pom Pom toppers. Handcrafted by boutique designers in the USA & England, they are the perfect finishing touch for any occasion.',
        ingredients: ''
    }, 
    {
        id: 12,
        name: '"Happy Birthday" Gold Mirror - round',
        image: 'assets/images/happy-bday-gold-square.png',
        price: 26.50,
        subtitle: '1pc',
        description: 'Elevate your cake with this elegant gold mirror round topper. Sourced from premium designers in England, its reflective finish adds a sophisticated touch to any birthday celebration.',
        ingredients: ''
    }
]

const allProducts = [...cakes, ...liteBites, ...toppers];  // for searching everything at once

/* puts product data into HTML grid 
    targets #productGrid element 
*/
function renderProducts(items, targetID) {
    const grid = document.getElementById(targetID);
    if (!grid) return; 

    // We use map each product and create a HTML string for each
    grid.innerHTML = items.map(product => {
        
        /* CHECK FOR SIZES: 
           cakes have a 'sizes' array, liteBites don't.
           If sizes (5", 8", 10") exist, loop through to create boxes
           otherwise, subtitle (num. of pieces) is shown
        */
        const detailRow = product.sizes 
        // backticks allow for multi-line code
            ? `<div class="product-sizes">
                ${product.sizes.map(size => `<span>${size}</span>`).join('')}
               </div>` 
            : `<div class="product-subtitle">${product.subtitle}</div>`;
        return `

        <article class="product-card" onclick="location.href='product_detail.html?id=${product.id}'" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price}</div>
                </div>

                ${detailRow}

                <p class="product-description">${product.description}</p>

                ${product.ingredients ? `<p class="product-ingredients">Contains: ${product.ingredients}</p>` : ''}

                <button class="add-cart-button" aria-label="Add to cart" onclick="event.stopPropagation(); handleQuickAdd(${product.id})">
                    <img src="assets/icons/add-to-cart.svg" alt="">
                </button>
            </div>
        </article>
        `;
    }).join(''); 
}

function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    // define the "a peek at our bestsellers" because this'll change as user searches
    const mainHeader = document.querySelector('.product-preview h2');

    // show results in first grid
    const cakesGrid = document.getElementById('cakesGrid');
    const bitesGrid = document.getElementById('bitesGrid');
    const toppersGrid = document.getElementById('toppersGrid');

    if (searchTerm === "") {
        // if search empty, nothing changes (render normally )
        mainHeader.textContent = "A peek at our bestsellers...";
        document.querySelectorAll('.product-preview h3').forEach(h3 => h3.style.display = 'block');

        // remove class, restore carousels
        cakesGrid.classList.remove('search-mode');

        renderProducts(cakes, 'cakesGrid');
        renderProducts(liteBites, 'bitesGrid');
        renderProducts(toppers, 'toppersGrid');
        
    } else {
        // if there is a search, hide headers and list results in one grid

        // change main header
        mainHeader.textContent = "Search results";  

        document.querySelectorAll('.product-preview h3').forEach(h3 => h3.style.display = 'none');

        // filter `allProducts` list for searched item
        const filteredResults = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) || 
                   product.description.toLowerCase().includes(searchTerm);
        });

        // clear last 2 grids
        bitesGrid.innerHTML = "";
        toppersGrid.innerHTML = "";

        // Add class to force vertical layout
        cakesGrid.classList.add('search-mode');

        // render into first grid - just so happens to be the `cakesGrid`
        renderProducts(filteredResults, 'cakesGrid');
    }
};

function handleQuickAdd(productId) {
    // find product in array
    const product = [...cakes, ...liteBites, ...toppers].find(p => p.id === productId);
    
    // "quick add" will add smallest size (defaults to subtitle if "sizes" array don't exist)
    const selectedSize = product.sizes ? product.sizes[0] : product.subtitle;
    
    // notification (placeholder)
    console.log(`Added ${product.name} (${selectedSize}) to cart.`);
    
    /* need to: 
    - update cart number 
    - show green notification instead of console.log 
    - animation of notification
    */
    alert(`${product.name} added to cart!`);
}

window.addEventListener('DOMContentLoaded', () => {
    // when page is product_detail.html...
    const isDetailPage = window.location.pathname.includes('product_detail.html');

    if (isDetailPage) {
        // get id from URL (to specify which product the product_detail page will describe)
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        // find products in array
        const product = allProducts.find(p => p.id === productId);

        // fill in with images
        // ensure it's matching the product with ID first
        if (product) {
            document.getElementById('productName').textContent = product.name;
            document.getElementById('productPrice').textContent = `$${product.price}`;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('mainImage').src = product.image;
            document.getElementById('ingredientsList').textContent = product.ingredients;

            // render sizes & qty
            const sizeContainer = document.getElementById('sizeOptions');
            if (product.sizes) {
                sizeContainer.innerHTML = product.sizes.map(size => `<span>${size}</span>`).join('');
            } else {
                sizeContainer.innerHTML = `<span>${product.subtitle}</span>`;
            }
        }
    } else {
        // first render
        renderProducts(cakes, 'cakesGrid');
        renderProducts(liteBites, 'bitesGrid');
        renderProducts(toppers, 'toppersGrid');

        // search input listener
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        if (searchInput) searchInput.addEventListener('input', search); // typing
        if (searchButton) searchButton.addEventListener('click', search); // clicking search button

        // if user press keyboard ENTER
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') search();
            });
        }
    }
});