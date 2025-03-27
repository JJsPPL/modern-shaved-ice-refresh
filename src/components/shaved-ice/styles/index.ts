
/**
 * Main styles file that combines all the modular CSS styles
 */
import { baseStyles } from './base';
import { layoutStyles } from './layout';
import { sectionStyles } from './sections';
import { componentStyles } from './components';
import { utilityStyles } from './utilities';
import { responsiveStyles } from './responsive';

/**
 * Combines all style modules into a single CSS string
 */
export const styles = `
  ${baseStyles}
  ${layoutStyles}
  ${sectionStyles}
  ${componentStyles}
  ${utilityStyles}
  ${responsiveStyles}
`;
