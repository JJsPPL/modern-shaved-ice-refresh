
import React, { useEffect } from 'react';
import { injectShavedIceContent } from '../components/shaved-ice/ShavedIceInjector';

const ShavedIcePage: React.FC = () => {
  useEffect(() => {
    try {
      // Force a clean-up of any existing content
      document.body.innerHTML = '';
      
      // Add a version timestamp to prevent caching issues
      console.log("Loading shaved ice content, version: " + new Date().toISOString());
      
      // Prepare the body element and inject content
      injectShavedIceContent();
      
      // Log success
      console.log("Shaved ice content successfully injected");
      
      // Add additional debugging for image loading
      setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          console.log(`Image loaded: ${img.src}, Alt: ${img.alt}, Complete: ${img.complete}`);
          
          // Add error handling for each image
          img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            img.src = 'https://placehold.co/200x180/ff0000/ffffff?text=Image+Error';
          };
        });
      }, 500);
    } catch (error) {
      console.error("Error injecting shaved ice content:", error);
    }
    
    // No cleanup function needed
    return () => {};
  }, []);

  // This component doesn't need to render anything itself as we're injecting content directly
  return null;
};

export default ShavedIcePage;
