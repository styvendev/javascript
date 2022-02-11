//Array
var product = [
  "Tv",
  "Equipo de sonido",
  "Celulares",
  "Audifonos",
  "Consola de video juegos",
  "DVD",
];

console.log(product);
console.log(product[3]);

//Añadir o eliminar el ultimo objeto
var new_product = product.push("Pc");
var sould_out = product.pop();

//Añadir o eliminar el primer objeto
var first_product = product.unshift("MacBook");
var rm_product = product.shift("MacBook");

//Ver la posicion de un objeto
var position = product.indexOf("Celulares");
