document.addEventListener('DOMContentLoaded', function () {
    let hamburgerMenu = document.querySelector('.hamburger-menu-icon');
    let menu = document.querySelector('.hamburger-menu');
    let items = document.querySelectorAll('.hamburger-menu ul li.menu-item')

    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    items.forEach(li => {
        li.addEventListener('click', () => {
            menu.classList.toggle('open');
        })
    })

});
