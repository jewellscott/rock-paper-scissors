// function userPlay() {
//  return prompt("Rock, Paper, or Scissors?");
// }

const choices = [
    "ROCK",
    "PAPER",
    "SCISSORS"
];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();

console.log(`You chose ${playerSelection}`);
console.log(`Computer chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection == computerSelection) {
        console.log("Whoa! It's a draw.");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == 
    "PAPER" && computerSelection == "ROCK" ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        playerScore++;
    } else {
        console.log(`Boo, you lose! ${computerSelection} beats ${[playerSelection]}.`)
        computerScore++;
    }

    let scores = [[`Computer`, computerScore], [`Player`, playerScore]];

    console.log("Current Score:");
    console.table(scores);
    return
}

// function playGame() {
//     // let playerScore;
//     // let computerScore;
//     // let gameWinner;

//     for (let i = 0; i < 5; i++) {
//         playRound();

//     }
//     // console.log(`${gameWinner} wins the game!`)
// }