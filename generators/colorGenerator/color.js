let containerA = document.getElementById('colorA');
let containerB = document.getElementById('colorB');
let containerC = document.getElementById('colorC');
let containerD = document.getElementById('colorD');
let displayHexA = document.getElementById('hexA');
let displayHexB = document.getElementById('hexB');
let displayHexC = document.getElementById('hexC');
let displayHexD = document.getElementById('hexD');
let button = document.getElementById('colorBtn');

const validCharacters = '0123456789ABCDEF';
const hexDecimalLength = 6;

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColorA(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        let getRandomColorA = validCharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomColorA;
        // console.log(getRandomColorA);
    };

    displayHexA.innerHTML = color;
    containerA.style.backgroundColor = color;
    containerA.style.width = '25%';
    containerA.style.borderRight = '2px solid #000';
}

function randomColorB(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        let getRandomColorB = validCharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomColorB;
    };

    displayHexB.innerHTML = color;
    containerB.style.backgroundColor = color;
    containerB.style.width = '25%';
    containerB.style.borderRight = '2px solid #000';
}

randomColorA();
randomColorB();

button.addEventListener('click', function(){
    randomColorA(), randomColorB();
}, false);