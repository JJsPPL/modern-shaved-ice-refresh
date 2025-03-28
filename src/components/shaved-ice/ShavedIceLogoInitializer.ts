
/**
 * Initializes the logo selector functionality
 */
import { initLogoSelector } from './ShavedIceLogoScript';

export function initializeLogo(): void {
  // Initialize the logo selector
  initLogoSelector();
  
  // Set up an interval to check if the sidebar has been rendered
  // This handles cases where the sidebar is dynamically added to the DOM
  const checkInterval = setInterval(() => {
    if (document.querySelector('.logo-option')) {
      initLogoSelector();
      clearInterval(checkInterval);
    }
  }, 500);
  
  // Clear the interval after 10 seconds to prevent infinite checking
  setTimeout(() => clearInterval(checkInterval), 10000);
}
