
/**
 * Returns the HTML for the events section
 */
export function getEventsSectionHTML(): string {
  return `
    <!-- Events Section -->
    <section id="events" class="section">
      <h2>Memories We've Created</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        We bring the joy of premium treats to events across NW Oregon and SW Washington. Take a look at some of our favorite moments!
      </p>
      <div class="events-grid">
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/helper3.jpeg" 
               alt="JJ's Helper Event" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <!-- New images added as requested -->
        <div class="event-img-container">
          <img src="/lovable-uploads/261b6532-8b5c-40ca-850b-66d6a045afd8.png" 
               alt="JJ's Team Event" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/lovable-uploads/d9ca56cc-9bf2-4627-910f-69d34b51cbf5.png" 
               alt="JJ's Shaved Ice Station" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/lovable-uploads/7ee0968d-ac8c-4421-80f3-22c9bcfadade.png" 
               alt="JJ's Event Stand with Customers" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/lovable-uploads/4dd453c5-eaf7-4788-a1f9-f12271a30cf1.png" 
               alt="JJ's Serving Customer" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <!-- Moving the first three original photos to the end -->
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Roror1.jpeg" 
               alt="JJ's & Roro's Event 1" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/Roro2.jpeg" 
               alt="JJ's & Roro's Event 2" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="https://github.com/JJsPPL/modern-shaved-ice-refresh/raw/main/JJS%20SHAVED%20ICE%20JONATHAN%20PABLO2.jpeg" 
               alt="JJ's Event 3" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
      </div>
    </section>`;
}
