
let numero = 55;
let flotante = 56.72;

// Redondear un número al entero más cercano
console.log(Math.round(flotante)); 

// Redondear un número hacia abajo
console.log(Math.floor(flotante)); 

// Redondear un número hacia arriba
console.log(Math.ceil(flotante)); 

// Obtener la parte entera de un número
console.log(Math.trunc(flotante)); 

// Elevar un número a una potencia
console.log(Math.pow(numero, 2)); 

// Obtener la raíz cuadrada de un número
console.log(Math.sqrt(16)); 

// Obtener el valor absoluto de un número
console.log(Math.abs(-42)); 

// Generar un número aleatorio entre 0 y 1
console.log(Math.random()); 


// Convertir un número a una cadena
let numeroComoCadena = numero.toString();
console.log(numeroComoCadena); 

// Fijar el número de decimales
console.log(flotante.toFixed(2)); 

// Convertir una cadena a un número entero
let cadena = "123";
let numeroEntero = parseInt(cadena, 10);
console.log(numeroEntero); 

// Convertir una cadena a un número flotante
let cadenaFlotante = "3.14";
let numeroFlotante = parseFloat(cadenaFlotante);
console.log(numeroFlotante); 

// Verificar si un valor es un número
console.log(isNaN("texto")); 
console.log(isNaN(123)); 

// Verificar si un número es finito
console.log(isFinite(numero)); 
console.log(isFinite(Infinity)); 

// Obtener el valor máximo entre un conjunto de números
console.log(Math.max(1, 2, 3, 42)); 

// Obtener el valor mínimo entre un conjunto de números
console.log(Math.min(1, 2, 3, 42)); 
