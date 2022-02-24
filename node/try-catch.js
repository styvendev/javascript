// funcion asincronas

function errorAsincrono() {
  setTimeout(function () {
    try {
      return 3 + variabel;
    } catch (error) {
      console.error("Vaya, a ocurrido un error");
      console.log(error.message);
    }
  });
}

//funciones en cascada
function errorFuntion() {
  return 4 + variable;
}

// ---
try {
  errorFuntion();
} catch (error) {
  console.error("Vaya, a ocurrido un error, fin");
  console.log(error.message);
}

errorAsincrono();
