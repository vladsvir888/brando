app.ordersToggle = {
  init() {
    const ordersWrap = document.querySelector('.js-orders-wrap');

    if (!ordersWrap) return;

    function toggle(item) {
      item.classList.toggle('is-active');

      const hiddenItem = item.querySelector('.js-orders-hidden-item');

      if (hiddenItem.style.maxHeight) {
        hiddenItem.style.maxHeight = null;
      } else {
        hiddenItem.style.maxHeight = `${hiddenItem.scrollHeight}px`;
      }
    }

    ordersWrap.addEventListener('click', (e) => {
      const { target } = e;

      // if (!target.classList.contains('js-orders-btn')) return;

      if (!target.classList.contains('js-orders-btn')) {
        const closestEl = target.closest('.orders-section__wrap');

        if (!closestEl) {
          const activeItem = ordersWrap.querySelector('.orders-section__item.is-active');

          if (!activeItem) return;

          activeItem.classList.remove('is-active');
          activeItem.querySelector('.js-orders-hidden-item').style.maxHeight = null;

          return;
        }

        return;
      }

      const parent = target.closest('.orders-section__item');

      const activeParent = ordersWrap.querySelector('.orders-section__item.is-active');

      if (activeParent && activeParent !== parent) {
        toggle(activeParent);
      }

      toggle(parent);
    });
  },
};
