// JavaScript для переключення мобільної навігації
function toggleMenu() {
    var navbarMenu = document.querySelector('.menu');
    var navbarToggle = document.querySelector('.navbar-toggle');

    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
}