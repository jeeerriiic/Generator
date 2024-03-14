let userText = document.getElementById('username');
let userButton = document.getElementById('usernameBtn');

const userCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const userLength = 12;

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomUsername() {
    let username = '';
    for(let i = 0; i < 12; i++) {
        let getRandomUsername = userCharacters.charAt(randomIntFromInterval(0, 52));
        username += getRandomUsername;
    };

    userText.innerHTML = username;
}

randomUsername();

userButton.addEventListener('click', function(){
    randomUsername();
}, false);