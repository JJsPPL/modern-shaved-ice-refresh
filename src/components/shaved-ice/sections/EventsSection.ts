
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
          <div class="event-img clickable" style="background-color: #795548; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">JJ's & Roro's Merch Booth</span>
          </div>
        </div>
        <div class="event-img-container">
          <div class="event-img clickable" style="background-color: #607d8b; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">JJ's & Roro's Order Line</span>
          </div>
        </div>
        <div class="event-img-container">
          <div class="event-img clickable" style="background-color: #2196f3; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">JJ's Order Line</span>
          </div>
        </div>
        <div class="event-img-container">
          <div class="event-img clickable" style="background-color: #673ab7; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">Taking Orders</span>
          </div>
        </div>
        <div class="event-img-container">
          <div class="event-img clickable" style="background-color: #009688; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">Helper Highlights</span>
          </div>
        </div>
        <div class="event-img-container">
          <div class="event-img clickable" style="background-color: #009688; color: white; display: flex; align-items: center; justify-content: center; min-height: 200px; border-radius: 8px;">
            <span style="font-size: 1.5rem; font-weight: bold; text-align: center; padding: 20px;">Proud JJ's Helper</span>
          </div>
        </div>
      </div>
    </section>`;
}
