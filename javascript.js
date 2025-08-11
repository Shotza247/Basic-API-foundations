fetch('https://hplussport.com/api/products?order=name')
.then(
    function (response) 
    {
        return response.json();
    }
)
.then(
    function (data) 
    {
    
     // Created a container UL for products
    var productList = document.createElement('ul');
    productList.className = 'product-list';
    document.body.appendChild(productList);

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

        // Product description
        var desc = document.createElement('div');
        desc.className = 'product-description';
        desc.innerHTML = item.description;

        // Product price
        var price = document.createElement('div');
        price.className = 'product-price';
        price.innerHTML = 'R' + item.price;

        // Assemble details
        details.appendChild(name);
        details.appendChild(desc);
        details.appendChild(price);

        // Assemble product item
        productItem.appendChild(productImg);
        productItem.appendChild(details);

        // Add to product list
        productList.appendChild(productItem);
    }
});