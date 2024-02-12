const container = document.querySelector('#container');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const score = document.querySelector('#Score');
const result = document.querySelector('#Result');

const divScore = document.createElement('div');
const divResult = document.createElement('div');
score.appendChild(divScore);

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    playGame();
});

paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    playGame();
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    playGame();
});

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore =  playerScore + 1;
        score.firstChild.textContent = 'Player Score : ' + playerScore;
       
        console.log("You win the round");
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore =  computerScore + 1;
        console.log("Computer wins the round");
        score.lastChild.textContent = 'Computer Score : ' + computerScore;
    } else {
        //div.textContent = 'Tie';
        console.log("Draw");
    }
}

function playGame() {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if(playerScore>5)
    {
        console.log("You are winner of this game");
        result.textContent = 'You win the round';
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore>5)
    {
        console.log("Compuer wins the game");
        result.textContent = 'Computer win the round';
        computerScore = 0;
        playerScore = 0;
    }
}


