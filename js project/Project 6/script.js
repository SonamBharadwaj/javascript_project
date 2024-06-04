let timeDisplay = document.querySelector(".timeDisplay");
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timeId = null;

startbtn.addEventListener("click", function(){
    if(timeId !== null){
        clearInterval(timeId);
    }
    timeId = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", function(){
    clearInterval(timeId);
});

resetbtn.addEventListener("click", function(){
        clearInterval(timeId);
        timeDisplay.innerHTML = `0 : 0 : 0`;
        msec = secs = mins = 0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = msec < 10 ? `0${secs}` : secs;
    let minsString = msec < 10 ? `0${mins}` : mins;

    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}