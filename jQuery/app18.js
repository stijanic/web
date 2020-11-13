$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
        $(this).effect('bounce', {times: 3}, 500);
        $(this).effect('slide');
    });
});