const OPTIONS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//show turn result and score
const message = document.querySelector('#turn-message');
const showUserScore = document.querySelector('#user-score');
const showComputerScore = document.querySelector('#computer-score');
showUserScore.textContent = `${playerScore}`;
showComputerScore.textContent = `${computerScore}`;


// compare inputs and determine winner, update scores
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.textContent = `Draw! You both picked ${playerSelection}.`;
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'paper'||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        showUserScore.textContent = `${playerScore}`;
        message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } 
    else {
        computerScore++;
        showComputerScore.textContent = `${computerScore}`;
        message.textContent = `You loose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// play the game
const buttons = document.querySelectorAll('.move-selector');
buttons.forEach(button => button.addEventListener('click', playGame));

function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3);
    return OPTIONS[selection];
}    

function announceScore() {
    let result = '';
    if (computerScore > playerScore) {
        result = "Looks like you lost the game. Better luck next time!"
    } else {
        result = "Congratulations, you won the game!"
    }
    message.textContent = (`${result}`);
}

function playGame(e, winningScore = 5) {
    const playerSelection = e.target.id;
    playRound(getComputerSelection(), playerSelection);
    if (playerScore === winningScore || computerScore === winningScore) {
        buttons.forEach(button => button.removeEventListener('click', playGame));
        announceScore();
    };
}
