//Metodos de reccorrido de arrays

//declaracion de arrays
var product = [
    
    //Objetos
    {nombre: "Laptop", marca: "Lenovo", costo: 350000},
    {nombre: "Tv", marca: "Samsung", costo: 1050000},
    {nombre: "Audifonos", marca: "JBL", costo: 175000},
    {nombre: "Celular", marca: "Huawei", costo: 730000},
    {nombre: "Equipos de sonido", marca: "Soni", costo: 643000} 
];

//
var tipo_product = product.map (function(product){
    return product.nombre;
});
//filtrar
var costo_product = product.filter(function(product){
    return product.costo > 300000;
});

var marca_product = product.map (function(product){
    return product.marca;
});

//Encontrar algo dentro del arrays sin modificarlos, generando un nuevo arrays
var productos_marca = product.find (function(productos){
    return productos.marca === "Soni";
});

//Metodo para generar un filtrado de acuerdo al parametro (sin crear variables o arrays)
product.forEach(function(productos){
    console.log(productos.nombre);
})

//validacion verdadero o falso
var validacion = product.some(function(producto){
    return producto.costo === 175000;
})

var validacion2 = product.some(function(producto){
    return producto.marca === "hp";
})