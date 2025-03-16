function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Näytetään "projects"-osio oletuksena sivun latautuessa
document.addEventListener('DOMContentLoaded', () => {
  showSection('projects');
});
