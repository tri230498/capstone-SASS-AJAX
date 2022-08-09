// Khi window load xong hàm sẽ chạy
window.onload = function () {
    getProducts();
}


// Gọi api

function getProducts() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    })

    promise.then(function (result) {
        renderCarouseItem(result.data.content, 'item-carousel');
        renderItemFeatured(result.data.content, 'item-feature');
        console.log(result.data.content)
    })

    promise.catch(function (err) {
        console.log(err.response?.data)
    })
}

//============ In ra màn hình carousel item ==============
function renderCarouseItem(arrProd, idBody) {
    var htmlContent = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        console.log(arrProd)
        var arrProd = arrProd[index];
        console.log(arrProd)
        htmlContent += `
            <div class="col-7">
            <img src="${arrProd.image}" alt="..." class="w-100">
            </div>
            <div class="col-5">
                <h2>${arrProd.name}</h2>
                <p>${arrProd.shortDescription}</p>
                <button class="btn btn-warning text-white rounded-0 px-4">Buy now</button>
            </div>      
        `
    }
    document.getElementById(idBody).innerHTML = htmlContent;
    console.log(htmlContent)
}





//============ In ra màn hình item feature ==============
function renderItemFeatured(arrProd, idBody) {
    var htmlContent = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        console.log(arrProd)
        var arrProd = arrProd[index];
        console.log(arrProd)
        htmlContent += `
        <div class="col-4">
            <div class="card w-100">
              <img src=${arrProd.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="${arrProd.name}">Card title</h5>
                <p class="card-text">
                ${arrProd.description}
                </p>
                <a href="https://shop.cyberlearn.vn/api/Product/getbyid?id=1" class="btn btn-warning">Buy now</a>
                <a href="#" class="btn btn-primary">${arrProd.price}$</a>
              </div>
            </div>
          </div>
        `
    }
    document.getElementById(idBody).innerHTML = htmlContent;
    console.log(htmlContent)
}










$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
    });
});