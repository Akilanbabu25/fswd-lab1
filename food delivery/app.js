let currentUser = null;

// Handle Login/Logout
document.getElementById('login-btn').onclick = function() {
    currentUser = prompt("Enter your name:");
    document.getElementById('user-info').innerText = `Welcome, ${currentUser}!`;
    this.style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline';
};

document.getElementById('logout-btn').onclick = function() {
    currentUser = null;
    document.getElementById('user-info').innerText = '';
    this.style.display = 'none';
    document.getElementById('login-btn').style.display = 'inline';
};

// Order Management
let orderItems = [];
let totalAmount = 0;

document.querySelectorAll('.order-btn').forEach(button => {
    button.onclick = function() {
        const foodItem = this.parentElement;
        const foodName = foodItem.querySelector('p').innerText;
        const price = parseInt(foodItem.getAttribute('data-price'));
        const quantity = parseInt(foodItem.querySelector('.quantity').value);
        
        orderItems.push({ name: foodName, price: price, quantity: quantity });
        totalAmount += price * quantity;
        
        document.getElementById('total-amount').innerText = totalAmount;
        document.getElementById('order-items').innerHTML += `<p>${foodName} (x${quantity}) - ₹${price * quantity}</p>`;
        
        document.getElementById('order-summary').style.display = 'block';
        document.getElementById('customer-details').style.display = 'block';
    };
});

// Handle Delivery Form Submission
document.getElementById('delivery-form').onsubmit = function(event) {
    event.preventDefault();
    document.getElementById('customer-details').style.display = 'none';
    document.getElementById('payment').style.display = 'block';
    document.getElementById('pay-amount').innerText = totalAmount;
};

// Handle Payment
document.getElementById('pay-btn').onclick = function() {
    alert(`Payment of ₹${totalAmount} successful!`);
    resetOrder();
};

// Reset Order
function resetOrder() {
    orderItems = [];
    totalAmount = 0;
    document.getElementById('total-amount').innerText = totalAmount;
    document.getElementById('order-items').innerHTML = '';
    document.getElementById('order-summary').style.display = 'none';
    document.getElementById('payment').style.display = 'none';
}
