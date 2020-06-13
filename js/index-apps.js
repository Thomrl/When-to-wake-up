var button = document.getElementById("WUW-button");
var domWUW1 = document.getElementById("wake-up-time-1");
var domWUW2 = document.getElementById("wake-up-time-2");
var domWUW3 = document.getElementById("wake-up-time-3");
var domWUW4 = document.getElementById("wake-up-time-4");
var domWUW5 = document.getElementById("wake-up-time-5");
var domWUW6 = document.getElementById("wake-up-time-6");
var domWUW7 = document.getElementById("wake-up-time-7");
var domWUW8 = document.getElementById("wake-up-time-8");


button.addEventListener('click', wakeUpWhen);


function wakeUpWhen() {
    //document.getElementById("cur-hours").textContent = moment().format("HH:mm");

    document.getElementById("wake-up-when").style.display = "block";

    var ccTime = moment().add(45, 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW1.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(2*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW2.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(3*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW3.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(4*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW4.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(5*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW5.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(6*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW6.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(7*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW7.textContent = ccTime.format("HH:mm");
    var ccTime = moment().add((15+(8*90)), 'minutes');
    console.log(ccTime.format('hh:mm'));
    domWUW8.textContent = ccTime.format("HH:mm");
}

