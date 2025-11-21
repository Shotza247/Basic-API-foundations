// Load products from API
fetch("https://hplussport.com/api/products?order=price")
    .then(response => response.json())
    .then(data => renderProducts(data))
    .catch(err => console.error("API Error:", err));

function renderProducts(data) {
    const section = document.getElementById("product-section");

    const productList = document.createElement("ul");
    productList.className = "product-list";
    section.appendChild(productList);

    //created a global modal so functions can access it
    const modal = document.createElement("div");
    modal.className = "modal";
    document.body.appendChild(modal);

    data.forEach(item => {
        const li = document.createElement("li");
        li.className = "product-card";

        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-img">

            <div class="product-content">
                <h3 class="product-name">${item.name}</h3>
                <div class="product-price">R${item.price}</div>
                <button class="btn" data-id="${item.id}">View Details</button>
            </div>
        `;

        li.querySelector("button").onclick = () => showProductDetails(item, modal);

        productList.appendChild(li);
    });

    window.onclick = (event) => {  
        if (event.target === modal) modal.style.display = "none";
    };
}

function showProductDetails(item, modal) {
    modal.innerHTML = `
        <div class="modal-content fade-in">
            <span class="close-btn">&times;</span>

            <div class="modal-image-container">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <h2>${item.name}</h2>
            <p class="product-description">${item.description}</p>
            <div class="modal-price">R${item.price}</div>
        </div>
    `;

    modal.style.display = "block";
    modal.querySelector(".close-btn").onclick = () => modal.style.display = "none";
}
