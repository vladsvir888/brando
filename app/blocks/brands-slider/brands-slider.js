app.brandsSlider = {
  init() {
    const brandsSliders = document.querySelectorAll('.js-brands-slider');

    if (brandsSliders.length === 0) return;

    brandsSliders.forEach((brandSlider) => {
      new Swiper(brandSlider, {
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
    });
  },
};
