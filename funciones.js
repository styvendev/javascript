// las funciones la usamos para realizar tareas o procesos
//funcion declarativa

function Ejemplo() {
  return "Styven " + 18;
}

Ejemplo();

function example(Nombre) {
  console.log(Nombre);
}

example("Johan");

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("A todos");

function multiplicacion(c, d) {
  var result = c * d;
  return result;
}

multiplicacion(5, 7);

function aritmetrica(num, num01, num03) {
  var num;
  var num01;
  var num03;
  var result;

  result = (num * num01) / num03;
  console.log(result);
}

aritmetrica(12, 14, 2);

function aritmetrica02(f, g, h) {
  return (f * g) / h;
}

aritmetrica02(13, 15, 2);

//funcion Expresiva

var suma = function (a, b) {
  return a + b;
};

suma(2, 5);

//scrol grobal

var letra = "N";

function scrolglobal() {
  var vocal = "O";
  console.log(letra + "" + vocal);
}

scrolglobal();
