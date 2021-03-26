// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const navItemSubMenues = elQSA('.nav-item.has-sub');
const dropdown = elQSA('.dropdown');

// functions
function navItemSubMenuEvent() {
    this.classList.toggle('active');
}

function dropdownEvent() {
    this.querySelector('.dropdown-menu').classList.toggle('active');
}
// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {

}

function eventListener() {
    navItemSubMenues.forEach(item => {
        on(item, 'click', navItemSubMenuEvent);
    })
    dropdown.forEach(item => {
        on(item, 'click', dropdownEvent);
    })
}