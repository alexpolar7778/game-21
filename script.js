let userName = prompt("Введіть своє ім'я:");
document.getElementById("user-name").innerText = userName ? "Нік гравця: " + userName : "Гравець";

let userScore = 0;
let computerScore = 0;

document.getElementById("message").innerText = "";

const cardImages = [
  "6.png", "7.png", "8.png", "9.png", "10.png", 
  "jack.png", "queen.png", "king.png", "ace.png"
];

const cardValues = [6, 7, 8, 9, 10, 2, 3, 4, 11];

document.getElementById("generate").addEventListener("click", () => {
  let userCardIndex = Math.floor(Math.random() * 9);
  let computerCardIndex = Math.floor(Math.random() * 9);

  let userNumber = cardValues[userCardIndex];
  let computerNumber = cardValues[computerCardIndex];

  document.getElementById("user-number").innerText = userNumber;
  document.getElementById("computer-number").innerText = computerNumber;

  document.getElementById("user-card").src = `images/${cardImages[userCardIndex]}`;
  document.getElementById("computer-card").src = `images/${cardImages[computerCardIndex]}`;

  document.getElementById("user-card").style.display = "block";
  document.getElementById("computer-card").style.display = "block";

  if (userNumber > computerNumber) {
    userScore++;
    document.getElementById("user-score").innerText = userScore;
  } else if (computerNumber > userNumber) {
    computerScore++;
    document.getElementById("computer-score").innerText = computerScore;
  }

  if (userScore === 3 || computerScore === 3) {
    let winnerName = userName ? userName : "Гравець";

    let winnerMessage = userScore === 3 
      ? `${winnerName} перемагає з рахунком ${userScore} : ${computerScore}!`
      : `Комп'ютер перемагає з рахунком ${computerScore} : ${userScore}!`;

    document.getElementById("message").innerText = winnerMessage;
    document.getElementById("generate").disabled = true;
    setTimeout(() => {
      resetGame();
      document.getElementById("generate").disabled = false;
    }, 3500);
  }
});

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("user-number").innerText = "-";
  document.getElementById("computer-number").innerText = "-";
  document.getElementById("user-card").style.display = "none";
  document.getElementById("computer-card").style.display = "none";
  document.getElementById("message").innerText = "";
}
