
import { styles } from './styles';
import { setupEventListeners } from './ShavedIceScripts';
import { getFullPageTemplate } from './template/PageTemplate';

/**
 * Injects the shaved ice page content directly into the document body for GitHub Pages compatibility
 */
export const injectShavedIceContent = (): void => {
  // Force document.body to be the target for GitHub Pages compatibility
  document.body.innerHTML = '';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.body.style.width = '100%';
  document.body.style.display = 'block';
  document.body.style.overflow = 'auto'; // Ensure scrolling works properly
  
  // Log environment information
  const isGitHubPages = window.location.href.includes('github.io');
  console.log('Environment:', {
    isGitHubPages,
    currentUrl: window.location.href,
    timestamp: new Date().toISOString()
  });
  
  // Inject the HTML content
  document.body.innerHTML = getFullPageTemplate(styles, setupEventListeners);
  
  // Add meta tags for performance optimization
  const metaTags = [
    { httpEquiv: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
    { httpEquiv: 'Pragma', content: 'no-cache' },
    { httpEquiv: 'Expires', content: '0' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
  ];
  
  metaTags.forEach(meta => {
    const metaElement = document.createElement('meta');
    if (meta.httpEquiv) {
      metaElement.httpEquiv = meta.httpEquiv;
    }
    if (meta.name) {
      metaElement.name = meta.name;
    }
    metaElement.content = meta.content;
    document.head.appendChild(metaElement);
  });
  
  // Add preload for hero image
  const preloadHeroImage = document.createElement('link');
  preloadHeroImage.rel = 'preload';
  preloadHeroImage.as = 'image';
  preloadHeroImage.href = '/images/86260f6b-8644-47d2-b65e-20f606c12303.png';
  document.head.appendChild(preloadHeroImage);
  
  // Setup images for lightbox functionality with a slight delay to ensure DOM is ready
  setTimeout(() => {
    setupImageLightbox();
  }, 500);

  console.log('Page rendered with optimized images from GitHub repository');
};

/**
 * Sets up lightbox functionality for images after the page content has been loaded
 */
function setupImageLightbox(): void {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img') as HTMLImageElement | null;
  const clickableImages = document.querySelectorAll('.clickable');
  const prevBtn = document.querySelector('.modal-prev') as HTMLElement | null;
  const nextBtn = document.querySelector('.modal-next') as HTMLElement | null;
  const closeBtn = document.querySelector('.modal-close') as HTMLElement | null;
  
  if (!modal || !modalImg || !prevBtn || !nextBtn || !closeBtn) {
    console.error('Lightbox modal elements not found');
    return;
  }
  
  const imageArray = Array.from(clickableImages) as HTMLImageElement[];
  let currentIndex = 0;
  
  console.log(`Found ${imageArray.length} clickable images to set up for lightbox`);
  
  // Add click event listener to each clickable image
  imageArray.forEach((img, index) => {
    img.onclick = function(this: HTMLImageElement) {
      if (modal) {
        modal.classList.add('active');
        if (modalImg) {
          modalImg.src = this.src;
          currentIndex = index;
          console.log(`Opened lightbox with image ${index + 1}: ${this.src}`);
        }
      }
    };
  });
  
  // Navigation buttons
  prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    if (modalImg && imageArray[currentIndex]) {
      modalImg.src = imageArray[currentIndex].src;
      console.log(`Navigated to previous image: ${currentIndex + 1}`);
    }
  };
  
  nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    if (modalImg && imageArray[currentIndex]) {
      modalImg.src = imageArray[currentIndex].src;
      console.log(`Navigated to next image: ${currentIndex + 1}`);
    }
  };
  
  // Close button
  closeBtn.onclick = function() {
    if (modal) {
      modal.classList.remove('active');
      console.log('Closed lightbox');
    }
  };
  
  // Close when clicking outside the image
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');
      console.log('Closed lightbox (clicked outside image)');
    }
  };
  
  // Keyboard navigation
  document.addEventListener('keydown', function(event) {
    if (!modal || !modal.classList.contains('active')) return;
    
    if (event.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (event.key === 'ArrowRight') {
      nextBtn.click();
    } else if (event.key === 'Escape') {
      closeBtn.click();
    }
  });
  
  console.log('Lightbox navigation setup complete');
}
