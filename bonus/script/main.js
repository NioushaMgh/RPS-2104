var player1Choice = "";
var player2Choice = "";
var player1Score = 0;
var player2Score = 0;

function startGame() {
    player1Choice = "";
    player2Choice = "";
    player1Score = 0;
    player2Score = 0;
    document.getElementById('message').innerHTML = "Game Started!";
    document.getElementById('player1Choice').innerHTML = "Player 1 choice: ";
    document.getElementById('player2Choice').innerHTML = "Player 2 choice: ";
    document.getElementById('player1').innerHTML = player1Score;
    document.getElementById('player2').innerHTML = player2Score;
    document.addEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
    // Player 1 controls: a, s, d
    if(event.key === "a" || event.key === "s" || event.key === "d") {
        if (player1Choice === "") {
            player1Choice = event.key === "a" ? "paper" : (event.key === "s" ? "scissors" : "rock");
        }
    }
    
    // Player 2 controls: Left arrow, Up arrow, Right arrow
    if(event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowRight") {
        if (player2Choice === "") {
            player2Choice = event.key === "ArrowLeft" ? "paper" : (event.key === "ArrowUp" ? "scissors" : "rock");
        }
    }
    
    if (player1Choice !== "" && player2Choice !== "") {
        displayChoices(player1Choice, player2Choice);
        playRound(player1Choice, player2Choice);
        player1Choice = "";
        player2Choice = "";
    }
}

function displayChoices(choice1, choice2) {
    document.getElementById('player1Choice').innerHTML = "Player 1 choice: " + choice1;
    document.getElementById('player2Choice').innerHTML = "Player 2 choice: " + choice2;
}

function playRound(val1, val2) {
    let outcomeMsg = '';
    if (val1 === val2) {
        outcomeMsg = "Tie!";
    } else if ((val1 === 'rock' && val2 === 'scissors') ||
               (val1 === 'paper' && val2 === 'rock') ||
               (val1 === 'scissors' && val2 === 'paper')) {
        outcomeMsg = "Player 1 Wins!";
        player1Score++;
    } else {
        outcomeMsg = "Player 2 Wins!";
        player2Score++;
    }

    document.getElementById('message').innerHTML = outcomeMsg;
    document.getElementById('player1').innerHTML = player1Score;
    document.getElementById('player2').innerHTML = player2Score;
}

document.getElementById("startButton").addEventListener("click", startGame);
