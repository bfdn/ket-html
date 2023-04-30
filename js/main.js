$('.header__toggler').on('click', function () {
    if (!$('.header__menu').is('.header__menu--show')) {
        $('.header__menu').addClass('header__menu--show');
    } else {
        $('.header__menu').removeClass('header__menu--show');
    }
});

$('.tab__menu-link').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr("target");
    $('.tab__menu-link').removeClass("tab__menu-link--active");
    $('.tab__item').removeClass('tab__item--active');
    $(this).addClass('tab__menu-link--active');
    $('#' + id).addClass('tab__item--active tab__item--animate');
});

$(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos => 440) {
        $('.tab__item--active').addClass('tab__item--animate');
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        768: {
            items: 1,
            //margin:10,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            // loop:false
        }
    }
});


// options
cellAlign: 'left',
    freeScroll: true,
        contain: true,
            // disable previous & next buttons and dots
            prevNextButtons: false,
                pageDots: false
});* /