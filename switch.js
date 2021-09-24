var opcion = prompt("Ingrese una opcion:");

switch(opcion){
    case "1":
        var num01 = 23;
        var num02 = 34;
        var result = num01 + num02;
        alert(result);
        break;
    case "2":
        var num03;
        var num04;

        num03 = prompt("Ingrese el primer numero:");
        num04 = prompt("Ingrese el segundo numero:");
        var result02 = num03 - num04;
        alert(result02);
        break;
    case "3":
        var num;

        num = prompt("Ingrese el Numero");
        var result03 = num % 2;

        if(result03 == 0){
            alert("El numero es par")
        }else{
            alert("numero impar")
        }
        break;
}