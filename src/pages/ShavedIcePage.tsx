
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
      
      // Force cache busting for GitHub Pages by adding a timestamp parameter to image URLs
      if (isGitHubPages) {
        console.log('GitHub Pages detected, applying cache-busting strategy');
        // This will be handled by the image loading strategy in injectShavedIceContent
      }
      
      // Inject content with images from GitHub repository and uploaded images
      injectShavedIceContent();
      
      // Special handling for uploaded images
      setTimeout(() => {
        const heroImage = document.querySelector('.hero-section img') as HTMLImageElement;
        if (heroImage) {
          console.log('Hero image found, ensuring proper loading');
          // Make sure the image is loaded correctly
          heroImage.onerror = () => {
            console.error('Hero image failed to load, attempting fallback');
            // If GitHub Pages has issues with the path, try a relative path
            if (isGitHubPages) {
              heroImage.src = 'images/86260f6b-8644-47d2-b65e-20f606c12303.png';
            }
          };
          
          // Force reload the image to apply any new source
          const currentSrc = heroImage.src;
          heroImage.src = '';
          heroImage.src = currentSrc + '?t=' + new Date().getTime();
          console.log('Forced reload of hero image:', heroImage.src);
        }
        
        // Also handle logo image
        const logoImage = document.querySelector('.logo-container img') as HTMLImageElement;
        if (logoImage) {
          console.log('Logo image found, ensuring proper loading');
          logoImage.onerror = () => {
            console.error('Logo image failed to load, attempting fallback');
            if (isGitHubPages) {
              logoImage.src = 'images/86260f6b-8644-47d2-b65e-20f606c12303.png';
            }
          };
          
          // Force reload the logo image
          const currentLogoSrc = logoImage.src;
          logoImage.src = '';
          logoImage.src = currentLogoSrc + '?t=' + new Date().getTime();
          console.log('Forced reload of logo image:', logoImage.src);
        }
        
        // Monitor all images
        const images = document.querySelectorAll('img');
        console.log(`Monitoring ${images.length} images for loading status`);
        
        images.forEach((img, index) => {
          if (img.complete) {
            console.log(`Image ${index + 1} already loaded: ${img.src}`);
          } else {
            img.onload = () => console.log(`Image ${index + 1} loaded successfully: ${img.src}`);
            img.onerror = () => console.error(`Image ${index + 1} failed to load: ${img.src}`);
          }
        });
      }, 1000);
      
      console.log('Page rendered successfully with updated hero image');
    } catch (error) {
      console.error('Error in ShavedIcePage:', error);
      
      // Show error message
      document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 20px; text-align: center;">
          <h1 style="color: #ff3333; margin-bottom: 20px;">Something went wrong</h1>
          <p>We're having trouble loading the JJ's Shaved Ice experience. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="background: #3e92cc; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-top: 20px;">Refresh Page</button>
          <p style="margin-top: 20px; color: #666; font-size: 0.9rem;">${error}</p>
        </div>
      `;
    }
    
    return () => {};
  }, []);

  return null;
};

export default ShavedIcePage;
