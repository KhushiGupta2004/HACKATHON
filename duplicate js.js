// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handle adding the product to the cart (e.g., update the cart count, display a message)
        console.log('Product added to cart!');
    });
});