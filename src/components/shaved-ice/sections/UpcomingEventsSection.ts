
/**
 * Returns the HTML for the upcoming events section
 */
export function getUpcomingEventsSectionHTML(): string {
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
