const OPTIONS = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//show turn result and score
const message = document.querySelector('#turn-message');
const showUserScore = document.querySelector('#user-score');
const showComputerScore = document.querySelector('#computer-score');
showUserScore.textContent = `${playerScore}`;
showComputerScore.textContent = `${computerScore}`;


function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3);
    return OPTIONS[selection];
}    

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

function announceScore() {
    let message = '';
    if (computerScore > playerScore) {
        message = "Looks like you lost. Better luck next time!"
    } 
    else if (computerScore < playerScore) {
        message = "Congratulations, you won the game!"
    }
    else {
        message = "The game ends in a draw!"
    }
    console.log(`The final score is:
    PLAYER: ${playerScore}
    COMPUTER: ${computerScore}
${message}`);
}

const buttons = document.querySelectorAll('.move-selector');

buttons.forEach(button => button.addEventListener('click', () => playRound(getComputerSelection(), button.id)));

//REMAINING FUNCTIONS TO BE CONVERTED
// function wantReplay(rounds) {
//     let replay = confirm('Do you want to play another game?');  
//     if (replay) {
//         game(rounds);
//     }
//     else {
//         alert("Thank you for playing, see you again soon!");
//     }
// }


// function game(rounds = 5) {
//     for (let i = 0; i < rounds; i++) {
//         console.log(playRound(getComputerSelection(), getUserSelection()));
//     }

//     announceScore();
//     playerScore = 0;
//     computerScore = 0;

//     wantReplay(rounds);
// }