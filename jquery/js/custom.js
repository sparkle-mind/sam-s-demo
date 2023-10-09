$(document).ready(function () {
    // HIDE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $('.heading.hide').click(function () {
        $('.parent.hide').hide(2000);
    });
    // HIDE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // SLIDE_UP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    $('.heading.slide-up ').click(function () {
        $('.parent.slide-up').slideUp();
    });

    // SLIDE_UP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // SLIDE_DOWN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    $('.heading.slide-down ').click(function () {
        $('.parent.slide-down').slideDown();
    });

    // SLIDE_DOWN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // SLIDE_TOGGLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    $('.heading.toggle').click(function () {
        $('.toggle-par').slideToggle('slow');
    });

    // SLIDE_TOGGLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // FADE_IN  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $('.heading.fade-in ').click(function () {
        $('.parent.fade-in').fadeIn('slow');
    });
    // FADE_IN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // FADE_OUT  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $('.heading.fade-out ').click(function () {
        $('.parent.fade-out').delay(2000).fadeOut('slow');
    });
    // FADE_OUT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // FADE_TOGGLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    $('.heading.fade-toggle').click(function () {
        $('.parent.fade-toggle').fadeToggle('slow');
    });

    // FADE_TOGGLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  

    $('button').click(function () {
        $('span').after('<br> AFTER <br>');
    });
    $('.before').click(function () {
        $('a').before('<br> BEFORE <br>');
    });






      // ADD_CLASS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      $('.sec-btn').click(function () {
        $('.para').addClass('active');      // .toggleClass and .removeClass use also....
    });
    // ADD_CLASS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
});
