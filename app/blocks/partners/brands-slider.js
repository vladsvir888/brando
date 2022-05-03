app.brandsSlider = {
  init() {
    const brandsSlider = document.querySelector('.js-brands-slider');

    if (!brandsSlider) return;

    new Swiper(brandsSlider, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 6,
        },
      },
    });
  },
};
