
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
  
  // Set a cache-busting parameter
  const cacheBuster = `?v=${Date.now()}`;
  
  // Inject the HTML content directly into the body element
  document.body.innerHTML = getFullPageTemplate(styles, setupEventListeners);
  
  // Add cache-busting to images and fix paths for GitHub Pages
  setTimeout(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Fix the image path for GitHub Pages - ensure it has the correct base path
      if (img.src.includes('/') && !img.src.includes('http')) {
        // Extract the filename from the path
        const filename = img.src.split('/').pop();
        if (filename) {
          // Set the correct path for GitHub Pages
          img.src = `./${filename}`;
        }
      }
      
      // Add cache-busting parameter
      if (!img.src.includes('?')) {
        img.src = img.src + cacheBuster;
      }
    });
    console.log(`Applied path fixing and cache-busting to ${images.length} images`);
  }, 100);
};
