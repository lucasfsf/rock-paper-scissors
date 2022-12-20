function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerChoice;
}
