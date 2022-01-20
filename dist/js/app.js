/*!
 * 
 * DO NOT OVERRIDE THIS FILE.
 * Generated with "npm run build"
 *
 * ## Project Name        :  F-Curator Official Website
 * ## Project Description :  F-Curator is an offline application that comes at you all day long and curates your own web favorites..
 * ## Project URL         :  https://uiux.cc
 * ## Version             :  0.0.1
 * ## Based on            :  Uix Kit (https://github.com/xizon/f-curator-official-website)
 * ## Last Update         :  January 20, 2022
 * ## Created by          :  UIUX Lab (https://uiux.cc) (uiuxlab@gmail.com)
 * ## Released under the MIT license.
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/_global/js/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**

	TABLE OF CONTENTS
	---------------------------


	1.Base
    2.Theme Scripts


*/

/*
 *************************************
 * <!-- Base -->
 *************************************
 */

/*
 * Global variables from front pages
 *
 * @private
 */
var //If the file is in the root directory, you can leave it empty.
//If in another directory, you can write: "/blog"
templateUrl, //Eg. https://uiux.cc
homeUrl, //Eg. https://uiux.cc/wp-admin/admin-ajax.php
ajaxUrl;

if (typeof APP_ROOTPATH === 'undefined') {
  templateUrl = '';
  homeUrl = '';
  ajaxUrl = '';
} else {
  templateUrl = APP_ROOTPATH.templateUrl.replace(/\/\s*$/, '');
  homeUrl = APP_ROOTPATH.homeUrl.replace(/\/\s*$/, '');
  ajaxUrl = APP_ROOTPATH.ajaxUrl.replace(/\/\s*$/, '');
}
/*
 * Determine whether it is a special browser
 *
 * @private
 */
// Add feature test for passive event listener support


var supportsPassive = false;

try {
  document.addEventListener("test", null, {
    get passive() {
      supportsPassive = true;
    }

  });
} catch (e) {}

var browser = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isAndroid: /(android)/i.test(navigator.userAgent),
  isPC: !navigator.userAgent.match(/(iPhone|iPod|Android|ios|Mobile)/i),
  isSafari: !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),

  /*Test to 9, 10. */
  isIE: !!window.ActiveXObject || "ActiveXObject" in window,

  /*Test to 6 ~ 11 (not edge) */
  supportsPassive: supportsPassive
};
/*
 * Core scripts for current site
 *
 * @private
 * @description Used for all modules from ./src/components/[__]/js
 * @requires ./examples/assets/js/min/jquery.waitforimages.min.js
 * @requires ./examples/assets/js/min/video.min.js
 * @requires ./examples/assets/js/min/TweenMax.min.js
 */

var UixModuleInstance = function ($, window, document) {
  var _APP = {},
      components = {
    documentReady: [],
    pageLoaded: []
  };

  if ($('img').length == 0) {
    $('body').prepend('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" style="display:none">');
  }

  if ($.isFunction($.fn.waitForImages)) {
    $('body').waitForImages(pageLoaded);
  } else {
    $(window).on('load', pageLoaded);
  }

  $(document).ready(documentReady);

  function documentReady(context) {
    context = _typeof(context) == ( true ? "undefined" : 0) ? $ : context;
    components.documentReady.forEach(function (component) {
      component(context);
    });
  }

  function pageLoaded(context) {
    context = _typeof(context) == "object" ? $ : context;
    components.pageLoaded.forEach(function (component) {
      component(context);
    });
  }

  _APP.setContext = function (contextSelector) {
    var context = $;

    if (_typeof(contextSelector) !== ( true ? "undefined" : 0)) {
      return function (selector) {
        return $(contextSelector).find(selector);
      };
    }

    return context;
  };

  _APP.components = components;
  _APP.documentReady = documentReady;
  _APP.pageLoaded = pageLoaded;
  return _APP;
}($, window, document);
/*
 * Create GUID / UUID
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @return {String}                        - The globally-unique identifiers.
 */

var UixGUID = UixGUID || function () {
  function t() {}

  return t.version = "0.0.1", t.create = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }, //
  t;
}();
/*
 * Evaluating a string as a mathematical expression in JavaScript
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @return {String}            - New calculation result.
 */

var UixMath = UixMath || function () {
  function t() {}

  return t.version = "0.0.1", t.evaluate = function (s) {
    var chars = s.replace(/\s/g, '').split("");
    var n = [],
        op = [],
        index = 0,
        oplast = true;
    n[index] = ""; // Parse the expression

    for (var c = 0; c < chars.length; c++) {
      if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
        op[index] = chars[c];
        index++;
        n[index] = "";
        oplast = true;
      } else {
        n[index] += chars[c];
        oplast = false;
      }
    } // Calculate the expression


    s = parseFloat(n[0]);

    for (var o = 0; o < op.length; o++) {
      var num = parseFloat(n[o + 1]);

      switch (op[o]) {
        case "+":
          s = s + num;
          break;

        case "-":
          s = s - num;
          break;

        case "*":
          s = s * num;
          break;

        case "/":
          s = s / num;
          break;
      }
    }

    return s;
  }, //
  t;
}();
/*
 * Get the CSS property
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @param  {!Element} el     - The Element for which to get the computed style. Using class name or ID to locate.
 * @return {String|Object}   - The value of property.
 */

var UixCssProperty = UixCssProperty || function () {
  function t() {}

  return t.version = "0.0.1", t.getTransitionDuration = function (el) {
    if (_typeof(el) === ( true ? "undefined" : 0)) {
      return 0;
    }

    var style = window.getComputedStyle(el),
        duration = style.webkitTransitionDuration,
        delay = style.webkitTransitionDelay;

    if (_typeof(duration) != ( true ? "undefined" : 0)) {
      // fix miliseconds vs seconds
      duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
      delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
      return duration;
    } else {
      return 0;
    }
  }, //
  t.getAbsoluteCoordinates = function (el) {
    var windowWidth = window.innerWidth,
        leftPos = null,
        topPos = null;

    if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
      leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
      topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
    } else {
      // width and height in pixels, including padding and border
      // Corresponds to jQuery outerWidth(), outerHeight()
      leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
      topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
    }

    return {
      'left': leftPos,
      'top': topPos
    };
  }, //
  t;
}();
/*
* Throttle
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Void}    
*/

var UixThrottle = function UixThrottle(fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var waiting = false;
  return function () {
    if (!waiting) {
      fn.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
};
/*
* Debounce
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Void}    
*/

var UixDebounce = function UixDebounce(fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    //Every time this returned function is called, the timer is cleared to ensure that fn is not executed
    clearTimeout(timer); // When the returned function is called for the last time (that is the user stops a continuous operation)
    // Execute fn after another delay milliseconds

    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, limit);
  };
};
;// CONCATENATED MODULE: ./src/components/_main/js/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 *************************************
 * <!-- Theme Scripts  -->
 *************************************
 */











var MAIN = function (module, $, window, document) {
  if (window.MAIN === null) return false;
  module.MAIN = module.MAIN || {};
  module.MAIN.version = '0.0.1';

  module.MAIN.documentReady = function ($) {
    // meanmenu
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "992",
      onePage: true
    }); // One Page Nav

    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset
    }); // data - background

    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      if (scroll < 245) {
        $("#header-sticky").removeClass("sticky-bar");
      } else {
        $("#header-sticky").addClass("sticky-bar");
      }
    }); // pricing active

    $('.chose-box').on('mouseenter', function () {
      $(this).addClass('active').parent().siblings().find('.chose-box').removeClass('active');
    }); // mainSlider

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
          dots: false
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      }]
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
          dots: false
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }); // owlCarousel

    $('.screenshot-active').owlCarousel({
      loop: false,
      items: 4,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      nav: true,
      dots: true,
      autoplay: true,
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
    });
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
    }); // isotop

    $('.grid').imagesLoaded(function () {
      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      });
    }); // filter items on button click

    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    }); //for menu active class

    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    }); // scrollToTop

    $.scrollUp({
      scrollName: 'scrollUp',
      // Element ID
      topDistance: '300',
      // Distance from top before showing element (px)
      topSpeed: 300,
      // Speed back to top (ms)
      animation: 'fade',
      // Fade, slide, none
      animationInSpeed: 200,
      // Animation in speed (ms)
      animationOutSpeed: 200,
      // Animation out speed (ms)
      scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
      // Text for element
      activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'

    }); // WOW active

    new WOW().init();
  };

  module.MAIN.pageLoaded = function () {
    /* 
    ---------------------------
    Function Here
    ---------------------------
    */
    //your code here...
  };

  module.components.documentReady.push(module.MAIN.documentReady);
  module.components.pageLoaded.push(module.MAIN.pageLoaded);
  return function MAIN() {
    _classCallCheck(this, MAIN);

    this.module = module;
  };
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/_app-load.js
/*
 * Import modules from components
 *    
 */

/******/

/******/

/* pages */

/* Note: The CSS style file has been included by JavaScript files */

;// CONCATENATED MODULE: ./src/index.js
/*
 * Import modules from components of ES6
 * 
 *        
 */

/******/ })()
;
//# sourceMappingURL=js/app.js.map