$(document).ready(function () {

    // THUMBNAIL SLIDER END  --------------

    // VERTICAL THUMBNAIL SLIDER START --------------

    var $carousel = $('.ver-main-slider ').flickity();

    var $carouselNav = $('.ver-thumb-wrp');
    var $carouselNavCells = $carouselNav.find('.ver-item');

    $carouselNav.on('click', '.ver-item', function (event) {
        var index = $(event.currentTarget).index();
        $carousel.flickity('select', index);
    });

    var flkty = $carousel.data('flickity');
    var navTop = $carouselNav.position().top;
    var navCellHeight = $carouselNavCells.height();
    var navHeight = $carouselNav.height();

    $carousel.on('select.flickity', function () {
        // set selected nav cell
        $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
        var $selected = $carouselNavCells.eq(flkty.selectedIndex).addClass('is-nav-selected');
        // scroll nav
        var scrollY =
            $selected.position().top + $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
        $carouselNav.animate({
            scrollTop: scrollY
        });
    });
    //VERTICAL THUMBNAIL SLIDER END  --------------
});
