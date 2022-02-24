
//Damos la bienvenida a nuestra página Web, preguntando el nombre de la persona que ingresa
let saludarUsuario = prompt("Por favor ingrese su nombre");
let emailUsuario = prompt("Por favor ingrese su correo electrónico");
alert("Bienvenido/a a nuestra Ferretería, " + saludarUsuario);

//Registramos el nombre en un console.log para ver quién accedió
function registroUsuario(nombre, email) {
    console.log("Ingresó: " + nombre + " " + ", y su email es: " + email);
}
registroUsuario(saludarUsuario, emailUsuario);

//Definimos la funcion constructora para nuevos productos como objetos
function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}
//Empezamos a listar los productos 
const prod1 = new Producto ("Amoladora", 10, 500);
const prod2 = new Producto ("Sierra", 15, 600);
const prod3 = new Producto ("Taladro", 30, 450);

//Definimos el array de productos
const listaProd = [prod1, prod2, prod3]
const allProducts = [listaProd[0].nombre, listaProd[1].nombre, listaProd[2].nombre]

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
    if ((productoElegido === listaProd[0].nombre) && (cantidadCompra <= listaProd[0].stock)){
        stockSuficiente(cantidadCompra, listaProd[0].precio); 
        let stockRestante1 = listaProd[0].stock - cantidadCompra;
        stockQueda(listaProd[0].nombre, stockRestante1);
    }
    
    else if ((productoElegido === listaProd[1].nombre) && (cantidadCompra <= listaProd[1].stock)){
        stockSuficiente(cantidadCompra, listaProd[1].precio); 
        let stockRestante2 = listaProd[1].stock - cantidadCompra;
        stockQueda(listaProd[1].nombre, stockRestante2);
    }
    
    else if ((productoElegido === listaProd[2].nombre) && (cantidadCompra <= listaProd[2].stock)){
        stockSuficiente(cantidadCompra, listaProd[2].precio); 
        let stockRestante3 = listaProd[2].stock - cantidadCompra;
        stockQueda(listaProd[2].nombre, stockRestante3);
    }

    //Si no contamos con el producto o stock disponible, mostramos este mensaje al usuario indicando qué productos puede elegir
    else{
        alert("No contamos con ese producto o no tenemos stock disponible. Por favor elija entre Taladro, Sierra o Amoladora");
    }
}

//Metodo para verificar por alert si tenemos determinado producto en nuestro array
let chequearProducto = prompt("Verifique si tenemos el producto")
alert(allProducts.includes(chequearProducto))





