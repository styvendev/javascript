//los monohilos son ciclos
let i = 0;

let x = setInterval(function () {
  console.log(i);
  i++;
  if (i === 4) {
    console.log("termino");
    clearInterval(x);
  }
}, 1000);

setImmediate(function () {
  console.log("Inicio");
});
