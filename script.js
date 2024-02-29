

    const startGame = document.createElement('button')
    startGame.classList = 'startGame'
    startGame.textContent = 'начать игру'
    document.body.append(startGame)

startGame.addEventListener('click', () => {

    setTimeout(() => {
        startGame.classList.add('startGameTransparent')
        creatCards ()
        const motionTable = document.querySelector('.motionTable')
        motionTable.classList.add('motionVisible')
    },80)
})




function creatCards () {
    
    const cardTable = document.createElement('div')
    cardTable.classList = 'memory-game'

    const listCard = ['card_1', 'card_2', 'card_3', 'card_4', 'card_5', 'card_6', 'card_7', 'card_8', 'card_9', 'card_10', 'card_11', 'card_12', 'card_13', 'card_14', 'card_15', 'card_16', 'card_1', 'card_2', 'card_3', 'card_4', 'card_5', 'card_6', 'card_7', 'card_8', 'card_9', 'card_10', 'card_11', 'card_12', 'card_13', 'card_14', 'card_15', 'card_16']

    listCard.forEach((card) => {
    
        const memoryCard = document.createElement('div')
        memoryCard.classList = 'memory-card'
    
        memoryCard.setAttribute('data-uniquecard', card)
        
        const imgFrontFace = document.createElement('img')
        imgFrontFace.classList = 'front-face'
        imgFrontFace.src = './img/' + card + '.png'
    
        const imgBackFace = document.createElement('img')
        imgBackFace.classList = 'back-face'
        imgBackFace.src = './img/card_front.png'
    
        memoryCard.append(imgFrontFace, imgBackFace)
    
        cardTable.append(memoryCard)
    })
        
    document.body.append(cardTable)

    const cards = document.querySelectorAll('.memory-card')
    
    cards.forEach(card => card.addEventListener('click', flipCard))
    
}


let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard() {

    if (lockBoard) return
    if (this === firstCard) return

    this.classList.add('flip')

    if (!hasFlippedCard) {

    hasFlippedCard = true
    firstCard = this
    return
    }

    secondCard = this
    lockBoard = true

    checkForMatch()
    
    chackMotion(firstCard)
}


function checkForMatch() {
    let isMatch = firstCard.dataset.uniquecard === secondCard.dataset.uniquecard
    isMatch ? disableCards() : unflipCards()

}

let count = 0
function disableCards() {
    count++
    if (count === 16) {
        
        const victory = document.createElement('div')
        victory.classList = 'victory'

        const congratulation = document.createElement('p')
        congratulation.classList = 'congratulation'
        congratulation.textContent = 'Поздравляю !!!'

        const report = document.createElement('h3')
        report.classList = 'report'
        report.textContent = `вы прошли игру за ${motion + 1} ходов`

        const buttonRefreshPage = document.createElement('button')
        buttonRefreshPage.classList = 'finishGame'

        buttonRefreshPage.textContent = 'Начат новую игру'

        buttonRefreshPage.addEventListener('click', () => {
            window.location.reload()
            
        })
        victory.append(congratulation,report,buttonRefreshPage)
        document.body.append(victory)
    } 
    
    setTimeout(() => {
    firstCard.classList.add('transparent')
    secondCard.classList.add('transparent')
    resetBoard()
    }, 1000)
}


function unflipCards() {
    
    setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
    }, 1000)
}

function resetBoard() {
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
}   

let motion = 0

function chackMotion(a) {
    // let motion = 0
    if (a) {
        motion++
    }
    const motionCounter = document.querySelector('.motionCounter')
    motionCounter.textContent = `${motion}`
    console.log(motion)
}

























