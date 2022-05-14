app.popups = {
  init() {
    const signinBtn = document.querySelector('.js-signin-btn');

    if (!signinBtn) return;

    // клонируем попап входа
    const signinPopup = document.querySelector('.signin-popup').querySelector('.popup__wrap').cloneNode(true);

    signinBtn.addEventListener('click', () => {
      Swal.fire({
        showConfirmButton: false,
        html: signinPopup,
        width: '50rem',
      });
    });

    // в нем ищем кнопку, которая открывает попап восстановление пароля
    const forgetBtn = signinPopup.querySelector('.js-forget-btn');

    if (!forgetBtn) return;

    const passwordRecoveryPopup = document.querySelector('.passw-recovery-popup').querySelector('.popup__wrap').cloneNode(true);

    forgetBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        showConfirmButton: false,
        html: passwordRecoveryPopup,
        width: '50rem',
      });
    });

    // в нем ищем кнопку, которая открывает попап зарегистрироваться
    const noAccBtn = signinPopup.querySelector('.js-noacc-btn');

    if (!noAccBtn) return;

    const signupPopup = document.querySelector('.signup-popup').querySelector('.popup__wrap').cloneNode(true);

    noAccBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        showConfirmButton: false,
        html: signupPopup,
        width: '50rem',
      });
    });

    const cbBtns = document.querySelectorAll('.js-callback-btn');

    if (cbBtns.length === 0) return;

    const cbPopup = document.querySelector('.callback-popup').querySelector('.popup__wrap');

    cbBtns.forEach((cbBtn) => {
      cbBtn.addEventListener('click', () => {
        Swal.fire({
          showConfirmButton: false,
          html: cbPopup,
          width: '50rem',
        });
      });
    });
  },
};
