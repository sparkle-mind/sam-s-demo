$(document).ready(function () {
   
    // AUTO_WINDOW_RESIZE ==============

    //toggle menu start-----------

    $('.mobile-toggle').click(function () {
        $('.main-menu,.mobile-toggle').toggleClass('active');
        $('.header-right').toggleClass('active-menu');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('no-scroll');
    });
    $('.main-menu .close-icon').click(function () {
        $('.main-menu,.mobile-toggle').removeClass('active');
        $('.overlay').removeClass('active');
        $('body,html').removeClass('no-scroll');
    });
    //toggle menu end-----------

    //  DYNAMIC GET_HEIGHT HEADER_START>>>>>>>>>>>>>>>>>

        var paddingTop = $('.hirefly-header').outerHeight();
        $('.header-right').css('top', paddingTop + 'px');


    //  DYNAMIC GET_HEIGHT  HEADER_END >>>>>>>>>>>>>>>>>
});
