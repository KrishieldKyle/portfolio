const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const blocker = document.getElementById('blocker');
const options = document.getElementsByClassName('options');
const hamline = document.getElementsByClassName('hamline');
const detailsBtn = document.getElementsByClassName('detailsBtn');

//sections
var exp = document.querySelector('#exp');
var skills = document.querySelector('#skills');
var work = document.querySelector('#work');

let open=false;

for (var i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener('click', workDetailsFunc, false);
}

function workDetailsFunc(el){
    el.target.parentElement.parentElement.classList.toggle("is-click");
    el.target.parentElement.parentElement.children[1].classList.toggle("is-click");

}

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

        const pos = document.querySelector(this.getAttribute('href')).style.position;
        const top = document.querySelector(this.getAttribute('href')).style.top;
        document.querySelector(this.getAttribute('href')).style.position = 'relative';
        document.querySelector(this.getAttribute('href')).style.top = `-${navbar.clientHeight}px`;

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        document.querySelector(this.getAttribute('href')).style.top = top;
        document.querySelector(this.getAttribute('href')).style.position = pos;
    });
});

function fadeIn(el){
    el.classList.add('show');
    el.classList.remove('hide');  
}

function fadeOut(el){
    el.classList.add('hide');
    el.classList.remove('show');
}

window.addEventListener('scroll', function(){
    // if(isInViewport(exp)){
    //     fadeIn(exp);
    // }else{
    //     fadeOut(exp);
    // }

    // if(isInViewport(skills)){
    //     fadeIn(skills);
    // }else{

    //     fadeOut(skills);
    // }

    // if(isInViewport(work)){
    //     fadeIn(work);
    // }else{
    //     fadeOut(work);
    // }
})
    

// Viewport Checker
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    // return (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
    return (
        bounding.top >= 0 && bounding.top <= ((window.innerHeight || document.documentElement.clientHeight)/2)
        ||
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.bottom >= ((window.innerHeight || document.documentElement.clientHeight)/2)
        ||
        bounding.top < 0 && bounding.bottom >(window.innerHeight || document.documentElement.clientHeight)
    );
};

