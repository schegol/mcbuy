$(document).ready(function () {
  //моб.меню:
  const body = $('body');
  const menuToggle = $('.header__mobile-menu-toggle');
  const menuCross = $('.header__menu-close');
  const menuOverlay = $('.header__mobile-menu-overlay');
  const menuBlock = $('.header__mobile-menu-container');

  const mobileMenuClose = function () {
    menuOverlay.removeClass('open');
    body.removeClass('modal-open');
  };

  menuToggle.click(function () {
    menuOverlay.toggleClass('open');
    body.toggleClass('modal-open');
  });

  menuCross.click(function () {
    mobileMenuClose();
  });

  menuOverlay.click(function (e) {
    if (!menuBlock.is(e.target) && menuBlock.has(e.target).length === 0) {
      mobileMenuClose();
    };
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      mobileMenuClose();
    };
  });

  //слайдер:
  const slider = $('.offer-slider__slider-slides');

  slider.slick({
    prevArrow: $('.offer-slider__nav-btn--prev'),
    nextArrow: $('.offer-slider__nav-btn--next'),
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoPlay: true,
    autoplaySpeed: 2000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      if (body.hasClass('modal-open')) {
        body.removeClass('modal-open');
      };

      if (menuOverlay.hasClass('open')) {
        menuOverlay.removeClass('open');
      };
    };
  });
});
