function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";

    default:
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Which do you choose? Rock, Paper, or Scissors?");
  choice.toLowerCase();
  switch (choice) {
    case "rock":
      return choice;
    case "paper":
      return choice;
    case "scissors":
      return choice;
    default:
      console.error("Incorrect imput received!");
      break;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You:${humanScore} to Computer: ${computerScore}`);
  }

  console.log(
    `The Winner is ${humanScore > computerScore ? "You" : "Computer"}!`
  );

  function playRound(humanChoice, computerChoice) {
    if (computerChoice === "rock") {
      if (humanChoice === "paper") {
        console.log("You win the round! Paper beats Rock!");
        humanScore++;
      } else if (humanChoice === "scissors") {
        console.log("The Computer wins the round! Rock beats Scissors!");
        computerScore++;
      } else {
        console.log("Same choice! That's a draw!");
      }
    } else if (computerChoice === "paper") {
      if (humanChoice === "scissors") {
        console.log("You win the round! Scissors beats Paper!");
        humanScore++;
      } else if (humanChoice === "rock") {
        console.log("The Computer wins the round! Paper beats Rock!");
        computerScore++;
      } else {
        console.log("Same choice! That's a draw!");
      }
    } else {
      if (humanChoice === "rock") {
        console.log("You win the round! Rock beats Scissors!");
        humanScore++;
      } else if (humanChoice === "paper") {
        console.log("The Computer wins the round! Scissors beats Paper!");
      } else {
        console.log("Same choice the round! That's a draw!");
      }
    }
  }
}

playGame();
