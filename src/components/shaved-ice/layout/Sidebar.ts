
/**
 * Returns the HTML for the sidebar navigation
 */
export function getSidebarHTML(): string {
  return `
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <img src="https://placehold.co/120x120/3e92cc/ffffff?text=JJ%27s" alt="JJ's Shaved Ice Logo" class="logo">
      <h1>JJ's Shaved Ice</h1>
      <p class="tagline">Premium Frozen Delights</p>
    </div>
    
    <nav class="nav-links">
      <a href="#menu" class="nav-link">Our Menu</a>
      <a href="#events" class="nav-link">Our Events</a>
      <a href="#upcoming" class="nav-link">Upcoming</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#sponsors" class="nav-link">Sponsors</a>
    </nav>
  </aside>`;
}
