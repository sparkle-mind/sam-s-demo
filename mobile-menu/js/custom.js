$(document).ready(function () {
    // AUTO_WINDOW_RESIZE ==============
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 767) {
            $(window).show();
        } else {
            $(window).hide();
        }
    });
    // AUTO_WINDOW_RESIZE ==============

    //toggle menu start-----------

    $('.mobile-toggle').click(function () {
        $('.main-menu,.mobile-toggle').toggleClass('active');
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

        var paddingTop = $('.pepper-header').outerHeight();
        $('.main-menu').css('top', paddingTop + 'px');


    //  DYNAMIC GET_HEIGHT  HEADER_END >>>>>>>>>>>>>>>>>
});
