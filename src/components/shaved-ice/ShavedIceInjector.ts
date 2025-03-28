
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
  
  // Add a meta tag to prevent caching on GitHub Pages
  if (isGitHubPages) {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = 'no-cache, no-store, must-revalidate';
    document.head.appendChild(meta);
    
    const pragma = document.createElement('meta');
    pragma.httpEquiv = 'Pragma';
    pragma.content = 'no-cache';
    document.head.appendChild(pragma);
    
    const expires = document.createElement('meta');
    expires.httpEquiv = 'Expires';
    expires.content = '0';
    document.head.appendChild(expires);
  }
  
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
      // Use an explicit typed function to ensure TypeScript knows `this` is HTMLImageElement
      img.onclick = function(this: HTMLImageElement) {
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
