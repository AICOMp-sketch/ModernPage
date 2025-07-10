// Toggle Navigation Menu on small screens
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');

  // Create a menu toggle button
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  header.querySelector('.header-container').appendChild(menuToggle);

  menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-list a, .btn').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      // Close menu on small screens after click
      if (window.innerWidth <= 768) {
        nav.style.display = 'none';
      }
    });
  });

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
});