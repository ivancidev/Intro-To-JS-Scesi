//Seleccionar por ID
const myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Seleccionar por Clase
const myDivs = document.getElementsByClassName("myDiv");
console.log(myDivs);

// Seleccionar por etiqueta
// const list = document.getElementsByTagName("li");
// console.log(list);

// Seleccionar por selector todos
const list2 = document.querySelectorAll("ul");
console.log(list2);

// Seleccionar por selector por unica vez
const list3 = document.querySelector(".lista li");
console.log(list3);

// Cambiar texto
const p1 = document.getElementById("p1");
console.log(p1);
p1.textContent = "Mi parrafo cambiado";
p1.innerHTML = '<strong>' + p1.textContent + '</strong>';


// agregar y eliminar elementos
const list = document.getElementById("list");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
let count = list.childElementCount;

btnAdd.addEventListener("click", () => {
    const newItem = document.createElement("li");
    count = sumCount(count);
    newItem.textContent = `item ${count}`;
    list.appendChild(newItem);

})

btnRemove.addEventListener("click", () => {
    const lastItem = list.lastElementChild;
    list.removeChild(lastItem);
})

function sumCount(count) {
    return count + 1;
}

// cambiar estilos
const stylesDiv = document.querySelector(".stylesDiv");
const btnStyle = document.getElementById("btnStyle");
btnStyle.addEventListener("click", () => {
    stylesDiv.style.backgroundColor = "red";
    stylesDiv.style.color = "white";
    stylesDiv.style.padding = "10px"
    stylesDiv.style.fontSize = "25px";
})




