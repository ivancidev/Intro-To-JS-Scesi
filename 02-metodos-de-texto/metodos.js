//metodos de cadenas
let lenguaje = "Javascript";
console.log(lenguaje.length); // tamaño de una cadena
console.log(lenguaje.toUpperCase()); // poner mayuscula
console.log(lenguaje.toLowerCase()); // poner minuscula
console.log(lenguaje.substring(4, lenguaje.length)); // script
console.log(lenguaje.substring(0, 4)); // Java
console.log(lenguaje.slice(0, 4)); // Java
console.log(lenguaje.slice(-6)); // script

let texto = "Hola a todos";
console.log(texto.replace(" ", "todos!!")); // averiguar
console.log(texto.split(" ")); // ["Hola", "a", "todos"]
// console.log(texto.trim()) // elimina espacios de adelante y el final
console.log(texto.trimStart());
console.log(texto.charAt(0));
console.log(texto.includes("todos"));
console.log(texto.indexOf("todos"));

// Repetir el texto
console.log(texto.repeat(3));


// Convertir un texto a un array de caracteres
console.log(Array.from(texto));


// Comparar dos textos
let texto2 = "Hola Mundo";
console.log(texto.localeCompare(texto2)); // 0 (son iguales)
console.log(texto.localeCompare("Adiós Mundo")); // 1 (texto es mayor)
console.log(texto.localeCompare("Zebra")); // -1 (texto es menor)