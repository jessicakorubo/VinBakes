
const hamburger = document.querySelector('.hamburger');
// const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');
const close = document.querySelector('.close');
const menuLink = document.querySelectorAll(".menu a")

hamburger.addEventListener('click', ()=>{
    navbar.classList.add('active');
});

close.addEventListener ('click', ()=>{
    navbar.classList.remove('active');
    
})

//MAKING THE NAVBAR DISSAPEAR WHEN I CLICK ON IT
disactivateNav = ()=> {
    navbar.addEventListener('click', ()=>{ 
    navbar.classList.remove('active');
})
};
setTimeout(disactivateNav,2000);

//changing the nav background color on scroll 
const mobilenavbar = document.querySelector(".mobile-navbar");

document.addEventListener('scroll', ()=>{
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50){
        mobilenavbar.style.backgroundColor="black";
    }
    else if (scrollPosition <50){
        mobilenavbar.style.backgroundColor="transparent";
    }
});

