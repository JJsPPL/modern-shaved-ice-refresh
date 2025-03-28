
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
  const logoOptions = document.querySelectorAll('.logo-option');
  
  // Add click event listeners to each logo option
  logoOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove selected class from all options
      logoOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      option.classList.add('selected');
      
      // Optional: Save selection to localStorage
      const logoId = option.getAttribute('data-logo');
      if (logoId) {
        localStorage.setItem('selected-logo', logoId);
      }
      
      // Get descriptive name based on logo ID
      let logoName = "Default";
      switch(logoId) {
        case "1": logoName = "Bull Shield"; break;
        case "2": logoName = "Market Chart"; break;
        case "3": logoName = "Cosmic Pillar"; break;
        case "4": logoName = "Corporate Shield"; break;
      }
      
      console.log(`Selected logo option: ${logoName} (ID: ${logoId})`);
    });
  });
  
  // Restore previously selected logo from localStorage if available
  const savedLogo = localStorage.getItem('selected-logo');
  if (savedLogo) {
    const savedOption = document.querySelector(`.logo-option[data-logo="${savedLogo}"]`);
    if (savedOption) {
      logoOptions.forEach(opt => opt.classList.remove('selected'));
      savedOption.classList.add('selected');
    }
  }
}
