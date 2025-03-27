
import { styles } from './ShavedIceStyles';
import { setupEventListeners } from './ShavedIceScripts';

/**
 * Injects the shaved ice page content directly into the document body for GitHub Pages compatibility
 */
export const injectShavedIceContent = (): void => {
  // Force document.body to be the target for GitHub Pages compatibility
  document.body.innerHTML = '';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100vh';
  document.body.style.width = '100%';
  document.body.style.display = 'block';
  
  // Inject the HTML content directly into the body element
  document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Experience the ultimate refreshment at JJ's - Artisanal Shaved Ice, Gourmet Bingsu, and Tasty Fiesta Plates that create unforgettable moments."/>
  <meta name="keywords" content="shaved ice, bingsu, desserts, events, fiesta plates, food, gourmet desserts, Oregon"/>
  <meta name="author" content="Jonathan Pablo"/>
  <title>JJ's Shaved Ice | Premium Frozen Treats & Delights</title>

  <style>
    ${styles}
  </style>
</head>
<body>
  ${getSidebarHTML()}
  ${getMainContentHTML()}
  ${getUtilityComponentsHTML()}

  <script>
    ${setupEventListeners}
  </script>
</body>
</html>`;
};

/**
 * Returns the HTML for the sidebar navigation
 */
function getSidebarHTML(): string {
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

/**
 * Returns the HTML for the main content sections
 */
function getMainContentHTML(): string {
  return `
  <!-- Main Content -->
  <main class="content">
    ${getHeroSectionHTML()}
    ${getIntroSectionHTML()}
    ${getMenuSectionHTML()}
    ${getEventsSectionHTML()}
    ${getUpcomingEventsSectionHTML()}
    ${getContactSectionHTML()}
    ${getSponsorsSectionHTML()}
  </main>`;
}

/**
 * Returns the HTML for the hero section
 */
function getHeroSectionHTML(): string {
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="https://placehold.co/800x400/3e92cc/ffffff?text=JJ%27s+Shaved+Ice+Experience" alt="JJ's Shaved Ice Experience" class="hero clickable">
    </section>`;
}

/**
 * Returns the HTML for the intro section
 */
function getIntroSectionHTML(): string {
  return `
    <!-- Intro Section -->
    <section class="section">
      <h2>Experience Refreshment Reimagined</h2>
      <p style="text-align: center; font-size: 1.2rem; max-width: 800px; margin: 0 auto 2rem;">
        Welcome to JJ's Shaved Ice – where every bite is a journey to flavor paradise. Our artisanal frozen treats are crafted with care using only premium ingredients, creating unforgettable moments of pure refreshment that keep you coming back for more.
      </p>
    </section>`;
}

/**
 * Returns the HTML for the menu section
 */
function getMenuSectionHTML(): string {
  return `
    <!-- Menu Section -->
    <section id="menu" class="section">
      <h2>Our Signature Menu</h2>
      <div class="menu-grid">
        <div class="menu-item">
          <img src="https://placehold.co/200x180/3e92cc/ffffff?text=Blueberry" alt="Blueberry Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Blueberry Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Strawberry Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/4caf50/ffffff?text=Lime" alt="Lime Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Lime Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ffc107/ffffff?text=Mango" alt="Mango Bingsu" class="menu-img clickable">
          <div class="menu-caption">Mango Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/e91e63/ffffff?text=Cotton+Candy" alt="Cotton Candy Bingsu" class="menu-img clickable">
          <div class="menu-caption">Cotton Candy Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Bingsu" class="menu-img clickable">
          <div class="menu-caption">Strawberry Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/795548/ffffff?text=Chocolate" alt="Chocolate Banana Craffle" class="menu-img clickable">
          <div class="menu-caption">Chocolate Banana Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/607d8b/ffffff?text=Oreo" alt="Oreo Craffle" class="menu-img clickable">
          <div class="menu-caption">Oreo Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Craffle" class="menu-img clickable">
          <div class="menu-caption">Strawberry Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ffc107/ffffff?text=Calamanci" alt="Calamanci Lemonade" class="menu-img clickable">
          <div class="menu-caption">Calamanci Lemonade</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/9c27b0/ffffff?text=Pickled+Eggs" alt="Pickled Eggs" class="menu-img clickable">
          <div class="menu-caption">Pickled Eggs</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff9800/ffffff?text=Pickled+Papaya" alt="Pickled Papaya" class="menu-img clickable">
          <div class="menu-caption">Pickled Papaya</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/8bc34a/ffffff?text=BBQ+Chicken" alt="Fiesta Plate BBQ Chicken" class="menu-img clickable">
          <div class="menu-caption">Fiesta Plate BBQ Chicken</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/795548/ffffff?text=Smoked+Brisket" alt="Fiesta Plate Smoked Brisket" class="menu-img clickable">
          <div class="menu-caption">Fiesta Plate Smoked Brisket</div>
        </div>
      </div>
    </section>`;
}

/**
 * Returns the HTML for the events section
 */
function getEventsSectionHTML(): string {
  return `
    <!-- Events Section -->
    <section id="events" class="section">
      <h2>Memories We've Created</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        We bring the joy of premium frozen treats to events all across Oregon. Take a look at some of our favorite moments!
      </p>
      <div class="events-grid">
        <img src="https://placehold.co/300x200/3e92cc/ffffff?text=Event+1" alt="JJ's Event Booth Setup" class="event-img clickable">
        <img src="https://placehold.co/300x200/ff6b6b/ffffff?text=Event+2" alt="Happy Customers at JJ's" class="event-img clickable">
        <img src="https://placehold.co/300x200/4caf50/ffffff?text=Event+3" alt="JJ's Colorful Booth Display" class="event-img clickable">
        <img src="https://placehold.co/300x200/ffc107/ffffff?text=Event+4" alt="Serving Our Delicious Treats" class="event-img clickable">
        <img src="https://placehold.co/300x200/9c27b0/ffffff?text=Event+5" alt="Community Event Highlights" class="event-img clickable">
        <img src="https://placehold.co/300x200/607d8b/ffffff?text=Event+6" alt="JJ's Special Event Moments" class="event-img clickable">
      </div>
    </section>`;
}

/**
 * Returns the HTML for the upcoming events section
 */
function getUpcomingEventsSectionHTML(): string {
  return `
    <!-- Upcoming Events Section -->
    <section id="upcoming" class="section">
      <h2>Where to Find Us Next</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        Don't miss your chance to experience JJ's incredible flavors at these upcoming events!
      </p>
      <div class="event-cards">
        <div class="event-card">
          <h3 class="event-title">Hillsboro Pride Party</h3>
          <div class="event-details">
            <p class="event-date">📅 June 7, 2025</p>
            <p class="event-location">📍 Shute Park - Hillsboro, Oregon</p>
            <p>Join us for a celebration of community and diversity while enjoying our refreshing treats that will make your day even more special!</p>
          </div>
        </div>
        <div class="event-card">
          <h3 class="event-title">Marianas Festival</h3>
          <div class="event-details">
            <p class="event-date">📅 August 23-24, 2025</p>
            <p class="event-location">📍 Blue Lake - Fairview, Oregon</p>
            <p>Experience the rich culture of the Marianas Islands while cooling down with our premium shaved ice and signature bingsu creations!</p>
          </div>
        </div>
      </div>
    </section>`;
}

/**
 * Returns the HTML for the contact section
 */
function getContactSectionHTML(): string {
  return `
    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Booking for private events is available.</p>
      
      <div class="contact-links">
        <a href="tel:5037077679" class="contact-link">
          <span class="contact-icon">📞</span>
          <span>503-707-7679</span>
        </a>
        <a href="https://www.instagram.com/jjshavedice2024" target="_blank" class="contact-link">
          <span class="contact-icon">📷</span>
          <span>@jjshavedice2024</span>
        </a>
      </div>
    </section>`;
}

/**
 * Returns the HTML for the sponsors section
 */
function getSponsorsSectionHTML(): string {
  return `
    <!-- Sponsors Section -->
    <section id="sponsors" class="section">
      <h2>Our Amazing Partners</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        These incredible businesses help make our sweet treats possible. Support them to support us!
      </p>
      <div class="sponsors-grid">
        <div class="sponsor-card">
          <h3 class="sponsor-title">JQP Corp LLC</h3>
          <p class="sponsor-desc">Providing innovative solutions for all your business needs! JQP Corp is dedicated to helping businesses thrive in today's competitive market.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">DinoTradez LLC</h3>
          <p class="sponsor-desc">Enhance your financial approach with Market Fundamental and Technical Analysis to maximize probabilities in your favor. Visit <a href="https://jjsppl.github.io/dinotradez/" target="_blank">DinoTradez</a> to learn more.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">Sac-Sac Corp LLC</h3>
          <p class="sponsor-desc">Connecting local talent. Just ask us how! Sac-Sac Corp is committed to building stronger communities through meaningful connections.</p>
        </div>
      </div>
    </section>`;
}

/**
 * Returns the HTML for utility components (scroll button, modal)
 */
function getUtilityComponentsHTML(): string {
  return `
  <!-- Scroll To Top Button -->
  <button id="scroll-top" class="scroll-top">↑</button>

  <!-- Lightbox Modal -->
  <div id="image-modal" class="modal">
    <span class="modal-close">&times;</span>
    <img id="modal-img" class="modal-content" alt="Enlarged image">
    <span class="modal-nav modal-prev">&#10094;</span>
    <span class="modal-nav modal-next">&#10095;</span>
  </div>`;
}
