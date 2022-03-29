// function userPlay() {
//     return prompt("Rock, Paper, or Scissors?");
// }

const choices = [
    "rock",
    "paper",
    "scissors"
];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    let r = "rock";
    let s = "scissors";
    let p = "paper";
    let ps = playerSelection;
    let cs = computerSelection;

    let result;

    if (ps == cs) {
        result = "Whoa! It's a draw."
    } else if (ps == r && cs == p) {
        result = "You lose! Paper beats Rock.";
    } else if (ps == r && cs == s) {
        result = "You win! Rock beats Scissors!";
    } else if (ps == p && cs == s) {
        result = "You lose! Paper beats Scissors.";
    } else if (ps == p && cs == r) {
        result = "You win! Paper beats Rock!";
    } else if (ps == s && cs == r) {
        result = "You lose! Rock beats Scissors.";
    } else if (ps == s && cs == p) {
        result = "You win! Scissors beats Paper!";
    }
    return result;
}