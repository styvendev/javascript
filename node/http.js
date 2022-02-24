const http = require("http");

const port = 3000;

function router(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  switch (req.url) {
    case "/":
      res.write("Puerto creado con node");
      res.end();
      break;
    default: {
      res.write("404: ! Url no existe");
      res.end();
    }
  }
}

http.createServer(router).listen(port, (error) => {
  if (error) {
    console.info("No ha una conecion establecida con el servidor");
    console.error(error.message);
  }
  console.info("corriendo en http://localhost:" + port);
  console.log("Inicio");
});
