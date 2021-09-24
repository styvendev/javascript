//Objetos
var laptop = {
    //propiedades
    maraca: "Hp",
    pantalla: "18 pulgadas",
    procesador: "Intel core I5",
    ram: "RAM 16 GB",
    gb: "1 TB"
};

//seleccion
laptop.procesador;
laptop.ram;

//Objeto 2
var pc = {

    //propiedades
    marca: "Huawei",
    procesador: "Ryzen AMD 5 3600",
    ram: "RAM 8 GB",
    gb: "2 TB",
    propiedades: function(){
        console.log(`Computador ${this.marca} con procesador ${this.procesador}`);
    }
};
//seleccion
pc.gb;
pc.propiedades();