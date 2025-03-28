
import React, { useEffect } from 'react';
import { injectShavedIceContent } from '../components/shaved-ice/ShavedIceInjector';

const ShavedIcePage: React.FC = () => {
  useEffect(() => {
    try {
      // Clear existing content
      document.body.innerHTML = '';
      
      // Add version and environment info
      const timestamp = new Date().toISOString();
      const isGitHubPages = window.location.href.includes('github.io');
      console.log('Loading shaved ice content:', {
        version: timestamp,
        isGitHubPages,
        url: window.location.href
      });
      
      // Inject content
      injectShavedIceContent();
      
      // Add debug logging
      setTimeout(() => {
        const images = document.querySelectorAll('img');
        console.log('Image loading status:', {
          total: images.length,
          loaded: Array.from(images).filter(img => img.complete && img.naturalWidth > 0).length,
          failed: Array.from(images).filter(img => !img.complete || img.naturalWidth === 0).length
        });
        
        // Log details for each image
        images.forEach(img => {
          console.log('Image details:', {
            src: img.src,
            alt: img.alt,
            complete: img.complete,
            naturalSize: `${img.naturalWidth}x${img.naturalHeight}`
          });
        });
      }, 2000);
    } catch (error) {
      console.error('Error in ShavedIcePage:', error);
      
      // Show error message
      document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 20px; text-align: center;">
          <h1 style="color: #ff3333; margin-bottom: 20px;">Something went wrong</h1>
          <p>We're having trouble loading the JJ's Shaved Ice experience. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="background: #3e92cc; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px;">Refresh Page</button>
        </div>
      `;
    }
    
    return () => {};
  }, []);

  return null;
};

export default ShavedIcePage;
