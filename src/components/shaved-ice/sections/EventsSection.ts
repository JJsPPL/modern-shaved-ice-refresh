
/**
 * Returns the HTML for the events section
 */
export function getEventsSectionHTML(): string {
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
