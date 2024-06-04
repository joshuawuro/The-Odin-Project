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



function getHumanChoice(){
    choice = prompt("Please enter your choice: ");
    return choice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;