let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function openDetailsModal(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;

    // You can handle account number, phone number, and address here if needed

    // Proceed to add the product
    addProduct(event);
}

function addProduct(event) {
    event.preventDefault();
    
    alert("Our Customer Care Will Support You and The Amount will be transfered to you account within 2 weeks...!!!");

    const imageInput = document.getElementById('image');
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const productGrid = document.getElementById('product-grid');

        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${e.target.result}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price.toFixed(2)}</p>
            <button onclick="addToCart('${name}', ${price})">Add to Cart</button>
            <button onclick="openModal()">Buy</button>
        `;

        productGrid.appendChild(productDiv);
        
        // Clear form fields after adding the product
        document.getElementById('sell-product-form').reset();
        closeModal();
    };

    reader.readAsDataURL(file);
}

document.getElementById('user-info-form').onsubmit = function(event) {
    event.preventDefault();
    closeModal();
    alert('Order submitted! Thank you!');
};
