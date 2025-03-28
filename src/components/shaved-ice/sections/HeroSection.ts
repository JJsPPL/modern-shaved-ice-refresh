
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
      
      <script>
        // This script will be executed when the hero section is added to the DOM
        document.addEventListener('DOMContentLoaded', function() {
          // Try to initialize the logo selector if it exists
          if (typeof window.initializeLogo === 'function') {
            window.initializeLogo();
          }
        });
      </script>
    </section>`;
}
