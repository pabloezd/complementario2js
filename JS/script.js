
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

//Definimos variables
let cantidadCompra;

// Función para ahorrar codigo
function stockSuficiente(stock, precio, producto){
    alert("El total de su compra es de $" + cantidadCompra * precio);
    console.log("Stock Restante" + producto + ": " + stock);
}

//Preguntamos al usuario cuantos productos diferentes quiere comprar
let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo para repetir tantas veces como el usuario indique productos distintos a adquirir
for(let i = 0; i < cantidadProductosDistintos; i++){

    //Preguntamos al usuario el producto que quiere
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");
    
    //Si contamos con el producto, luego pedimos cantidad de compra y devuelve el monto total
    if (productoElegido === producto1){
         cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra <= stockProducto1) {
            let stockRestante1 = stockProducto1 - cantidadCompra;
            stockSuficiente(stockRestante1, precioProducto1, producto1)
        }
    }
    
    else if (productoElegido === producto2){
         cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra <= stockProducto2) {
            let stockRestante2 = stockProducto2 - cantidadCompra;
            stockSuficiente(stockRestante2, precioProducto2, producto2)
        }
    }
    
    else if (productoElegido === producto3){
         cantidadCompra = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra <= stockProducto3) {
            let stockRestante3 = stockProducto3 - cantidadCompra;
            stockSuficiente(stockRestante3, precioProducto3, producto3)
        }
    }
    
    //Si no contamos con el producto o stock disponible, mostramos este mensaje al usuario indicando qué productos puede elegir
    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Taladro, Sierra o Amoladora");
    }
}







