var scrollposition = window.scrollY;
var logocontainer = document.getElementsByClassName('nav')[0];
window.addEventListener('scroll', function() {
scrollposition = window.scrollY;
if (scrollposition >= 40) {
logocontainer.classList.add('nav-scrolled');
} else {
logocontainer.classList.remove('nav-scrolled');
}
});

const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem('theme');
if (currenttheme) {
document.documentElement.setAttribute('data-theme', currenttheme);
if (currenttheme === 'dark') {
toggletheme.checked = true;
}
}
function switchtheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
}
else {
document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
}
}
toggletheme.addEventListener('change', switchtheme, false);

document.addEventListener('click', function(event) {
if (!event.target.classList.contains("link-fade")) return; 
event.preventDefault();
var link = event.target;
document.body.style.opacity = 0;
document.body.addEventListener("transitionend", function() {
location.href = link.href;
});
});
