// let link = document.getSelection('.menu a');
// let link = document.querySelector('.menu a span');

// link.addEventListener('mouseenter', ()=>{
//     spanlink.style.marginLeft="1rem";
// })
// link.addEventListener('mouseleave', ()=>{
//     spanlink.style.marginLeft="0";
// })

// let link = document.getSelection('.menu a');
// const arr= [];
// for (let i=1; i<=link.length;i++){
//     arr.push(link);
//     console.log(arr);

   
// }
// for (let i=1; i<arr.length;i++){
//     link.addEventListener('mouseenter', ()=>{
//         // link.style.marginLeft="1rem";
//         console.log('Hovered.')
//     })
// }

const menuButton = document.querySelector('.menuButton');
const navbar= document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const close = document.querySelector('.closeButton');

menuButton.addEventListener('click', ()=>{
    navbar.classList.add('active');
    hero.style.zIndex="-1";
});

close.addEventListener ('click', ()=>{
    navbar.classList.remove('active');
})

//For the gallery text to slide in 
const observer = new IntersectionObserver(entries => {

    entries.array.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('gallery-animation')
        }
    });
});
observer.observe(document.querySelector('.galleryText'));

