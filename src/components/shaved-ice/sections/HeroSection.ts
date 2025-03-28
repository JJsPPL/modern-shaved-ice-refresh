
/**
 * Returns the HTML for the hero section
 */
import { initializeLogo } from '../ShavedIceLogoInitializer';

export function getHeroSectionHTML(): string {
  // Initialize logo selector
  setTimeout(() => {
    initializeLogo();
  }, 1000);
  
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="/lovable-uploads/86260f6b-8644-47d2-b65e-20f606c12303.png" alt="JJs Shaved Ice Experience" class="hero clickable">
      
      <!-- New Beach Paradise logo will be visible in the sidebar logo options -->
      <div style="display: none;">
        <div class="beach-girl-logo" id="beach-girl-logo-template">
          <img src="/lovable-uploads/9ec8f343-ccbd-4615-929f-4a870ce4051b.png" alt="Beach Girl Enjoying Shaved Ice" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
          <div class="logo-text">JJ's Shaved Ice</div>
        </div>
      </div>
      
      <script>
        // This script will be executed when the hero section is added to the DOM
        document.addEventListener('DOMContentLoaded', function() {
          // Try to initialize the logo selector if it exists
          if (typeof window.initializeLogo === 'function') {
            window.initializeLogo();
          }
          
          // Add the new Beach Paradise logo to the sidebar
          setTimeout(() => {
            const logoContainer = document.querySelector('.logo-selection');
            if (logoContainer) {
              const beachGirlOption = document.createElement('div');
              beachGirlOption.className = 'logo-option';
              beachGirlOption.setAttribute('data-logo', '5');
              
              // Clone the template
              const logoTemplate = document.getElementById('beach-girl-logo-template');
              if (logoTemplate) {
                beachGirlOption.innerHTML = logoTemplate.outerHTML;
                
                // Add description
                const description = document.createElement('div');
                description.className = 'logo-description';
                description.textContent = 'Beach Paradise: Relax and enjoy our refreshing treats in a tropical paradise setting. Represents leisure, joy, and the perfect vacation experience.';
                beachGirlOption.appendChild(description);
                
                logoContainer.appendChild(beachGirlOption);
                
                // Reinitialize the logo selector to add event listeners
                if (typeof window.initLogoSelector === 'function') {
                  window.initLogoSelector();
                }
              }
            }
          }, 1500);
        });
      </script>
    </section>`;
}
