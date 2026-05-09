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

        <article class="product-card">
            <img src="${product.image}" alt="${product.name}">
            
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price}</div>
                </div>
                
                ${detailRow}

                <p class="product-description">${product.description}</p>
                
                ${items !== toppers ? `<p class="product-ingredients">Contains: ${product.ingredients}</p>` : ''}
                
                <button class="add-cart-button" aria-label="Add to cart">
                    <img src="assets/icons/add-to-cart.svg" alt="">
                </button>
            </div>
        </article>
        `;
    }).join(''); 
}

/* render function when HTML is fully loaded
    because DOM elements need to be present 
*/
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(cakes, 'cakesGrid');
    renderProducts(liteBites, 'bitesGrid');
    renderProducts(toppers, 'toppersGrid');
});