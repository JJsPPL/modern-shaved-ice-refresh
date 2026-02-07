
/**
 * Script to handle logo display in the sidebar
 */
export function initLogoSelector(): void {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLogo);
  } else {
    setupLogo();
  }
}

function setupLogo(): void {
  const logoOption = document.querySelector('.logo-option');
  
  if (logoOption) {
    // Add preload to the image for faster loading
    const logoImg = logoOption.querySelector('img');
    if (logoImg && !logoImg.hasAttribute('loading')) {
      logoImg.setAttribute('loading', 'eager');
      logoImg.setAttribute('importance', 'high');
      
      // Ensure proper loading of the new logo
      logoImg.onerror = () => {
        console.error('Error loading logo, trying fallback');
        if (logoImg instanceof HTMLImageElement) {
          logoImg.src = '/images/8a353321-e0e5-4d7f-9b67-877147c62617.png';
        }
      };
    }
    
    console.log('Updated JJs Shaved Ice Logo initialized');
  }
}
