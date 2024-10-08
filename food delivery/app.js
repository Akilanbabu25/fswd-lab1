document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const menuItems = document.querySelectorAll('.menu-item');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const food = document.getElementById('food').value;

        if (name && address && food) {
            alert(`Thank you for your order, ${name}! Your ${food} will be delivered to ${address} soon.`);
            orderForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
