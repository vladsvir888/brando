document.addEventListener('DOMContentLoaded', () => {
  app.cabinetPopup.init(); // blocks/popups
  app.popups.init(); // blocks/popups
  app.visibilityPassw.init(); // blocks/popups
  app.accordion.init(); // blocks/footer
  app.promoSlider.init(); // blocks/main/promo-slider
  app.aboutSlider.init(); // blocks/about/about-slider
  app.videoAlert.init(); // blocks/product-characteristics

  const phones = document.querySelectorAll('.phone');

  // маска для телефона
  phones.forEach((phone) => {
    IMask(
      phone, {
        mask: '+{7} (000) 000 00 00',
      },
    );
  });

  new WOW().init();

  new LazyLoad();
});
