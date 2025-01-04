const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', () => { 
    preloader.classList.add('preloader-remove');
});


const addEventOnlements = function(elements, eventTypes, callback) {
    for(let i=0, len=elements.length; i<len; i++) {
        elements[i].addEventListener(eventTypes, callback);
        }
    }

const navbar = document.querySelector('[data-navbar]');
const navbarTogglers = document.querySelector('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNav = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");}

addEventOnlements(navbarTogglers, 'click', toggleNav);