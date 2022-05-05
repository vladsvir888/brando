app.sliderSnap = {
  init() {
    const snapSlider = document.getElementById('slider-snap');

    if (!snapSlider) return;

    noUiSlider.create(snapSlider, {
      start: [0, 2500],
      snap: true,
      connect: true,
      range: {
        min: 0,
        '10%': 500,
        '20%': 1000,
        '30%': 1500,
        '40%': 2000,
        '50%': 2500,
        '60%': 3000,
        '70%': 3500,
        '80%': 4000,
        '90%': 4500,
        max: 5000,
      },
      format: wNumb({
        decimals: 0,
        suffix: ' ₽',
      }),
    });

    const snapValues = [
      document.getElementById('slider-snap-value-lower'),
      document.getElementById('slider-snap-value-upper'),
    ];

    snapSlider.noUiSlider.on('update', (values, handle) => {
      snapValues[handle].innerHTML = values[handle];
    });
  },
};
