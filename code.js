let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct'); // Corrected the class selector


let listProducts = [];
/*see part 4*/
let carts =[];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

/*2*/
const addToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;  
            newProduct.innerHTML = `
                <img src="pics/chair.png" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add to cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

listProductHTML.addEventListener('click', (event) => {
    const positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        const productId = positionClick.parentElement.dataset.id;
        /* 3. alert(productId);  houni alert bech tchouf code ye5dim a illa le si ye5dem t3ada badel alert b add to caet w asna3 function lbarra ismha add to cart*/
        addToCart(productId);
    }
});

/*4*/
const addToCart = (product_id)=>{

}



const initApp = () => {
    // Get data from JSON
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            /*console.log(listProducts); // to see if all the data is logged in*/
            addToHTML(); /*1*/
        })
        .catch(error => console.error('Error fetching the products:', error));
};

initApp();
