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
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);

    //if win, person wins increases by 1.
    //if lose, computer wins increases by 1.
    if (round == "Win") {
        playerWins += 1;
    } else if (round == "Lose") {
        computerWins += 1;
    }
    console.log(`You have ${playerWins} wins. The computer has ${computerWins} wins.`);
}

function results(playerSelection, computerSelection) {
    let round = playRound(playerSelection, computerSelection);
    if (round == "Win") {
        playerWins += 1;
    } else if (round == "Lose") {
        computerWins += 1;
    }
    text = `You chose ${playerSelection}. The computer chose ${computerSelection}.  
            You ${round}. 
            You have ${playerWins} wins. The computer has ${computerWins} wins.`

    return text;
}

function endGame(playerWins, computerWins) {
    if (playerWins > computerWins) {
        winner.textContent = "Congrats, you won!"
    } else {
        winner.textContent = "You lost, better luck next time!"
    }
}


//actual game
function game() {
    
    let numGames = 0;

    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    const div = document.querySelector('#results');
    const winner = document.querySelector('#winner');

    rockButton.addEventListener('click', function(e) {
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        results(playerSelection, computerSelection);
        div.textContent = text;
        numGames += 1;
        if (playerWins >= 5 || computerWins >= 5) {
            endGame(playerWins, computerWins);
            return;
        }
    })

    paperButton.addEventListener('click', function(e) {
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        results(playerSelection, computerSelection);
        div.textContent = text;
        numGames += 1;
        if (playerWins >= 5 || computerWins >= 5) {
            endGame(playerWins, computerWins);
            return;
        }
    })

    scissorsButton.addEventListener('click', function(e) {
        playerSelection = 'scissors';
        computerSelection = getComputerChoice();
        results(playerSelection, computerSelection);
        div.textContent = text;
        numGames += 1;
        if (playerWins >= 5 || computerWins >= 5) {
            endGame(playerWins, computerWins);
            return;
        }
    })
}





game();