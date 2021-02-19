const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const degree = 6;
const hoursHand = document.getElementById("hr-hand");
const minutesHand = document.getElementById("min-hand");
const secondsHand = document.getElementById("sec-hand");
const datePara = document.getElementById("date-cr");
const mode = document.querySelector(".mode-cr")[0];
var darkMode = true;

setInterval(() => {
    let date = new Date();
    let hours = date.getHours() * 30;
    let minutes = date.getMinutes() * degree;
    let seconds = date.getSeconds() * degree;

    let fullDate = `${weekDays[date.getDay()]}, ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    datePara.innerText = fullDate;

    hoursHand.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minutesHand.style.transform = `rotateZ(${minutes}deg)`;
    secondsHand.style.transform = `rotateZ(${seconds}deg)`;
});

function changeMode() {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    let body = document.getElementsByTagName("BODY")[0];
    if (darkMode) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        sun.style.display = "none";
        moon.style.display = "flex";
        darkMode = false;
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        sun.style.display = "flex";
        moon.style.display = "none";
        darkMode = true;
    }
}