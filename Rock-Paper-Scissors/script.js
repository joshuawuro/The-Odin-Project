console.log('Hello World');

function getComputerChoice(){
    random = Math.floor(Math.random() * 3);

    if (random === 0){
        return "rock";
    } else if(random === 1){
        return "paper";
    } else if (random === 2){
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return userInput;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
    }
}
