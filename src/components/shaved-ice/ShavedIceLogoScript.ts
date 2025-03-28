
/**
 * Script to handle logo selection in the sidebar
 */
export function initLogoSelector(): void {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLogoSelector);
  } else {
    setupLogoSelector();
  }
}

function setupLogoSelector(): void {
  const logoOption = document.querySelector('.logo-option');
  
  if (logoOption) {
    // Ensure the logo option is selected
    logoOption.classList.add('selected');
    
    console.log('Logo initialized: Bull Shield (Modified)');
  }
}
