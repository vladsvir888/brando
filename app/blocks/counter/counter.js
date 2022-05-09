app.counter = {
  init() {
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-plus-btn')) return;

      const value = target.previousElementSibling;

      value.textContent++;
    });

    document.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-minus-btn')) return;

      const value = target.nextElementSibling;

      if (value.textContent > 1) {
        value.textContent--;
      }
    });
  },
};
