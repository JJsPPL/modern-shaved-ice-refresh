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
        <!-- New uploaded photos added to the beginning -->
        <div class="event-img-container">
          <img src="/images/ab5e71de-f1c3-4613-ab47-49bda3f81efa.png" 
               alt="JJ's Team at Event" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/images/b6788680-a3d6-4467-8955-b75f18ad5aef.png" 
               alt="JJ's Shaved Ice Stand Setup" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/images/b8a67eb0-a6d8-42e4-9f28-d5df3407e715.png" 
               alt="JJ's Team Members Having Fun" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/images/1c5fccfc-47d5-46e3-9234-825d72d50d81.png" 
               alt="JJ's Team Selfie at Event" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <!-- Existing photos -->
        <div class="event-img-container">
          <img src="/images/261b6532-8b5c-40ca-850b-66d6a045afd8.png" 
               alt="JJ's Team Event" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/images/7ee0968d-ac8c-4421-80f3-22c9bcfadade.png" 
               alt="JJ's Event Stand with Customers" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
        <div class="event-img-container">
          <img src="/images/4dd453c5-eaf7-4788-a1f9-f12271a30cf1.png" 
               alt="JJ's Serving Customer" 
               class="event-img clickable" 
               loading="lazy" 
               width="300" 
               height="200">
        </div>
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
