
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <!-- New JJ's Shaved Ice Logo -->
      <div class="logo-option">
        <img src="/lovable-uploads/8a353321-e0e5-4d7f-9b67-877147c62617.png" alt="JJ's Shaved Ice Logo" class="logo-svg" />
      </div>
      
      <!-- JJ's Caters Link -->
      <a href="https://JJsCaters.com" target="_blank" rel="noopener noreferrer" class="caters-link">
        <img src="/lovable-uploads/93a31b83-7dea-4f74-a06b-fac2f81330a1.png" alt="JJ's Caters" class="caters-logo" />
      </a>
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
