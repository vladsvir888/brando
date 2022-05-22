app.sizesPopup = {
  init() {
    const sizesBtn = document.querySelector('.js-sizes-btn');

    if (!sizesBtn) return;

    const sizesPopup = document.querySelector('.table-size-popup').querySelector('.popup__wrap');

    sizesBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        showConfirmButton: false,
        html: sizesPopup,
        width: '60rem',
      });
    });
  },
};
