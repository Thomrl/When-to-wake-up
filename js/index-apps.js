var button = document.getElementById("WUW-button");
var button2 = document.getElementById("WUW2-button");
var button3 = document.getElementById("restart");
var domInput = document.getElementById("timeinput");
var domWUW1 = document.getElementById("wake-up-time-1");
var domWUW2 = document.getElementById("wake-up-time-2");
var domWUW3 = document.getElementById("wake-up-time-3");
var domWUW4 = document.getElementById("wake-up-time-4");
var domWUW5 = document.getElementById("wake-up-time-5");
var domWUW6 = document.getElementById("wake-up-time-6");
var domWUW7 = document.getElementById("wake-up-time-7");
var domWUW8 = document.getElementById("wake-up-time-8");
var domAT1 = document.getElementById("amount-time-1");
var domAT2 = document.getElementById("amount-time-2");
var domAT3 = document.getElementById("amount-time-3");
var domAT4 = document.getElementById("amount-time-4");
var domAT5 = document.getElementById("amount-time-5");
var domAT6 = document.getElementById("amount-time-6");
var domAT7 = document.getElementById("amount-time-7");
var domAT8 = document.getElementById("amount-time-8");
var showInfo = document.getElementById("show-info");
var info = document.getElementById("info");


button.addEventListener('click', wakeUpWhen);
/*
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
})*/

button2.addEventListener('click', function() {
    var userInput = domInput.value;
    userSetTime = userInput.split(':')
    userSetHour = userSetTime[0]
    userSetMinute = userSetTime[1]
    ssTime = moment().set({'hour': userSetHour, 'minute': userSetMinute});
    console.log(userSetTime);
    
    wakeUpWhenMinus(735, domWUW1);
    wakeUpWhenMinus(645, domWUW2);
    wakeUpWhenMinus(555, domWUW3);
    wakeUpWhenMinus(465, domWUW4);
    wakeUpWhenMinus(375, domWUW5);
    wakeUpWhenMinus(285, domWUW6);
    wakeUpWhenMinus(195, domWUW7);
    wakeUpWhenMinus(105, domWUW8);
    document.getElementById("wake-up-when").style.display = "block";
    document.getElementById("amounttime").style.display = "none";
    document.getElementById("control").style.display = "none";
    document.getElementById("notcontrol").style.display = "block";
    document.getElementById("restart").style.display = "block";
})


function wakeUpWhen() {
    //document.getElementById("cur-hours").textContent = moment().format("HH:mm");
    document.getElementById("wake-up-when").style.display = "inline-block";
    document.getElementById("amounttime").style.display = "inline-block";
    document.getElementById("control").style.display = "none";
    document.getElementById("notcontrol").style.display = "block";
    document.getElementById("restart").style.display = "block";

    wakeUpWhenPlus(45, domWUW1);
    wakeUpWhenPlus((15+90), domWUW2);
    wakeUpWhenPlus((15+(2*90)), domWUW3);
    wakeUpWhenPlus((15+(3*90)), domWUW4);
    wakeUpWhenPlus((15+(4*90)), domWUW5);
    wakeUpWhenPlus((15+(5*90)), domWUW6);
    wakeUpWhenPlus((15+(6*90)), domWUW7);
    wakeUpWhenPlus((15+(7*90)), domWUW8);

    
    wakeUpWhenAmountPlus(45, domAT1);
    wakeUpWhenAmountPlus((15+90), domAT2);
    wakeUpWhenAmountPlus((15+(2*90)), domAT3);
    wakeUpWhenAmountPlus((15+(3*90)), domAT4);
    wakeUpWhenAmountPlus((15+(4*90)), domAT5);
    wakeUpWhenAmountPlus((15+(5*90)), domAT6);
    wakeUpWhenAmountPlus((15+(6*90)), domAT7);
    wakeUpWhenAmountPlus((15+(7*90)), domAT8);



}

restart.addEventListener('click', function() {
    document.getElementById("wake-up-when").style.display = "none";
    document.getElementById("amounttime").style.display = "none";
    document.getElementById("control").style.display = "block";
    document.getElementById("notcontrol").style.display = "none";
    document.getElementById("restart").style.display = "none";
})

showInfo.addEventListener('click', function(){
    document.getElementById("show-info").style.display = "none";
    document.getElementById("info").style.display = "block";
})

info.addEventListener('click', function(){
    document.getElementById("show-info").style.display = "block";
    document.getElementById("info").style.display = "none";
})



function wakeUpWhenPlus(addedMins, whichDOM) {
    var ccTime = moment().add(addedMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}

function wakeUpWhenAmountPlus(addedMins, whichDOM) {
    var ddTime = moment().set({'hour': 0, 'minute': 0});
    cgTime = ddTime.add(addedMins, 'minutes');
    whichDOM.textContent = cgTime.format("HH:mm");
}

function wakeUpWhenPluss(addedMins, whichDOM) {
    ssTime = moment().set({'hour': userSetHour, 'minute': userSetMinute});
    var ccTime = ssTime.add(addedMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}


function wakeUpWhenMinus(subtdMins, whichDOM) {
    ssTime = moment().set({'hour': userSetHour, 'minute': userSetMinute});
    var ccTime = ssTime.subtract(subtdMins, 'minutes');
    whichDOM.textContent = ccTime.format("HH:mm");
}