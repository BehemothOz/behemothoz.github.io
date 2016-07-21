$(document).ready(function() {
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        
            $('body').animate( { scrollTop: destination }, 1100 );
        
            $('html').animate( { scrollTop: destination }, 1100 );
        
    return false;
    });
});