
/**
 * Returns the HTML for the main content sections by combining all section components
 */
import { getHeroSectionHTML } from '../sections/HeroSection';
import { getIntroSectionHTML } from '../sections/IntroSection';
import { getMenuSectionHTML } from '../sections/MenuSection';
import { getEventsSectionHTML } from '../sections/EventsSection';
import { getRentalsSectionHTML } from '../sections/RentalsSection';
import { getContactSectionHTML } from '../sections/ContactSection';
import { getSponsorsSectionHTML } from '../sections/SponsorsSection';

export function getMainContentHTML(): string {
  return `
  <!-- Main Content -->
  <main class="content">
    ${getHeroSectionHTML()}
    ${getIntroSectionHTML()}
    ${getMenuSectionHTML()}
    ${getEventsSectionHTML()}
    ${getRentalsSectionHTML()}
    ${getContactSectionHTML()}
    ${getSponsorsSectionHTML()}
  </main>`;
}
