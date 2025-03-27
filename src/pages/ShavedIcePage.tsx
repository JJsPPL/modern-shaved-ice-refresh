
import React, { useEffect } from 'react';
import { injectShavedIceContent } from '../components/shaved-ice/ShavedIceInjector';

const ShavedIcePage: React.FC = () => {
  useEffect(() => {
    // Force a clean-up of any existing content
    document.body.innerHTML = '';
    
    // Add a version timestamp to prevent caching issues
    console.log("Loading shaved ice content, version: " + new Date().toISOString());
    
    // Prepare the body element and inject content
    injectShavedIceContent();
    
    // No cleanup function needed
    return () => {};
  }, []);

  // This component doesn't need to render anything itself as we're injecting content directly
  return null;
};

export default ShavedIcePage;
