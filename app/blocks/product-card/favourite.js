app.favourite = {
  init() {
    const arrFavourite = [];

    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-like-btn')) return;

      const use = target.querySelector('use');

      if (target.classList.contains('is-active')) {
        target.classList.remove('is-active');
        use.setAttribute('xlink:href', './assets/images/sprite.svg#heart');

        arrFavourite.pop();

        if (arrFavourite.length === 0) {
          document.querySelector('.header__nums').remove();
          return;
        }

        if (document.querySelector('.header__nums')) {
          document.querySelector('.header__nums').remove();
        }

        document.querySelector('.header__favourite').insertAdjacentHTML('beforeend', `<div class="header__nums">${arrFavourite.length}</div>`);
      } else {
        target.classList.add('is-active');
        use.setAttribute('xlink:href', './assets/images/sprite.svg#heart-green');

        arrFavourite.push(target);

        if (document.querySelector('.header__nums')) {
          document.querySelector('.header__nums').remove();
        }

        document.querySelector('.header__favourite').insertAdjacentHTML('beforeend', `<div class="header__nums">${arrFavourite.length}</div>`);
      }
    });
  },
};
