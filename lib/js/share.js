---
layout: null
---
/* (c) IGOR KOWALCZYK. All rights reserved. */

const share = document.querySelector('.share-link');
share.addEventListener('click', function() {
var win = window.open("", "Podziel się tym postem", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
win.document.body.innerHTML = "<link rel='stylesheet' href='{{site.main}}/lib/css/share.min.css'><main class='main-content'><section class='post-content'><p>Skopiuj ten link i wklej gdziekolwiek chcesz:</p><span class='link'>{{ site.url }}{{ pageurl }}</span> </section></main>";
});