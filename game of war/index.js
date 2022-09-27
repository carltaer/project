let deckId
const cardsContainer = document.getElementById("cards")
const newDeck = document.getElementById("new-deck")
const drawBtn = document.getElementById("draw-cards")
const remainingCards = document.getElementById("remaining-cards")
const computerScore = document.getElementById("player1-score")
const playerScore = document.getElementById("player2-score")
const displayResult = document.getElementById("display-result")
let player1Score = 0
let player2Score = 0
let playerOne
let playerTwo

function handleClick() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
            deckId = data.deck_id
        })
}

newDeck.addEventListener("click", handleClick)

drawBtn.addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} width="85.71" height="120" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} width="85.71" height="120" />
            `
            playerOne = data.cards[0].value
            playerTwo = data.cards[1].value

            determineWinner(playerOne, playerTwo)

            remainingCards.textContent = `Remaining Cards: ${data.remaining}`

            if(data.remaining === 0){
                drawBtn.disabled = true
                if(player1Score > player2Score){
                    displayResult.textContent = "The Computer Wins the War!!!"
                }else if(player1Score < player2Score){
                    displayResult.textContent = "You Win the War!!!"
                }else{
                    displayResult.textContent = "The War is a Tie!!!"
                }
            }
        })
})

function determineWinner(card1, card2){
    const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]

    const card1ValueIndex = cardValue.indexOf(card1)
    const card2ValueIndex = cardValue.indexOf(card2)

    if(card1ValueIndex > card2ValueIndex){
        player1Score += 1
        computerScore.textContent = `Computer Score: ${player1Score}`
        displayResult.textContent = "Computer wins"
    }else if(card1ValueIndex < card2ValueIndex){
        player2Score += 1
        playerScore.textContent = `Player Score: ${player2Score}`
        displayResult.textContent = "Player wins"
    }else{
        displayResult.textContent = "Its a tie"
    }
}

// const card1Obj = {
//     value: "JACK"
// }

// const card2Obj = {
//     value: "JACK"
// }
// determineWinner(card1Obj, card2Obj)