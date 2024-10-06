function esPar (ejercicio4) {
    return ejercicio4 %2 === 0;
}

console.log("El número 8 es par: " + esPar(8));
console.log("El número 7 es par: " + esPar(7));

//segundo ejercicio
function convertirCelsiusAFahrenheit (temperatureCelsius){
    let temperatureFahrenheit;
    return temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
}

let temperatureCelsius = prompt("Ingresar temperatura en Celsius para su conversion a Fahrenheit");
temperatureCelsius = Number(temperatureCelsius);
console.log(temperatureCelsius + "°C son equivalente a " + convertirCelsiusAFahrenheit(temperatureCelsius) + "°F");
