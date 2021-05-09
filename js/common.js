$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");

  $('.header-play-button').on('click', function() {
    $('.modal-video').addClass('modal-video-active');
    $('.dark-window').addClass('dark-window-active');
  })
  $('.modal-video-close').on('click', function() {
    $('.modal-video').removeClass('modal-video-active');
    $('.dark-window').removeClass('dark-window-active');
  })
  $('.dark-window').on('click', function() {
    $('.modal-video').removeClass('modal-video-active');
    $('.dark-window').removeClass('dark-window-active');
  })
  $('.auto-block').on('click', function() {
    let count = $('.auto-block').index(this);
    let element = $('.auto-content-row')[count]
    $('.auto-block').removeClass('auto-block-active');
    $(this).addClass('auto-block-active');
    $('.auto-content-row').removeClass('auto-content-row-active');
    $(element).addClass('auto-content-row-active');
  })
  new WOW().init();
  $('.accordion-block').on('click', function() {
    if ($(this).hasClass('accordion-active')) {
      $(this).removeClass('accordion-active');
    }
    else{
      $(this).addClass('accordion-active');
    }
  })
  $(".nav-list").on("click", 'a', function (event) {
    event.preventDefault();
    $('.menu-modal').removeClass('menu-modal-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.auto-row').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let count = $('.auto-block').index($('.slick-current'));
    let element = $('.auto-content-row')[count]
    $('.auto-content-row').removeClass('auto-content-row-active');
    $(element).addClass('auto-content-row-active');
  });
  $('.auto-row').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: $('.auto-row-arrow_r'),
    prevArrow: $('.auto-row-arrow_l'),
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: "unslick"
        }
    ]
  });
  function slickify(){
      $('.stages-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: $('.stages-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: "unslick"
            }
        ]
      });

  }
  let $windowWidth = $(window).width();
  if ($windowWidth > 1200) {
      slickify();   
  }

  slickify();
  $(window).resize(function(){
      var $windowWidth = $(window).width();
      if ($windowWidth > 1200) {
          slickify();   
      }
  });
});