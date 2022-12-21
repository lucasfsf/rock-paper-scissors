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
    let winner; // 0 - tie; 1 - player; 2 - computer
    let message;
    if (computerSelection === playerSelection) {
        message = `Its a tie. ${computerSelection} = ${playerSelection}`;
        winner = 0;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        message = "You lose. Rock beats Scissors.";
        winner = 2;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message = "You lose. Scissors beats Paper.";
        winner = 2;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message = "You lose. Paper beats Rock.";
        winner = 2;
    } else {
        message = `You win. ${playerSelection} beats ${computerSelection}`
        winner = 1;
    }
    console.log(message);
    return winner;
}

function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You win. Player Score = ${playerScore} > Computer Score = ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose. Computer Score = ${computerScore} > Player Score = ${playerScore}`);
    } else {
        console.log('It was a tie!')
    }
}

function game() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;
    for (let i = 0; i < rounds; i++) {
        console.log(`Rounds ${i+1}!`);
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        // Plays round
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        roundWinner = playRound(computerSelection, playerSelection);
        if (roundWinner === 1) {
            playerScore++;
        } else if (roundWinner === 2) {
            computerScore++;
        }
    }
    getWinner(playerScore, computerScore);
}

game()