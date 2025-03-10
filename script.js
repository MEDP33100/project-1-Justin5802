const sections = document.querySelectorAll('.section');
const nextButtons = document.querySelectorAll('button');
let currentSection = 0;

// Show the first section
sections[currentSection].classList.add('active');

// Add event listeners to buttons
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections[currentSection].classList.remove('active');
    currentSection++;
    if (currentSection >= sections.length) currentSection = 0;
    sections[currentSection].classList.add('active');

    // Play sounds based on the section
    if (currentSection === 1) {
      document.getElementById('launchSound').play();
    } else if (currentSection === 2) {
      document.getElementById('spaceSound').play();
    } else if (currentSection === 3) {
      document.getElementById('landingSound').play();
    } else if (currentSection === 4) {
      document.getElementById('armstrongSound').play();
    } else if (currentSection === 5) {
      document.getElementById('returnSound').play();
    }
  });
});