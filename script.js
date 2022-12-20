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

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You win. Player Score = ${playerScore} > Computer Score = ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose. Computer Score = ${computerScore} > Plahyer Score = ${playerScore}`);
    } else {
        console.log('It was a tie!')
    }
}

function playGame() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        console.log(`Rounds ${i+1}!`);
        console.log(`Player Score: ${playerScore}! | Computer Score: ${computerScore}`);
        // Plays round
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(computerSelection, playerSelection));
    }
    getWinner(playerScore, computerScore);
}

