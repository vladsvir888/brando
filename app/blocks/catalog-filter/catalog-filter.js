app.catalogFilter = {
  init() {
    const catalogFilterWrap = document.querySelector('.js-catalog-filter');

    if (!catalogFilterWrap) return;

    // show/hide hidden options
    function toggle(item) {
      if (item) {
        item.classList.toggle('is-active');

        const selectDropdown = item.querySelector('.js-select-dropdown');

        if (!selectDropdown) return;

        if (selectDropdown.style.maxHeight) {
          selectDropdown.style.maxHeight = null;
        } else {
          selectDropdown.style.maxHeight = '19rem';
        }
      }
    }

    catalogFilterWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.classList.contains('js-filter-select')) return;

      const selectActive = catalogFilterWrap.querySelector('.js-filter-select.is-active');

      if (selectActive && selectActive !== target) {
        toggle(selectActive);
      }

      toggle(target);
    });

    // show/hide selected options
    const gridFilter = catalogFilterWrap.querySelector('.js-grid-filter');

    if (!gridFilter) return;

    gridFilter.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'INPUT' && target.type !== 'checkbox') return;

      const numCheckedInputs = target.closest('.js-select-dropdown').querySelectorAll('input:checked').length;

      const wrapWithNum = target.closest('.js-filter-select').querySelector('.catalog-filter__select-end');

      if (wrapWithNum.querySelector('.catalog-filter__select-num')) {
        wrapWithNum.querySelector('.catalog-filter__select-num').remove();
      }

      wrapWithNum.insertAdjacentHTML('afterbegin', `<span class="catalog-filter__select-num">${numCheckedInputs}</span>`);

      if (numCheckedInputs === 0) {
        wrapWithNum.querySelector('.catalog-filter__select-num').remove();
      }

      const lastChildLabel = target.closest('.label').lastElementChild.textContent;

      const selectedFilterWrap = document.querySelector('.js-selected-filter');

      if (target.checked) {
        selectedFilterWrap.insertAdjacentHTML('afterbegin', `<div class="catalog-filter__selected-item">${lastChildLabel}</div>`);
      } else {
        selectedFilterWrap.querySelector('.catalog-filter__selected-item').remove();
      }
    });

    // sort
    const sortWrap = document.querySelector('.js-sort-wrap');

    sortWrap.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.dataset.type) return;

      const attr = target.dataset.type;

      const closestWrap = target.closest('.js-filter-select');

      const sortParam = closestWrap.querySelector('.catalog-filter__sort-param');

      sortParam.setAttribute('data-type', attr);
      sortParam.textContent = attr;

      closestWrap.classList.remove('is-active');
    });

    // show more filters
    const allFilterBtn = catalogFilterWrap.querySelector('.js-all-filter-btn');

    if (!allFilterBtn) return;

    allFilterBtn.addEventListener('click', () => {
      const hiddenFilter = catalogFilterWrap.querySelector('.js-hidden-filter');

      if (hiddenFilter.style.maxHeight) {
        hiddenFilter.style.maxHeight = null;
        hiddenFilter.style.overflow = 'hidden';
        allFilterBtn.classList.remove('is-active');
      } else {
        hiddenFilter.style.maxHeight = `${hiddenFilter.scrollHeight}px`;
        hiddenFilter.style.overflow = 'visible';
        allFilterBtn.classList.add('is-active');
      }
    });

    // reset all data from filters
    const resetBtn = catalogFilterWrap.querySelector('.js-reset-btn');

    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
      catalogFilterWrap.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
        checkbox.checked = false;
      });

      catalogFilterWrap.querySelectorAll('.catalog-filter__selected-item').forEach((item) => item.remove());

      catalogFilterWrap.querySelectorAll('.catalog-filter__select-num').forEach((num) => num.remove());

      catalogFilterWrap.querySelectorAll('.js-filter-select').forEach((select) => select.classList.remove('is-active'));

      const sortFilter1 = catalogFilterWrap.querySelectorAll('.catalog-filter__sort-filter')[0];
      const sortParam1 = sortFilter1.querySelector('.catalog-filter__sort-param');

      sortParam1.dataset.type = 'По возрастанию цены';
      sortParam1.textContent = 'По возрастанию цены';

      const sortFilter2 = catalogFilterWrap.querySelectorAll('.catalog-filter__sort-filter')[1];
      const sortParam2 = sortFilter2.querySelector('.catalog-filter__sort-param');

      sortParam2.dataset.type = '12';
      sortParam2.textContent = '12';
    });
  },
};
