
//condicional if and else
let edad = 12
if (edad > 18) {
  console.log("Es mayor");
} else {
  console.log("Es menor");
  
}

//condicional switch
let dia = "lunes2";
switch(dia){
  case "martes":
    console.log("Es martes");
    break;
  case "lunes":
    console.log("Es lunes");
    break;
  case "miercoles":
    console.log("Es miercoles");
    break;
  case "domingo":
    console.log("Es domingo");
  default:
    console.log("No existe")
}

//operador ternario  condición ? expr1 : expr22 
let mensaje = edad > 18 ? "Es mayor": "Es menor";
console.log(mensaje)