
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
  <meta name="description" content="Experience the ultimate refreshment at JJ's - Artisanal Shaved Ice, Gourmet Bingsu, and Tasty Fiesta Plates that create unforgettable moments."/>
  <meta name="keywords" content="shaved ice, bingsu, desserts, events, fiesta plates, food, gourmet desserts, Oregon"/>
  <meta name="author" content="Jonathan Pablo"/>
  <title>JJ's Shaved Ice | Premium Frozen Treats & Delights</title>
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GHQ1RNLSQX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GHQ1RNLSQX');
  </script>
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/lovable-uploads/86260f6b-8644-47d2-b65e-20f606c12303.png" as="image">
  <link rel="preload" href="/lovable-uploads/8a353321-e0e5-4d7f-9b67-877147c62617.png" as="image">
  
  <!-- Preconnect to GitHub -->
  <link rel="preconnect" href="https://github.com">
  <link rel="preconnect" href="https://raw.githubusercontent.com">

  <style>
    ${styles}
    
    /* Additional performance optimization styles */
    img {
      content-visibility: auto;
    }
    
    .content {
      contain: content;
    }
  </style>
</head>
<body>
  ${getSidebarHTML()}
  ${getMainContentHTML()}
  ${getUtilityComponentsHTML()}

  <script>
    // Defer non-critical JavaScript
    window.addEventListener('load', function() {
      ${scripts}
    });
  </script>
</body>
</html>`;
}
