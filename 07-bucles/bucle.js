// bucles
let frutas = ["manzana", "banana", "uva", "pera"]
console.log(frutas.length)

for (let index = 0; index < 5; index++) {
    console.log(index)
}


for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}


// while
let i = null;
while(i < 5){
    console.log(i)
    i += 1
}

let index = 0;
while(index < frutas.length ){
    console.log(frutas[index])
    index += 1
}


// bucle for of
for(let fruta of frutas){
    console.log(fruta)
}


for(let fruta in frutas){
    console.log(fruta)
}


let a = 0;
do {
    console.log(frutas[a])
    a++;
} while (a < frutas.length);


var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
let doubles2 = numbers.map(x => x * 2);

console.log(doubles2)
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

let roots2 = numbers.map(x => Math.sqrt(x));
console.log(roots2)
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]









