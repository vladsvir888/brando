app.accordion = {
  init() {
    const footerWrap = document.querySelector('.js-footer-wrap');

    if (!footerWrap) return;

    function showContent(item) {
      if (item.style.maxHeight) {
        item.style.maxHeight = null;
      } else {
        item.style.maxHeight = `${item.scrollHeight}px`;
      }
    }

    footerWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-acc-btn')) return;

      const parent = target.closest('.footer__categories-inner');

      const hiddenContent = parent.querySelector('.footer__categories');

      const activeParent = document.querySelector('.footer__categories-inner.is-active');

      if (activeParent && activeParent !== parent) {
        activeParent.classList.remove('is-active');

        const activeHiddenContent = activeParent.querySelector('.footer__categories');

        showContent(activeHiddenContent);
      }

      parent.classList.toggle('is-active');

      showContent(hiddenContent);
    });
  },
};
