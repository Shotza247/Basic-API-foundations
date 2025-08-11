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
        for(items in data)
        {
            var productname = data[items].name;
            var products = document.createElement('li');
            products.innerHTML = productname;
            document.body.appendChild(products);

            var productimage = data[items].image;
            var productimg = document.createElement('img');
            productimg.setAttribute('src',productimage) ;
            document.body.appendChild(productimg);

            var productdescription = data[items].description;
            var descript = document.createElement('li');
            descript.innerHTML = productdescription;
            document.body.appendChild(descript);

            var productprice = data[items].price;
            var productprices = document.createElement('li');
            productprices.innerHTML = 'R' + productprice;
            document.body.appendChild( productprices);

            console.log(productname);
        }
    }
)