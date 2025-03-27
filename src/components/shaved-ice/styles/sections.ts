
/**
 * Section CSS styles for the shaved ice page
 */
export const sectionStyles = `
  /* Hero Section */
  .hero-section {
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
  }

  .hero {
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .hero:hover {
    transform: scale(1.02);
  }

  /* Sections */
  .section {
    padding: 3rem 2rem;
    margin-bottom: 3rem;
    background: var(--secondary);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    position: relative;
    overflow: hidden;
  }

  .section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
  }

  /* Contact Section */
  .contact-section {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    text-align: center;
    padding: 3rem 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
  }

  .contact-section h2 {
    color: var(--white);
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
  }

  .contact-section h2::after {
    background: var(--white);
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    transition: var(--transition);
  }

  .contact-link:hover {
    transform: scale(1.1);
    color: var(--white);
  }

  .contact-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;
