function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt(
    "Enter your choice (rock, paper, scissors):"
  ).toLowerCase();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playRound(humanChoice, computerChoice);

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("Game over!");
  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! The computer is the overall winner!");
  } else {
    console.log("It's an overall tie!");
  }
}

playGame();
