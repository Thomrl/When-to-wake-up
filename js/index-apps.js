var button = document.getElementById("WUW-button");
var button2 = document.getElementById("WUW2-button");
var domInput = document.getElementById("timeinput");
var domWUW1 = document.getElementById("wake-up-time-1");
var domWUW2 = document.getElementById("wake-up-time-2");
var domWUW3 = document.getElementById("wake-up-time-3");
var domWUW4 = document.getElementById("wake-up-time-4");
var domWUW5 = document.getElementById("wake-up-time-5");
var domWUW6 = document.getElementById("wake-up-time-6");
var domWUW7 = document.getElementById("wake-up-time-7");
var domWUW8 = document.getElementById("wake-up-time-8");


button.addEventListener('click', wakeUpWhen);

button2.addEventListener('click', function() {
    var userInput = domInput.value;
    userSetTime = userInput.split(':')
    userSetHour = userSetTime[0]
    userSetMinute = userSetTime[1]
    ssTime = moment().set({'hour': userSetHour, 'minute': userSetMinute});
    console.log(userSetTime);
    
    wakeUpWhenPluss(45, domWUW1);
    wakeUpWhenPluss((15+90), domWUW2);
    wakeUpWhenPluss((15+(2*90)), domWUW3);
    wakeUpWhenPluss((15+(3*90)), domWUW4);
    wakeUpWhenPluss((15+(4*90)), domWUW5);
    wakeUpWhenPluss((15+(5*90)), domWUW6);
    wakeUpWhenPluss((15+(6*90)), domWUW7);
    wakeUpWhenPluss((15+(7*90)), domWUW8);
    document.getElementById("wake-up-when").style.display = "block";
})


function wakeUpWhen() {
    //document.getElementById("cur-hours").textContent = moment().format("HH:mm");
    document.getElementById("wake-up-when").style.display = "block";

    wakeUpWhenPlus(45, domWUW1);
    wakeUpWhenPlus((15+90), domWUW2);
    wakeUpWhenPlus((15+(2*90)), domWUW3);
    wakeUpWhenPlus((15+(3*90)), domWUW4);
    wakeUpWhenPlus((15+(4*90)), domWUW5);
    wakeUpWhenPlus((15+(5*90)), domWUW6);
    wakeUpWhenPlus((15+(6*90)), domWUW7);
    wakeUpWhenPlus((15+(7*90)), domWUW8);
}

function wakeUpWhenPlus(addedMins, whichDOM) {
    var ccTime = moment().add(addedMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}

function wakeUpWhenPluss(addedMins, whichDOM) {
    ssTime = moment().set({'hour': userSetHour, 'minute': userSetMinute});
    var ccTime = ssTime.add(addedMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}


function wakeUpWhenMinus(subtdMins, whichDOM) {
    var ccTime = moment().subtract(subtdMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}