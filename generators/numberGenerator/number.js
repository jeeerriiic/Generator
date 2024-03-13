let numText = document.getElementById('number');
let numButton = document.getElementById('numberBtn');

function randNum() {
    let randomNumber = Math.floor((Math.random() * 26) + 1);

    numText.innerHTML = randomNumber;
}

randNum();

numButton.addEventListener('click', function(){
    randNum();
}, false);