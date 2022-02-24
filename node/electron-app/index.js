const { app, BrowserWindow } = require("electron");

let ventana;

app.on("ready", create);

function create() {
  ventana = new BrowserWindow({
    width: 800,
    height: 600,
  });
  ventana.loadFile("./src/index.html");
}
