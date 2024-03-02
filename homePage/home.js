// Color Generator
let container = document.getElementById('colorGen');
let button = document.getElementById('colorBtn');
let displayHex = document.querySelector('p');
// Color Generator

// Color Generator
const validCharacters = '0123456789ABCDEF';
const hexDecimalLength = 6;

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getNextRandomColor(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        let getRandomColor = validCharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomColor;
    };

    displayHex.innerHTML = color;
    container.style.backgroundColor = color;
}

getNextRandomColor();

button.addEventListener('click', function(){
    getNextRandomColor();
}, false);
// Color Generator