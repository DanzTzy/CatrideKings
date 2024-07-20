document.addEventListener('DOMContentLoaded', () => {
    const findCartridgesButton = document.querySelector('.search-box button');
    const brandSelect = document.getElementById('brand');
    const seriesSelect = document.getElementById('series');
    const modelSelect = document.getElementById('model');

    findCartridgesButton.addEventListener('click', () => {
        if (brandSelect.value === '' || seriesSelect.value === '' || modelSelect.value === '') {
            alert('Please select all options.');
        } else {
            alert('Finding cartridges...');
            // Add your logic here to fetch and display cartridges based on selected options
        }
    });

    // Example: Update product prices based on some conditions
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const priceElement = product.querySelector('.price');
        let price = parseFloat(priceElement.textContent.replace('$', ''));
        
        // Apply a discount of 10% if the price is above $10
        if (price > 10) {
            price *= 0.9;
            priceElement.textContent = `$${price.toFixed(2)}`;
        }
    });
});
