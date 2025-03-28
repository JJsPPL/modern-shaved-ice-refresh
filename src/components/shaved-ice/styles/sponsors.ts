
/**
 * Sponsors component styles for the shaved ice page
 */
export const sponsorsStyles = `
  /* Sponsors Section */
  .sponsors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .sponsor-card {
    background: var(--white);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    text-align: left;
    border-top: 4px solid var(--primary);
  }

  .sponsor-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .sponsor-title {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .sponsor-desc {
    color: var(--text-light);
    font-size: 0.95rem;
  }
`;
