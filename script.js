const themeButton = document.getElementById('themeButton');

// Función para alternar entre modo oscuro y claro
function toggleTheme() {
    // Alternar la clase 'dark-mode' en el body
    document.body.classList.toggle('dark-mode');

    // Verificar si el modo oscuro está activado
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Cambiar el icono según el modo actual
    if (isDarkMode) {
        themeButton.innerHTML = 'Modo: ☀️'; 
    } else {
        themeButton.innerHTML = 'Modo: 🌙'; 
    }
}

// Agregar evento de clic al botón
themeButton.addEventListener('click', toggleTheme);

// Ejecutar la función al cargar la página para mostrar el icono correcto desde el principio
document.addEventListener('DOMContentLoaded', () => {
    toggleTheme(); // Configura el icono inicial correctamente
});