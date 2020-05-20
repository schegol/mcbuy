$(document).ready(function () {
  // фикс. акция наверху страницы:
  const body = $('body');
  const offerLine = $('.header__offer-line');
  const offerLineCloseBtn = $('.header__offer-close');

  let offerLineHeight = offerLine.outerHeight();
  body.css('padding-top', offerLineHeight+'px');

  offerLineCloseBtn.click(function (e) {
    e.preventDefault();
    offerLine.addClass('header__offer-line--closed');
    body.css('padding-top', 0);
  });

  //слайдер:
  $('.index-slider__slider').slick({
    prevArrow: $('.index-slider__nav-btn--prev'),
    nextArrow: $('.index-slider__nav-btn--next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoPlay: true,
    speed: 500,
    adaptiveHeight: true
  });

  //моб.меню:
  const menuToggle = $('.header__menu-toggle');
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

  $(window).resize(function () {
    if (!offerLine.hasClass('header__offer-line--closed')) {
      let offerLineHeight = offerLine.outerHeight();
      body.css('padding-top', offerLineHeight+'px');
    };

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
