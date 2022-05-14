app.visibilityPassw = {
  init() {
    const passwBtns = document.querySelectorAll('.js-passw-toggle');

    console.log(passwBtns);

    if (passwBtns.length === 0) return;

    passwBtns.forEach((passwBtn) => {
      passwBtn.addEventListener('click', () => {
        // e.preventDefault();

        const parent = passwBtn.closest('.js-passw-wrap');

        const input = parent.querySelector('input');

        if (input.getAttribute('type') === 'password') {
          input.setAttribute('type', 'text');
          parent.querySelector('svg').classList.add('passw-icon--hide');
          parent.querySelector('use').setAttribute('xlink:href', './assets/images/sprite.svg#hide-passw');
        } else {
          input.setAttribute('type', 'password');
          parent.querySelector('svg').classList.remove('passw-icon--hide');
          parent.querySelector('use').setAttribute('xlink:href', './assets/images/sprite.svg#show-passw');
        }
      });
    });
  },
};
