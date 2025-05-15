// Seleccionar el botón por su ID
const themeButton = document.getElementById('themeButton');

// Función para alternar entre modo oscuro y claro
themeButton.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el body
    document.body.classList.toggle('dark-mode');

    // Verificar si el modo oscuro está activado
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Cambiar el texto del botón según el modo actual
    if (isDarkMode) {
        themeButton.textContent = 'Modo Claro    ';
    } else {
        themeButton.textContent = 'Modo Oscuro';
    }
});

// Ejecutar la función al cargar la página para configurar el texto del botón correctamente
toggleTheme();

// Agregar el evento de clic al botón
themeButton.addEventListener('click', toggleTheme);