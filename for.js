//Ciclo for
var Productos = ["Pc", "Mause", "Laptor", "Mac", "Audifonos"];

function new_Product(product) {
  console.log(`Producto ${product}`);
}

for (var i = 0; i < Productos.length; i++) {
  new_Product(Productos[i]);
}
for (var product of Productos) {
  new_Product(product);
}
//segundp ejercicio

var n;
var suma = 0;

n = prompt("Ingrese la longitud de personas");

for (var i = 1; i <= n; i++) {
  var age;
  age = prompt("Ingrese la edad de la persona " + i);

  if (age >= 18) {
    var mayor = 1;
    suma += mayor;
  }
}
alert("Total de personas mayores de edad " + suma);
