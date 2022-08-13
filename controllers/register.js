//================= Hàm check required ==============//
document.getElementById('btnCheck').onclick = checkValidity;
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