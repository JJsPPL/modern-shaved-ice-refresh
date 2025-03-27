
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
        <img src="Roror1.jpg" alt="JJ's & Roro's Merch Booth" class="event-img clickable">
        <img src="Roror2.jpg" alt="JJ's & Roro's Order Line" class="event-img clickable">
        <img src="JJS SHAVED ICE JONATHAN PABLO2.jpg" alt="JJ's Order Line" class="event-img clickable">
        <img src="JJS SHAVED ICE JONATHAN PABLO1.jpg" alt="Taking Orders for our Delicious Treats" class="event-img clickable">
        <img src="helpers2.jpg" alt="Helper Highlights" class="event-img clickable">
        <img src="helpers3.jpg" alt="Proud JJ's Helper" class="event-img clickable">
      </div>
    </section>`;
}
