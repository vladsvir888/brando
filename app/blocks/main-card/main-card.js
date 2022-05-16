app.cardSlider = {
  init() {
    const galleryThumbs = new Swiper('.galleryThumbs', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      breakpoints: {
        768: {
          direction: 'vertical',
        },
      },
    });

    const galleryMain = new Swiper('.galleryMain', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  },
};
