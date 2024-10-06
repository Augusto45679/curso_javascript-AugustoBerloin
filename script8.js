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

