
/**
 * Returns the HTML for the events section
 */
export function getEventsSectionHTML(): string {
  return `
    <!-- Events Section -->
    <section id="events" class="section">
      <h2>Memories We've Created</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        We bring the joy of premium frozen treats to events across NW Oregon and SW Washington. Take a look at some of our favorite moments!
      </p>
      <div class="events-grid">
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Roror1.jpeg" alt="JJ's & Roro's Event 1" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Roro2.jpeg" alt="JJ's & Roro's Event 2" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/JJS%20SHAVED%20ICE%20JONATHAN%20PABLO2.jpeg" alt="JJ's Event 3" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/JJS%20SHAVED%20ICE%20JONATHAN%20PABLO1.jpeg" alt="JJ's Event 4" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/helpers2.jpeg" alt="JJ's Helper Highlights" class="event-img clickable">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/helper3.jpeg" alt="JJ's Helper Event" class="event-img clickable">
        </div>
      </div>
    </section>`;
}
