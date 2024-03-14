let navbarContainer = document.querySelector('.sidenav');
let pageContent = document.getElementById('main');
let openButton = document.getElementById('openBtn');
let closeButton = document.getElementById('closeBtn');

function openNav() {
    navbarContainer.style.width = '250px';
    pageContent.style.marginLeft = '250px';
}

function closeNav() {
    navbarContainer.style.width = '0px';
    pageContent.style.marginLeft = '0px';
}

closeNav();

openButton.addEventListener('click', function(){
    openNav()
}, false);

closeButton.addEventListener('click', function(){
    closeNav()
}, false);