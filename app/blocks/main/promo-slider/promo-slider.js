app.promoSlider = {
  init() {
    const promoSliders = document.querySelectorAll('.js-promo-slider');

    if (promoSliders.length === 0) return;

    promoSliders.forEach((promoSlider) => {
      new Swiper(promoSlider, {
        lazy: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
  },
};
