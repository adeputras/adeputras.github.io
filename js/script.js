(function ($) {
  "use strict";
  $(document).ready(function () {
    var offsetHeight = $('.section-header').height();
    $(window).scrollspy({
      offset: offsetHeight
    });
    $('.main-menu a[href^="#"], .section-scrollto').on('click', function (event) {
      var target = $(this.getAttribute('href')) ;
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 20
        }, 800)
      }
      if ($('.burger').hasClass('open')) {
        setTimeout(function () {
          closeMenu()
        }, 100)
      }
    });

    function changeBg() {
      var homeHeight = $('#section-home').height();
      if ($(window).scrollTop() > homeHeight - offsetHeight) {
        $('.section-header').addClass('change-color')
      } else {
        $('.section-header').removeClass('change-color')
      }
    }

    // function parallax() {
    //   var scrollPosition = $(window).scrollTop();
    //   $('.background-parallax').css('top', (0 - (scrollPosition * .25)) + 'px')
    // }
    $(window).bind('scroll', function (e) {
      // parallax();
      changeBg()
    });
    if ('ontouchstart' in window) {
      var click = 'touchstart'
    } else {
      var click = 'click'
    }
    $('.burger').on(click, function () {
      if (!$(this).hasClass('open')) {
        openMenu()
      } else {
        closeMenu()
      }
    });

    function openMenu() {
      $('.menu-bg').addClass('animate');
      $('.burger').addClass('open');
      $('.x, .z').addClass('collapse-icon');
      $('.main-menu').addClass('animate');
      $('body').css({
        'overflow': 'hidden',
        'height': '100vh'
      });
      setTimeout(function () {
        $('.y').hide();
        $('.x').addClass('rotate30');
        $('.z').addClass('rotate150')
      }, 70);
      setTimeout(function () {
        $('.x').addClass('rotate45');
        $('.z').addClass('rotate135')
      }, 120)
    }

    function closeMenu() {
      $('.main-menu').removeClass('animate');
      $('body').css({
        'overflow': '',
        'height': 'auto'
      });
      setTimeout(function () {
        $('.burger').removeClass('open');
        $('.x').removeClass('rotate45').addClass('rotate30');
        $('.z').removeClass('rotate135').addClass('rotate150');
        $('.menu-bg').removeClass('animate');
        setTimeout(function () {
          $('.x').removeClass('rotate30');
          $('.z').removeClass('rotate150')
        }, 50);
        setTimeout(function () {
          $('.y').show();
          $('.x, .z').removeClass('collapse-icon')
        }, 70)
      }, 100)
    }
  })
})(jQuery)