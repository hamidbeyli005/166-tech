document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu-icon');
    var menu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});
