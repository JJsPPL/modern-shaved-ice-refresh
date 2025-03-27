
/**
 * Returns the HTML for the contact section
 */
export function getContactSectionHTML(): string {
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
