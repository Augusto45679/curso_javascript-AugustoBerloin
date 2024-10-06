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