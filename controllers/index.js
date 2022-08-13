//=============================== Gọi api Home =======================//
function getProducts() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    })

    promise.then(function (result) {
        renderCarouseItem(result.data.content, 'carousel');
        renderItemFeatured(result.data.content, 'item-feature');
        // renderItemRealate(result.data.content, 'item-realate');

    })

    promise.catch(function (err) {
        console.log(err.response?.data)
    })
}
getProducts();


//============ In ra màn hình item carousel (index.html) ==============//
function renderCarouseItem(arrProd, idBody) {
    var htmlContent = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        if (index === 0) {
            htmlContent += `
            <div class="carousel-item active"> 
                <a href="#">
                <img src="${arrProd[index].image}" alt="...">
                </a>
                <div class="item-info">
                    <h2>${arrProd[index].name}</h2>
                    <p>${arrProd[index].shortDescription}</p>
                    <button class="btn btn-warning text-white rounded-0 px-4"><a href="../detail.html?productid=${arrProd[index].id}">Buy now</a></button>
                </div>       
            </div>
            `
        } else {
            htmlContent += `
            <div class="carousel-item"> 
                <a href="#">
                <img src="${arrProd[index].image}" alt="...">
                </a>
                <div class="item-info">
                    <h2>${arrProd[index].name}</h2>
                    <p>${arrProd[index].shortDescription}</p>
                    <button class="btn btn-warning text-white rounded-0 px-4"><a href="../detail.html?productid=${arrProd[index].id}">Buy now</a></button>
                </div>       
            </div>
            `
        }
    }
    document.getElementById(idBody).innerHTML = htmlContent;


}


//============ In ra màn hình item Product Feature (index.html) ==============//
function renderItemFeatured(arrProd, idBody) {
    var htmlContent = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        // console.log(arrProd)
        // var arrProd = arrProd[index];
        // console.log(arrProd)
        htmlContent += `
        <div class="col-4 mb-4">
            <div class="card">
              <img src=${arrProd[index].image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5>${arrProd[index].name}</h5>
                <p class="card-text">
                ${arrProd[index].description}
                </p>
                <button class="btn btn-warning"><a href="../detail.html?productid=${arrProd[index].id}">Buy now</a></button>
                <button class="btn price">${arrProd[index].price}$</button>
              </div>
            </div>
          </div>
        `
    }
    document.getElementById(idBody).innerHTML = htmlContent;
}


//================= back to top=================//
var backTop = document.getElementById('backtop').onclick = topFunction;
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}