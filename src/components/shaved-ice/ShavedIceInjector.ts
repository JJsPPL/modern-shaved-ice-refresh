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
  
  // Set a cache-busting parameter and determine if we're on GitHub Pages
  const cacheBuster = `?v=${Date.now()}`;
  const isGitHubPages = window.location.href.includes('github.io');
  const baseUrl = isGitHubPages ? '/modern-shaved-ice-refresh' : '';
  
  // Log environment information
  console.log('Environment:', {
    isGitHubPages,
    baseUrl,
    currentUrl: window.location.href
  });
  
  // Inject the HTML content
  document.body.innerHTML = getFullPageTemplate(styles, setupEventListeners);
  
  // Fix image paths and add error handling
  setTimeout(() => {
    const images = document.querySelectorAll('img');
    console.log(`Processing ${images.length} images`);
    
    images.forEach(img => {
      try {
        if (img.getAttribute('data-processed') === 'true') return;
        
        const originalSrc = img.src;
        let newSrc = '';
        
        // Skip external images and placeholders
        if (img.src.includes('placehold.co') || 
            (img.src.startsWith('http') && !img.src.includes(window.location.host))) {
          console.log('Skipping external image:', img.src);
          return;
        }
        
        // Extract filename and build new path
        const filename = img.src.split('/').pop() || '';
        newSrc = `${baseUrl}/${filename}${cacheBuster}`;
        
        // Update image source
        img.src = newSrc;
        img.setAttribute('data-processed', 'true');
        console.log('Updated image path:', { from: originalSrc, to: newSrc });
        
        // Add error handling
        img.onerror = () => {
          console.error('Failed to load image:', newSrc);
          const flavorName = img.alt.split(' ')[0] || 'Flavor';
          const bgColor = getColorForFlavor(img.alt);
          
          const placeholder = document.createElement('div');
          Object.assign(placeholder.style, {
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '10px',
            width: '100%',
            height: '100%',
            minHeight: '150px',
            borderRadius: '8px'
          });
          placeholder.className = img.className;
          placeholder.innerText = flavorName;
          
          if (img.parentNode) {
            img.parentNode.replaceChild(placeholder, img);
          }
        };
      } catch (error) {
        console.error('Error processing image:', error);
      }
    });
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
