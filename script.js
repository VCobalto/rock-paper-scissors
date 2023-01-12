const OPTIONS = ['Rock', 'Paper', 'Scissors'];

// get computer choice
function getComputerChoice() {
    //need to randomize a choice that will always be between 0,1,2...
    let choice = Math.floor(Math.random() * 3);
    return OPTIONS[choice];
}

// get user input
function getUserChoice(message = 'Make your move: ') {
    let rawChoice = window.prompt(message);
    // make userChoice case-insensitive
    let formattedChoice = rawChoice[0].toUpperCase() + rawChoice.slice(1).toLowerCase();
    // if the choice is invalid, ask again
    let choice = OPTIONS.includes(formattedChoice) ? formattedChoice : getUserChoice('Invalid move, please try again: ');
    return choice;
}
    

// compare inputs and determine winner
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return `Draw! You both picked ${playerSelection}.`;
    } 
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } 
    else {
        return `You loose! ${computerSelection} beats ${playerSelection}.`;
    }
}



