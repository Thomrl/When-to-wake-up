var curTime = new Date();
var hours = curTime.getHours();
var minutes = curTime.getMinutes();

document.getElementById("cur-hours").textContent = moment().format("HH:mm");

var domWUW1 = document.getElementById("wake-up-time-1");
var domWUW2 = document.getElementById("wake-up-time-2");
var domWUW3 = document.getElementById("wake-up-time-3");
var domWUW4 = document.getElementById("wake-up-time-4");
var domWUW5 = document.getElementById("wake-up-time-5");
var domWUW6 = document.getElementById("wake-up-time-6");
var domWUW7 = document.getElementById("wake-up-time-7");
var domWUW8 = document.getElementById("wake-up-time-8");


var ccTime = moment().add(45, 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW1.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((2*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW2.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((3*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW3.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((4*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW4.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((5*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW5.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((6*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW6.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((7*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW7.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((8*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW8.textContent = ccTime.format("HH:mm");
var ccTime = moment().add((9*45), 'minutes');
console.log(ccTime.format('hh:mm'));
domWUW9.textContent = ccTime.format("HH:mm");
