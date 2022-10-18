let logIn = document.querySelector(`.title-for-log`);
let closeButton1 = document.querySelector(`#close-button-1`);
let indexBox = document.querySelector(`.index-box`);

logIn.addEventListener(`click`, function () {
    indexBox.style.display = `block`;
    closeButton1.style.display = `block`;

});

closeButton1.addEventListener(`click`, function () {
    indexBox.style.display = `none`;
    closeButton1.style.display = `none`;
});




let submitButton = document.querySelector(`.button-submit`);
let inputLogin = document.querySelector(`#login`);
let inputPassword = document.querySelector(`#password`);
let labelLogin = document.querySelector(`.label-for-input-login`);
let labelPassword = document.querySelector(`.label-for-input-password`);

inputLogin.addEventListener(`keyup`, function () {
    if (inputLogin.value.length < 4 || inputLogin.value.length == 0) {
        inputLogin.style.borderBottom = `1px solid rgb(167, 7, 7)`;
        labelLogin.style.display = `block`;
    }
    if (inputLogin.value.length > 4) {
        inputLogin.style.borderBottom = `1px solid rgb(30, 161, 194)`;
        labelLogin.style.display = `none`;
    }
});

inputPassword.addEventListener(`keyup`, function () {
    if (inputPassword.value.length < 4 || inputPassword.value.length == 0) {
        inputPassword.style.borderBottom = `1px solid rgb(167, 7, 7)`;
        labelPassword.style.display = `block`;
    }
    if (inputPassword.value.length > 4) {
        inputPassword.style.borderBottom = `1px solid rgb(30, 161, 194)`;
        labelPassword.style.display = `none`;
    }
});

submitButton.addEventListener(`click`, function () {
    if (inputLogin.value.length == 0 || inputLogin.value.length < 4 || inputPassword.value.length == 0 || inputPassword.value.length < 4) {
        inputLogin.style.borderBottom = `1px solid rgb(167, 7, 7)`;
        inputPassword.style.borderBottom = `1px solid rgb(167, 7, 7)`;
        labelLogin.style.display = `block`;
        labelPassword.style.display = `block`;
    }
    else {
        inputLogin.style.borderBottom = `1px solid rgb(13, 179, 35)`;
        inputPassword.style.borderBottom = `1px solid rgb(13, 179, 35)`;
        labelLogin.style.display = `none`;
        labelPassword.style.display = `none`;
    }
})
