let numText = document.getElementById('number');
let numButton = document.getElementById('numberBtn');

function randomNum() {
    let getRandomNumber = Math.floor((Math.random() * 26) + 1);

    numText.innerHTML = getRandomNumber;
}

randomNum();

numButton.addEventListener('click', function(){
    randomNum();
}, false);