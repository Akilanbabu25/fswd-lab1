
let loggedInUser = null;
let orderItems = [];
let totalAmount = 0;
let customerDetails = {};

document.getElementById('login-btn').addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    if (username === 'akilan' && password === 'password') {
        loggedInUser = username;
        document.getElementById('user-info').textContent = `Logged in as ${loggedInUser}`;
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
        alert('Login Successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    loggedInUser = null;
    document.getElementById('user-info').textContent = '';
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';
    alert('Logged out successfully.');
});

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', event => {
        if (!loggedInUser) {
            alert('You must log in to order.');
            return;
        }

        const foodItem = event.target.closest('.food-item');
        const itemName = foodItem.querySelector('p').textContent;
        const quantity = foodItem.querySelector('.quantity').value;
        const price = parseInt(foodItem.dataset.price);
        const total = price * quantity;

        orderItems.push({ itemName, quantity, price, total });
        totalAmount += total;

        displayOrderSummary();
    });
});

function displayOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    const orderItemsDiv = document.getElementById('order-items');
    const totalAmountSpan = document.getElementById('total-amount');

    orderItemsDiv.innerHTML = orderItems.map(item => 
        `<p>${item.quantity}x ${item.itemName} - ₹${item.total}</p>`
    ).join('');
    totalAmountSpan.textContent = totalAmount;
    
    orderSummary.style.display = 'block';
    document.getElementById('customer-details').style.display = 'block';
}

document.getElementById('submit-details').addEventListener('click', (e) => {
    e.preventDefault();
    
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    
    if (!address || !contact) {
        alert('Please enter all details.');
        return;
    }
    
    customerDetails = { address, contact };
    document.getElementById('payment').style.display = 'block';
});

document.getElementById('payment-method').addEventListener('change', function() {
    const upiOptions = document.getElementById('upi-options');
    if (this.value === 'online') {
        upiOptions.style.display = 'block';
    } else {
        upiOptions.style.display = 'none';
    }
});

document.getElementById('confirm-order').addEventListener('click', () => {
    alert(`Order confirmed!\nTotal: ₹${totalAmount}\nDelivery to: ${customerDetails.address}`);
    window.location.reload();
});
