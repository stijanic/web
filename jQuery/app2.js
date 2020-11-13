var main = function() {
    $('.article').click(function() {
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).children('.description').show();
        $(this).addClass('current');
    });
    
    $(document).keypress(function(event) {
        if (event.which === 111) {
            $('.current').children('.description').toggle();
        } else if (event.which === 110) {
            currentArticle = $('.current');
            nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
}

$(document).ready(main);