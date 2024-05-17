var computer = 0;
var player = 0;
var lastWinner = ''; 

document.addEventListener("DOMContentLoaded", function() {
    let radioButtons = document.querySelectorAll('input[name="choice"]');
    radioButtons.forEach(function(button) {
        button.addEventListener('change', playRound);
    });
});

function playRound() {
    let txt = document.getElementById('message');
    let num = Math.ceil(Math.random() * 3);
    let val = document.querySelector('input[name="choice"]:checked').value;

    let outcomeMsg = '';
    let computerChoiceTxt = ''; 

    if (val == 'rock') {
        if (num == 1) {
            outcomeMsg = "Tie!";
            lastWinner = 'tie';
            computerChoiceTxt = "Your Turn !"; 
        } else if (num == 2) {
            outcomeMsg = "Computer Chose Paper!";
            computerChoiceTxt = "Computer Choosed Paper"; 
            lastWinner = 'computer';
            
        } else if (num == 3) {
            outcomeMsg = "You Win!";
            computerChoiceTxt = "Computer Choosed Scissors";
            lastWinner = 'player';
        }
    } else if (val == 'paper') {
        if (num == 1) {
            outcomeMsg = "You Win!";
            computerChoiceTxt = "Computer Choosed Rock"; 
            lastWinner = 'player';
        } else if (num == 2) {
            outcomeMsg = "Tie!";
            lastWinner = 'tie';
            computerChoiceTxt = "Your Turn !"; 
        } else if (num == 3) {
            outcomeMsg = "Computer Chose Scissors!";
            computerChoiceTxt = "Computer Choosed Scissors"; 
            lastWinner = 'computer';
        }
    } else if (val == 'scissors') {
        if (num == 1) {
            outcomeMsg = "Computer Chose Rock!";
            computerChoiceTxt = "Computer Choosed Rock"; 
            lastWinner = 'computer';
        } else if (num == 2) {
            outcomeMsg = "You Win!";
            computerChoiceTxt = "Computer Choosed Paper"; 
            lastWinner = 'player';
        } else if (num == 3) {
            outcomeMsg = "Tie!";
            lastWinner = 'tie';
            computerChoiceTxt = "Your Turn !"; 
        }
    }

    txt.innerHTML = outcomeMsg;
    document.getElementById('computerChoice').innerHTML = computerChoiceTxt; 
    document.getElementById('player1').innerHTML = player;
    document.getElementById('computer1').innerHTML = computer;
    console.log(computer,player,lastWinner) 
    showResult();
}

function showResult() {
    let resultMsg = '';
    console.log(computer,player,lastWinner) 
    if (lastWinner === 'player') {
        resultMsg = "<h1 class='win'>You Win!</h1>";
        player = player + 1;
        console.log(computer,player,lastWinner) 
        lastWinner = '';
        document.getElementById('message').innerHTML = resultMsg;
        document.getElementById('player1').innerHTML = player;
        document.getElementById('computer1').innerHTML = computer;
        return; 
    } else if (lastWinner === 'computer') {
        resultMsg = "<h1 class='loss'>You Lost!</h1>"; 
        computer = computer + 1;
        console.log(computer,player,lastWinner) 
        lastWinner = '';
        document.getElementById('message').innerHTML = resultMsg;
        document.getElementById('player1').innerHTML = player;
        document.getElementById('computer1').innerHTML = computer;
        console.log(computer,player,lastWinner) 
        return; 
    } else {
        resultMsg = "<h1>DRAW</h1>";
        lastWinner = '';
        document.getElementById('message').innerHTML = resultMsg;
        document.getElementById('player1').innerHTML = player;
        document.getElementById('computer1').innerHTML = computer;
        return; 
    }
}

function startGame() {
    document.querySelectorAll('input[name="choice"]').forEach(function(button) {
        button.disabled = false;
    });
    document.getElementById('startButton').innerText = 'Play Again';
    document.getElementById('startButton').onclick = playAgain;
}

function playAgain() {
    location.reload();
}