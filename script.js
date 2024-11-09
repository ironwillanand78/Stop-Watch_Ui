let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let hourDiv = document.querySelector(".hour");
let minuteDiv = document.querySelector(".minute");
let secondDiv = document.querySelector(".second");

let count = 0;
let hour = 0;
let minute = 0;
let second = 0;
let timer = false;
let interval;
function stopWatch (){
    if(timer){
        count ++;
        if(count == 100){
            second++;
            count = 0;
        }if(second == 60){
            minute++;
            second = 0;
        }if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }
    }
    let hourString = hour;
    let minuteString = minute;
    let secondString = second;
    if(hourString < 10){
        hourString = "0" + hourString;
    }
    if(minuteString < 10){
        minuteString = "0" + minuteString;
    }
    if(secondString < 10){
        secondString = "0" + secondString;
    }
    hourDiv.textContent = hourString;
    minuteDiv.textContent = minuteString;
    secondDiv.textContent = secondString;
}
startBtn.addEventListener("click" , function(){
    timer = true;
    interval = setInterval(stopWatch , 10);
})

stopBtn.addEventListener("click" , function(){
    timer = false;
    clearInterval(interval);
})

resetBtn.addEventListener("click" , function(){
    clearInterval(interval);
    timer = false;
    hour = 0;
    second = 0;
    minute = 0;
    hourString.textContent = "00";
    minuteString.textContent = "00";
    secondString.textContent = "00";
})