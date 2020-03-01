
// NavBar Code
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
});

// // Form Alert
// const userName = document.getElementById('username').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const phoneNumber = document.getElementById('number').value;
// const submitBtn = document.querySelector('.signup-btn');
// const alert = document.querySelector('.signup-alert');

// alert.style.display = 'none';

// submitBtn.addEventListener('click', (e) => {
//     if(userName !== null && email !== null && password !== null && phoneNumber !== null){
//         window.location.href = "https://google.com";
//         alert.style.display = 'block';
//         setTimeout(() => {
//             alert.style.display = 'none';
//         }, 5000);
//     }

//     alert('Hello');
//     e.preventDefault();
// })
