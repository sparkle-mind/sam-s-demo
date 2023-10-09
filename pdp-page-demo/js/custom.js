$(document).ready(function () {
    //    PDP_SLIDER --------------->
    $('.pdp-slider-wrp').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.pdp-thumbnail-wrp'
    });
    $('.pdp-thumbnail-wrp').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.pdp-slider-wrp',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true
    });

    //    PDP_SLIDER --------------->

    $('.pdp-accordion').click(function () {
        $('.pdp-accordion').removeClass('active');
        $('.pdp-acc-cont').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });
});

