$(document).ready(function() {

    // TESIMONIAL SLIDER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var Swipes = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight:true,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: '.custum_arrow_next',
            prevEl: '.custum_arrow_prev'
        },
        pagination: {
            el: '.custum-pagination',
            clickable:true
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        breakpoints: {
            // 991 ---> min-width:991px  in swiper slider
            991: {     
              slidesPerView: 3,
              spaceBetween: 30,
            }
           
          }
    });
    // TESIMONIAL SLIDER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


});
