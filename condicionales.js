if (true){
    console.log()
}
else{
    console.log("Styven")
}

//funcion para determinar si un numero dividido es par o no
function aritmetrica(num) {
    var num;
    var result;

    result = num % 2;
    console.log(result);

    if (result == 0){
        console.log("Bien, es par ")
    }
    else{
        console.log("Mal, es impar")
    }
}
aritmetrica(120);

//Promocion de productos
function promocion(producto, precio, cantidad){
    var producto;
    var precio;
    var cantidad;
    
    var total = precio * cantidad;
    console.log( `Producto ${producto}`);
    console.log("total " + total);

    if (total >= 65000){
        descuento = total - (total*0.10);
        console.log("Descuento de 10% total: " + descuento)
    }
    else if(total >= 42000){
        console.log("Tienes envio gratis")
    }
    else{
        console.log("No tienen descuento")
    }
}

//determinar si una persona es meno o mayor de edad
var fecha_nacimiento;
var fecha_actula;
var edad;

fecha_actula = prompt("Ingrese la fecha actual:");
fecha_nacimiento = prompt("Ingrese la fecha de nacimiento");
edad = fecha_actula - fecha_nacimiento;

if(edad >= 18){
    alert("Eres Mayor de Edad")
}
else{
    alert("Eres Menor de Edad, Genial")
}

//condicionales

var numero = 123;
var result = numero % 2 == 0 ? "soy par" : "No soy par";
