$(document).ready(function () {


    // ========== QTY START ================

    $('.minus').click(function() {
        var $input = $(this).parent().find('.qty-input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('.qty-input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    //  ALSO USE BELOW JS------------
    
    // $('body').on('click', '.qty-btn',function() {
    //     var input = $(this).siblings('.qty-input');
    //     var value = parseInt(input.val());
    //     console.log(input, value);
    //     if ($(this).hasClass('plus')) {
    //         value = value + 1;
    //     } else {
    //         value = value - 1;
    //     }
    //     if (value == 0) {return false;}
    //     input.val(value);
    // })
    
    // ========== QTY  END ================
});
