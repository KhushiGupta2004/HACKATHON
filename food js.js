// Sample food items data
const foodItems = [
    { id: 1, name: "MATHS", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    { id: 2, name: "DIS", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    { id: 1, name: "AIC", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    { id: 2, name: "DLI", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    { id: 1, name: "COA", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    { id: 2, name: "DSA", price: 5, description: "learn", image: "https://via.placeholder.com/250x150" },
    ];
  
  // Cart array
  let cart = [];
  
  // Reference to elements
  const menuContainer = document.getElementById('menu-container');
  const cartSection = document.getElementById('cart-section');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const viewCartBtn = document.getElementById('viewCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  
  // Initialize menu
  function renderMenu() {
    foodItems.forEach(food => {
      const foodElement = document.createElement('div');
      foodElement.classList.add('food-item');
      foodElement.innerHTML = `
    
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <p class="price">$${food.price}</p>
        <button onclick="addToCart(${food.id})">Add to Cart</button>
      `;
      menuContainer.appendChild(foodElement);
    });
  }
  
  // Add item to cart
  function addToCart(id) {
    const food = foodItems.find(item => item.id === id);
    cart.push(food);
    updateCart();
  }
  
  
  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from cart array based on index
    updateCart();
  }
  
  // Update cart UI and total
  function updateCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let total = 0;
    
    cart.forEach((item, index) => {
      total += item.price;
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
  }
  
  // Show cart
  viewCartBtn.addEventListener('click', () => {
    cartSection.classList.remove('hidden');
    cartSection.style.display = 'block';
  });
  
  // Close cart
  closeCartBtn.addEventListener('click', () => {
    cartSection.style.display = 'none';
  });
  
  // Initialize app
  renderMenu();
  // ... (your existing JavaScript code)

// Add event listener to the "Checkout" button
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
    // Show payment options section
    const paymentSection = document.getElementById('payment-section');
    paymentSection.style.display = 'block';

    // Hide cart section
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = 'none';
});

// Add event listener to the "Confirm Payment" button
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
confirmPaymentBtn.addEventListener('click', () => {
    // Handle payment processing (e.g., call a payment gateway API)
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    console.log('Selected payment method:', selectedPaymentMethod);

    // Simulate successful payment (replace with actual payment processing)
    alert('Payment successful!');

    // Redirect to a confirmation page or display a success message
    window.location.href = 'confirmation.html';
});
// ... (your existing JavaScript code)

// Add event listener to the "Checkout" button
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
    // Show payment options and address section
    const paymentSection = document.getElementById('payment-section');
    paymentSection.style.display = 'block';

    // Hide cart section
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = 'none';
});

// Add event listener to the "Confirm Payment" button
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
confirmPaymentBtn.addEventListener('click', () => {
    // Validate address fields
    const name = document.getElementById('name').value;
    const address1 = document.getElementById('address1').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const phone = document.getElementById('phone').value;

    if (!name || !address1 || !city || !state || !pincode || !phone) {
        alert('Please fill in all required address fields.');
        return;
    }

    // Handle payment processing (e.g., call a payment gateway API)
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    console.log('Selected payment method:', selectedPaymentMethod);

    // Simulate successful payment (replace with actual payment processing)
    alert('Payment successful!');

    // Redirect to a confirmation page or display a success message
    window.location.href = 'confirmation.html';
});