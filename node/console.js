let table = [
  {
    name: "styven",
    twitter: "styvensk8",
  },
  {
    name: "Johan",
    twitter: null,
  },
];

console.log("Normal");
console.info("Informacion");
console.error("Errores");
console.warn("Extremadamente un error");
console.table(table);

console.group();
console.groupEnd();

console.count();
console.countReset();

let suma = 0;
console.time("Bucle");
for (let i = 0; i < 10000000; i++) {
  suma++;
}
console.timeEnd("Bucle");
