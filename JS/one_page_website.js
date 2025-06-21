document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  let currentIndex = 0;
  const imageSources = Array.from(images).map(img => img.src);

  function showImage(index) {
    currentIndex = index;
    lightboxImg.src = imageSources[currentIndex];
    lightbox.style.display = 'flex';
  }

  images.forEach((img, i) => {
    img.addEventListener('click', () => showImage(i));
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage((currentIndex + 1) % imageSources.length);
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage((currentIndex - 1 + imageSources.length) % imageSources.length);
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
