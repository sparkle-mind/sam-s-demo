$(document).ready(function () {
    //toggle menu start-----------

    $('.mobile-toggle').click(function () {
        $('.main-menu').toggleClass('active');
         $('.overlay').toggleClass('active');
         $('body,html').toggleClass('scrollno');
    });
    $('.main-menu .close-icon').click(function () {
        $('.main-menu').removeClass('active');
          $('.overlay').removeClass('active');
         $('body,html').removeClass('scrollno');
    });
    //toggle menu end-----------
    // ********************** SLIDER-START ******************

    // HERO_BANNER_SLIDER START******************************
    $('.hero-banner-wrp').slick({
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        touchThreshold: 100,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true
    });
    // HERO_BANNER_SLIDER END *****************************

    // CUSTOM_STICKER_SLIDER START ===========
    $(window).on('load resize orientationchange', function () {
        $('.custom-sticker-row').each(function () {
            var $stand_top_grid = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 767) {
                if ($stand_top_grid.hasClass('slick-initialized')) {
                    $stand_top_grid.slick('unslick');
                }
            } else {
                if (!$stand_top_grid.hasClass('slick-initialized')) {
                    $stand_top_grid.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        arrows: true,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                }
            }
        });
    });
    //  CUSTOM_STICKER-SLIDER END******************

    //  GALLERY_STICKER-SLIDER START**************
    $('.gallery-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        touchThreshold: 100,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              
              }
            }
          ]
    });
    //  GALLERY_STICKER-SLIDER END**************

    // PDP-SLIDER ========
    $('.pdp-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchThreshold: 100,
        dots: true,
        asNavFor: '.pdp-thumbnail'
    });
    $('.pdp-thumbnail').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pdp-main-slider',
        dots: false,
        touchThreshold: 100,
        centerMode: false,
        focusOnSelect: true,
        arrows: false
    });
    // ************************************************************** SLIDER_END **************************************************************

    // ************************************************************** TAB-START **************************************************************

    // TAB  START ->>>>>>>>>>>>
    $('.vinyl-sticker-wrp').each(function () {
        $(this).find('.vinyl-tab').hide();
        $(this).find('.vinyl-tab:first').show();
    });
    /* if in tab mode */
    $('.vinyl-acr-item').click(function () {
        $(this).closest('.vinyl-sticker-wrp').find('.vinyl-tab').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();

        $(this).closest('.vinyl-sticker-wrp').find('.vinyl-tab').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.vinyl-sticker-wrp').find('vinyl-tab').removeClass('d_active');
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass('d_active');
    });
    /* if in drawer mode */
    $('vinyl-tab').click(function () {
        $(this).closest('.vinyl-sticker-wrp').find('.tab_content').hide();
        var d_activeTab = $(this).attr('rel');
        $('#' + d_activeTab).fadeIn();

        $(this).closest('.vinyl-sticker-wrp').find('vinyl-tab').removeClass('d_active');
        $(this).addClass('d_active');

        $(this).closest('.vinyl-sticker-wrp').find('.sustainably-tabs li').removeClass('active');
        $(".sustainably-tabs li[rel^='" + d_activeTab + "']").addClass('active');
    });
    $('.vinyl-acr-item ').last().addClass('tab_last');
    // TAB ENDS  >>>>>>>>>>>>

    // ************************************************************** TAB-END **************************************************************
    // ************************************************************** ACCORDION-START **************************************************************

    //===================   ACCORDION    =============================
    // HEADER_MOB_ACCOR START >>>>>>>>>>>>
    if ($(window).width() <= 768) {
        $('.mob-acr li').on('click', function () {
            if ($(this).hasClass('.acr-open')) {
                $(this).removeClass('.acr-open');
                $(this).siblings('.acr-open').slideUp(200);
            } else {
                $('.mob-acr li').removeClass('.acr-open');
                $(this).addClass('.acr-open');
                $('.acr-open').slideUp(200);
                $(this).siblings('.acr-open').slideDown(200);
            }
        });
    }
    // HEADER_MOB_ACCOR END>>>>>>>>>>>>
    // FOOTER_MOB_ACCOR START >>>>>>>>>>>>
    if ($(window).width() <= 768) {
        $('.footer-col h4, .acr-abt-title').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).siblings('.ft-list,.acr-item').slideUp(200);
            } else {
                $('.footer-col h4, .acr-abt-title').removeClass('active');
                $(this).addClass('active');
                $('active').slideUp(200);
                $(this).siblings('.ft-list,.acr-item').slideDown(200);
            }
        });
    }
    // FOOTER_MOB_ACCOR END >>>>>>>>>>>>
    // PDP_ ACCORDION   =============================

    $('.pdp-acr-item').click(function () {
        $('.pdp-acr-item').removeClass('active');
        $('.pdp-acr-open').slideUp();
        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });
    // ************************************************************** ACCORDION-END **************************************************************
    // ************************************************************** OTHER_JS-START **************************************************************

    //===================  SEARCH_BTN-START =============================

    $('.social-icn.search-icn').click(function () {
        $('.search-icn-open').toggleClass('active');
        $('.overlay').toggleClass('active');
    });
    $('.search-icn-open svg').click(function () {
        $('.search-icn-open').removeClass('active');
        $('.overlay').removeClass('active');
    });

    //===================  SEARCH_BTN-END  =============================
    //===================  CART-START   =============================
    $('.social-icn.cart-icn').click(function () {
        $('.cart-wrp').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.cart-top svg').click(function () {
        $('.cart-wrp').removeClass('active');
        $('.overlay').removeClass('active');
        $('body ,html').removeClass('scrollno');
    });

    $('.remove-btn a').click(function () {
        $('.cart-col').toggleClass('active');
    });

    //    ACCOUNT_OPEN-----------
    $('.account-icn').click(function () {
        $('.account-wrp').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.account-wrp .close-arw').click(function () {
        $('.account-wrp').removeClass('active');
        $('.overlay').removeClass('active');
        $('body ,html').removeClass('scrollno');
    });

    //===================  CART-END   =============================
    // CART_QTY-----
    $('.minus').click(function () {
        var $input = $(this).parent().find('.qty-btn');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('.qty-btn');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    // CART_QTY-----
    // scroll-header ----------->

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.header-bottom').addClass('header_scroll');
        } else {
            $('.header-bottom').removeClass('header_scroll');
        }
    });




// POSITION CHANGE AS PER SCROLL-START_________

 if (Modernizr.touch){
        console.log('Skrollr NOT initiated');
      } else {
        var s = skrollr.init();
        console.log('Skrollr initiated');
      }
  
});

// POSITION CHANGE AS PER SCROLL-END_________


// AUTO_WINDOW_RESIZE ==============
$(window).resize(function(){
    var w = $(window).width();
    if(w > 767) {
        $(window).show();
    }
    else {
        $(window).hide();
    }
});
// AUTO_WINDOW_RESIZE ==============














// AOS ANIMATION-------------
AOS.init();
// ************************************************************** OTHER_JS-END **************************************************************


