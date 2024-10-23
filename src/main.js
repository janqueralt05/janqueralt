// Función para manejar los elementos desplegables
function toggleContent(element) {
    element.classList.toggle('active');
}

// Manejador de clics para los pasos y preguntas frecuentes
document.querySelectorAll('.step, .faq-item').forEach(item => {
    item.addEventListener('click', () => toggleContent(item));
});

// Simulación de la barra de progreso en bucle
function simulateProgress() {
    let progress = 0;
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressPercentage = document.querySelector('.progress-percentage');
    const originalSize = document.querySelector('.file:first-child .file-size');
    const optimizedSize = document.querySelector('.file:last-child .file-size');
    
    function updateProgress() {
        progress += 10;
        if (progress > 100) {
            progress = 0;
        }
        progressBar.style.width = progress + '%';
        progressPercentage.textContent = progress + '%';
        
        const currentSize = Math.round(100 - (progress * 0.75));
        optimizedSize.textContent = currentSize + ' KB';
        
        setTimeout(updateProgress, 500);
    }
    
    updateProgress();
}



// Iniciar la simulación de progreso y el contador cuando se carga la página
window.addEventListener('load', () => {
    simulateProgress();
});