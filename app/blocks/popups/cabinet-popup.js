app.cabinetPopup = {
  init() {
    const cabinetPopup = document.querySelector('.js-cabinet-popup');
    const cabinetBtn = document.querySelector('.js-cabinet-btn');

    if (!cabinetPopup) return;

    cabinetBtn.addEventListener('mouseover', () => {
      cabinetPopup.classList.add('is-active');
    });

    cabinetBtn.addEventListener('mouseout', () => {
      cabinetPopup.classList.remove('is-active');
    });
  },
};
