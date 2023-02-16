
const hamburger = document.querySelector('.hamburger');
// const hero = document.querySelector('.hero');
// const close = document.querySelector('.closeButton');

hamburger.addEventListener('click', ()=>{
    navbar.classList.add('active');
    hero.style.zIndex="-1";
});

// close.addEventListener ('click', ()=>{
//     navbar.classList.remove('active');
// })


//changing the nav background color on scroll 
const mobilenavbar = document.querySelector(".mobile-navbar");

document.addEventListener('scroll', ()=>{
    var scrollPosition = window.scrollY;
    if (scrollPosition > 150){
        document.style.backgrounColor="pink";
    }
});
