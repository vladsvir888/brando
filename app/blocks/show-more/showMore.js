app.showMore = {
  init() {
    const showMore = document.querySelector('.js-show-more');

    if (!showMore) return;

    showMore.addEventListener('click', () => {
      showMore.textContent = 'Загрузка...';
      const url = 'assets/data.json';

      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const catalogWrap = document.querySelector('.catalog-section__grid');

          const arr = result.data;

          arr.forEach((item) => {
            const template = catalogWrap.querySelector('.swiper-slide').cloneNode(true);

            template.querySelector('.product-card__title').textContent = item.title;
            template.querySelector('.product-card__descr').textContent = item.descr;
            template.querySelector('.product-card__current-price').textContent = item.price;

            template.querySelectorAll('picture img').forEach((img) => {
              img.setAttribute('src', item.jpgImg);
            });

            template.querySelectorAll('picture source').forEach((picture) => {
              picture.setAttribute('srcset', item.webpImg);
            });

            catalogWrap.append(template);
          });

          // lazyLoadInstance.update();
          app.productSlider.init();
        })
        .catch((err) => console.error(err))
        .finally(() => {
          showMore.textContent = 'Показать еще';
        });
    });
  },
};
