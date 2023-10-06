const auto = document.getElementById('auto')
const light = document.getElementById('light')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const red = document.getElementById('red')

function turnRed() { // Turn to red
    light.src = 'imagens/red.png'
}

function turnYellow() { // Turn to yellow
    light.src = 'imagens/yellow.png'
}

function turnGreen() { // Turn to Green
    light.src = 'imagens/green.png'
}

red.addEventListener('click', turnRed)
yellow.addEventListener('click', turnYellow)
green.addEventListener('click', turnGreen)
