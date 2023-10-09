$(document).ready(function () {
    $('.simple-slider').flickity({
        contain: true,
        // draggable: false
        //  freeScroll: true,
        //  wrapAround: true
        groupCells: 2,
        autoPlay: 2000,
        pauseAutoPlayOnHover: true
    });

    // PARALLAX_EFFECT SLIDER START__________________________

    var $carousel = $('.slider-paralax-wrp').flickity({
        imagesLoaded: true,
        percentPosition: false,
        contain: true
    });

    var $imgs = $carousel.find('.slider-paralax-item img');
    // get transform property
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    // get Flickity instance
    var flkty = $carousel.data('flickity');

    $carousel.on('scroll.flickity', function () {
        flkty.slides.forEach(function (slide, i) {
            var img = $imgs[i];
            var x = ((slide.target + flkty.x) * -1) / 3;
            img.style[transformProp] = 'translateX(' + x + 'px)';
        });
    });

    // PARALLAX_EFFECT SLIDER END __________________________

    // THUMBNAIL SLIDER START --------------

    // 1st carousel, main
    $('.thumb-main-slider').flickity({
        pageDots: false,
        //    custom arrow---
        arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
    });
    // 2nd carousel, navigation
    $('.thumb-nav-slider').flickity({
        asNavFor: '.thumb-main-slider',
        contain: true,
        pageDots: false
    });

    // THUMBNAIL SLIDER END  --------------


});
