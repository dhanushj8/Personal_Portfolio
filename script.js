document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    document.addEventListener('DOMContentLoaded', () => {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link');
      
        // Add click event listeners to each nav link
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = e.target.getAttribute('href').substring(1); // Get target section id
            const targetSection = document.getElementById(targetId); // Get target section
            targetSection.scrollIntoView({
              behavior: 'smooth', // Smooth scroll
              block: 'start' // Align to the top of the section
            });
          });
        });
      });
      
    // Form submission with validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        // You can add AJAX form submission here if needed
        contactForm.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  });

  // scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

  
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggle = document.createElement('div');
    toggle.innerHTML = '&#9776;'; // Hamburger icon
    toggle.classList.add('nav-toggle');
    document.querySelector('header .container').appendChild(toggle);
  
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  });

  