
$(document).ready(function(){
    $('.product-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
        ]
    });
});

/* Abrir menu mobile */
const btnBars=document.querySelector('.jsBtnBars');

const btnCloseBars=document.querySelector('.jsCloseMenu');

btnBars.addEventListener('click',(e)=>{
    const menu=e.target.parentNode.parentNode.querySelector('.nav-mobile__list');

    menu.classList.add('active');
})


btnCloseBars.addEventListener('click',(e)=>{
    const menu=e.target.parentNode;

    menu.classList.remove('active');
})
