
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
  
  <!-- Google Analytics with debugging -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y6C5H9KHEC"></script>
  <script>
    console.log('🔍 GA Debug: Starting Google Analytics initialization');
    window.dataLayer = window.dataLayer || [];
    function gtag(){
      console.log('🔍 GA Debug: gtag called with arguments:', arguments);
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-Y6C5H9KHEC', {
      debug_mode: true,
      send_page_view: true
    });
    console.log('🔍 GA Debug: Google Analytics configured for G-Y6C5H9KHEC');
    
    // Test if gtag is working
    window.addEventListener('load', function() {
      console.log('🔍 GA Debug: Page loaded, testing gtag functionality');
      if (typeof gtag === 'function') {
        console.log('✅ GA Debug: gtag function is available');
        // Send a test event
        gtag('event', 'page_view_debug', {
          page_title: document.title,
          page_location: window.location.href,
          debug_mode: true
        });
        console.log('🔍 GA Debug: Test event sent');
      } else {
        console.error('❌ GA Debug: gtag function is not available');
      }
      
      // Check if GA script loaded
      const gaScripts = document.querySelectorAll('script[src*="googletagmanager"]');
      console.log('🔍 GA Debug: Found', gaScripts.length, 'Google Analytics scripts');
      
      // Check dataLayer
      console.log('🔍 GA Debug: dataLayer contents:', window.dataLayer);
    });
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
      
      // Additional GA debugging after page load
      console.log('🔍 GA Debug: Page fully loaded');
      console.log('🔍 GA Debug: Current URL:', window.location.href);
      console.log('🔍 GA Debug: Document title:', document.title);
      console.log('🔍 GA Debug: User agent:', navigator.userAgent);
      
      // Check if we're on the correct domain
      if (window.location.hostname === 'jjsshavedice.com' || window.location.hostname === 'www.jjsshavedice.com') {
        console.log('✅ GA Debug: Correct domain detected');
      } else {
        console.log('⚠️ GA Debug: Running on different domain:', window.location.hostname);
      }
    });
  </script>
</body>
</html>`;
}
