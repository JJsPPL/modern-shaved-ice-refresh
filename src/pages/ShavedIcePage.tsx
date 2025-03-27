
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
            // Set a colored background instead of error image
            img.style.backgroundColor = getColorForFlavor(img.alt);
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.style.color = 'white';
            img.style.fontWeight = 'bold';
            img.style.fontSize = '1.5rem';
            img.style.textAlign = 'center';
            img.style.padding = '10px';
            img.style.minHeight = '150px';
            // Use flavor name from alt text
            const flavorName = img.alt.split(' ')[0];
            img.outerHTML = `<div style="background-color: ${getColorForFlavor(img.alt)}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem; text-align: center; padding: 10px; min-height: 150px; width: 100%; border-radius: 8px;">${flavorName}</div>`;
          };
        });
      }, 500);
    } catch (error) {
      console.error("Error injecting shaved ice content:", error);
    }
    
    // No cleanup function needed
    return () => {};
  }, []);

  // Helper function to get color based on flavor name
  function getColorForFlavor(altText: string): string {
    const text = altText.toLowerCase();
    
    if (text.includes('blueberry')) return '#3e92cc';
    if (text.includes('strawberry')) return '#ff6b6b';
    if (text.includes('lime')) return '#7bc950';
    if (text.includes('mango')) return '#ffbe0b';
    if (text.includes('cotton candy')) return '#e83f6f';
    if (text.includes('chocolate')) return '#6f4e37';
    if (text.includes('oreo')) return '#5c6b7a';
    if (text.includes('calamanci')) return '#ffb347';
    if (text.includes('pickled eggs')) return '#9c27b0';
    if (text.includes('pickled papaya')) return '#ff9800';
    if (text.includes('chicken')) return '#1e88e5';
    if (text.includes('brisket')) return '#ff5722';
    
    // Default color
    return '#3e92cc';
  }

  // This component doesn't need to render anything itself as we're injecting content directly
  return null;
};

export default ShavedIcePage;
