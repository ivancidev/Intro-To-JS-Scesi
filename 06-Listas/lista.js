let lista = [1,2,3,4,5,6];
console.log(lista)

// metododos de lista
lista.push(7);
console.log(lista)

// invertir
lista.reverse();
console.log(lista)

lista.pop()
console.log(lista)


lista.unshift(-1)
lista.unshift(0)
console.log(lista)

lista.shift()
console.log(lista)

let listDesordenada = [3,6,1,2,4]
let listAbecedario = ['Z', 'P', 'C', 'D']
listAbecedario.sort()
console.log(listAbecedario)


console.log(lista.length)
console.log(lista[3].toString())





let frutas = ["manzana", "banana", "uva", "pera"]
console.log(frutas)

console.log(frutas.includes("manzana"))
console.log(frutas.includes("manzana2"))


console.log(frutas.slice(0, 2))
let frutas2 = [...frutas]
console.log(frutas2)


console.log(frutas.indexOf("manzana"))


const numerosEnlazados = [[1,2], [3,4], [5,6], [7,8]];
console.log(numerosEnlazados[0].unshift())

console.log(numerosEnlazados.flat())


const frutas3 = [];
frutas3.push("banana", "manzana", "pera");

console.log(frutas3.length); 


let mensajes = [];
mensajes[0] = "Hola";
mensajes[99] = "mundo";

if (mensajes.length === 100) {
  console.log("La longitud es de 100.");
}



let tablero = [
    ["T", "C", "A", "D", "R", "A", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["t", "c", "a", "d", "r", "a", "c", "t"],
  ];
  
  console.log(tablero.join("\n") + "\n\n");
  
  // Adelantar dos posiciones el peón de rey
  tablero[4][4] = tablero[6][4];
  tablero[6][4] = " ";
  console.log(tablero.join("\n"));
  