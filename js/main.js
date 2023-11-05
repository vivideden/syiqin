(function ($) {


    

    // POPUP
    // ---------------------------------------
      
    $('.work-image').magnificPopup({ 
        type: 'image',
        closeBtnInside: false,
           mainClass: 'my-mfp-zoom-in',
        // other options here
        // end each line (except the last) with a comma
     });
 
     $('.work-content').magnificPopup({
         type: 'inline',
         fixedContentPos: true,
         fixedBgPos: true,
         overflowY: 'auto',
         closeBtnInside: false,
         preloader: false,
         midClick: true,
         removalDelay: 300,
         mainClass: 'my-mfp-zoom-in'
       });
 
     $('.work-video').magnificPopup({
         type: 'iframe',
         closeBtnInside: false,
         iframe: {
             markup: '<div class="mfp-iframe-scaler">'+
                       '<div class="mfp-close"></div>'+
                       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                     '</div>', 
 
             patterns: {
               youtube: {
                 index: 'youtube.com/',
 
                 id: 'v=',
 
                 src: 'https://www.youtube.com/embed/%id%?autoplay=1'
               },
               vimeo: {
                 index: 'vimeo.com/',
                 id: '/',
                 src: '//player.vimeo.com/video/%id%?autoplay=1'
               },
               gmaps: {
                 index: '//maps.google.',
                 src: '%id%&output=embed'
               }
 
             },
 
             srcAction: 'iframe_src',
           }
       });
 
     $('.gallery-link').on('click', function () {
         $(this).next().magnificPopup('open');
     });
 
     $('.gallery').each(function () {
         $(this).magnificPopup({
             delegate: 'a',
             type: 'image',
             closeBtnInside: false,
             gallery: {
                 enabled: true,
                 navigateByImgClick: true
             },
             fixedContentPos: false,
             mainClass: 'my-mfp-zoom-in',
         });
     });
 
     
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    
    // ------------------------------------------------------------
    //  Isotope (filter)
    // ------------------------------------------------------------

    // filter through items 
    $('.portfolio-filter').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });

    var $container = $('.portfolio-wrapper');
    $container.imagesLoaded( function() {
      $('.portfolio-wrapper').isotope({
          // options
          itemSelector: '[class*="col-"]',
          percentPosition: true,
          masonry: {
              // use element for option
              columnWidth: '[class*="col-"]'
          }
      });
    });

    
})(jQuery);




