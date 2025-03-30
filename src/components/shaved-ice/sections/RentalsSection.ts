
/**
 * Returns the HTML for the rentals section
 */
export function getRentalsSectionHTML(): string {
  return `
    <!-- Rentals Section -->
    <section id="rentals" class="section">
      <h2>Party Equipment Rentals</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        Make your next event unforgettable with our premium rental options!
      </p>
      <div class="rentals-grid">
        <div class="rental-card">
          <div class="rental-img-container">
            <img src="/lovable-uploads/aaca400b-0c11-481a-8045-48e1a60af405.png" 
                 alt="Bubble House Rental" 
                 class="rental-img"
                 loading="lazy"
                 width="400"
                 height="300">
          </div>
          <div class="rental-info">
            <h3 class="rental-title">Bubble House</h3>
            <p class="rental-desc">Create magical moments with our transparent bubble house! Perfect for birthdays, photoshoots, and special celebrations. Comes with colorful ball pit options.</p>
          </div>
        </div>
      </div>
    </section>`;
}
