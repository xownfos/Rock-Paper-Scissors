function getComputerChoice() {
    const num_choice = Math.ceil(Math.random() * 3);
    if (num_choice == 1) {
        return "rock";
    }
    else if (num_choice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(id) {
    return id;
}

function playRound(humanChoice, computerChoice) {
    //return 0 if human win
    //return 1 if tie
    //return 2 if computer win
    if (humanChoice == computerChoice) {
        return "Tie.";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" ||
             humanChoice == "paper" && computerChoice == "rock" ||
             humanChoice == "scissors" && computerChoice == "paper") {
        return "Human Wins!";
    }
    else if (computerChoice == "rock" && humanChoice == "scissors" ||
             computerChoice == "paper" && humanChoice == "rock" ||
             computerChoice == "scissors" && humanChoice == "paper") {
        return "Computer Wins.";
    }
}

function scoreFunction(winner) {
    if (winner == "Human Wins!") {
        playerScore++;
    }
    else if (winner == "Computer Wins.") {
        computerScore++;
    }
    scoreText.textContent = "Player: " + playerScore + 
                            "  Computer: " + computerScore;
    if (playerScore >= 5) {
        winnerText.textContent = "Human Wins the Match!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        winnerText.textContent = "Computer Wins the Match!";
        playerScore = 0;
        computerScore = 0;
    }
}

function alertFunction() {
    const humanChoice = getHumanChoice(event.target.id);
    const computerChoice = getComputerChoice();
    winner = playRound(humanChoice, computerChoice)
    winnerText.textContent = winner;
    scoreFunction(winner);
    
}


let playerScore = 0;
let computerScore = 0;
let winner = "Click a button to play!";
let score = "Player: " + playerScore + "  Computer: " + computerScore;
const container = document.querySelector("#container");

const buttons = document.querySelectorAll(".rps-button");
buttons.forEach(button => {
    button.addEventListener("click", alertFunction);
});

const winnerText = document.getElementById("winner-text");
winnerText.textContent = winner;

const scoreText = document.getElementById("score-text");
scoreText.textContent = score;
