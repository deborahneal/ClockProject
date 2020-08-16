setInterval(setClock, 1000);
const hourNeedle = document.querySelector('[data-hour-needle]');
const minutesNeedle = document.querySelector('[data-minute-needle]');
const secondsNeedle = document.querySelector('[data-second-needle]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 ;

    setRotation(secondsNeedle, secondsRatio);
    setRotation(minutesNeedle, minutesRatio);
    setRotation(hourNeedle, hoursRatio);
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();
