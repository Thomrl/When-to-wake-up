var curTime = new Date();
var hours = curTime.getHours();
var minutes = curTime.getMinutes();

document.getElementById("cur-hours").textContent = hours+":";
document.getElementById("cur-minutes").textContent = minutes;

var domWUW1 = document.getElementById("wake-up-time-1");
var domWUW2 = document.getElementById("wake-up-time-2");
var domWUW3 = document.getElementById("wake-up-time-3");
var domWUW4 = document.getElementById("wake-up-time-4");
var domWUW5 = document.getElementById("wake-up-time-5");
var domWUW6 = document.getElementById("wake-up-time-6");
var domWUW7 = document.getElementById("wake-up-time-7");
var domWUW8 = document.getElementById("wake-up-time-8");

var WUW1, WUW2, WUW3, WUW4, WUW5, WUW6, WUW7, WUW8 = "";

function when(wuw, howMany) {
    for (i=0; i < howMany; i++) {
        minutes = minutes+45;
        if (minutes > 120) {
            var newMinutes = minutes - 120
            hours = hours + 2;
        } else if (minutes > 60) {
            var newMinutes = minutes - 60;
            hours = hours + 1;
        }
    }
    wuw.textContent = hours+":"+newMinutes;
}





WUW1 = when(domWUW1, 1);
WUW2 = when(domWUW2, 2);
WUW3 = when(domWUW3, 3);
WUW4 = when(domWUW4, 4);
WUW5 = when(domWUW5, 5);
WUW6 = when(domWUW6, 6);
WUW7 = when(domWUW7, 7);
WUW8 = when(domWUW8, 8);