fetch('https://hplussport.com/api/products?qty=2&order=name')
.then(
    function (response) 
    {
        return response.json();
    }
)
.then(
    function (data) 
    {
        console.log(data);
    }
)