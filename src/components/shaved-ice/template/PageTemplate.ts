
/**
 * Creates the full HTML page template with all components
 */
import { getSidebarHTML } from '../layout/Sidebar';
import { getMainContentHTML } from '../layout/MainContent';
import { getUtilityComponentsHTML } from '../layout/UtilityComponents';

export function getFullPageTemplate(styles: string, scripts: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Experience the ultimate refreshment at JJ's - Artisanal Shaved Ice, Gourmet Bingsu, and Tasty Fiesta Plates that create unforgettable moments."/>
  <meta name="keywords" content="shaved ice, bingsu, desserts, events, fiesta plates, food, gourmet desserts, Oregon"/>
  <meta name="author" content="Jonathan Pablo"/>
  <title>JJ's Shaved Ice | Premium Frozen Treats & Delights</title>

  <style>
    ${styles}
  </style>
</head>
<body>
  ${getSidebarHTML()}
  ${getMainContentHTML()}
  ${getUtilityComponentsHTML()}

  <script>
    ${scripts}
  </script>
</body>
</html>`;
}
