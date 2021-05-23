const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date (newYears);
    const currentDate = new Date();

    const toatlseconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(toatlseconds / 3600 / 24);
    const hours = Math.floor(toatlseconds / 3600) % 24;
    const mins = Math.floor(toatlseconds / 60) % 60;
    const seconds = Math.floor(toatlseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000);