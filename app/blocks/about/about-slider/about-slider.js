app.aboutSlider = {
  init() {
    const aboutSlider = document.querySelector('.js-about-slider');

    if (!aboutSlider) return;

    new Swiper(aboutSlider, {
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
