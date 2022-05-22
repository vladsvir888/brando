document.addEventListener('DOMContentLoaded', () => {
  app.cabinetPopup.init(); // blocks/popups
  app.popups.init(); // blocks/popups
  app.visibilityPassw.init(); // blocks/popups
  app.accordion.init(); // blocks/footer
  app.promoSlider.init(); // blocks/main/promo-slider
  app.aboutSlider.init(); // blocks/about/about-slider
  app.videoAlert.init(); // blocks/about
  app.map.init(); // blocks/contacts
  app.serviceSlider.init(); // blocks/partners
  app.brandsSlider.init(); // blocks/partners
  app.catalogFilter.init(); // blocks/catalog-filter
  app.sliderSnap.init(); // blocks/catalog-filter
  app.productSlider.init(); // blocks/product-card
  app.favourite.init(); // blocks/product-card
  app.viewedProductsSlider.init(); // blocks/viewed-products
  app.showMore.init(); // blocks/show-more
  app.timer.init(); // blocks/timer
  app.counter.init(); // blocks/counter
  app.hiddenContent.init(); // blocks/contacts-form
  app.datepicker.init(); // blocks/datepicker
  app.validation.init(); // blocks/contacts-form
  app.ordersToggle.init(); // blocks/orders
  app.cardSlider.init(); // blocks/main-card
  app.acc.init(); // blocks/main-card
  app.sizesPopup.init(); // blocks/main-card
  app.reviewPopup.init(); // blocks/main-card
  app.burgerMenuSlider.init(); // blocks/burger-menu
  app.burgerMenu.init(); // blocks/burger-menu

  new LazyLoad();

  new WOW().init();

  GLightbox({
    loop: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  const showAnim = gsap.from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.5,
  }).progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  });

  gsap.from('.js-collection', {
    scrollTrigger: '.js-collection',
    duration: 1.5,
    opacity: 0,
    y: 200,
    stagger: 0.3,
  });

  gsap.from('.js-trends', {
    scrollTrigger: '.js-trends',
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.2,
  });

  gsap.from('.js-trends-img', {
    scrollTrigger: '.js-trends-img',
    duration: 1,
    opacity: 0,
    x: -150,
  });

  gsap.from('.js-promo-title', {
    duration: 1,
    opacity: 0,
    x: -150,
    delay: 0.4,
  });

  gsap.from('.js-promo-subtitle', {
    duration: 1,
    opacity: 0,
    x: 150,
    delay: 0.8,
  });
});
