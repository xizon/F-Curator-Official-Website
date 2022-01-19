
/* 
 *************************************
 * <!-- Theme Scripts  -->
 *************************************
 */

import {
    templateUrl,
    homeUrl,
    ajaxUrl,
    browser,
    UixModuleInstance,
    UixGUID,
    UixMath,
    UixCssProperty,
    UixDebounce,
    UixThrottle
} from '@uixkit/core/_global/js';

import '../scss/theme/bootstrap.min.scss';
import '../scss/theme/owl.carousel.min.scss';
import '../scss/theme/animate.min.scss';
import '../scss/theme/magnific-popup.scss';
import '../scss/theme/fontawesome.min.scss';
import '../scss/theme/meanmenu.scss';
import '../scss/theme/slick.scss';
import '../scss/theme/default.scss';
import '../scss/theme/main.scss';
import '../scss/theme/responsive.scss';


export const MAIN = ( ( module, $, window, document ) => {
	if ( window.MAIN === null ) return false;
	
	
	
    module.MAIN               = module.MAIN || {};
    module.MAIN.version       = '0.0.1';
    module.MAIN.documentReady = function( $ ) {

      // meanmenu
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992",
        onePage: true
      });

      // One Page Nav
      var top_offset = $('.header-area').height() - 10;
      $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
      });

      // data - background
      $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      })



      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
          $("#header-sticky").removeClass("sticky-bar");
        } else {
          $("#header-sticky").addClass("sticky-bar");
        }
      });


      // pricing active
      $('.chose-box').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.chose-box').removeClass('active');
      })



      // mainSlider
      function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
        });
        BasicSlider.slick({
          autoplay: false,
          autoplaySpeed: 10000,
          dots: false,
          fade: true,
          arrows: false,
          responsive: [{
            breakpoint: 767,
            settings: {
              dots: false,
              arrows: false
            }
          }]
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
              $this.removeClass($animationType);
            });
          });
        }
      }
      mainSlider();

      $('.activ-testimonai').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        centerMode: true,
        centerPadding: '0',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,

          settings: {
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1
          }
        }
        ]
      });

      $('.acitv-testimonail-3').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });


      // owlCarousel
      $('.screenshot-active').owlCarousel({
        loop: false,
        items: 4,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: false,
        autoplay: false,
        margin: 20,
        responsive: {
          0: {
            items: 1
          },
          550: {
            items: 2
          },
          767: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 4
          }
        }
      })

      /* magnificPopup img view */
      $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      /* magnificPopup video view */
      $('.popup-video').magnificPopup({
        type: 'iframe'
      });


      // isotop
      $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
      });

      // filter items on button click
      $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });

      //for menu active class
      $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });




      // scrollToTop
      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });

      // WOW active
      new WOW().init();



    };
	
    module.MAIN.pageLoaded    = function() {

      /* 
      ---------------------------
      Function Here
      ---------------------------
      */ 
      //your code here...
      
    };
	

    module.components.documentReady.push( module.MAIN.documentReady );
    module.components.pageLoaded.push( module.MAIN.pageLoaded );	

	return class MAIN {
		constructor() {
			this.module = module;
		}
		
	};
	
})( UixModuleInstance, jQuery, window, document );


