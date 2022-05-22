app.burgerMenu = {
  init() {
    const burger = document.querySelector('.js-burger');
    const burgerMenu = document.querySelector('.js-burger-menu');

    if (!burger) return;

    burger.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        burger.classList.toggle('is-active');
        burgerMenu.classList.toggle('is-active');

        if (document.querySelectorAll('.burger-submenu.is-active').length !== 0) {
          document.querySelectorAll('.burger-submenu.is-active').forEach((submenuActive) => submenuActive.classList.remove('is-active'));
        }

        return;
      }

      burgerMenu.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });

    const burgerCloseBtn = document.querySelector('.js-burger-close');

    burgerCloseBtn.addEventListener('click', () => {
      burgerMenu.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    const submenuBtns = document.querySelectorAll('.js-submenu-btn');

    submenuBtns.forEach((submenuBtn) => {
      submenuBtn.addEventListener('click', () => {
        const submenu = document.querySelector('.burger-submenu');

        submenu.classList.toggle('is-active');
      });
    });

    const addSubmenuBtns = document.querySelectorAll('button[data-submenu]');

    addSubmenuBtns.forEach((addSubmenuBtn) => {
      addSubmenuBtn.addEventListener('click', () => {
        const addSubmenus = document.querySelectorAll('.js-addsubmenu');

        addSubmenus.forEach((addSubmenu) => {
          if (addSubmenu.id === addSubmenuBtn.dataset.submenu) {
            addSubmenu.classList.add('is-active');
          } else {
            addSubmenu.classList.remove('is-active');
          }

          addSubmenu.querySelector('button').addEventListener('click', () => {
            addSubmenu.classList.remove('is-active');
          });
        });
      });
    });
  },
};
