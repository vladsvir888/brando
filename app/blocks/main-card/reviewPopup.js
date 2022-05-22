app.reviewPopup = {
  init() {
    const reviewBtn = document.querySelector('.js-review-btn');

    if (!reviewBtn) return;

    const reviewPopup = document.querySelector('.review-popup').querySelector('.popup__wrap');

    reviewBtn.addEventListener('click', () => {
      Swal.fire({
        showConfirmButton: false,
        html: reviewPopup,
        width: '50rem',
      });
    });
  },
};
