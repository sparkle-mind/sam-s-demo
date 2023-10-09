$(document).ready(function () {
    

            // DELIVERY SLIDER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            var Swiperone = new Swiper('.del-slider-main', {
                slidesPerView: 1.2,
                autoHeight: true,
                loop: false,
            
                breakpoints: {
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                },
            });


// DELIVERY SLIDER  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HOME-BRAND  SECTION START *****************

            var Swipertwo = new Swiper('.home-brand-slider', {
                slidesPerView: 2.7,
                autoHeight: true,  
                loop: false,               
                breakpoints: {
                    767 : {
                        slidesPerView: 7,
                        centeredSlides: false
                    }
                },
            }); 
   
// HOME-BRAND  SECTION START *****************
});
