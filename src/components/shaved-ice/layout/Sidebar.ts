
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <!-- Modified Bull Shield Logo -->
      <div class="logo-option selected" data-logo="1">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bull-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#D946EF;stop-opacity:0.7" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" rx="20" fill="url(#bull-gradient)"/>
          
          <!-- Bull Shield (representing strength and protection) -->
          <path d="M120,40 L60,70 L60,130 C60,170 120,200 120,200 C120,200 180,170 180,130 L180,70 L120,40 Z" 
                fill="url(#pink-gradient)" fill-opacity="0.8" stroke="#000" stroke-width="2"/>
          
          <!-- Bull/Ox Head (representing strength and determination) -->
          <path d="M120,70 L90,90 L70,85 L60,100 L80,120 L100,125 L120,140 
                  L140,125 L160,120 L180,100 L170,85 L150,90 L120,70 Z" 
                fill="#000" fill-opacity="0.8"/>
          
          <!-- Horns (representing protection and power) -->
          <path d="M70,85 L50,65 L45,80 L60,100 Z" 
                fill="#000" fill-opacity="0.6"/>
          <path d="M170,85 L190,65 L195,80 L180,100 Z" 
                fill="#000" fill-opacity="0.6"/>
          
          <!-- Hidden "J" in left horn -->
          <path d="M55,70 C55,65 60,65 60,70 L60,75 C55,75 55,72 55,70 Z" 
                fill="#D946EF" fill-opacity="0.9"/>
          
          <!-- Hidden "J" in right horn -->
          <path d="M185,70 C185,65 180,65 180,70 L180,75 C185,75 185,72 185,70 Z" 
                fill="#D946EF" fill-opacity="0.9"/>
          
          <!-- Shaved Ice (represented as a cone below) -->
          <path d="M95,135 L120,170 L145,135 Z" 
                fill="#000" stroke="#D946EF" stroke-width="1"/>
          
          <!-- Ice crystals (dots on the shield) -->
          <circle cx="90" cy="100" r="3" fill="#D946EF"/>
          <circle cx="150" cy="100" r="3" fill="#D946EF"/>
          <circle cx="120" cy="110" r="3" fill="#D946EF"/>
        </svg>
      </div>
      
      <h1>JJ's Premium Delights</h1>
    </div>
    
    <nav class="nav-links">
      <a href="#menu" class="nav-link">Our Menu</a>
      <a href="#events" class="nav-link">Our Events</a>
      <a href="#upcoming" class="nav-link">Upcoming</a>
      <a href="#rentals" class="nav-link">Rentals</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#sponsors" class="nav-link">Sponsors</a>
    </nav>
  </aside>`;
}
