//! * ------- Selectors ------- */

const selectionArticle = document.querySelector(".selection")

//Seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

// Message
const messagePar = document.querySelector(".message")

// Score 
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const domTopScore = document.getElementById("top-score")

// Modal 
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")


//! * ------- Variables ------- */
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
let pcArr;
let pcRandom

// Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";


//! * ------- Event Listeners ------- */

selectionArticle.addEventListener('click', (e) => {
    // console.log(e.target.id)
    if (e.target.id) {
        userSelectImg.src = `./assets/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
    
})

playAgainButton.addEventListener('click', ()=> { 
    // modalCardSection.classList.toggle("show")
    // modalCardSection.classList.toggle("remove")
    modalCardSection.style.display = "none"
    window.location.reload()
})


//! * ------- Functions ------- */

const createPcSelection = () => {
    pcArr = ["rock", "paper", "scissor"]
    pcRandom = pcArr[ Math.floor(Math.random() *3) ]
    // pcRandom = "rock"
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculteResult()
}

const calculteResult = () => {
    // console.log(userSelectImg.alt)
    // console.log(pcSelectImg.alt)

    // Eşitlik Durumu 
    if (userSelectImg.alt == pcRandom) {
        draw()
    }else{
        if (userSelectImg.alt === "rock") {
            pcRandom === "paper" ? youLost() : youWin()
        } else if (userSelectImg.alt === "scissor") {
            pcRandom === "rock" ? youLost() : youWin()
        }else if (userSelectImg.alt === "paper") {
            pcRandom === "scissor" ? youLost() : youWin()
        }
    }

    if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
        openModal()
    }
}



const draw = () => {
    messagePar.textContent = "Its a draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
}
const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++
    topScoreScheck()
}

const openModal = () => {
    modalCardSection.classList.add("show")
    if (yourScoreSpan.textContent === "10") {
        finalMessagePar.textContent = "💃 You win"
        document.querySelector(".modal").style.backgroundColor = GREEN
        playAgainButton.style.color = GREEN
    }else {
        finalMessagePar.textContent = " ☹️ You Lost"
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainButton.style.color = RED
    }
}


//! local Storage veri yazma okuma

localStorage.setItem("highScore", 5) //?veri yazma
console.log(localStorage.getItem("highScore")) //?veri okuma


// let storagedScore = localStorage.getItem("highScore")

// let topScore;


// if (storagedScore) {
//     topScore = `10 -${soretoragedSc}`
// }else{
//     topScore = `0 - 0}`
// }

// const topScoreScheck = () => {

// }


























//! İlkel Yöntem
// // Resimler 
// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");

// rockImg.addEventListener('click', () => {
//     userSelectImg.src = "./assets/rock.png"
//     userSelectImg.alt = "rock"
//     yourChoiceDiv.appendChild(userSelectImg)
//     // innerHTML
//     // yourChoiceDiv.innerHTML = `<img src="./assets/rock.png">`
// })
// paperImg.addEventListener('click', () => {
//     userSelectImg.src = "./assets/paper.png"
//     userSelectImg.alt = "paper"
//     yourChoiceDiv.appendChild(userSelectImg)
// })
// scissorImg.addEventListener('click', () => {
//     userSelectImg.src = "./assets/scissor.png"
//     userSelectImg.alt = "scissor"
//     yourChoiceDiv.appendChild(userSelectImg)
// })