//Ciclo while
var marcas = ["Adidas", "Puma", "Apple", "Samsung", "Soni"];

function productos(producto){
    console.log(`Producto de marca ${producto}`)
}

while(marcas.length > 0){
    console.log(marcas)
    var producto = marcas.shift();
    productos(producto)
}

