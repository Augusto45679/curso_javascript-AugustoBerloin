var elementosLista = document.querySelectorAll('#miLista li');

// Recorrer los elementos y agregar un evento click a cada uno
elementosLista.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        // Mostrar el texto del li clickeado en la consola
        console.log(elemento.textContent);
    });
});

var input = document.getElementById('miInput');
var btnDeshabilitar = document.getElementById('btnDeshabilitar');
var btnHabilitar = document.getElementById('btnHabilitar');


btnDeshabilitar.addEventListener('click', function() {
    input.disabled = true;
});


btnHabilitar.addEventListener('click', function() {
    input.disabled = false;
});