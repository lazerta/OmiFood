$(document).ready(function() {
    $('.js-section-feature').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky-nav');
        }
        else {
            $('nav').removeClass('sticky-nav');
        }
    });

    $('.js-scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
    });

    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({
// language=JQuery-CSS
            scrollTop: $('.js-section-feature').offset().top
        }, 1000);
    });

    /* CSS Tricks: Smooth Scrolling to elements with ID */

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        /* switch from hamburger to cross icon */
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* gmaps.js: Google Maps plugin */
    let map = new GMaps({
        div: '.map',
        lat: 40.0047528,
        lng: -75.0,
        zoom: 12
    });

    map.addMarker({
        lat: 40.0047528,
        lng: -75.1180329,
        title: 'Philadelphia',
        infoWindow: {
            content: '<p>Our Philadelphia HQ</p>'
        }
    });
});



