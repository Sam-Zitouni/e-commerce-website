let iconcart = document.querySelector('.icon-cart');
let closeCart=document.querySelector('.close');
let body = document.querySelector('body');

iconcart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click',() => {
    body.classList.toggle('showCart');});

