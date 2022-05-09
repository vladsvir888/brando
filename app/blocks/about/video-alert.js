app.videoAlert = {
  init() {
    const video = document.querySelector('.js-video-block');

    if (!video) return;

    video.addEventListener('click', () => {
      Swal.fire({
        width: '120rem',
        showConfirmButton: false,
        html: `
        <div class="video-iframe">
          <iframe class="video-iframe__video" src="https://www.youtube.com/embed/hhMxWSvXFVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <button class="video-iframe__close-btn" onclick="Swal.close(); return false;">
            <svg class="video-iframe__close-icon" viewBox="0 0 100 100">
              <use xlink:href="./assets/images/sprite.svg#popup-close"></use>
            </svg>
          </button>
        </div>
        `,
      });
    });
  },
};
