//=============================== Gọi api Detail id =======================//
function getProductName(myParam) {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method: 'GET',

    })
    promise.then(function (result) {
        renderProductName(result.data.content, 'productName');
        console.log(result.data.content)
    })

    promise.catch(function (err) {
        console.log(err.response?.data)
    })
}
//============ In ra màn hình item Realate Product (detail.html) ==============
function renderProductName(arrProd, idBody) {
    var htmlProduct = "";
    // debugger
    console.log(arrProd)
   
        // var arrProd = arrProd[index];
        console.log(arrProd)
        htmlProduct += `
        <div class="col-5">
            <div class="img">
              <img src="${arrProd.image}" alt="" />
            </div>
        </div>
        <div class="col-7">
            <h4>Product name</h4>
            <p class="dess">
            ${arrProd.description}
            </p>
            <p class="size">Available size</p>
            <div class="items-size d-flex">
              <div class="item p-2 me-3">${arrProd.size[0]}</div>
              <div class="item p-2 me-3">${arrProd.size[1]}</div>
              <div class="item p-2 me-3">${arrProd.size[2]}</div>
              <div class="item p-2 me-3">${arrProd.size[3]}</div>
              <div class="item p-2 me-3">${arrProd.size[4]}</div>
              <div class="item p-2 me-3">${arrProd.size[5]}</div>
              <div class="item p-2 me-3">${arrProd.size[6]}</div>
            </div>
            <p class="price text-danger mt-3">${arrProd.price}$</p>
            <div class="amount d-flex align-items-center">
              <button class="btn btn-primary me-2 rounded-0" style="width: 5%;">+</button>
              <span>1</span>
              <button class="btn btn-primary ms-2 rounded-0" style="width: 5%;">-</button>
            </div>
            <div class="add">
              <button class="btn">Add to cart</button>
            </div>
        </div>
        `
    document.getElementById(idBody).innerHTML = htmlProduct;
}


//=============================== Gọi api Detail =======================//
function getRealateFroduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    })

    promise.then(function (result) {
        renderItemRealate(result.data.content, 'item-realate');
    })

    promise.catch(function (err) {
        console.log(err.response?.data)
    })
}
getRealateFroduct();

//============ In ra màn hình item Realate Product (detail.html) ==============
function renderItemRealate(arrProd, idBody) {
    var htmlProduct = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        htmlProduct += `
        <div class="col-4 mb-4">
            <div class="card">
              <img src=${arrProd[index].image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5>${arrProd[index].name}</h5>
                <p class="card-text">
                ${arrProd[index].description}
                </p>
                <button class="btn btn-warning"><a href="../detail.html?productid=${arrProd[index].id}">Buy now</a></button>
                <a href="#" class="btn price">${arrProd[index].price}$</a>
              </div>
            </div>
          </div>
        `
    }
    document.getElementById(idBody).innerHTML = htmlProduct;
}








// Khi window load xong hàm sẽ chạy
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid')
    getProductName(myParam);
}

// Back to top
var backTop = document.getElementById('backtop').onclick = topFunction;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

