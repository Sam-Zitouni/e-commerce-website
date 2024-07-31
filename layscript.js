const addToHTML = () => {
// Function to generate star ratings
function generateStars(rating) {
    let starsHtml = '';
    for (let i = 5; i >= 1; i--) {
        starsHtml += `
            <input type="radio" id="star${i}" name="rating" value="${i}" ${i === rating ? 'checked' : ''}>
            <label for="star${i}" title="${i} stars">☆</label>
        `;
    }
    return starsHtml;
}

// Function to fetch and render products
async function fetchAndRenderProducts() {
    try {
        const response = await fetch('element.json');
        const products = await response.json();
        const container = document.getElementById('product-container');

        products.forEach(product => {
            container.innerHTML += `
                <div class="col-4">
                    <img src="${product.image}" class="uniform-size" alt="${product.title}">
                    <h4>${product.title}</h4>
                    <div class="star-rating">
                        ${generateStars(product.rating)}
                    </div>
                    <p>${product.price}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function to fetch and render products
fetchAndRenderProducts();
};