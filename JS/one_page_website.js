document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const galleryImages = document.querySelectorAll('.gallery-image');

  let currentIndex = 0;

  // Show lightbox and image at given index
  function showImage(index) {
    const img = galleryImages[index];
    lightboxImg.src = img.getAttribute('data-large');
    lightboxImg.alt = img.alt;
    lightbox.style.display = 'flex';
    currentIndex = index;
  }

  // Open lightbox on thumbnail click
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      showImage(index);
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });

  // Close lightbox clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });

  // Show previous image
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  // Show next image
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });
});
