app.videoAlert = {
  init() {
    const video = document.querySelector('.js-video-block');

    if (!video) return;

    video.addEventListener('click', () => {
      Swal.fire({
        width: 1200,
        html: '<iframe class="video-iframe" src="https://www.youtube.com/embed/hhMxWSvXFVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          popup: 'iframe-popup',
          closeButton: 'iframe-popup-close',
        },
      });
    });
  },
};
