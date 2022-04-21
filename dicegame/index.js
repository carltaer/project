let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function toggleButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    rollBtn.style.margin = "40px auto"
    resetBtn.style.margin = "40px auto"
}

function reset(){
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = "0" 
    player2Scoreboard.textContent = "0"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

rollBtn.addEventListener("click", function(){
    const rollDice = Math.floor(Math.random()*6)+1
    
    if (player1Turn){
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        player1Dice.textContent = rollDice
        message.textContent = "Player 2 Turn"
        player1Score += rollDice
        player1Scoreboard.textContent = player1Score
    }else{
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player2Dice.textContent = rollDice
        message.textContent = "Player 1 Turn"
        player2Score += rollDice
        player2Scoreboard.textContent = player2Score
    }
    player1Turn = !player1Turn

    if(player1Score >= 20){
        toggleButton()
        message.textContent = "Player 1 has won!"
    }else if(player2Score >= 20){
        toggleButton()
        message.textContent = "Player 2 has won!"
    }
})

resetBtn.addEventListener("click", function(){
    reset()
})



