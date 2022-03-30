// to play, run playGame() in the console.
// playGame();

const choices = [
    "ROCK",
    "PAPER",
    "SCISSORS"
];

// randomizes an index of choices array
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// initalizes scores
let playerScore = 0;
let computerScore = 0;

// plays one round of Rock, Paper, Scissors:
function playRound() {

    // initializes round selections
    const computerSelection = computerPlay();
    const playerSelection = prompt("Pick one: Rock, Paper, or Scissors?").toUpperCase();

    // logs round choices
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    // evaluates winner, increments points, and logs message
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

    // initializes scores array
    let scores = [[`Player`, playerScore], [`Computer`, computerScore]];
    
    // logs current Round score
    console.log("----------------------");
    console.log("Current Score:");
    console.table(scores);
}

// plays a full game of Rock, Paper, Scissors
function playGame() {
    
    // plays a full round 5x
    for (let i = 0; i < 5; i++) {
        playRound();
    };

    // evaluates game winner and logs message
    if (playerScore > computerScore) {
        console.log(`Wow, you won with ${playerScore} against the Computer's ${computerScore}! Play again?`);
    } else if (playerScore == computerScore) {
        console.log(`I can't believe it. You tied with the 'bot, ${playerScore} and ${computerScore}. Play again?`);
    } else {
        console.log(`You lost against a robot, ${computerScore} to ${playerScore}. Pitiful. Can your ego take another game?`);
    }
}