class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<br><br>Código</br> ${this.codigo}`);
        document.write(`<br><br>Nombre</br> ${this.nombre}`);
        document.write(`<br><br>Precio</br> ${this.precio} <br><br>`);
    }
}

let productos =[]

function agregarProducto(){
    for(let i =0; i <3; i++){
        let codigo = new Date().getTime();
        let nombre = prompt("Ingrese el nombre del producto");
        let precio = prompt("Ingrese el precio del producto");

        productos.push(new Producto(codigo, nombre, precio));
    }
}

function mostrarDatos(){
productos.forEach(function(producto){
    producto.imprimeDatos();
});
}