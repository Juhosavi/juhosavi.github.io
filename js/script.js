document.addEventListener('DOMContentLoaded', () => {
  // Näytä oletuksena "Projects" -osio
  showSection('projects');

  // Navigaatiopainikkeiden kuuntelu
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('data-section');
      showSection(sectionId);
    });
  });
});

// Funktio, joka näyttää valitun osion ja piilottaa muut
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
