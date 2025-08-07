function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const resultsDiv = document.getElementById("results");

  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += "<p>It's a tie!</p>";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsDiv.innerHTML += "<p>You win this round!</p>";
    humanScore++;
  } else {
    resultsDiv.innerHTML += "<p>You lose this round!</p>";
    computerScore++;
  }
}

function checkGameEnd() {
  const resultsDiv = document.getElementById("results");

  if (humanScore === 5) {
    resultsDiv.innerHTML += "<h2>🎉 Congratulations! You won the game! 🎉</h2>";
    disableButtons();
    return true;
  } else if (computerScore === 5) {
    resultsDiv.innerHTML +=
      "<h2>💻 Computer wins the game! Better luck next time! 💻</h2>";
    disableButtons();
    return true;
  }
  return false;
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML += `<p><strong>You chose: ${playerSelection}</strong></p>`;
  resultsDiv.innerHTML += `<p><strong>Computer chose: ${computerChoice}</strong></p>`;

  playRound(playerSelection, computerChoice);

  resultsDiv.innerHTML += `<p><em>Score - You: ${humanScore}, Computer: ${computerScore}</em></p>`;

  if (!checkGameEnd()) {
    resultsDiv.innerHTML += "<hr>";
  }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function () {
  playGame("rock");
});

paperButton.addEventListener("click", function () {
  playGame("paper");
});

scissorsButton.addEventListener("click", function () {
  playGame("scissors");
});
