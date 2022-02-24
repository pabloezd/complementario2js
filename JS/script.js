
//Damos la bienvenida a nuestra página Web, preguntando el nombre de la persona que ingresa
let saludarUsuario = prompt("Por favor ingrese su nombre");
let emailUsuario = prompt("Por favor ingrese su correo electrónico");
alert("Bienvenido/a a nuestra Ferretería, " + saludarUsuario);

//Registramos el nombre en un console.log para ver quién accedió
function registroUsuario(nombre, email) {
    console.log("Ingresó: " + nombre + " " + ", y su email es: " + email);
}
registroUsuario(saludarUsuario, emailUsuario);

//Definimos los productos
let producto1 = "Amoladora";
let stockProducto1 = 10;
let precioProducto1 = 500;

let producto2 = "Sierra";
let stockProducto2 = 15;
let precioProducto2 = 600;

let producto3 = "Taladro";
let stockProducto3 = 30;
let precioProducto3 = 450;


// Funciones para ahorrar codigo
function stockSuficiente(cantidad, precio){
    alert("El total de su compra es de $" + cantidad * precio);
}
function stockQueda(producto, stock){
    console.log("Stock Restante " + producto + ": " + stock);
}

//Preguntamos al usuario cuantos productos diferentes quiere comprar
let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo para repetir tantas veces como el usuario indique productos distintos a adquirir
for (let i = 0; i < cantidadProductosDistintos; i++){
    
    //Preguntamos al usuario el producto que quiere y cantidad
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");
    let cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
    
    //Si contamos con el producto y cantidad, le decimos cuanto es y por consola cuanto stock queda
    if ((productoElegido === producto1) && (cantidadCompra <= stockProducto1)){
        stockSuficiente(cantidadCompra, precioProducto1) 
        let stockRestante1 = stockProducto1 - cantidadCompra
        stockQueda(producto1, stockRestante1)
    }
    
    else if ((productoElegido === producto2) && (cantidadCompra <= stockProducto2)){
        stockSuficiente(cantidadCompra, precioProducto2) 
        let stockRestante2 = stockProducto2 - cantidadCompra
        stockQueda(producto2, stockRestante2)
    }
    
    else if ((productoElegido === producto3) && (cantidadCompra <= stockProducto3)){
        stockSuficiente(cantidadCompra, precioProducto3) 
        let stockRestante3 = stockProducto3 - cantidadCompra
        stockQueda(producto3, stockRestante3)
    }

    //Si no contamos con el producto o stock disponible, mostramos este mensaje al usuario indicando qué productos puede elegir
    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Taladro, Sierra o Amoladora");
    }
}







