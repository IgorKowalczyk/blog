function menu() {
const menuicon = document.querySelector('.menu-icon');
const mainnav = document.querySelector(".main-nav");
if(innerWidth <= 426){
mainnav.classList.toggle("hidden");
}
menuicon.addEventListener("click",(e)=>{
mainnav.classList.toggle("hidden");
});
}

menu();
