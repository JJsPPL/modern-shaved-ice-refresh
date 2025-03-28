
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <div class="logo-text">JJ's Shaved Ice</div>
      
      <!-- Logo Option 1: Bull Shield -->
      <div class="logo-option selected" data-logo="1">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bull-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FF5733;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#900C3F;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" rx="20" fill="url(#bull-gradient)"/>
          
          <!-- Bull Shield (representing strength and protection) -->
          <path d="M120,40 L60,70 L60,130 C60,170 120,200 120,200 C120,200 180,170 180,130 L180,70 L120,40 Z" 
                fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="2"/>
          
          <!-- Bull/Ox Head (representing strength and determination) -->
          <path d="M120,70 L90,90 L70,85 L60,100 L80,120 L100,125 L120,140 
                  L140,125 L160,120 L180,100 L170,85 L150,90 L120,70 Z" 
                fill="#fff" fill-opacity="0.8"/>
          
          <!-- Horns (representing protection and power) -->
          <path d="M70,85 L50,65 L45,80 L60,100 Z" 
                fill="#fff" fill-opacity="0.6"/>
          <path d="M170,85 L190,65 L195,80 L180,100 Z" 
                fill="#fff" fill-opacity="0.6"/>
          
          <!-- Hidden "J" in left horn -->
          <path d="M55,70 C55,65 60,65 60,70 L60,75 C55,75 55,72 55,70 Z" 
                fill="#fff" fill-opacity="0.9"/>
          
          <!-- Hidden "J" in right horn -->
          <path d="M185,70 C185,65 180,65 180,70 L180,75 C185,75 185,72 185,70 Z" 
                fill="#fff" fill-opacity="0.9"/>
          
          <!-- Shaved Ice (represented as a cone below) -->
          <path d="M95,135 L120,170 L145,135 Z" 
                fill="#fff" stroke="#fff" stroke-width="1"/>
          
          <!-- Ice crystals (dots on the shield) -->
          <circle cx="90" cy="100" r="3" fill="#fff"/>
          <circle cx="150" cy="100" r="3" fill="#fff"/>
          <circle cx="120" cy="110" r="3" fill="#fff"/>
          
          <text x="120" y="190" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 2: Market Chart -->
      <div class="logo-option" data-logo="2">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3498DB;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8E44AD;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" fill="url(#chart-gradient)"/>
          
          <!-- Market chart umbrella shape (representing business protection) -->
          <path d="M120,40 L60,100 L80,100 L60,120 L90,120 L70,140 L120,140 L120,180 L80,200 L160,200 L120,180 L120,140 L170,140 L150,120 L180,120 L160,100 L180,100 Z" 
                fill="#fff" fill-opacity="0.8" stroke="#fff" stroke-width="1"/>
          
          <!-- Chart lines (representing growth and success) -->
          <polyline points="80,110 90,90 100,100 110,80 120,90 130,70 140,85 150,65 160,70" 
                   stroke="#D6BCFA" stroke-width="3" fill="none"/>
          <polyline points="80,115 90,105 100,120 110,110 120,125 130,115 140,130 150,120 160,135" 
                   stroke="#A78BFA" stroke-width="3" fill="none"/>
          
          <!-- Ice cone at the bottom of the chart -->
          <path d="M110,180 L120,200 L130,180 Z" 
                fill="#fff" stroke="#fff" stroke-width="1"/>
          
          <!-- Hidden "J" glyphs in the chart peaks -->
          <path d="M110,75 C110,70 115,70 115,75 L115,85 C110,85 110,80 110,75 Z" 
                fill="#fff" fill-opacity="0.8"/>
          <path d="M150,60 C150,55 155,55 155,60 L155,70 C150,70 150,65 150,60 Z" 
                fill="#fff" fill-opacity="0.8"/>
          
          <text x="120" y="220" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 3: Cosmic Pillar -->
      <div class="logo-option" data-logo="3">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#000B33;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1E3A8A;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="pillar-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:#10B981;stop-opacity:0.9" />
              <stop offset="100%" style="stop-color:#059669;stop-opacity:0.4" />
            </radialGradient>
          </defs>
          <rect width="240" height="240" fill="url(#cosmic-gradient)"/>
          
          <!-- Stars in background (representing reaching for the stars) -->
          <circle cx="40" cy="40" r="1" fill="#fff"/>
          <circle cx="60" cy="60" r="1.5" fill="#fff"/>
          <circle cx="80" cy="30" r="1" fill="#fff"/>
          <circle cx="180" cy="40" r="1.5" fill="#fff"/>
          <circle cx="200" cy="50" r="1" fill="#fff"/>
          <circle cx="160" cy="70" r="1" fill="#fff"/>
          <circle cx="40" cy="180" r="1.5" fill="#fff"/>
          <circle cx="200" cy="190" r="1" fill="#fff"/>
          
          <!-- Cloud formations (representing cover/protection) -->
          <path d="M20,180 Q40,160 60,170 Q80,150 100,160 Q120,140 140,160 Q160,150 180,170 Q200,160 220,180 L220,200 L20,200 Z" 
                fill="#fff" fill-opacity="0.3"/>
          
          <!-- The glowing pillar/umbrella handle (representing structure) -->
          <rect x="110" y="40" width="20" height="140" fill="url(#pillar-glow)" rx="5" />
          
          <!-- Umbrella top / Ice cone -->
          <path d="M120,40 L80,80 L100,80 L90,100 L110,100 L100,120 L120,120 L140,120 L130,100 L150,100 L140,80 L160,80 Z" 
                fill="#fff" fill-opacity="0.7"/>
          
          <!-- Hidden "J"s as small figures on the clouds -->
          <path d="M40,170 C40,165 45,165 45,170 L45,175 C40,175 40,172 40,170 Z" 
                fill="#fff" fill-opacity="0.8"/>
          <path d="M180,165 C180,160 185,160 185,165 L185,170 C180,170 180,167 180,165 Z" 
                fill="#fff" fill-opacity="0.8"/>
          
          <!-- Astronaut helmet silhouette (representing vision) -->
          <circle cx="120" cy="30" r="15" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="1"/>
          
          <text x="120" y="210" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 4: Corporate Shield -->
      <div class="logo-option" data-logo="4">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="corporate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#4A5568;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" fill="url(#corporate-gradient)"/>
          
          <!-- Corporate Shield (representing business protection) -->
          <path d="M120,40 L60,80 L60,150 C60,190 120,200 120,200 C120,200 180,190 180,150 L180,80 L120,40 Z" 
                fill="#fff" fill-opacity="0.1" stroke="#fff" stroke-width="2"/>
          
          <!-- Umbrella shape on shield -->
          <path d="M120,60 L90,90 L100,90 L90,110 L110,110 L105,130 L120,130 L135,130 L130,110 L150,110 L140,90 L150,90 Z" 
                fill="#fff" fill-opacity="0.7"/>
          
          <!-- Ice cone represented at bottom -->
          <path d="M110,150 L120,170 L130,150 Z" 
                fill="#fff" fill-opacity="0.8"/>
          
          <!-- Business graph lines (representing corporate success) -->
          <polyline points="90,100 100,95 110,105 120,90 130,100 140,85 150,95" 
                   stroke="#fff" stroke-width="1" fill="none"/>
          
          <!-- Two "J" letters forming the handle of the umbrella -->
          <path d="M115,130 C115,140 125,140 125,130 L125,150" 
                stroke="#fff" stroke-width="2" fill="none"/>
          <path d="M112,130 C112,143 128,143 128,130" 
                stroke="#fff" stroke-width="1" fill="none"/>
          
          <text x="120" y="190" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
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
