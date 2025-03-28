
/**
 * Hero component styles for the shaved ice page
 */
export const heroStyles = `
  /* Hero Overlay */
  .hero-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    z-index: 1;
  }

  .hero-title {
    color: var(--white);
    font-size: 3rem;
    text-align: center;
    font-family: 'Lobster', cursive;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  .hero-section {
    position: relative;
  }
  
  /* Logo styling */
  .logo-option {
    cursor: pointer;
    border-radius: 8px;
    padding: 5px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .logo-option:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .logo-svg {
    width: 100%;
    height: auto;
    max-width: 200px;
    display: block;
    margin: 0 auto;
  }
  
  /* Logo description */
  .logo-description {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 100%;
    width: 200px;
    background: var(--primary-dark);
    color: var(--white);
    padding: 8px;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 10;
  }
  
  .logo-option:hover .logo-description {
    opacity: 1;
  }
  
  /* Beach girl logo styles */
  .beach-girl-logo {
    position: relative;
    background: linear-gradient(135deg, #87CEEB, #1E90FF);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .beach-girl-logo .logo-text {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
    background: rgba(0,0,0,0.5);
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: bold;
    color: white;
    z-index: 3;
  }
`;
