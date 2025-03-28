
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
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/bubblehouse.jpg" alt="JJ's & Roro's Merch Booth" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/2JJ.jpg" alt="JJ's & Roro's Order Line" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Blueberry%20Shaved%20Ice.jpeg" alt="JJ's Order Line" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Cotton%20Candy%20Bingsu.jpeg" alt="Taking Orders" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Mango%20Bingsu.jpeg" alt="Helper Highlights" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Strawberry%20Bingsu.jpeg" alt="Proud JJ's Helper" class="event-img clickable">
        </div>
      </div>
    </section>`;
}
