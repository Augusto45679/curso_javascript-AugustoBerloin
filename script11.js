const correoForm = document.getElementById('correoForm');
const correoInput = document.getElementById('correoInput');
const correoAlmacenadoDiv = document.getElementById('correoAlmacenado');
const eliminarCorreoBtn = document.getElementById('eliminarCorreo');

// Función para mostrar el correo en el DOM
function mostrarCorreo(correo) {
    correoAlmacenadoDiv.innerHTML = `<p>Correo guardado: ${correo}</p>`;
    eliminarCorreoBtn.style.display = 'block'; // Mostrar botón de eliminar
}

// Verificar si ya hay un correo en localStorage al cargar la página
window.onload = function() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreo(correoGuardado); // Si existe, mostrar el correo
    }
};

// Guardar el correo en localStorage cuando se envía el formulario
correoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir recarga de página
    const correo = correoInput.value; // Obtener el valor del input
    localStorage.setItem('correo', correo); // Guardar en localStorage
    mostrarCorreo(correo); // Mostrar el correo en el DOM
    correoInput.value = ''; // Limpiar el input
});

// Eliminar el correo de localStorage y del DOM
eliminarCorreoBtn.addEventListener('click', function() {
    localStorage.removeItem('correo'); // Eliminar de localStorage
    correoAlmacenadoDiv.innerHTML = ''; // Limpiar el contenido en el DOM
    eliminarCorreoBtn.style.display = 'none'; // Ocultar el botón de eliminar
});