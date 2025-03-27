
/**
 * JavaScript functions for the shaved ice page
 */
export const setupEventListeners = `
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Lightbox functionality
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const clickableImages = document.querySelectorAll('.clickable');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');
  
  let currentIndex = 0;
  const imageArray = Array.from(clickableImages);
  
  // Open modal with clicked image
  clickableImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = img.src;
      currentIndex = index;
    });
  });
  
  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  // Navigate to previous image
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    modalImg.src = imageArray[currentIndex].src;
  });
  
  // Navigate to next image
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageArray.length;
    modalImg.src = imageArray[currentIndex].src;
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
        modalImg.src = imageArray[currentIndex].src;
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % imageArray.length;
        modalImg.src = imageArray[currentIndex].src;
      } else if (e.key === 'Escape') {
        modal.classList.remove('active');
      }
    }
  });
`;
