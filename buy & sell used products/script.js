document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    const buyLink = document.getElementById('buyLink');
    const sellLink = document.getElementById('sellLink');
    const homeSection = document.getElementById('home');
    const buySection = document.getElementById('buy');
    const sellSection = document.getElementById('sell');

    function showSection(section) {
        homeSection.style.display = 'none';
        buySection.style.display = 'none';
        sellSection.style.display = 'none';
        section.style.display = 'block';
    }

    homeLink.addEventListener('click', function() {
        showSection(homeSection);
    });

    buyLink.addEventListener('click', function() {
        showSection(buySection);
    });

    sellLink.addEventListener('click', function() {
        showSection(sellSection);
    });

    document.getElementById('sellForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;

        const productListing = document.createElement('div');
        productListing.classList.add('product');

        productListing.innerHTML = `
            <h3>${productName}</h3>
            <p>Price: ${productPrice}</p>
            <p>${productDescription}</p>
            <button class="buyButton">Buy</button>
        `;

        document.getElementById('listings').appendChild(productListing);

        document.getElementById('sellForm').reset();

        // Add event listener to the new Buy button
        productListing.querySelector('.buyButton').addEventListener('click', function() {
            alert(`You are buying: ${productName} for ${productPrice}`);
        });
    });

    // Show home section by default
    showSection(homeSection);
});
