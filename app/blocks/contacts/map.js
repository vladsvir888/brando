app.map = {
  name: 'Карта',
  init() {
    if (typeof ymaps === 'undefined') return;

    function init() {
      const map = new ymaps.Map('map', {
        center: [55.753215, 37.622504],
        zoom: 3,
      }, {
        searchControlProvider: 'yandex#search',
      });

      const points = [[56.042260, 92.870933], [44.945175, 34.095871]];

      points.forEach((point) => {
        const placemark = new ymaps.Placemark(point, {
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../assets/images/sprite-icons/map-marker.svg',
          iconImageSize: [40, 40],
        });
        map.geoObjects.add(placemark);
      });

      map.behaviors.disable('scrollZoom');
    }

    ymaps.ready(init);
  },
};
