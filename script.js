const CHOICES = ['fire', 'water', 'plant'];

// Get reference to buttons
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const plantButton = document.querySelector('#plant');

// Get reference to divs that display results
let currentScore = document.querySelector('#score');
let roundResult = document.querySelector('#round');
let winnerResult = document.querySelector('#winner');

// Scores
let playerScore = 0;
let computerScore = 0;

// Play round
fireButton.addEventListener('click', (e) => {
    playRound(getComputerChoice(), 'fire');
});
waterButton.addEventListener('click', (e) => {
    playRound(getComputerChoice(), 'water');
});
plantButton.addEventListener('click', (e) => {
    playRound(getComputerChoice(), 'plant');
});
console.log(playerScore);

function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomPick];
}

function playRound(computerSelection, playerSelection) {
    let message;
    if (computerSelection === playerSelection) {
        message = `Its a tie. ${computerSelection} = ${playerSelection}`;
    } else if (computerSelection === "fire" && playerSelection === "plant") {
        message = "You lose. Fire beats Plant.";
        computerScore++;
    } else if (computerSelection === "plant" && playerSelection === "water") {
        message = "You lose. Plant beats Water.";
        computerScore++;
    } else if (computerSelection === "water" && playerSelection === "fire") {
        message = "You lose. Water beats Fire.";
        computerScore++;
    } else {
        message = `You win. ${playerSelection} beats ${computerSelection}`
        playerScore++;
    }
    roundResult.textContent = message;
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

