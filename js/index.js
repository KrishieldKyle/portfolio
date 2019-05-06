const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const blocker = document.getElementById('blocker');
const options = document.getElementsByClassName('options');
const hamline = document.getElementsByClassName('hamline');

//sections
var exp = document.querySelector('#exp');

let open=false;

hamburger.addEventListener("click", function(){
    if(open){
        // hamburger.style.WebkitTransform = "rotate(0deg)"; 
        // // Code for IE9
        // hamburger.style.msTransform = "rotate(0deg)"; 
        // // Standard syntax
        // hamburger.style.transform = "rotate(0deg)"; 
        
        hamburger.children[0].style.transform = "rotate(0deg)";
        hamburger.children[2].style.transform = "rotate(0deg)";
        hamburger.children[0].style.position = "relative";
        hamburger.children[2].style.position = "relative";
        hamburger.children[1].style.display = "block";

        sidebar.style.visibility = "hidden";
        sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
        blocker.style.display = "none";
        open=false;
    }else{
        hamburger.children[1].style.display = "none";
        hamburger.children[0].style.transform = "rotate(45deg)";
        hamburger.children[2].style.transform = "rotate(-45deg)";
        hamburger.children[0].style.position = "absolute";
        hamburger.children[2].style.position = "absolute";
        sidebar.style.right = 0;
        sidebar.style.visibility = "visible";
        blocker.style.display = "block";
        open=true;
    }
});

function optionFunc(){
    hamburger.children[0].style.transform = "rotate(0deg)";
    hamburger.children[2].style.transform = "rotate(0deg)";
    hamburger.children[0].style.position = "relative";
    hamburger.children[2].style.position = "relative";
    hamburger.children[1].style.display = "block";
    sidebar.style.visibility = "hidden";
    sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
    blocker.style.display = "none";
    open=false;
}

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', optionFunc, false);
}

blocker.addEventListener("click", function(){
    hamburger.children[0].style.transform = "rotate(0deg)";
    hamburger.children[2].style.transform = "rotate(0deg)";
    hamburger.children[0].style.position = "relative";
    hamburger.children[2].style.position = "relative";
    hamburger.children[1].style.display = "block";
    sidebar.style.visibility = "hidden";
    sidebar.style.right = `-${sidebar.offsetWidth+10}px`;
    blocker.style.display = "none";
    open=false;
});


function resizeFunc() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if(w>=1024){
        hamburger.children[0].style.transform = "rotate(0deg)";
        hamburger.children[2].style.transform = "rotate(0deg)";
        hamburger.children[0].style.position = "relative";
        hamburger.children[2].style.position = "relative";
        hamburger.children[1].style.display = "block";
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

