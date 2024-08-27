// ==================================================
// Project Name  :  Makro - HTML Template (Landing Page)
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  22 April 2020
// Author        :  DroitThemes - by DroitLab
// Developer:    :  Rakibul Islam Dewan
// ==================================================




(function($) {
  "use strict";


  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------


  // preloader - start
  // --------------------------------------------------
  /*$(window).on('load', function() {
    $('#ctn-preloader').addClass('loaded');

    if ($('#ctn-preloader').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  });*/
  // preloader - end
  // --------------------------------------------------


  // background image - start
  // --------------------------------------------------
  $('[data-background]').each(function() {
    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
  });
  // background image - end
  // --------------------------------------------------


  // menu button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close_btn, .overlay').on('click', function () {
      $('#mobile_menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.menu_btn').on('click', function () {
      $('#mobile_menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // menu button - end
  // --------------------------------------------------


  // portfolio carousel - start
  // --------------------------------------------------
  $('#portfolio_carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    center: true,
    smartSpeed:1000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });
  // portfolio carousel - end
  // --------------------------------------------------

  
  // masoney grid layout - start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });
  // masoney grid layout - end
  // --------------------------------------------------


  // scroll animation - start
  // --------------------------------------------------
  AOS.init({
    // disable: function() {
    //   var maxWidth = 769;
    //   return window.innerWidth < maxWidth;
    // }
    once: true,
    duration: 800,
  });
  // scroll animation - end
  // --------------------------------------------------


})(jQuery);