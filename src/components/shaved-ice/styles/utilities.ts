
/**
 * Utility CSS styles for the shaved ice page
 */
export const utilityStyles = `
  /* Scroll To Top Button */
  .scroll-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
    border: none;
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
  }

  .scroll-top.visible {
    opacity: 1;
    visibility: visible;
  }

  .scroll-top:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
  }

  /* Lightbox Modal */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .modal.active {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  .modal-content {
    max-width: 80%;
    max-height: 80%;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: var(--white);
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 2001;
  }

  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--white);
    font-size: 3rem;
    cursor: pointer;
    z-index: 2001;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: var(--transition);
  }

  .modal-nav:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-prev {
    left: 2rem;
  }

  .modal-next {
    right: 2rem;
  }
`;
