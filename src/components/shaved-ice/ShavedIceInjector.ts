
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
    const isGitHubPages = window.location.href.includes('github.io');
    console.log(`Running in GitHub Pages environment: ${isGitHubPages}`);
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      try {
        // Check if the image has already been processed
        if (img.getAttribute('data-processed') === 'true') {
          return;
        }

        // Get original src for logging
        const originalSrc = img.src;
        
        // Extract the filename from the path
        let filename = '';
        
        if (img.src.includes('/')) {
          filename = img.src.split('/').pop() || '';
        } else {
          filename = img.src;
        }
        
        // Skip if the image is already a placeholder or an external URL
        if (filename.includes('placehold.co') || 
            (img.src.startsWith('http') && !img.src.includes(window.location.host))) {
          console.log(`Skipping external image: ${img.src}`);
          return;
        }
        
        // For GitHub Pages we need to use the repo name in the path
        let newSrc = filename;
        
        // Add cache-busting parameter
        if (!newSrc.includes('?')) {
          newSrc = `${newSrc}${cacheBuster}`;
        }
        
        // Set the new src attribute
        img.src = newSrc;
        img.setAttribute('data-processed', 'true');
        
        console.log(`Updated image path from ${originalSrc} to ${img.src}`);
        
        // Add error handling for each image
        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
          const flavorName = img.alt.split(' ')[0] || 'Flavor';
          const bgColor = getColorForFlavor(img.alt);
          
          // Replace the img with a div
          const placeholder = document.createElement('div');
          placeholder.style.backgroundColor = bgColor;
          placeholder.style.display = 'flex';
          placeholder.style.alignItems = 'center';
          placeholder.style.justifyContent = 'center';
          placeholder.style.color = 'white';
          placeholder.style.fontWeight = 'bold';
          placeholder.style.fontSize = '1.5rem';
          placeholder.style.textAlign = 'center';
          placeholder.style.padding = '10px';
          placeholder.style.width = '100%';
          placeholder.style.height = '100%';
          placeholder.style.minHeight = '150px';
          placeholder.style.borderRadius = '8px';
          placeholder.className = img.className;
          placeholder.innerText = flavorName;
          
          // Replace the image with our placeholder
          if (img.parentNode) {
            img.parentNode.replaceChild(placeholder, img);
          }
        };
      } catch (error) {
        console.error('Error processing image:', error);
      }
    });
    
    console.log(`Applied path fixing and cache-busting to ${images.length} images`);
  }, 100);
};

// Helper function to get color based on flavor name
function getColorForFlavor(altText: string): string {
  const text = altText.toLowerCase();
  
  if (text.includes('blueberry')) return '#3e92cc';
  if (text.includes('strawberry')) return '#ff6b6b';
  if (text.includes('lime')) return '#7bc950';
  if (text.includes('mango')) return '#ffbe0b';
  if (text.includes('cotton candy')) return '#e83f6f';
  if (text.includes('chocolate')) return '#6f4e37';
  if (text.includes('oreo')) return '#5c6b7a';
  if (text.includes('calamanci')) return '#ffb347';
  if (text.includes('pickled eggs')) return '#9c27b0';
  if (text.includes('pickled papaya')) return '#ff9800';
  if (text.includes('chicken')) return '#1e88e5';
  if (text.includes('brisket')) return '#ff5722';
  if (text.includes('helper')) return '#009688';
  if (text.includes('order')) return '#673ab7';
  if (text.includes('booth')) return '#795548';
  if (text.includes('jj')) return '#2196f3';
  
  // Default color
  return '#3e92cc';
}
