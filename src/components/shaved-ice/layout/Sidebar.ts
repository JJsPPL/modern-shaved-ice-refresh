
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
