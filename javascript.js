function playRound() {
    let computerSelection;
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
}
    //player selects rock, paper, or scissors
    playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    

}

playRound();
//declare winner



//actual game
//play a round. use a counter to keep score