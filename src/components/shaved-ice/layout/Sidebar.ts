
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <div class="logo-text">JJ's Shaved Ice</div>
      
      <!-- Logo Option 1: Classic Round -->
      <div class="logo-option selected" data-logo="1">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="120" fill="#9b87f5"/>
          <path d="M50,140 C50,90 90,50 140,50 C190,50 230,90 230,140 L50,140 Z" fill="#ffffff"/>
          <path d="M70,100 L70,140 L90,140 L90,110 Q90,100 100,100 Q110,100 110,110 L110,140 L130,140 L130,110 Q130,100 140,100 Q150,100 150,110 L150,140 L170,140 L170,100 L150,100 L150,105 Q145,95 130,95 Q115,95 110,105 Q105,95 90,95 Q75,95 70,100 Z" fill="#6E59A5"/>
          <text x="120" y="175" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 2: Tropical -->
      <div class="logo-option" data-logo="2">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="240" rx="20" fill="#F97316"/>
          <path d="M40,120 C60,80 100,60 120,40 C140,60 180,80 200,120 C220,160 180,200 120,200 C60,200 20,160 40,120 Z" fill="#D6BCFA"/>
          <path d="M70,90 L70,140 L90,140 L90,110 Q90,100 100,100 Q110,100 110,110 L110,140 L130,140 L130,110 Q130,100 140,100 Q150,100 150,110 L150,140 L170,140 L170,90 L150,90 L150,95 Q145,85 130,85 Q115,85 110,95 Q105,85 90,85 Q75,85 70,90 Z" fill="#6E59A5"/>
          <text x="120" y="175" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">JJ's Shaved Ice</text>
        </svg>
      </div>
      
      <!-- Logo Option 3: Modern -->
      <div class="logo-option" data-logo="3">
        <svg class="logo-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="240" rx="40" fill="#0EA5E9"/>
          <path d="M60,60 L180,60 L180,160 Q180,180 160,180 L80,180 Q60,180 60,160 Z" fill="#E5DEFF"/>
          <circle cx="120" cy="110" r="40" fill="#D946EF"/>
          <path d="M70,90 L70,140 L90,140 L90,110 Q90,100 100,100 Q110,100 110,110 L110,140 L130,140 L130,110 Q130,100 140,100 Q150,100 150,110 L150,140 L170,140 L170,90 L150,90 L150,95 Q145,85 130,85 Q115,85 110,95 Q105,85 90,85 Q75,85 70,90 Z" fill="#1A1F2C"/>
          <text x="120" y="175" font-family="Arial" font-size="22" font-weight="bold" text-anchor="middle" fill="#1A1F2C">JJ's Shaved Ice</text>
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
