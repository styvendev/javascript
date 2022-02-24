const process = require("process");

// Señales del sistemas

process.on("beforeExit", () => {
  console.info("Esto sucede antes de que termine el proceso");
});

process.on("exit", () => {
  console.log("El proceso termia aca");
});

process.on("uncaughtException", (error) => {
  console.error("Vaya, hemos omitido un error");
  console.error(error.message);
});

functionError();
