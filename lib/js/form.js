---
layout: "null"
---

const commentform = document.querySelector('.commentform');
const commentforminputs = document.querySelectorAll('.commentform-input');
const sluginput = document.querySelector('.commentform-input-slug');
const optionssluginput = document.querySelector('.commentform-input-optionsslug');
const nameinput = document.querySelector('.commentform-input-name');
const emailinput = document.querySelector('.commentform-input-email');
const messageinput = document.querySelector('.commentform-input-message');
const errormessagesdiv = document.querySelector('.commentform-errormessages');
const sendfaileddiv = document.querySelector('.commentform-sendfailed');
const sendsucceededdiv = document.querySelector('.commentform-sendsucceeded');
const spinner = document.querySelector('.submit-spinner');
function post(url, data, callback, errorcallback) {
const xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
if (xhr.status === 200) {
callback(xhr.responseText);
} else if (xhr.status !== 200) {
errorcallback(xhr.responseText);
}
};
xhr.send(encodeURI(data));
}
if (commentform) {
commentform.addEventListener('submit', (e) => {
e.preventDefault();
errormessagesdiv.innerHTML = '';
sendfaileddiv.style.display = 'none';
sendsucceededdiv.style.display = 'none';
const slug = sluginput.value.trim();
const optionsslug = optionssluginput.value.trim();
const name = nameinput.value.trim();
const email = emailinput.value.trim();
const message = messageinput.value.trim();
let error = false;
let fatalerror = false;
const messages = [];

{% if site.reCaptcha %}
// Captcha Script
var response = grecaptcha.getResponse();
if(response.length == 0) {
error = true;
messages.push('<div class="commentform-errormessage">Proszę rozwiązać zadanie zabezpieczające.</div>');
}
// End of Captcha Script
{% endif %}

if (name.length < 2) {
error = true;
messages.push('<div class="commentform-errormessage">Proszę wpisać imię.</div>');
}
if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
error = true;
messages.push('<div class="commentform-errormessage">Proszę wpisać poprawny e-mail.</div>');
}
if (message.length < 2) {
error = true;
messages.push('<div class="commentform-errormessage">Proszę wpisać wiadomość.</div>');
}
if (fatalerror) {
return false;
}
if (error) {
errormessagesdiv.innerHTML = messages.join('');
return false;
}
const params = [];
for (let i = 0; i < commentforminputs.length; i++) {
const input = commentforminputs[i];
params.push(`${ input.name }=${ input.value }`);
}

spinner.innerHTML = "Trwa wysyłanie...";

post(
e.target.getAttribute('data-action'),
params.join('&'),
function(text){
commentform.reset();
{% if site.reCaptcha %}
// Captcha reset Script
grecaptcha.reset();
// End of Captcha reset Script
{% endif %}
sendsucceededdiv.style.display = 'block';
spinner.innerHTML = "Wyślij Komentarz";
},
function(text){
sendfaileddiv.style.display = 'block';
spinner.innerHTML = "Wyślij Komentarz";
}
);
});
}