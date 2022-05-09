app.viewedProductsSlider = {
  init() {
    const viewsProductsSlider = document.querySelector('.js-viewed-products-slider');

    if (!viewsProductsSlider) return;

    new Swiper(viewsProductsSlider, {
      slidesPerView: 1.3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.viewed-products-slider__btn-next',
        prevEl: '.viewed-products-slider__btn-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        576: {
          slidesPerView: 2.3,
        },
        1025: {
          slidesPerView: 4,
        },
      },
    });
  },
};
