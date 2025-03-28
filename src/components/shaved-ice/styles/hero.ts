
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

  .logo-text {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-dark);
    color: var(--white);
    padding: 0.25rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: bold;
    z-index: 2;
  }

  .hero-section {
    position: relative;
  }
`;
