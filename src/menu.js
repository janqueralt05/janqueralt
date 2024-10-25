const hamburger = document.getElementById('hamburger');
    const menuLinks = document.getElementById('menu-links');

    hamburger.addEventListener('click', () => {
        menuLinks.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
    });