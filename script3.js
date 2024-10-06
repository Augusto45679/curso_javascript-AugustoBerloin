// operadores logicos y condicionales

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
