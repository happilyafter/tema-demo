!(function($) {
    "use strict";
    
    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
            scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
        }
        }
    });

    // Hero-Carousel
    $('.carousel').carousel({
        interval: 5200,
        Wrap: false,
        ride: true,
        touch: true,
        pause: false
    })
  
    // Set the count down timer
    if ($('.countdown').length) {
        var count = $('.countdown').data('count');
        var template = $('.countdown').html();
        $('.countdown').countdown(count, function(event) {
            $(this).html(event.strftime(template));
        });
    }

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);