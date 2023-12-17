const menuMobile = document.getElementById('menuMobile');

const navMenu = document.getElementById('navMenu');

function MenuMobile (){
    navMenu.classList.toggle('MenuMobile')
}

menuMobile.addEventListener('click', MenuMobile)