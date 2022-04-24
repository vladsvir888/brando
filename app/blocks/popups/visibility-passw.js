app.visibilityPassw = {
  init() {
    const passwBtns = document.querySelectorAll('.js-passw-toggle');

    if (passwBtns.length === 0) return;

    passwBtns.forEach((passwBtn) => {
      passwBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const parent = e.target.closest('.popup__passw-block');

        const input = parent.querySelector('input');

        if (input.getAttribute('type') === 'password') {
          input.setAttribute('type', 'text');
          parent.querySelector('svg').classList.add('popup__passw-icon--hide');
          parent.querySelector('use').setAttribute('xlink:href', './assets/images/sprite.svg#hide-passw');
        } else {
          input.setAttribute('type', 'password');
          parent.querySelector('svg').classList.remove('popup__passw-icon--hide');
          parent.querySelector('use').setAttribute('xlink:href', './assets/images/sprite.svg#show-passw');
        }
      });
    });
  },
};
