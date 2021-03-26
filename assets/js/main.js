// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (event, el, value) => el.addEventListener(event, value);

// variables
// const 
const navLink = elQSA('.nav-link')
const collapseToogle = elQSA('.collapse-toggle')
const collapse = elQSA('.collapse')

// functions
const showSidebar = (toggleId, sidebarId, bodyId, topbarId) => {
    const toggle = elQS(toggleId),
    sidebar = elQS(sidebarId),
    bodyPd = elQS(bodyId),
    topbar = elQS(topbarId)

    if(toggle && sidebar && bodyPd && topbar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show')
            bodyPd.classList.toggle('body-pd')
            topbar.classList.toggle('body-pd')
        })
    }
}

function navAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

function dropdownEvent() {
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('active')
}
// function dropdownEvent() {
//     this.querySelector('.dropdown-menu').classList.toggle('active');
// }
// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {

}

function eventListener() {
    showSidebar('#topbarToggle', '#sidebar', '#bodyPd', '#topbar')
    navLink.forEach(n => n.addEventListener('click', navAction))
    collapseToogle.forEach(c => c.addEventListener('click', dropdownEvent))
}