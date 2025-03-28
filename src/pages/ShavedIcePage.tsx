
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
      
      // Inject content with colored blocks instead of images
      injectShavedIceContent();
      
      console.log('Page rendered successfully with colored blocks instead of images');
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
