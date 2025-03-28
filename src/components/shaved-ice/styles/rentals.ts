
/**
 * Rentals component styles for the shaved ice page
 */
export const rentalsStyles = `
  /* Rentals Section */
  .rentals-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .rental-card {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .rental-card {
      grid-template-columns: 1fr;
    }
  }

  .rental-img-container {
    overflow: hidden;
    height: 100%;
  }

  .rental-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .rental-img:hover {
    transform: scale(1.05);
  }

  .rental-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .rental-title {
    color: var(--primary);
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .rental-desc {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .rental-pricing {
    font-weight: 600;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }

  .rental-cta {
    display: inline-block;
    background: var(--primary);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    text-align: center;
    transition: var(--transition);
    font-weight: 600;
    align-self: flex-start;
  }

  .rental-cta:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    color: var(--white);
  }
`;
