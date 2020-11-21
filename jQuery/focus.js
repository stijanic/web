$(document).ready(function() {
    $('input[name]').focus(function() {
        $(this).css('outline-style', 'solid');
        $(this).css('outline-color', '#FF0000');
    });
});