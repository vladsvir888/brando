app.validation = {
  init() {
    const contactsForm = document.querySelector('.js-contacts-form');

    if (!contactsForm) return;

    const phones = document.querySelectorAll('.phone');

    // маска для телефона
    phones.forEach((phone) => {
      IMask(
        phone, {
          mask: '+{7} (000) 000 00 00',
        },
      );
    });

    const name = document.querySelector('.name');
    const surname = document.querySelector('.surname');
    const phone = document.querySelector('.contacts-form__phone-input');

    function showSuccess(input) {
      const parent = input.closest('.contacts-form__label');

      parent.classList.remove('error');
    }

    function showError(input) {
      const parent = input.closest('.contacts-form__label');

      parent.classList.add('error');
    }

    function validate() {
      if (name.value.trim().length > 0) {
        showSuccess(name);
      } else {
        showError(name);
      }

      if (surname.value.trim().length > 0) {
        showSuccess(surname);
      } else {
        showError(surname);
      }

      if (phone.value.length > 0 && phone.value.length > 17) {
        showSuccess(phone);
      } else {
        showError(phone);
      }
    }

    contactsForm.addEventListener('submit', (e) => {
      e.preventDefault();

      validate();

      if (!document.querySelector('.error')) {
        console.log('success');
      }
    });
  },
};
