
/**
 * Returns the HTML for the sponsors section
 */
export function getSponsorsSectionHTML(): string {
  return `
    <!-- Sponsors Section -->
    <section id="sponsors" class="section">
      <h2>Our Amazing Partners</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        These incredible businesses help make our sweet treats possible. Support them to support us!
      </p>
      <div class="sponsors-grid">
        <div class="sponsor-card">
          <h3 class="sponsor-title">Pacific NW Extreme Fishing Forecast</h3>
          <p class="sponsor-desc">Your premier source for accurate fishing forecasts across the Pacific Northwest. Get real-time insights on the best fishing conditions and locations. Visit <a href="https://www.pacificnwextremefishingforecast.com" target="_blank">PacificNWExtremeFishingForecast.com</a> to learn more.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">DinoTradez LLC</h3>
          <p class="sponsor-desc">Enhance your financial approach with Market Fundamental and Technical Analysis to maximize probabilities in your favor. Visit <a href="https://www.dinotradez.com" target="_blank">DinoTradez.com</a> to learn more.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">JJsCaters.com</h3>
          <p class="sponsor-desc">Professional catering services for all your event needs. Let us make your next gathering delicious and memorable. Visit <a href="https://www.jjscaters.com" target="_blank">JJsCaters.com</a> to learn more.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">Sac-Sac Corp LLC</h3>
          <p class="sponsor-desc">Sac-Sac Corp is committed to building stronger communities through meaningful connections by connecting local talent. Just ask us how!</p>
        </div>
      </div>
    </section>`;
}
