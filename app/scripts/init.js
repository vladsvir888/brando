document.addEventListener('DOMContentLoaded', () => {
  app.cabinetPopup.init(); // blocks/popups
  app.popups.init(); // blocks/popups
  app.visibilityPassw.init(); // blocks/popups

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
