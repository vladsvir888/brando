app.popups = {
  init() {
    const signinBtn = document.querySelector('.js-signin-btn');

    if (!signinBtn) return;

    const signinPopup = document.getElementById('signin-popup');

    if (!signinPopup) return;

    const signinPopupWrap = signinPopup.querySelector('.popup__wrap');

    signinBtn.addEventListener('click', () => {
      Swal.fire({
        showConfirmButton: false,
        html: signinPopupWrap,
        width: '50rem',
      });
    });

    const forgetBtn = document.querySelector('.js-forget-btn');

    if (!forgetBtn) return;

    const passwordRecoveryPopup = document.getElementById('passw-recovery-popup');

    if (!passwordRecoveryPopup) return;

    const passwordRecoveryPopupWrap = passwordRecoveryPopup.querySelector('.popup__wrap');

    forgetBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        showConfirmButton: false,
        html: passwordRecoveryPopupWrap,
        width: '50rem',
      });
    });

    const noAccBtn = document.querySelector('.js-noacc-btn');

    if (!noAccBtn) return;

    const signupPopup = document.getElementById('signup-popup');

    if (!signinPopup) return;

    const signupPopupWrap = signupPopup.querySelector('.popup__wrap');

    noAccBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        showConfirmButton: false,
        html: signupPopupWrap,
        width: '50rem',
      });
    });
  },
};
