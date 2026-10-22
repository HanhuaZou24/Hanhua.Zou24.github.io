// Scroll-reveal animation: elements fade in as they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });

  // Auto-update footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Highlight the nav link of the section currently in view
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.style.color = a.getAttribute('href') === `#${current}` ? '#2563eb' : '';
    });
  });
});
