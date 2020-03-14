
// NavBar Code
const hamburger = document.getElementById('nav-collapser');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
});


