const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let playerCounter = 0;
let computerCounter = 0;

// get computer choice
function getComputerChoice() {
    //need to randomize a choice that will always be between 0,1,2...
    let choice = Math.floor(Math.random() * 3);
    return OPTIONS[choice];
}

// get user input
function getUserChoice(message = 'Make your move: ') {
    let rawChoice = prompt(message);
    // make userChoice case-insensitive
    let formattedChoice = rawChoice ? 
        rawChoice[0].toUpperCase() + rawChoice.slice(1).toLowerCase() :
        getUserChoice('Make your move: ');
    // if the choice is invalid, ask again
    let choice = OPTIONS.includes(formattedChoice) ? formattedChoice : getUserChoice('Invalid move, please try again: ');
    return choice;
}
    

// compare inputs and determine winner, update general score (counters)
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return `Draw! You both picked ${playerSelection}.`;
    } 
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerCounter++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } 
    else {
        computerCounter++;
        return `You loose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function announceScore() {
    let message = '';
    if (computerCounter > playerCounter) {
        message = "Looks like you lost. Better luck next time!"
    } 
    else if (computerCounter < playerCounter) {
        message = "Congratulations, you won the game!"
    }
    else {
        message = "The game ends in a draw!"
    }
    console.log(`The final score is:
    PLAYER: ${playerCounter}
    COMPUTER: ${computerCounter}
${message}`);
}

function wantReplay(rounds) {
    let replay = confirm('Do you want to play another game?');  
    if (replay) {
        game(rounds);
    }
    else {
        alert("Thank you for playing, see you again soon!");
    }
}


function game(rounds = 5) {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(getComputerChoice(), getUserChoice()));
    }

    announceScore();
    playerCounter = 0;
    computerCounter = 0;

    wantReplay(rounds);
}

game(3);