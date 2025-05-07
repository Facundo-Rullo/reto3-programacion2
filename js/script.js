const menu = document.getElementById('responsive-bars');
const nav = document.querySelector('#nav-brand');


menu.addEventListener("click", () => {
    nav.classList.toggle('visible');

});