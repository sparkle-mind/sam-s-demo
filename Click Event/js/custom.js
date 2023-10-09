// jQuery(document).ready(function () {
//     //toggle menu start-----------
//     // jQuery(window).resize(function(){location.reload();});
//     jQuery('.mobile-toggle').click(function () {
//         jQuery('.main-menu,.mobile-toggle').toggleClass('active');
//         jQuery('.overlay').toggleClass('active');
//         jQuery('.header-right').toggleClass('header-active');
//         jQuery('body,html').toggleClass('scrollno');
//     });
//     jQuery('.main-menu .close-icon').click(function () {
//         jQuery('.main-menu,.mobile-toggle').removeClass('active');
//         jQuery('.overlay').removeClass('active');
//         jQuery('body,html').removeClass('scrollno');
//     });
//     //toggle menu end-----------

//     if (jQuery(window).width() < 767) {
//         var top = jQuery('.hirefly-header').outerHeight();
//         jQuery('.header-right').css('top', top + 'px');
//     }

//     // GET_HEIGHT HEADER_START>>>>>>>>>>>>>>>>>

//     var paddingTop = jQuery('.hirefly-header').outerHeight();
//     jQuery('.wrapper').css('padding-top', paddingTop + 'px');

//     //GET_HEIGHT  HEADER_END >>>>>>>>>>>>>>>>>

//     jQuery('body').on('click','.pricing-col',function(){
//         jQuery('.pricing-col').removeClass('price-active');
//         jQuery(this).addClass('price-active');
//     });

// });

jQuery(document).ready(function () {
    //toggle menu start-----------
    jQuery('.mobile-toggle, .overlay').click(function () {
        jQuery('.mobile-toggle').toggleClass('active');
        jQuery('.overlay').toggleClass('active');
        jQuery('.header-right').toggleClass('header-active');
        jQuery('body').toggleClass('no-scroll');
    });

    // GET_HEIGHT HEADER_START>>>>>>>>>>>>>>>>>

    function headerHeight() {
        var paddingTop = jQuery('.hirefly-header').outerHeight();
        jQuery('.wrapper').css('padding-top', paddingTop + 'px');
    }
    headerHeight();

    function headerTop() {
        var top = jQuery('.hirefly-header').outerHeight();
        jQuery('.header-right').css('top', top + 'px');
    }
    headerTop();

    jQuery(window).on('resize orientationchange', function () {
        headerHeight();
        headerTop();
    });

    //GET_HEIGHT  HEADER_END >>>>>>>>>>>>>>>>>
    jQuery('body').on('click', '.pricing-col', function () {
        jQuery('.pricing-col').removeClass('price-active');
        jQuery(this).addClass('price-active');
    });

    //CLICK EVENT>>>>>>>>>>>>>>>>>

    $('.change-theme-wrp').click(function () {
        $("body").toggleClass("add-theme");
    });

    //CLICK EVENT >>>>>>>>>>>>>>>>>


});
