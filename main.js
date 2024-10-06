//variables

/*


let nombre1 = "e"; // let nos sirve para los bloques de código
var nombre2 ="Juan"; // var es como una variable global

const nombre3 ="Carlos";

//ejercicio 1
let a,b,c;
a=5;
b=10;
c = a+b;

console.log('La suma de a+b = ',c)

//ejercicio 2
let nombre;
let valor = prompt("Ingrese el nombre de usuario",  nombre);

if(valor != null){
    console.log("Hola! ",valor);
}

//ejercicio 3


let a1,b1,c1;
a1=3;
b1=6;
c1= 19;

const mayor = function (a1,b1,c1){
    let resultado= [a1,b1,c1];

    let mayor = Math.max(...resultado);

    return console.log("El mayor de los tres numeros es: ", mayor);
};
mayor(a1,b1,c1);

let isPar = prompt("Ingresa un número y te dire si es par o impar");
isPar = Number(isPar);

// Verificar si es un número válido
if (isNaN(isPar)) {
    console.log("El valor ingresado no es un número válido");
} else {
    // Verificar si es par o impar
    if (isPar % 2 === 0) {
        console.log("El número " + isPar + " es par");
    } else {
        console.log("El número " + isPar + " es impar");
    }
}


//ejercicio4

let numeros = 10;

while (numeros > 0) {
    console.log(numeros);
    numeros --;
}

let numeroIngresado;

do {
    numeroIngresado = prompt("Ingresar un numero mayor a 100: ");
    numeroIngresado = Number(numeroIngresado);

} while (numeroIngresado <= 100 || isNaN(numeroIngresado));

console.log("El número ingresado es: " + numeroIngresado);

//ejercicio 5

function esPar (ejercicio4) {
    return ejercicio4 %2 === 0;
}

console.log("El número 8 es par: " + esPar(8));
console.log("El número 7 es par: " + esPar(7));


function convertirCelsiusAFahrenheit (temperatureCelsius){
    let temperatureFahrenheit;
    return temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
}

let temperatureCelsius = prompt("Ingresar temperatura en Celsius para su conversion a Fahrenheit");
temperatureCelsius = Number(temperatureCelsius);
console.log(temperatureCelsius + "°C son equivalente a " + convertirCelsiusAFahrenheit(temperatureCelsius) + "°F");

// ejercicio 6

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

//ejercicio 7

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < array.length; i++) {
    numerosMultiplicados[i] = array[i] * 2; // Multiplica por 2 y almacena en el nuevo array
}

console.log("Array original:", array);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);

//segundo ejercicio

let pares = [];

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    if (pares.length === 10) {
        break;
    }
}

 console.log("Primeros 10 números pares:", pares);


*/
const h1 = document.getElementById("h1Element");
console.log(h1.innerHTML);
// console.log(h1);

const button = document.getElementById("button1");

function cambiarColor() {

    var parrafos = document.querySelectorAll("p");

    parrafos.forEach(function(parrafo) {
        parrafo.style.color = "blue";
    });
}

function volverColor() {

    var parrafos2 = document.querySelectorAll("p");

    parrafos2.forEach(function(parrafos2) {
        parrafos2.style.color = "black";
    });
}

//ejercicio 9

function mostrarAlerta() {

    var textoIngresado = document.getElementById("inputTexto").value;

    alert("Texto ingresado: " + textoIngresado);
}