document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Rotate the toggle icon
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});
