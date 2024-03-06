let openButton = document.getElementById('openBtn');

let closeButton = document.getElementById('closeBtn');

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').syle.marginLeft = '0';
}

openButton.addEventListener('click', function(){
    openNav()
}, false);

closeButton.addEventListener('click', function(){
    closeNav()
}, false);