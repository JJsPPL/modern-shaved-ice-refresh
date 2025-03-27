
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
      // Check if the image has already been updated
      if (img.getAttribute('data-processed') === 'true') {
        return;
      }

      // Extract the filename from the path
      let filename = '';
      
      if (img.src.includes('/')) {
        filename = img.src.split('/').pop() || '';
      } else {
        filename = img.src;
      }
      
      // Skip if the image is already a placeholder or an external URL
      if (filename.includes('placehold.co') || img.src.startsWith('http')) {
        return;
      }
      
      // Make sure we're using forward slashes and remove any double slashes
      let newSrc = '';
      
      // For GitHub Pages compatibility
      if (window.location.href.includes('github.io')) {
        // Use absolute paths for GitHub Pages
        newSrc = `${filename}`;
      } else {
        // Use relative paths for local/preview environments
        newSrc = `./${filename}`;
      }
      
      // Add cache-busting parameter if not already present
      if (!newSrc.includes('?')) {
        newSrc = `${newSrc}${cacheBuster}`;
      }
      
      // Set the new src attribute
      img.src = newSrc;
      
      // Mark as processed to avoid double-processing
      img.setAttribute('data-processed', 'true');
      
      console.log(`Updated image path: ${img.src}`);
    });
    
    console.log(`Applied path fixing and cache-busting to ${images.length} images`);
  }, 100);
};
