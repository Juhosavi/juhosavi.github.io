// Highlight the nav link of the section currently in view
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
