
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
    }
    
    console.log('New JJs Shaved Ice Logo initialized');
  }
}
