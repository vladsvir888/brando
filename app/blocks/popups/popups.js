app.popups = {
  init() {
    const popupBtns = document.querySelectorAll('[data-popup]');
    const popupCloseBtns = document.querySelectorAll('.js-popup-close');
    const popupOverlays = document.querySelectorAll('.js-popup');

    if (popupBtns.length === 0) return;

    function pressedEscHandler(e) {
      if (e.key === 'Escape') {
        document.querySelector('.js-popup.is-active').classList.remove('is-active');
        document.body.style.overflow = '';
      }

      document.removeEventListener('keydown', pressedEscHandler);
    }

    function openPopup(popup) {
      if (!popup) return;

      document.querySelectorAll('.js-popup.is-active').forEach((activePopup) => activePopup.classList.remove('is-active')); // close all popups before opening target popup

      popup.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      document.addEventListener('keydown', pressedEscHandler);
    }

    function closePopup(popup) {
      if (!popup) return;

      popup.classList.remove('is-active');
      document.body.style.overflow = '';

      document.removeEventListener('keydown', pressedEscHandler);
    }

    popupBtns.forEach((popupBtn) => {
      popupBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const popup = document.querySelector(popupBtn.dataset.popup);

        openPopup(popup);
      });

      popupBtn.addEventListener('keydown', (e) => { // disable the default behavior of space (open popup)
        if (e.code === 'Space') e.preventDefault();
      });
    });

    popupCloseBtns.forEach((popupCloseBtn) => {
      popupCloseBtn.addEventListener('click', () => {
        const popup = popupCloseBtn.closest('.js-popup');

        closePopup(popup);
      });
    });

    popupOverlays.forEach((popupOverlay) => {
      popupOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-popup')) {
          closePopup(e.target);
        }
      });
    });
  },
};
