//variables de entorno
let names = process.env.NAME || "Name";
let email = process.env.EMAIL;

console.log("Hello " + names);
console.log("Enter your email " + email);

global.num = "Variable Global";
console.log("Forma de crear una", num);
