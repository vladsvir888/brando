app.cardSlider = {
  init() {
    const galleryThumbs = new Swiper('.galleryThumbs', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      breakpoints: {
        768: {
          direction: 'vertical',
        },
      },
    });

    new Swiper('.galleryMain', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.card-page__gallery-thumbs .swiper-button-next',
        prevEl: '.card-page__gallery-thumbs .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  },
};
