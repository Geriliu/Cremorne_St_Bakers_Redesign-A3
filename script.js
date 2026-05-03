/* product data array 
    (name, price, and details)
*/
const products = [
    {
        id: 1,
        name: 'Anzac Biscuits',
        image: 'assets/images/home-hero.svg',
        price: 40,
        subtitle: '8pcs',
        description: 'Golden, crunchy oat biscuits made with sweet coconut and a touch of golden syrup.',
        details: ['Contains: Butter (Dairy), Oats, Flour (Gluten), Coconut, Golden Syrup, and Sugar.']
    },
    {
        id: 2,
        name: 'Elderflower & Lemon Curd Cake',
        image: 'assets/images/home-hero.svg',
        price: 60,
        subtitle: '8”',
        description: 'Old-fashioned elderflower pound cake with lemon curd glaze, buttercream, and blue cornflowers.',
        details: ['Contains: Butter (Dairy), Flour (Gluten), Eggs, Yoghurt, Almonds (Nuts), and Milk.'],
        sizes: ['5”', '8”', '10”']
    }
];

/* puts product data into HTML grid 
    targets #productGrid element 
*/
function renderProducts(items) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;  // check - in case function is on a page without the product grid

    // product data joined into string 
    productGrid.innerHTML = items.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-header">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
            </div>
            <p class="product-description">${product.description}</p>
            <button class="add-cart-button">Add to cart</button>
        </article>
    `).join('');  // removes commas 
}

/* render function when HTML is fully loaded
    because DOM elements need to be present 
*/
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});