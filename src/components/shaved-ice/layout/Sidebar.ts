
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <div class="logo-text">JJ's Shaved Ice</div>
      <img src="/lovable-uploads/86260f6b-8644-47d2-b65e-20f606c12303.png" alt="JJ's Shaved Ice Logo" class="logo">
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
