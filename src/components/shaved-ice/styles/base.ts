
/**
 * Base CSS styles for the shaved ice page
 */
export const baseStyles = `
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
`;
