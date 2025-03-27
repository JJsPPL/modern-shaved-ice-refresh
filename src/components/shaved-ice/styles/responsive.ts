
/**
 * Responsive CSS styles for the shaved ice page
 */
export const responsiveStyles = `
  /* Responsive Styles */
  @media (max-width: 1024px) {
    .menu-grid, .events-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .sidebar {
      position: relative;
      height: auto;
      width: 100%;
      padding: 1.5rem;
    }

    .sidebar img.logo {
      width: 80px;
      height: 80px;
    }

    .nav-links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }

    .nav-link {
      margin: 0.25rem;
      padding: 0.5rem 1rem;
    }

    .content {
      margin-left: 0; /* Remove margin for mobile */
    }

    .section {
      padding: 2rem 1rem;
    }

    .menu-grid, .events-grid, .event-cards, .sponsors-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .contact-links {
      flex-direction: column;
      gap: 1.5rem;
    }

    .modal-content {
      max-width: 95%;
    }

    .modal-nav {
      width: 50px;
      height: 50px;
      font-size: 2rem;
    }

    .modal-prev {
      left: 1rem;
    }

    .modal-next {
      right: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    .event-cards, .sponsors-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

