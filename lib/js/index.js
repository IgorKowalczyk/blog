/* (c) IGOR KOWALCZYK. All rights reserved. */

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

window.onload = function () {
document.querySelectorAll('.post-content h1').forEach($heading => {
var id = $heading.getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
$heading.setAttribute('id', id);
$heading.classList.add('anchor-heading');
$anchor = document.createElement('a');
$anchor.className = 'anchor-link';
$anchor.href = '#' + id;
$anchor.innerText = '#';
$heading.appendChild($anchor);
});
if (window.location.hash.length > 0) {
setTimeout(function () {
document.querySelector('a[href="' + window.location.hash + '"]');
}, 150);
}
};

document.addEventListener('click', function(event) {
if (event.target.tagName !== "A" || !event.target.href || event.target.target == "_blank" || event.target.classList == "anchor-link") return;
event.preventDefault();
var link = event.target;
document.body.style.opacity = 0;
document.body.addEventListener("transitionend", function() {
location.href = link.href;
});
});

var date = document.querySelector(".date");
date.innerHTML = (new Date().getFullYear());

var addComment = {
moveForm: function( commId, parentId, respondId, postId ) {
var div, element, style, cssHidden,
t           = this,
comm        = t.I( commId ),
respond     = t.I( respondId ),
cancel      = t.I( 'cancel-comment-reply-link' ),
parent      = t.I( 'comment-replying-to' ),
post        = t.I( 'comment-post-slug' ),
commentForm = respond.getElementsByTagName( 'form' )[0];
if ( ! comm || ! respond || ! cancel || ! parent || ! commentForm ) {
return;
}
t.respondId = respondId;
postId = postId || false;
if ( ! t.I( 'sm-temp-form-div' ) ) {
div = document.createElement( 'div' );
div.id = 'sm-temp-form-div';
div.style.display = 'none';
respond.parentNode.insertBefore( div, respond );
}
comm.parentNode.insertBefore( respond, comm.nextSibling );
if ( post && postId ) {
post.value = postId;
}
parent.value = parentId;
cancel.style.display = '';
cancel.onclick = function() {
var t       = addComment,
temp    = t.I( 'sm-temp-form-div' ),
respond = t.I( t.respondId );
if ( ! temp || ! respond ) {
return;
}
t.I( 'comment-replying-to' ).value = null;
temp.parentNode.insertBefore( respond, temp );
temp.parentNode.removeChild( temp );
this.style.display = 'none';
this.onclick = null;
return false;
};
try {
for ( var i = 0; i < commentForm.elements.length; i++ ) {
element = commentForm.elements[i];
cssHidden = false;
if ( 'getComputedStyle' in window ) {
style = window.getComputedStyle( element );
} else if ( document.documentElement.currentStyle ) {
style = element.currentStyle;
}
if ( ( element.offsetWidth <= 0 && element.offsetHeight <= 0 ) || style.visibility === 'hidden' ) {
cssHidden = true;
}
if ( 'hidden' === element.type || element.disabled || cssHidden ) {
continue;
}
element.focus();
break;
}
} catch( er ) {}
return false;
},
I: function( id ) {
return document.getElementById( id );
}
};