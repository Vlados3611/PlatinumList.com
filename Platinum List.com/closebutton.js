let closebutton = document.querySelector(`.close-button`);
let input = document.querySelector(`.input-search`);
let inputbox = document.querySelector(`.middle-section`);

input.onclick = function () {
  closebutton.classList.remove(`none`);
}

closebutton.onclick = function () {
    closebutton.classList.add(`none`);
    input.textContent = ``;
}

