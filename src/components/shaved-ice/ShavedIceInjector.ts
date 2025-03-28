
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
    currentUrl: window.location.href
  });
  
  // Inject the HTML content
  document.body.innerHTML = getFullPageTemplate(styles, setupEventListeners);
  
  // Setup images for lightbox functionality
  setTimeout(() => {
    setupImageLightbox();
  }, 500);

  console.log('Page rendered with images from GitHub repository');
};

/**
 * Sets up lightbox functionality for images after the page content has been loaded
 */
function setupImageLightbox(): void {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img') as HTMLImageElement | null;
  const clickableImages = document.querySelectorAll('.clickable');
  
  if (!modal || !modalImg) {
    console.error('Lightbox modal elements not found');
    return;
  }
  
  console.log(`Found ${clickableImages.length} clickable images to set up for lightbox`);
  
  // Add click event listener to each clickable image
  clickableImages.forEach((img: Element) => {
    if (img instanceof HTMLImageElement) {
      img.onclick = function() {
        if (modal) {
          modal.classList.add('active');
        }
        if (modalImg) {
          modalImg.src = this.src;
        }
      };
      console.log(`Set up lightbox for image: ${img.src}`);
    } else {
      console.log('Found non-image clickable element', img);
    }
  });
}
