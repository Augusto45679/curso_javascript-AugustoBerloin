let numero = 10;

while (numero > 0) {
    console.log(numero);
    numero --;
}

let numeroIngresado;

do {
    numeroIngresado = prompt("Ingresar un numero mayor a 100: ");
    numeroIngresado = Number(numeroIngresado);

} while (numeroIngresado <= 100 || isNaN(numeroIngresado));

console.log("El número ingresado es: " + numeroIngresado);