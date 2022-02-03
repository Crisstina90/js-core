function randomNumer(max) {
    return Math.round(Math.random() * max)
}


function randomLetter() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let i = randomNumer(letters.length -1)
    return letters[i]
}

function randomColor() {
    let red = randomNumer(255)
    let green = randomNumer(255)
    let blue = randomNumer(255)
    return `rgb(${red}), rgb(${green}), rgb(${blue})` 
}

function  randomLetterElement() {
    let div = document.createElement('div')
    div.innerText = randomLetter()
    div.style.backgroundColor = randomColor()
    div.style.top = randomNumer(99) +  'vh'
    div.style.left = randomNumer(99) + 'vw'
    div.classList.add('letter')
    document.querySelector('body').append(div)
}

async function run() {
    var gameOver = false
    while(!gameOver) {
        randomLetterElement()
        await new Promise(r => setTimeout(r, 2000))
    }
}

function hideStart() {
    document.querySelector('input').style.display = 'none'
}

document.querySelector('input').addEventListener('click', run)

