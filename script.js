setInterval(setClock, 1000); // setting the interval to every seconds.
const hourNeedle = document.querySelector('[data-hour-needle]'); // declare the variable to select the query hour in the document.
const minutesNeedle = document.querySelector('[data-minute-needle]'); // declare the variable to select the query minutes in the document.
const secondsNeedle = document.querySelector('[data-second-needle]'); // declare the variable to select the query seconds in the document.

function setClock() {                   // create a function to set the clock.
    const currentDate = new Date();     // declare the variable currentDate = the new Date.
    const secondsRatio = currentDate.getSeconds() / 60;   // declare the variable of the ratio for seconds equal to the current date, 
                                                         // through getSeconds divided by 60, (60 seconds / minute).
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;    //declare the variable of the ratio for minutes equal to the current date, 
                                                                              // through getMinutes divided by 60, (60 minutes / hour).
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 ;  //declare the variable of the ratio for hour equal to the current date,
                                                                       // through getHour divided by 12, (12 hours in the clock).

    setRotation(secondsNeedle, secondsRatio);  // set rotation for seconds = to the seconds hand and the ratio of seconds.
    setRotation(minutesNeedle, minutesRatio); // set rotation for minutes = to the minutes hand and the ratio of minutes.
    setRotation(hourNeedle, hoursRatio);      // set rotation for hour = to the hour hand and the ratio of hour.
}
function setRotation(element, rotationRatio){ // declare the function set rotation that is going to take 2 parameters,
                                              // the element and the ratio of rotation.
    element.style.setProperty('--rotation', rotationRatio * 360); // setting element and the style and set property,
                                                                // taking the string of '--rotation' and rotationRatio time the 360 degres,
}                                                               // that the needles will go around from 12 am to 12 pm.
setClock();                                                     // calling the function.
