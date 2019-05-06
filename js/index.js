const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const blocker = document.getElementById('blocker');
const options = document.getElementsByClassName('options');

//sections
var exp = document.querySelector('#exp');

let open=false;

hamburger.addEventListener("click", function(){
    if(open){
        hamburger.style.WebkitTransform = "rotate(0deg)"; 
        // Code for IE9
        hamburger.style.msTransform = "rotate(0deg)"; 
        // Standard syntax
        hamburger.style.transform = "rotate(0deg)"; 
        sidebar.style.visibility = "hidden";
        sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
        blocker.style.display = "none";
        open=false;
    }else{
        hamburger.style.WebkitTransform = "rotate(90deg)"; 
        // Code for IE9
        hamburger.style.msTransform = "rotate(90deg)"; 
        // Standard syntax
        hamburger.style.transform = "rotate(90deg)"; 
        sidebar.style.right = 0;
        sidebar.style.visibility = "visible";
        blocker.style.display = "block";
        open=true;
    }
});

function optionFunc(){
    hamburger.style.WebkitTransform = "rotate(0deg)"; 
    // Code for IE9
    hamburger.style.msTransform = "rotate(0deg)"; 
    // Standard syntax
    hamburger.style.transform = "rotate(0deg)"; 
    sidebar.style.visibility = "hidden";
    sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
    blocker.style.display = "none";
    open=false;
}

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', optionFunc, false);
}

blocker.addEventListener("click", function(){
    hamburger.style.WebkitTransform = "rotate(0deg)"; 
    // Code for IE9
    hamburger.style.msTransform = "rotate(0deg)"; 
    // Standard syntax
    hamburger.style.transform = "rotate(0deg)"; 
    sidebar.style.visibility = "hidden";
    sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
    blocker.style.display = "none";
    open=false;
});


function resizeFunc() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if(w>=1024){
        hamburger.style.WebkitTransform = "rotate(0deg)"; 
        // Code for IE9
        hamburger.style.msTransform = "rotate(0deg)"; 
        // Standard syntax
        hamburger.style.transform = "rotate(0deg)";
        sidebar.style.visibility = "hidden";
        sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
        blocker.style.display = "none";
        open=false;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Viewport Checker
// var isInViewport = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

