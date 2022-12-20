function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let randomPick = Math.floor(Math.random() * choices.length)
    return choices[randomPick]
}
