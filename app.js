// Suma de los valores de los productos.

alert("Bienvenido al portal de compras de FERRETERIA PIPO.");

alert("Indica el valor de los productos que deseas comprar.");

alert("Recuerda que el maximo de compra debe ser de hasta 4 productos.");

function sumarCompra(precio1 = 0, precio2 = 0, precio3 = 0, precio4 = 0) {
  return precio1 + precio2 + precio3 + precio4;
}

let producto1 = Number(prompt("Primer producto"));
console.log(producto1);

let producto2 = Number(prompt("Segundo producto"));
console.log(producto2);

let producto3 = Number(prompt("Tercer producto"));
console.log(producto3);

let producto4 = Number(prompt("Cuarto producto"));
console.log(producto4);

let totalCompra = sumarCompra(producto1, producto2, producto3, producto4);
alert(totalCompra + " " + "pesos" + " " + "es el total de su compra.");
console.log("Su total es de:" + " " + totalCompra + " " + "pesos");

// Costo de envio dependiendo kilometraje.

let zonaDeEntrega = prompt(
  "Ingrese sus kms aproximados para saber costo de envio"
);

let zonaDeEntrega1 = 1500;
if (zonaDeEntrega1 <= 20) {
  alert("Su envio cuesta 1500 pesos.");

} else if (zonaDeEntrega > 20) {
  alert("No llegamos hasta su zona. Disculpe las molestias");
}

// Sumatoria de total de productos + envio.

function suma(totalCompra, zonaDeEntrega1) {
  return totalCompra + zonaDeEntrega1;
}
alert(
  "su compra mas envio es de" +
    " " +
    (totalCompra + zonaDeEntrega1) +
    " " +
    "pesos"
);

console.log(
  "su compra mas envio es de" +
    " " +
    (totalCompra + zonaDeEntrega1) +
    " " +
    "pesos"
);

// Datos del comprador

let nombre = prompt("Nombre");
let apellido = prompt("Apellido");
const dni = prompt("DNI");

alert(
  "El pedido esta hecho a nombre de " +
    nombre +
    " " +
    apellido +
    " " +
    "DNI n°" +
    " " +
    dni +
    "."
);
console.log(
  "El pedido esta hecho a nombre de " +
    nombre +
    " " +
    apellido +
    " " +
    "DNI n°" +
    " " +
    dni +
    "."
);
alert("Gracias por confiar en FERRETERIA PIPO");
