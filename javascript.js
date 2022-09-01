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

//player choice and computer choice is compared and a result
//is declared
function playRound(playerSelection, computerSelection) {
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

let playerWins = 0;
let computerWins = 0;

function fullRound() {
    playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerChoice();
    //play a round
    let round = playRound(playerSelection, computerSelection);
    console.log(round);

    //if win, person wins increases by 1.
    //if lose, computer wins increases by 1.
    if (round == "Win") {
        playerWins += 1;
    } else if (round == "Lose") {
        computerWins += 1;
    }


}



//actual game
function game() {
    fullRound();
    fullRound();
    fullRound();
    fullRound();
    fullRound();
    //after 5 games, check if person wins > computer wins.


}

game();