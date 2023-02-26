const scoreElem = document.getElementById("score");
const highscoreElem = document.getElementById("highscore");
const inputNumberElem = document.getElementById("input-number");
const numberElem = document.getElementById("number");
const checkBtn = document.getElementById("check");
const againBtn = document.getElementById("again");
const message = document.getElementById("message");
const background = document.querySelector("body");

let score = 20;
let highscore = 0;
highscoreElem.textContent = highscore;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

checkBtn.addEventListener("click", check);
againBtn.addEventListener("click", again);

function showMessage(messageText) {
  message.textContent = messageText;
}

function check() {
  let userNumber = document.getElementById("input-number").value;

  if (!userNumber) {
    showMessage("No Number!");
  } else if (userNumber > 20) {
    showMessage("Can't be higher than 20!");
  } else if (userNumber < 1) {
    showMessage("Can't be lower than 1!");
  } else if (userNumber == secretNumber) {
    showMessage("You Win!");
    background.style.backgroundColor = "#60b347";
    numberElem.textContent = secretNumber;
    scoreElem.textContent = score;
    checkBtn.disabled = true;
    if (score > highscore) {
      highscoreElem.textContent = score;
    }
  } else if (userNumber !== secretNumber) {
    if (score > 1) {
      showMessage(userNumber > secretNumber ? "Too High!" : "Too Low!");
      score--;
      scoreElem.textContent = score;
    } else {
      showMessage("You Lost!");
      scoreElem.textContent = "0";
      background.style.backgroundColor = "#ff0000";
      numberElem.textContent = secretNumber;
    }
  }
}

function again() {
  score = 20;
  scoreElem.textContent = score;

  showMessage("Start Guessing...");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  numberElem.textContent = "?";
  background.style.backgroundColor = "#060047";
  checkBtn.disabled = false;
  document.getElementById("input-number").value = "";
}
