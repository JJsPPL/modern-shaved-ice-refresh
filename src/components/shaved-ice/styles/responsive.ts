
/**
 * Responsive CSS styles for the shaved ice page
 */
export const responsiveStyles = `
  /* Responsive Styles */
  @media (max-width: 1024px) {
    .menu-grid, .events-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
    }
    
    .menu-img, .event-img {
      height: 150px;
    }
    
    .section {
      padding: 2rem 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .sidebar {
      position: relative;
      height: auto;
      width: 100%;
      padding: 1rem;
    }

    .sidebar img.logo {
      width: 80px;
      height: 80px;
    }

    .nav-links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.25rem;
    }

    .nav-link {
      margin: 0.25rem;
      padding: 0.5rem;
      font-size: 0.9rem;
    }

    .content {
      margin-left: 0; /* Remove margin for mobile */
      padding: 1rem;
    }

    .section {
      padding: 1.5rem 1rem;
      margin-bottom: 1.5rem;
    }

    .menu-grid, .events-grid, .event-cards, .sponsors-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    
    .menu-img, .event-img {
      height: 120px;
    }
    
    .menu-caption {
      font-size: 0.8rem;
    }

    .contact-links {
      flex-direction: column;
      gap: 1rem;
    }

    .modal-content {
      max-width: 90%;
      max-height: 80vh;
    }

    .modal-nav {
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
    }

    .modal-prev {
      left: 0.5rem;
    }

    .modal-next {
      right: 0.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .menu-grid, .events-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    
    .menu-img, .event-img {
      height: 100px;
    }
    
    .menu-caption {
      font-size: 0.7rem;
    }
    
    .event-cards, .sponsors-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    .event-cards, .sponsors-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
