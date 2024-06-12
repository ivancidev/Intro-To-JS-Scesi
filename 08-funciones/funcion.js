// funcion sin retorno
function saludar(nombre, apellido) {
  const persona = nombre + " " + apellido;
  console.log(persona);
  //   console.log("hola " + nombre + " apellido " + apellido);
}

saludar("ivan", "herbas");

//retorno
function sumar(a, b = 0) {
  console.log(a + b + 6);
  return a + b;
}

console.log(sumar(3, 10));

// ambito
let edad = 10;
const puerto = 5000;
function mostrar() {
  edad = 11;
  const puerto = 4000;
  let color = "azul";
  console.log(puerto);
}

mostrar();
console.log(color);

//funcion flecha
let sumar2 = (a, b) => a + b;
console.log(sumar2(2, 6));

let saludar2 = (name, edad = "no sabe la edad") =>
  name + " tiene una edad de " + edad;

console.log(saludar2("jose", 12));
console.log(saludar2("jose"));

let funcionLista = (listaProductos) => listaProductos;
let funcionLista2 = (productos, producto) => productos.push(producto);
function funcionLista3(productos, producto) {
  productos.push(producto);
  return productos;
}

let existeProducto = (productos, producto) =>
  productos.includes(producto)
    ? "Si existe el producto"
    : "No existe el producto";

let productos = ["leche", "galleta", "oreo", "soda"];
console.log(funcionLista3(productos, "jugo"));
console.log(existeProducto(productos, "jugo2"));
