app.productSlider = {
  init() {
    const productSliders = document.querySelectorAll('.js-product-slider');

    if (productSliders.length === 0) return;

    productSliders.forEach((productSlider) => {
      new Swiper(productSlider, {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      });
    });

    if (window.matchMedia('(max-width: 1024px)').matches) {
      productSliders.forEach((productSlider) => productSlider.style.display = 'none');
    } else {
      productSliders.forEach((productSlider) => productSlider.style.display = 'block');
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        productSliders.forEach((productSlider) => productSlider.style.display = 'none');
      } else {
        productSliders.forEach((productSlider) => productSlider.style.display = 'block');
      }
    });
  },
};
