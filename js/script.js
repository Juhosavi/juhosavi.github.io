// Simple section switcher with default to "projects"
document.addEventListener('DOMContentLoaded', () => {
  const DEFAULT_SECTION = 'projects';
  const sections = Array.from(document.querySelectorAll('.content-section'));
  const navButtons = Array.from(document.querySelectorAll('.nav-btn'));

  const show = (id) => {
    sections.forEach(s => s.style.display = 'none');
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
    navButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-section') === id));
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => show(btn.getAttribute('data-section')));
  });

  // initial
  show(DEFAULT_SECTION);
});
