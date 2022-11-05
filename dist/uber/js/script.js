window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburg');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburg_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburg_active');
            menu.classList.toggle('menu_active');
        })
    })
})