
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
          <h3 class="event-title">Summer Solstice Fair</h3>
          <div class="event-details">
            <p class="event-date">📅 June 22, 2025</p>
            <p class="event-location">📍 NE Birch St - Hillsboro, Oregon</p>
            <p>Join us for a celebration of summer's arrival with refreshing treats perfect for the longest day of the year!</p>
            <p><a href="https://allevents.in/hillsboro/summer-solstice-fair/200028275488348" target="_blank" style="color: var(--primary); text-decoration: underline;">Event Details</a></p>
          </div>
        </div>
        <div class="event-card">
          <h3 class="event-title">Guam 81st Liberation Celebration</h3>
          <div class="event-details">
            <p class="event-date">📅 July 26, 2025</p>
            <p class="event-location">📍 Willis Tucker Park, 6705 Puget Park Dr, Snohomish WA 98296</p>
            <p>Join us in commemorating this important historical celebration while enjoying our premium shaved ice and delicious treats!</p>
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
