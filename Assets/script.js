var startBtn = document.getElementById("start")
var timerEl = document.getElementById("timer")
function countdown() {
    var timeLeft = 75;
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time left:' + timeLeft;
            timeLeft--;
         } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
        //displayMessage();
    }, 1000);
  }

startBtn.onclick = countdown;