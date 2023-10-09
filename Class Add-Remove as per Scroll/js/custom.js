

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
   
    //ADD REMOVE CLASS AS PER SCROLL >>>>>>>>>>>>>>>>>

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 100) {
            $("body").addClass("first-color");
        }
        else{
            $("body").removeClass("first-color");
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 1200) {
            $("body").addClass("sec-color");
        }
        else{
            $("body").removeClass("sec-color");
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 2000) {
            $("body").addClass("third-color");
        }
        else{
            $("body").removeClass("third-color");
        }
    });


   
    //ADD REMOVE CLASS AS PER SCROLL >>>>>>>>>>>>>>>>>


});
