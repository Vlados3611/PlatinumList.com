let days = document.querySelector(`#Years`);
let hours = document.querySelector(`#Hours`);
let minutes = document.querySelector(`#Minutes`);
let seconds = document.querySelector(`#Seconds`);


let nextTime = new Date(`September 18 2022 00:00:00`);


function updateCounter() {
    let currentTime = new Date();
    let diff = nextTime - currentTime;
    let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    let secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft < 10 ? `0` + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? `0` + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? `0` + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? `0` + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);