 let navLinks = document.getElementById('nav');
 let hamburgerMenu = document.getElementById('menu');
 let logo = document.getElementById('logo');
 let header = document.querySelector('header');



 hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    if(navLinks.classList.contains('show')){
        hamburgerMenu.src = '/images/icon-close.svg'
        logo.src = "/images/logo2.svg";
        // header.style.position = 'fixed'
    }else{
        hamburgerMenu.src = "/images/icon-hamburger.svg";
        logo.src = "/images/logo-bookmark.svg";
        // header.style.position = "relative";



    }
 })















