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

  new LazyLoad();

  new WOW().init();

  GLightbox({
    loop: true,
  });
});
