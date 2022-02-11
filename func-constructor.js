//funciones constructoras
function computadores(marca, procesador, ram, GB) {
  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram;
  this.GB = GB;
}

//Array para guardar los objetos
var pc = [];

//Variablespara que conega el numero de veces qu vamos a ingresar un objeto
var x;
x = prompt("ingrese la cantidad");

for (var i = 0; i <= x; i++) {
  // variables para generar las propiedades del objeto
  var marca = prompt("Ingresa la marca del computador");
  var procesador = prompt("Ingresa el procesador");
  var ram = prompt("Ingresa la RAM");
  var GB = prompt("Ingrese las GB");
  pc.push(new computadores(marca, procesador, ram, GB));
}

for (let i = 0; i < pc.length; i++) {
  console.log(pc[i]);
}

// Ejemplo 2

function libro(titulo, autor, idioma, editorial) {
  this.titulo = titulo;
  this.autor = autor;
  this.idioma = idioma;
  this.editorial = editorial;
}

//Generar una nueva variables por cada objeto
var libroNuevo = new libro(
  "Las 48 Leyes del poder",
  "Robert Greene",
  "Español",
  "Oceano"
);

//Generar un Arrays que me contenga todos los objetos que yo quiera ingresa o eiminar
var libros = [];
libros.push(
  new libro(
    "las 33 estrategias de la guera",
    "Robert Greene",
    "Español",
    "Oceano"
  )
);
libros.push(
  new libro("El arte de la seducion", "Robert Greene", "Español", "Oceano")
);
console.log(libros[0]);
