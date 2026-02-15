

let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")
let scoreHome = 0
let scoreGuest = 0
// homeScore.textContent =  10

function hadd1() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function hadd2() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function hadd3() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function gadd1() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function gadd2() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function gadd3() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}


function reset1() {
    scoreHome = 0
    homeScore.textContent = 0
}

function reset2() {
    scoreGuest = 0
    guestScore.textContent = 0
}