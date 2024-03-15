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

// Container A
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
// Container A

// Container B
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
// Container B

// Container C
function randomColorC(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        let getRandomColorC = validCharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomColorC;
    };

    displayHexC.innerHTML = color;
    containerC.style.backgroundColor = color;
    containerC.style.width = '25%';
    containerC.style.borderRight = '2px solid #000';
}
// Container C

// Container D
function randomColorD(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        let getRandomColorD = validCharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomColorD;
    };

    displayHexD.innerHTML = color;
    containerD.style.backgroundColor = color;
    containerD.style.width = '25%';
}
// Container D

randomColorA();
randomColorB();
randomColorC();
randomColorD();

button.addEventListener('click', function(){
    randomColorA(), randomColorB(), randomColorC(), randomColorD();
}, false);