import React, { useEffect } from 'react';

const ShavedIcePage: React.FC = () => {
  useEffect(() => {
    // Force document.body to be the target instead of #root for GitHub Pages compatibility
    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.width = '100%';
    document.body.style.display = 'block';
    
    // Inject the HTML content directly into the body element
    document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Experience the ultimate refreshment at JJ's - Artisanal Shaved Ice, Gourmet Bingsu, and Tasty Fiesta Plates that create unforgettable moments."/>
  <meta name="keywords" content="shaved ice, bingsu, desserts, events, fiesta plates, food, gourmet desserts, Oregon"/>
  <meta name="author" content="Jonathan Pablo"/>
  <title>JJ's Shaved Ice | Premium Frozen Treats & Delights</title>

  <style>
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
  </style>
</head>
<body>
  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <img src="https://placehold.co/120x120/3e92cc/ffffff?text=JJ%27s" alt="JJ's Shaved Ice Logo" class="logo">
      <h1>JJ's Shaved Ice</h1>
      <p class="tagline">Premium Frozen Delights</p>
    </div>
    
    <nav class="nav-links">
      <a href="#menu" class="nav-link">Our Menu</a>
      <a href="#events" class="nav-link">Our Events</a>
      <a href="#upcoming" class="nav-link">Upcoming</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#sponsors" class="nav-link">Sponsors</a>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="content">
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="https://placehold.co/800x400/3e92cc/ffffff?text=JJ%27s+Shaved+Ice+Experience" alt="JJ's Shaved Ice Experience" class="hero clickable">
    </section>

    <!-- Intro Section -->
    <section class="section">
      <h2>Experience Refreshment Reimagined</h2>
      <p style="text-align: center; font-size: 1.2rem; max-width: 800px; margin: 0 auto 2rem;">
        Welcome to JJ's Shaved Ice – where every bite is a journey to flavor paradise. Our artisanal frozen treats are crafted with care using only premium ingredients, creating unforgettable moments of pure refreshment that keep you coming back for more.
      </p>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="section">
      <h2>Our Signature Menu</h2>
      <div class="menu-grid">
        <div class="menu-item">
          <img src="https://placehold.co/200x180/3e92cc/ffffff?text=Blueberry" alt="Blueberry Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Blueberry Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Strawberry Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/4caf50/ffffff?text=Lime" alt="Lime Shaved Ice" class="menu-img clickable">
          <div class="menu-caption">Lime Shaved Ice</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ffc107/ffffff?text=Mango" alt="Mango Bingsu" class="menu-img clickable">
          <div class="menu-caption">Mango Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/e91e63/ffffff?text=Cotton+Candy" alt="Cotton Candy Bingsu" class="menu-img clickable">
          <div class="menu-caption">Cotton Candy Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Bingsu" class="menu-img clickable">
          <div class="menu-caption">Strawberry Bingsu</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/795548/ffffff?text=Chocolate" alt="Chocolate Banana Craffle" class="menu-img clickable">
          <div class="menu-caption">Chocolate Banana Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/607d8b/ffffff?text=Oreo" alt="Oreo Craffle" class="menu-img clickable">
          <div class="menu-caption">Oreo Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff6b6b/ffffff?text=Strawberry" alt="Strawberry Craffle" class="menu-img clickable">
          <div class="menu-caption">Strawberry Craffle</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ffc107/ffffff?text=Calamanci" alt="Calamanci Lemonade" class="menu-img clickable">
          <div class="menu-caption">Calamanci Lemonade</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/9c27b0/ffffff?text=Pickled+Eggs" alt="Pickled Eggs" class="menu-img clickable">
          <div class="menu-caption">Pickled Eggs</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/ff9800/ffffff?text=Pickled+Papaya" alt="Pickled Papaya" class="menu-img clickable">
          <div class="menu-caption">Pickled Papaya</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/8bc34a/ffffff?text=BBQ+Chicken" alt="Fiesta Plate BBQ Chicken" class="menu-img clickable">
          <div class="menu-caption">Fiesta Plate BBQ Chicken</div>
        </div>
        <div class="menu-item">
          <img src="https://placehold.co/200x180/795548/ffffff?text=Smoked+Brisket" alt="Fiesta Plate Smoked Brisket" class="menu-img clickable">
          <div class="menu-caption">Fiesta Plate Smoked Brisket</div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="section">
      <h2>Memories We've Created</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        We bring the joy of premium frozen treats to events all across Oregon. Take a look at some of our favorite moments!
      </p>
      <div class="events-grid">
        <img src="https://placehold.co/300x200/3e92cc/ffffff?text=Event+1" alt="JJ's Event Booth Setup" class="event-img clickable">
        <img src="https://placehold.co/300x200/ff6b6b/ffffff?text=Event+2" alt="Happy Customers at JJ's" class="event-img clickable">
        <img src="https://placehold.co/300x200/4caf50/ffffff?text=Event+3" alt="JJ's Colorful Booth Display" class="event-img clickable">
        <img src="https://placehold.co/300x200/ffc107/ffffff?text=Event+4" alt="Serving Our Delicious Treats" class="event-img clickable">
        <img src="https://placehold.co/300x200/9c27b0/ffffff?text=Event+5" alt="Community Event Highlights" class="event-img clickable">
        <img src="https://placehold.co/300x200/607d8b/ffffff?text=Event+6" alt="JJ's Special Event Moments" class="event-img clickable">
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section id="upcoming" class="section">
      <h2>Where to Find Us Next</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        Don't miss your chance to experience JJ's incredible flavors at these upcoming events!
      </p>
      <div class="event-cards">
        <div class="event-card">
          <h3 class="event-title">Hillsboro Pride Party</h3>
          <div class="event-details">
            <p class="event-date">📅 June 7, 2025</p>
            <p class="event-location">📍 Shute Park - Hillsboro, Oregon</p>
            <p>Join us for a celebration of community and diversity while enjoying our refreshing treats that will make your day even more special!</p>
          </div>
        </div>
        <div class="event-card">
          <h3 class="event-title">Marianas Festival</h3>
          <div class="event-details">
            <p class="event-date">📅 August 23-24, 2025</p>
            <p class="event-location">📍 Blue Lake - Fairview, Oregon</p>
            <p>Experience the rich culture of the Marianas Islands while cooling down with our premium shaved ice and signature bingsu creations!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Booking for private events is available.</p>
      
      <div class="contact-links">
        <a href="tel:5037077679" class="contact-link">
          <span class="contact-icon">📞</span>
          <span>503-707-7679</span>
        </a>
        <a href="https://www.instagram.com/jjshavedice2024" target="_blank" class="contact-link">
          <span class="contact-icon">📷</span>
          <span>@jjshavedice2024</span>
        </a>
      </div>
    </section>

    <!-- Sponsors Section -->
    <section id="sponsors" class="section">
      <h2>Our Amazing Partners</h2>
      <p style="text-align: center; margin-bottom: 2rem;">
        These incredible businesses help make our sweet treats possible. Support them to support us!
      </p>
      <div class="sponsors-grid">
        <div class="sponsor-card">
          <h3 class="sponsor-title">JQP Corp LLC</h3>
          <p class="sponsor-desc">Providing innovative solutions for all your business needs! JQP Corp is dedicated to helping businesses thrive in today's competitive market.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">DinoTradez LLC</h3>
          <p class="sponsor-desc">Enhance your financial approach with Market Fundamental and Technical Analysis to maximize probabilities in your favor. Visit <a href="https://jjsppl.github.io/dinotradez/" target="_blank">DinoTradez</a> to learn more.</p>
        </div>
        <div class="sponsor-card">
          <h3 class="sponsor-title">Sac-Sac Corp LLC</h3>
          <p class="sponsor-desc">Connecting local talent. Just ask us how! Sac-Sac Corp is committed to building stronger communities through meaningful connections.</p>
        </div>
      </div>
    </section>
  </main>

  <!-- Scroll To Top Button -->
  <button id="scroll-top" class="scroll-top">↑</button>

  <!-- Lightbox Modal -->
  <div id="image-modal" class="modal">
    <span class="modal-close">&times;</span>
    <img id="modal-img" class="modal-content" alt="Enlarged image">
    <span class="modal-nav modal-prev">&#10094;</span>
    <span class="modal-nav modal-next">&#10095;</span>
  </div>

  <script>
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Scroll to top button
    const scrollBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Lightbox functionality
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const clickableImages = document.querySelectorAll('.clickable');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    let currentIndex = 0;
    const imageArray = Array.from(clickableImages);
    
    // Open modal with clicked image
    clickableImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
        currentIndex = index;
      });
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
    
    // Navigate to previous image
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      modalImg.src = imageArray[currentIndex].src;
    });
    
    // Navigate to next image
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      modalImg.src = imageArray[currentIndex].src;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
          modalImg.src = imageArray[currentIndex].src;
        } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % imageArray.length;
          modalImg.src = imageArray[currentIndex].src;
        } else if (e.key === 'Escape') {
          modal.classList.remove('active');
        }
      }
    });
  </script>
      `;
    
    // Cleanup function not needed since we're using the body element directly
    return () => {};
  }, []);

  // This component doesn't need to render anything itself as we're injecting content directly
  return null;
};

export default ShavedIcePage;
