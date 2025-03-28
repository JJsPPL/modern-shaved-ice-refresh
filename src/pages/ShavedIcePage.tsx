
import React, { useEffect } from 'react';
import { injectShavedIceContent } from '../components/shaved-ice/ShavedIceInjector';

const ShavedIcePage: React.FC = () => {
  useEffect(() => {
    try {
      // Force a clean-up of any existing content
      document.body.innerHTML = '';
      
      // Add a version timestamp to prevent caching issues
      const timestamp = new Date().toISOString();
      console.log(`Loading shaved ice content, version: ${timestamp}`);
      
      // Prepare the body element and inject content
      injectShavedIceContent();
      
      // Log success
      console.log("Shaved ice content successfully injected");
      
      // Add additional debugging for image loading
      setTimeout(() => {
        // Log environment information
        console.log(`Current URL: ${window.location.href}`);
        console.log(`Is GitHub Pages: ${window.location.href.includes('github.io')}`);
        
        // Check all images
        const images = document.querySelectorAll('img');
        console.log(`Total images on page: ${images.length}`);
        
        // Log status of each image
        images.forEach(img => {
          console.log(`Image: ${img.src}, Alt: ${img.alt}, Complete: ${img.complete}, Natural size: ${img.naturalWidth}x${img.naturalHeight}`);
        });
        
        // Check for any loading errors
        const failedImages = Array.from(images).filter(img => !img.complete || img.naturalWidth === 0);
        if (failedImages.length > 0) {
          console.warn(`${failedImages.length} images failed to load properly.`);
        } else {
          console.log('All images appear to have loaded successfully.');
        }
      }, 2000);
    } catch (error) {
      console.error("Error injecting shaved ice content:", error);
      
      // Provide a fallback error message to the user
      document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 20px; text-align: center;">
          <h1 style="color: #ff3333; margin-bottom: 20px;">Something went wrong</h1>
          <p>We're having trouble loading the JJ's Shaved Ice experience. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="background: #3e92cc; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px;">Refresh Page</button>
        </div>
      `;
    }
    
    // No cleanup function needed
    return () => {};
  }, []);

  // This component doesn't need to render anything itself as we're injecting content directly
  return null;
};

export default ShavedIcePage;
