const container = document.querySelector('#container');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const player =  document.querySelector('#Player');
const computer = document.querySelector('#Computer');
const score = document.querySelector('#Score');
const choice =  document.querySelector('#choice');
const playerChoice = document.querySelector('#PlayerSelect');
const computerChoice = document.querySelector('#ComputerSelect');
const result =  document.querySelector('#Result');

score.appendChild(player);
score.appendChild(computer);
choice.append(playerChoice);
choice.appendChild(computerChoice);
const div =  document.createElement('div');
const resultH2 = document.createElement('h2');

result.appendChild(resultH2);


choice.appendChild(div);

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
        player.lastChild.textContent = playerScore;
       
        console.log("You win the round");
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore =  computerScore + 1;
        console.log("Computer wins the round");
        computer.lastChild.textContent = computerScore;
    } else {
        console.log("Draw");
    }
}

function playGame() {
    let computerSelection = getComputerChoice();
    playerChoice.lastChild.textContent = playerSelection;
    computerChoice.lastChild.textContent = computerSelection;
    playRound(playerSelection, computerSelection);
    roundFive();

    

}

function roundFive()
{
    if(playerScore>=5)
    {
        console.log("You are winner of this game");
        resultH2.textContent = 'You win the round';

        setTimeout(function(){
            alert("Reload to begin a New Game");
            window.location.reload();
        },100)

        console.log(resultH2);
    }
    else if(computerScore>=5)
    {
        console.log("Compuer wins the game");
        resultH2.textContent = 'Computer win the round';
        setTimeout(function(){
            alert("Reload to begin a New Game");
            window.location.reload();
        },100)
    }
}





