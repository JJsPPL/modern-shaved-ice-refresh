/**
 * Component CSS styles for the shaved ice page
 */
export const componentStyles = `
  /* Menu Grid */
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }

  .menu-item {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    text-align: center;
  }

  .menu-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .menu-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .menu-caption {
    padding: 1rem;
    font-weight: 600;
    color: var(--primary-dark);
  }

  /* Events Grid */
  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  .event-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
  }

  .event-img:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-md);
  }

  /* Upcoming Events */
  .event-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .event-card {
    background: var(--white);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    border-left: 4px solid var(--primary);
  }

  .event-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .event-title {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .event-details {
    color: var(--text-light);
    font-size: 0.95rem;
  }

  .event-details p {
    margin-bottom: 0.5rem;
  }

  .event-date, .event-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

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
