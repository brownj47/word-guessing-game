
var winCounter = 0;
var lossCounter = 0;

var timeCount = 11;
var timerEl = document.querySelector("#timer");

var startEl = document.querySelector("#startBtn")
var resetEl = document.querySelector("#resetBtn")
var contentEl = document.querySelector("#content")

//timer
function startTimer() {
    var timerInterval = setInterval(function countdown() {  
        timeCount--;
        timerEl.textContent = `${timeCount} Seconds Left`;
        if (timeCount === 0) {
            clearInterval(timerInterval)
            timerEl.textContent =  ""
        }
    }
, 1000)}


startEl.addEventListener("click", startTimer)


var word = "abcdefghijklmnop"
var emptyLetter =  " _ "
contentEl.textContent = emptyLetter.repeat(word.length)

document.addEventListener("keydown", function logKey(event) { // capture a keypress
    var key = event.key
    console.log(key)
})
