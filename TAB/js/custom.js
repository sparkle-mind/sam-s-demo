$(document).ready(function () {


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
});
