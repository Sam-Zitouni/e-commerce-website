document.addEventListener('DOMContentLoaded', function () {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            window.products = data;
            displayProducts(data);
        });
});

function filterProducts() {
    const selectedCategory = document.getElementById('category').value;
    const filteredProducts = window.products.filter(product => product.category === selectedCategory || selectedCategory === "");
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h2>${product.title}</h2>
                <p>Rating: ${product.rating}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}
