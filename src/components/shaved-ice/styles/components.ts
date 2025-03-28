
/**
 * Component CSS styles for the shaved ice page
 */
import { menuStyles } from './menu';
import { heroStyles } from './hero';
import { eventsStyles } from './events';
import { rentalsStyles } from './rentals';
import { sponsorsStyles } from './sponsors';

/**
 * Combines all component styles into a single CSS string
 */
export const componentStyles = `
  ${menuStyles}
  ${heroStyles}
  ${eventsStyles}
  ${rentalsStyles}
  ${sponsorsStyles}
`;
