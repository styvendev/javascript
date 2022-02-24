function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hello", name);
    }, 1000);
    resolve(name);
    reject("Error en la funcion hello");
  });
}

function hablar(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...");
    }, 1000);
    resolve(name);
    reject("Error en la funcion hablar");
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bye", name);
    }, 1000);
    resolve();
    reject("Error en la funcion bye");
  });
}

// ---

hello("Styven")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then((name) => {
    return hablar(name);
  })
  .then(bye)
  .catch((error) => {
    console.error("Ha habido un error");
    console.error(error);
  });
