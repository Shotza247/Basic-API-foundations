fetch('https://hplussport.com/api/products?order=price')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // Create a container UL for products
    var productList = document.createElement('ul');
    productList.className = 'product-list';
    document.body.appendChild(productList);

    // Create modal container
    var modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    for (let item of data) {
        // Create product item container
        var productItem = document.createElement('li');
        productItem.className = 'product-item';

        // Product image
        var productImg = document.createElement('img');
        productImg.className = 'product-img';
        productImg.setAttribute('src', item.image);
        productImg.setAttribute('alt', item.name);

        // Product details container
        var details = document.createElement('div');
        details.className = 'product-details';

        // Product name
        var name = document.createElement('div');
        name.className = 'product-name';
        name.innerHTML = item.name;

        // Product price
        var price = document.createElement('div');
        price.className = 'product-price';
        price.innerHTML = 'R' + item.price;

        // View Details Button
        var viewDetailsBtn = document.createElement('button');
        viewDetailsBtn.className = 'view-details-btn';
        viewDetailsBtn.innerHTML = 'View Details';
        viewDetailsBtn.onclick = function() {
            showProductDetails(item);
        };

        // Assemble details
        details.appendChild(name);
        details.appendChild(price);
        details.appendChild(viewDetailsBtn);

        // Assemble product item
        productItem.appendChild(productImg);
        productItem.appendChild(details);

        // Add to product list
        productList.appendChild(productItem);
    }

    // Function to show product details in modal
    function showProductDetails(item) {
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="document.querySelector('.modal').style.display='none'">&times;</span>
            <div class="modal-image-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h2>${item.name}</h2>
            <p class="product-description">${item.description}</p>
            <div class="product-price">R${item.price}</div>
        </div>
    `;
    modal.style.display = 'block';
}

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});