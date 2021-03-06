jQuery(document).ready(function ($) {

    // jQuery sticky Menu

    $(".mainmenu-area").sticky({ topSpacing: 0 });


    $('.product-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.related-products-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.brand-list').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });


    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass('in');
    });

    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Bootstrap ScrollPSY
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });

    $('.single-promo').on("click", function () {
        $(this).toggleClass('highlight');
    });

    $('.single-product').on("click", function () {
        console.log('Hello');
        var src = $(this).find('img').attr('src');
        console.log(src);
        var title = $(this).find('h2 div').text();
        var desc = $(this).find('a').text();
        $('.modal-content img').attr('src', src);
        $('.modal-content h2').text(title);
        $('.modal-content p').text(desc);
        $('.bg-modal').css('display', 'flex');
    });


    var headerHeight = $('navbar').outerHeight();
    $('.mainmenu-area ul.navbar-nav li .scroll-link').on("click", function (e) {
        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
    $('.venobox').venobox(
    );

});


