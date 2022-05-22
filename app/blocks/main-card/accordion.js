app.acc = {
  init() {
    const cardWrap = document.querySelector('.js-card-wrap');

    if (!cardWrap) return;

    function showContent(item) {
      if (item.style.maxHeight) {
        item.style.maxHeight = null;
      } else {
        item.style.maxHeight = `${item.scrollHeight}px`;
      }
    }

    cardWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-product-card-btn')) return;

      const parent = target.closest('.js-card-section');

      const hiddenContent = parent.querySelector('.js-card-hidden-list');

      const activeParent = document.querySelector('.js-card-section.is-active');

      if (activeParent && activeParent !== parent) {
        activeParent.classList.remove('is-active');

        const activeHiddenContent = activeParent.querySelector('.js-card-hidden-list');

        showContent(activeHiddenContent);
      }

      parent.classList.toggle('is-active');

      showContent(hiddenContent);
    });
  },
};
