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
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    const r = "ROCK";
    const s = "SCISSORS";
    const p = "PAPER";

    const ps = playerSelection;
    const cs = computerSelection;

    let playerScore = 0;
    let computerScore = 0;

    let scores = [[`Computer`, computerScore], [`Player`, playerScore]];

    let result;
    let roundWinner;

    if (ps == cs) {
        console.log("Whoa! It's a draw.");
       playerScore += 0; 
    } else if (ps == r && cs == p) {
        console.log("You lose! PAPER beats ROCK.");
        computerScore++;
    } else if (ps == r && cs == s) {
        console.log("You win! ROCK beats SCISSORS!");
        playerScore++
    } else if (ps == p && cs == s) {
        console.log("You lose! PAPER beats SCISSORS.");
        computerScore++;
    } else if (ps == p && cs == r) {
        console.log("You win! PAPER beats ROCK!");
        computerScore++;
    } else if (ps == s && cs == r) {
        console.log("You lose! ROCK beats SCISSORS.");
        computerScore++;
    } else if (ps == s && cs == p) {
        console.log("You win! SCISSORS beats PAPER!");
        playerScore++;
    }

    if (playerScore > computerScore) {
        roundWinner = "Player";
        console.log(`${roundWinner} wins the round with ${playerSelection}!`);
    } else if (computerScore > playerScore) {
        roundWinner = "Computer";
        console.log(`${roundWinner} wins the round with ${computerSelection}!`);
    } else {
        console.log("No one won this round!");
    }
    
    // no scores are populating in this table, so the ++ must not be accruing properly.
    console.table(scores);
    return result;
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