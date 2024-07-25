let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct'); // Corrected the class selector
let listCartHTML = document.querySelector('.listCart');

let iconCartSpan = document.querySelector('.icon-cart span');
let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

/* Function to add products to the HTML */
const addToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;  
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add to cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

/* Event listener for adding products to the cart */
listProductHTML.addEventListener('click', (event) => {
    const positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        const productId = positionClick.parentElement.dataset.id;
        addToCart(productId);
    }
});

/* Function to add products to the cart */
const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }
    updateCartHTML();
    console.log(carts); /* For debugging purposes */
};

/* Function to update the cart HTML */
const updateCartHTML = () => {
    listCartHTML.innerHTML = '';
    if (carts.length > 0) {
        carts.forEach(cartItem => {
            let product = listProducts.find(product => product.id == cartItem.product_id);
            let newCartItem = document.createElement('div');
            newCartItem.classList.add('cart-item');
            newCartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <div class="quantity">Quantity: ${cartItem.quantity}</div>
            `;
            listCartHTML.appendChild(newCartItem);
        });
        iconCartSpan.textContent = carts.length;
    }
};

/* Initialize the app */
const initApp = () => {
    // Get data from JSON
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            addToHTML();
        })
        .catch(error => console.error('Error fetching the products:', error));
};

initApp();
