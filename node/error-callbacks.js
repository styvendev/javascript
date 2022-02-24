function asincrona(collback) {
  setTimeout(() => {
    try {
      let a = 2 + z;
      collback(null, a);
    } catch (error) {
      collback(error);
    }
  }, 1000);
}

asincrona((error, data) => {
  if (error) {
    console.log("Tenemos un error");
    console.log(error.message);
    return false;
  }
  console.log("Nuestro dato es", data);
});
