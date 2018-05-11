function openMenu() {
    const btn = document.querySelector('.hamburger-link');
    const menu = document.querySelector('.hamburger');

    btn.addEventListener('click', function() {
        menu.addClass('hamburger-popup');
        menu.fadeIn();

    })

}

openMenu();

