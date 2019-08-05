window.onscroll = function() {
    myFunction();
};

var navbar = document.getElementById("stripe-bar");
var sticky = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > sticky) {
        navbar.classList.add("stripe-navbar");
    } else {
        navbar.classList.remove("stripe-navbar");
    }
}