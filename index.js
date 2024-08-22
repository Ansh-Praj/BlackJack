const messageEl = document.getElementById('message-el')
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el')

let cardsArr = []
let sum = 0  
let isAlive = false
let hasBlackjack = false

function startGame(){

    if(isAlive || !hasBlackjack){

        sumEl.textContent = "Sum: "
        cardsArr = []
        sum = 0

        isAlive = true


        firstCard = getRandomCards()
        secondCard = getRandomCards()
        cardsArr.push(firstCard)
        cardsArr.push(secondCard)

        cardsArr.forEach((card)=>{
            sum += card
        })
    }

    renderGame()
}

function renderGame(){
    
    if( sum > 21 ){
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    } else if ( sum < 21 ){
        messageEl.textContent = "Do you want to draw a new card?"
    } else {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackjack = true
    }

    cardsEl.textContent = "Cards: "
    cardsArr.forEach((card)=>{
        cardsEl.textContent += ' ' + card
    })
    sumEl.textContent += ' ' +  sum

}

function newCard(){

    if(hasBlackjack == false && isAlive) {

        let newCard = getRandomCards()
        cardsArr.push(newCard)
        sum += newCard
        renderGame()

    }
}

function getRandomCards(){
    return Math.floor(Math.random() * 10 + 2)
}