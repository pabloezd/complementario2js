
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

// Función para ahorrar codigo
function stockSuficiente(stock, cantidad, precio, producto){
    alert("El total de su compra es de $" + cantidad * precio);
    console.log("Stock Restante " + producto + ": " + stock);
}

//Preguntamos al usuario cuantos productos diferentes quiere comprar
let cantidadProductosDistintos = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos a adquirir"));

//Ciclo para repetir tantas veces como el usuario indique productos distintos a adquirir
for(let i = 0; i < cantidadProductosDistintos; i++){

    //Preguntamos al usuario el producto que quiere
    let productoElegido = prompt("Por favor, ingrese el producto que está buscando");
    
    //Si contamos con el producto, luego pedimos cantidad de compra y devuelve el monto total
    if (productoElegido === producto1){
         let cantidadCompra1 = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra1 <= stockProducto1) {
            let stockRestante1 = stockProducto1 - cantidadCompra1;
            stockSuficiente(stockRestante1, cantidadCompra1, precioProducto1, producto1)
        }
    }
    
    else if (productoElegido === producto2){
         let cantidadCompra2 = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra2 <= stockProducto2) {
            let stockRestante2 = stockProducto2 - cantidadCompra2;
            stockSuficiente(stockRestante2, cantidadCompra2, precioProducto2, producto2)
        }
    }
    
    else if (productoElegido === producto3){
         let cantidadCompra3 = parseInt(prompt("Por favor, también ingrese la cantidad de compra"));
        if (cantidadCompra3 <= stockProducto3) {
            let stockRestante3 = stockProducto3 - cantidadCompra3;
            stockSuficiente(stockRestante3, cantidadCompra3, precioProducto3, producto3)
        }
    }
    
    //Si no contamos con el producto o stock disponible, mostramos este mensaje al usuario indicando qué productos puede elegir
    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Taladro, Sierra o Amoladora");
    }
}







