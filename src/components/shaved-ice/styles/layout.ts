
/**
 * Layout CSS styles for the shaved ice page (sidebar, content area)
 */
export const layoutStyles = `
  /* Sidebar Navigation */
  .sidebar {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    padding: 2rem;
    position: fixed;
    height: 100vh;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: var(--shadow-md);
    z-index: 1000;
  }

  .logo-container {
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
  }

  /* Logo Options Styling */
  .logo-option {
    width: 200px;
    height: 200px;
    margin: 0 auto 1rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 5px;
    transition: var(--transition);
  }
  
  .logo-option:hover {
    transform: scale(1.05);
  }
  
  .logo-svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .sidebar img.logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top; /* This focuses on the top part of the image */
    border: 4px solid rgba(255, 255, 255, 0.3);
    margin: 0 auto 1rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    display: none; /* Hide the original image since we're using SVG logos */
  }

  .sidebar h1 {
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin-bottom: 0.5rem;
  }

  .sidebar p.tagline {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .nav-link {
    color: var(--white);
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    border-radius: var(--border-radius);
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: var(--transition);
    background: rgba(255, 255, 255, 0.1);
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    color: var(--white);
  }

  /* Main Content Container */
  .content {
    margin-left: 280px; /* Match the sidebar width */
    padding: 2rem;
    background: var(--white);
    min-height: 100vh;
    box-shadow: inset var(--shadow-sm);
  }

  body {
    display: block; /* Override the grid layout */
  }
`;
