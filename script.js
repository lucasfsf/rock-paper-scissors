const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomPick];
}

function getPlayerChoice() {
    let playerChoice = ""
    // prompts user until he provides a proper input
    while (!CHOICES.includes(playerChoice)) {
        playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    return playerChoice;
}

function playRound(computerSelection, playerSelection) {
    let message;
    if (computerSelection === playerSelection) {
        message = `Its a tie. ${computerSelection} = ${playerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        message = "You lose. Rock beats Scissors.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message = "You lose. Scissors beats Paper.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message = "You lose. Paper beats Rock.";
    } else {
        message = `You win. ${playerSelection} beats ${computerSelection}`
    }
    return message;
}
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
console.log(playRound(computerSelection, playerSelection));