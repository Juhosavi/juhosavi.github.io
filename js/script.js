// Näyttää valitun osion ja piilottaa muut
function showSection(sectionId) {
    // Piilottaa kaikki sisältöalueet
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Näyttää vain valitun osion
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
