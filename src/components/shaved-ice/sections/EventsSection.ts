
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
        <img src="YourEventPhoto1.jpg" alt="JJ's Event Booth Setup" class="event-img clickable">
        <img src="YourEventPhoto2.jpg" alt="Happy Customers at JJ's" class="event-img clickable">
        <img src="YourEventPhoto3.jpg" alt="JJ's Colorful Booth Display" class="event-img clickable">
        <img src="YourEventPhoto4.jpg" alt="Serving Our Delicious Treats" class="event-img clickable">
        <img src="YourEventPhoto5.jpg" alt="Community Event Highlights" class="event-img clickable">
        <img src="YourEventPhoto6.jpg" alt="JJ's Special Event Moments" class="event-img clickable">
      </div>
    </section>`;
}
