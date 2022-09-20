$(document).ready(function(){
    $('ul.menu-links li').click(function(){
        var tab = $(this).attr('data-tab');

        $('ul.menu-links li').removeClass('current');
        $('.tab-content').removeClass('active');

        $(this).addClass('current');
        $('#' + tab).addClass('active');
    });
});