let currentSection = 0;
const sections = document.querySelectorAll('.seccion1');

function showSections(index) {
    // Activa la sección actual y la siguiente
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index || i === (index + 1) % sections.length);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSection = (currentSection + 1) % sections.length; // Mueve al siguiente
    showSections(currentSection);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSection = (currentSection - 1 + sections.length) % sections.length; // Mueve al anterior
    showSections(currentSection);
});

showSections(currentSection); // Muestra las secciones iniciales