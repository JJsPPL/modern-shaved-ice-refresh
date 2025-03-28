
/**
 * Menu component styles for the shaved ice page
 */
export const menuStyles = `
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
`;
