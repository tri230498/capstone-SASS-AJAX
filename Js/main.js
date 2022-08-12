// Khi window load xong hàm sẽ chạy
window.onload = function () {
    getProducts();
}

//=============================== Gọi api =======================//
function getProducts() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    })

    promise.then(function (result) {
        renderCarouseItem(result.data.content, 'carousel');
        renderItemFeatured(result.data.content, 'item-feature');
        renderItemRealate(result.data.content, 'item-realate');

    })

    promise.catch(function (err) {
        console.log(err.response?.data)
    })
}

//============ In ra màn hình carousel item (index.html) ==============//
function renderCarouseItem(arrProd, idBody) {
    var htmlContent = "";
    console.log(arrProd)
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
                    <button class="btn btn-warning text-white rounded-0 px-4">Buy now</button>
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
                    <button class="btn btn-warning text-white rounded-0 px-4">Buy now</button>
                </div>       
            </div>
            `
        }
    }
    document.getElementById(idBody).innerHTML = htmlContent;


}

//============ In ra màn hình item Product Feature (index.html) ==============
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
                <a href="#" class="btn btn-warning">Buy now</a>
                <a href="#" class="btn btn-primary">${arrProd[index].price}$</a>
              </div>
            </div>
          </div>
        `
    }
    document.getElementById(idBody).innerHTML = htmlContent;
    console.log(htmlContent)
}

//============ In ra màn hình item Realate Product (detail.html) ==============
function renderItemRealate(arrProd, idBody) {
    var htmlProduct = "";
    // debugger
    for (var index = 0; index < arrProd.length; index++) {
        // var arrProd = arrProd[index];
        console.log(arrProd)
        htmlProduct += `
        <div class="col-4 mb-4">
            <div class="card">
              <img src=${arrProd[index].image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5>${arrProd[index].name}</h5>
                <p class="card-text">
                ${arrProd[index].description}
                </p>
                <a href="#" class="btn btn-warning">Buy now</a>
                <a href="#" class="btn btn-primary">${arrProd[index].price}$</a>
              </div>
            </div>
          </div>
        `
    }
    document.getElementById(idBody).innerHTML = htmlProduct;
}


// HMTL detail.html của mình không in ra được các item giày như bên index.html
// mình có gọi hàm riêng và khai báo id giống y rồi á.





//================= Hàm check required ==============//
function checkValidity() {
    var isValid = checkForm()
    if (!isValid) {
        return alert("Vui lòng kiểm tra giá trị của các input")
    }

    passwordConfirm();
}


//============================ Hàm kiểm tra validity ==================================//
function checkForm() {
    var isValid = document.getElementById('formRegister').checkValidity();
    if (!isValid) {

        //============== DOM tới email và kiểm tra hợp lệ ===========
        var inpEmail = document.getElementById('txtEmail')
        var spanEmail = document.getElementById('spanEmail');
        if (inpEmail.validity.valueMissing) {
            spanEmail.innerHTML = "Eamil không được để trống !"
        } else if (inpEmail.validity.patternMismatch) {
            spanEmail.innerHTML = "Eamil không đúng định dạng !"
        } else {
            spanEmail.innerHTML = "";
        }

        //================ DOM tới name ===============
        var inpName = document.getElementById('txtName');
        var spanName = document.getElementById('spanName');

        if (inpName.validity.valueMissing) {
            spanName.innerHTML = "Name Không được để trống !"
        } else if (inpName.validity.patternMismatch) {
            spanName.innerHTML = "Name Không đúng định dạng !"
        } else {
            spanName.innerHTML = "";
        }

        //============ DOM tới password ==============
        var inpPW = document.getElementById('txtPassWord');
        var spanPW = document.getElementById('spanPassWord');

        if (inpPW.validity.valueMissing) {
            spanPW.innerHTML = "PassWord không được để trống !"
        } else {
            spanPW.innerHTML = "";
        }

        //======== DOM tới phone  ===========
        var inpPhone = document.getElementById('txtPhone');
        var spanPhone = document.getElementById('spanPhone');
        if (inpPhone.validity.valueMissing) {
            spanPhone.innerHTML = "Phone không được để trống !";
        } else if (inpPhone.validity.patternMismatch) {
            spanPhone.innerHTML = "Phone không đúng định dạng !";
        } else {
            spanPhone.innerHTML = "";
        }

    }

    return isValid;
}


