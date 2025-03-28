
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
  
  // No need to process images since we're using colored blocks as fallbacks
  console.log('Page rendered with colored blocks instead of images for maximum compatibility');
};
