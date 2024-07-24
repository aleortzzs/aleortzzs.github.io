$(document).ready(function(){
    $('.carousel').carousel({
        indicators:true
    });
    $('.nav-link').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
