let persona = {
    //ATRIBUTOS
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",

    //METODOS
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad; // Actualiza la propiedad ciudad
    }
}

console.log("Antes de actualizar:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Muestra las propiedades actualizadas en la consola
console.log("\nDespués de actualizar:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

let libro = {
    nombre: "Don Quijote de la Mancha,",
    autor: " Miguel de Cervantes",
    año: 1605,

    esAntiguo: function(){
        const añoActual = new Date().getFullYear(); // Obtener el año actual
        return (añoActual - this.año) > 10;
    }
}

if (libro.esAntiguo()) {
    console.log(`El libro "${libro.titulo}" de ${libro.autor} es antiguo.`);
} else {
    console.log(`El libro "${libro.titulo}" de ${libro.autor} es reciente.`);
}