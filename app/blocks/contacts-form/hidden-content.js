app.hiddenContent = {
  init() {
    const contactsForm = document.querySelector('.js-contacts-form');

    if (!contactsForm) return;

    const hiddenContent = document.querySelector('.contacts-form__hidden-content');

    if (!hiddenContent) return;

    contactsForm.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('radio')) return;

      if (target.classList.contains('js-hidden-content')) {
        hiddenContent.style.maxHeight = `${hiddenContent.scrollHeight}px`;
        hiddenContent.style.overflow = 'unset';
        hiddenContent.style.paddingTop = '2rem';
      } else {
        hiddenContent.style.maxHeight = '';
        hiddenContent.style.overflow = 'hidden';
        hiddenContent.style.paddingTop = '0';
      }
    });
  },
};
