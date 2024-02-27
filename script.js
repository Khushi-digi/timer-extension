let timer;
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let timerDisplay = document.getElementById("timer");

function startTimer() {
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  timer = setInterval(() => {
    totalSeconds--;

    let hoursLeft = Math.floor(totalSeconds / 3600);
    let minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    let secondsLeft = totalSeconds % 60;

    timerDisplay.textContent = `${pad(hoursLeft)}:${pad(minutesLeft)}:${pad(secondsLeft)}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Timer expired!");
    }
  }, 1000);

  startButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = "00:00:00";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
  startButton.disabled = false;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
