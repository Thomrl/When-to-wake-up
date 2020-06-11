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

var TimeToWakeUp = function(pos) {
    this.pos = pos;

}

TimeToWakeUp.prototype.calculateWhen = function(wuw) {
    x = curTime.setMinutes((this.pos*45));
    
    wuw.textContent = x;
}

var wuw1 = new TimeToWakeUp(1);
var wuw2 = new TimeToWakeUp(2);
var wuw3 = new TimeToWakeUp(3);
var wuw4 = new TimeToWakeUp(4);
var wuw5 = new TimeToWakeUp(5);
var wuw6 = new TimeToWakeUp(6);
var wuw7 = new TimeToWakeUp(7);
var wuw8 = new TimeToWakeUp(8);

wuw1.calculateWhen(domWUW1);