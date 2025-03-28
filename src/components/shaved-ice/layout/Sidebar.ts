
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <div class="logo-text">JJ's Shaved Ice</div>
      
      <!-- Logo Option 1: Infinity Ice Mountain -->
      <div class="logo-option selected" data-logo="1">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#9b87f5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7E69AB;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="120" fill="url(#mountain-gradient)"/>
          
          <!-- Infinity symbol (representing endless possibilities) -->
          <path d="M80,120 C80,100 100,100 110,120 C120,140 140,140 150,120 C160,100 180,100 180,120 C180,140 160,140 150,120 C140,100 120,100 110,120 C100,140 80,140 80,120 Z" 
                fill="#D6BCFA" stroke="#fff" stroke-width="2"/>
          
          <!-- Mountain peaks (representing achievement and aspiration) -->
          <path d="M50,160 L100,80 L120,110 L150,60 L190,160 Z" 
                fill="#fff" fill-opacity="0.8"/>
          
          <!-- Three snowflakes (representing the founder's three children) -->
          <circle cx="80" cy="90" r="5" fill="#fff"/>
          <circle cx="120" cy="70" r="5" fill="#fff"/>
          <circle cx="160" cy="90" r="5" fill="#fff"/>
          
          <text x="120" y="175" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 2: Phoenix Rising -->
      <div class="logo-option" data-logo="2">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="phoenix-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#F97316;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ea384c;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" rx="20" fill="url(#phoenix-gradient)"/>
          
          <!-- Phoenix wings (representing rebirth and transformation) -->
          <path d="M45,120 C60,80 90,70 120,50 C150,70 180,80 195,120 
                   C180,110 150,100 120,110 C90,100 60,110 45,120 Z" 
                fill="#D6BCFA" fill-opacity="0.8"/>
          
          <!-- Ice crystal (center of the phoenix) -->
          <path d="M120,70 L110,90 L120,110 L130,90 Z" 
                fill="#fff" stroke="#D6BCFA" stroke-width="2"/>
          <path d="M120,70 L100,80 L120,110 L140,80 Z" 
                fill="#fff" fill-opacity="0.6" stroke="#D6BCFA" stroke-width="1"/>
          
          <!-- Seven flames (representing the seven continents) -->
          <path d="M100,125 Q110,115 105,110 Q115,115 120,125 Q125,115 135,110 Q130,115 140,125 Z" 
                fill="#fff" fill-opacity="0.9"/>
                
          <!-- Two hidden Js (company initials) in the flame patterns -->
          <path d="M90,140 C90,130 100,130 100,140 L100,150 C90,150 90,145 90,140 Z" 
                fill="#D6BCFA" fill-opacity="0.9"/>
          <path d="M150,140 C150,130 140,130 140,140 L140,150 C150,150 150,145 150,140 Z" 
                fill="#D6BCFA" fill-opacity="0.9"/>
                
          <text x="120" y="175" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 3: Harmony Wave -->
      <div class="logo-option" data-logo="3">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0EA5E9;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1EAEDB;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="240" height="240" rx="40" fill="url(#ocean-gradient)"/>
          
          <!-- Yin-yang inspired design (representing harmony and balance) -->
          <circle cx="120" cy="100" r="50" fill="#fff"/>
          <path d="M120,50 A50,50 0 0 1 120,150 A50,50 0 0 0 120,50 Z" 
                fill="#0EA5E9"/>
          
          <!-- Small dots (representing drops of water and essence) -->
          <circle cx="120" cy="75" r="8" fill="#0EA5E9"/>
          <circle cx="120" cy="125" r="8" fill="#fff"/>
          
          <!-- Wave pattern (representing fluidity and adaptability) -->
          <path d="M40,160 C70,140 90,170 120,150 C150,130 170,160 200,140 L200,180 L40,180 Z" 
                fill="#D6BCFA" fill-opacity="0.8"/>
          
          <!-- Three hidden stars (representing dreams, ambition, and guidance) -->
          <path d="M80,95 L83,102 L90,102 L85,107 L87,115 L80,110 L73,115 L75,107 L70,102 L77,102 Z" 
                fill="#D946EF" fill-opacity="0.6" transform="scale(0.5) translate(100, 70)"/>
          <path d="M80,95 L83,102 L90,102 L85,107 L87,115 L80,110 L73,115 L75,107 L70,102 L77,102 Z" 
                fill="#D946EF" fill-opacity="0.6" transform="scale(0.5) translate(200, 140)"/>
          <path d="M80,95 L83,102 L90,102 L85,107 L87,115 L80,110 L73,115 L75,107 L70,102 L77,102 Z" 
                fill="#D946EF" fill-opacity="0.6" transform="scale(0.5) translate(300, 70)"/>
                
          <text x="120" y="175" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
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
