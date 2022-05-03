app.serviceSlider = {
  init() {
    const serviceSlider = document.querySelector('.js-service-slider');

    if (!serviceSlider) return;

    new Swiper(serviceSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  },
};
