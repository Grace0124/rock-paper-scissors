//computer chooses rock, paper, or scissors
function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
    if (x == 0) {
        computerSelection = 'rock';
    } else if (x == 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    //player selects rock, paper, or scissors
    if (playerSelection == 'rock'){
        switch(computerSelection) {
            case 'rock':
                return "Tie";
            case 'paper':
                return "Lose";
            case 'scissors':
                return "Win";
        }
    }
    if (playerSelection == 'paper'){
        switch(computerSelection) {
            case 'paper':
                return "Tie";
            case 'scissors':
                return "Lose";
            case 'rock':
                return "Win";
        }
    }
    if (playerSelection == 'scissors'){
        switch(computerSelection) {
            case 'scissors':
                return "Tie";
            case 'rock':
                return "Win";
            case 'paper':
                return "Lose";
        }
    }

}

playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
//declare winner



//actual game
//play a round. use a counter to keep score