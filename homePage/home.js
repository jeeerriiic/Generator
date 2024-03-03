// Color Generator
let container = document.getElementById('colorGen');
let button = document.getElementById('colorBtn');
let text = document.getElementById('colorText');
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
        console.log(getRandomColor);
    };

    displayHex.innerHTML = color;
    displayHex.style.color = color;
    container.style.border = "5px solid" + color;
    text.style.color = color;
    button.style.color = color;
    button.style.border = "2px solid" + color;
    button.style.boxShadow = "0 0 10px 1px" + color;
}

getNextRandomColor();

button.addEventListener('click', function(){
    getNextRandomColor();
}, false);
// Color Generator