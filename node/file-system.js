const fs = require("fs");

function write(router, content, cb) {
  fs.writeFile(router, content, (error) => {
    if (error) {
      console.error("No he podido escribirlo", error);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function read(router, cb) {
  fs.readFile(router, (error, data) => {
    cb(data.toString());
  });
}

function drop(ruta, cb) {
  fs.unlink(ruta, (error) => {
    if (error) {
      console.error("Ha ocurrido un error", error);
    } else {
      console.log("Se a eliminado correctamente");
    }
  });
}

// ---

write(
  __dirname + "/archivo.txt",
  "Probar el file system de node y manejo de una infrastructura para interactuar con el sistemas de archivos",
  console.log
);

read(__dirname + "/archivo.txt", console.log);
drop(__dirname + "/archivo.txt");
