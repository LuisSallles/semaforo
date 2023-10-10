const img = document.getElementById('img') 
const buttons = document.getElementById('buttons')

const  trafficLight = (event) => {
    turnOn[event.target.id]()
}

const turnOn = {
    'red': () => img.src = 'imagens/red.png',
    'yellow': () => img.src = 'imagens/yellow.png',
    'green': () => img.src = 'imagens/green.png'
}

buttons.addEventListener('click', trafficLight)
