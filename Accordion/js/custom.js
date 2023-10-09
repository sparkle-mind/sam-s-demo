$(document).ready(function () {


    // ========== ACCORDION  START ================

    $(".acr-title").click(function () {
        $(".acr-title").removeClass("active");
        $(".acr-open").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    });




    // ========== ACCORDION  END ================
});


