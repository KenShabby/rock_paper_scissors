
function getComputerChoice() {
    let randNum = Math.random() * 100;
    if (randNum > 0 && randNum < 33.0){ 
        return "rock";
    }
    else if (randNum >= 33.0 && randNum < 66.0){
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice() {
    let response = prompt("Enter a choice (rock, paper, or scissors): ");
    console.log(response);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        return "Tie!";
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper"){
            computerScore++;
            return "Paper beats rock, you lose!";
        }
        if (computerChoice == "scissors") {
            humanScore++;
            return "Rock beats scissors, you win!";
        }
    }
    if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                return "Paper beats rock, you win!";
            }
            if (computerChoice == "scissors") {
                computerScore++;
                return "Scissors beat paper, you lose!";
            }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            return "Rock beats scissors, you lose!";
        }
        if (computerChoice == "paper") {
            humanScore++;
            return "Scissors beats paper, you win!"
        }
    }
}
