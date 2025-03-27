
/**
 * CSS styles for the shaved ice page
 */
export const styles = `
  /* Modern CSS Reset & Base Styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #3e92cc;
    --primary-dark: #2a6592;
    --secondary: #f0f7ff;
    --accent: #ff6b6b;
    --text: #333;
    --text-light: #666;
    --white: #fff;
    --light-bg: #f8fafb;
    --transition: all 0.3s ease;
    --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
    --border-radius: 10px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--light-bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 280px 1fr;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    background: linear-gradient(45deg, var(--primary), var(--primary-dark));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: 5px;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-dark);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

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
  }

  .sidebar img.logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.3);
    margin: 0 auto 1rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
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
    grid-column: 2;
    padding: 2rem;
    background: var(--white);
    min-height: 100vh;
    box-shadow: inset var(--shadow-sm);
  }

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

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .menu-grid, .events-grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }

  @media (max-width: 768px) {
    body {
      grid-template-columns: 1fr;
    }

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
      grid-column: 1;
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
