$(document).ready(function() {
    $('#one').after('<p>Text</p>');
    $('#two').after($('p'));
    $('p').remove();
});