app.burgerMenuSlider = {
  init() {
    const burgerMenuSlider = document.querySelector('.js-burger-menu-slider');

    if (!burgerMenuSlider) return;

    new Swiper(burgerMenuSlider, {
      navigation: {
        nextEl: '.burger-menu__slider .swiper-button-next',
        prevEl: '.burger-menu__slider .swiper-button-prev',
      },
      spaceBetween: 20,
      loop: true,
    });
  },
};
