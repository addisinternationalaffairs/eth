
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menu.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    sideNav.classList.toggle('width');
});
menuBtn.onclick=function(){
    if(sideNav.style.right=="-200px") {
        sideNav.style.right="0px";
        menu.src= "close-icon.png";
    }
    else {
       sideNav.style.right="-200px";
       menu.src= "menu-icon.png";
    }
};

var body = document.body;
var lastScroll= 0;

window.addEventListener('scroll', function(){
    var currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
       body.classList.remove("scroll-up");
    }
    
    lastScroll = currentScroll;   
});
