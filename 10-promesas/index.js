// sincrono
function tarea1() {
  console.log("tarea1");
}

function tarea2() {
  console.log("tarea2");
}

function tarea3() {
  console.log("tarea3");
}

// tarea3()
// tarea1()
// tarea2()

// asincronia con promesas
function tarea4() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Tarea4");
      resolve("Exitoso tarea4");
      reject("error");
    }, 3000);
  });
}

function tarea5() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Tarea5");
      resolve("Exitoso tarea5");
      reject("error");
    }, 1000);
  });
}

function tarea6() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Tarea6");
      resolve("Exitoso tarea6");
      reject("error");
    }, 4000);
  });
}

tarea4()
  .then((response) => {
    console.log(response);
    tarea5()
      .then((response) => {
        console.log(response);
        tarea6()
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {});
      })
      .catch((error) => {});
    // tarea5).then(tarea6)
  })
  .catch((error) => {
    console.log(error);
  });

// async-await

async function ejecutarTareas() {
  let responsetask4 = await tarea4();
  console.log(responsetask4)
  let responsetask5 = await tarea5();
  console.log(responsetask5)
  let responsetask6 = await tarea6();
  console.log(responsetask6)
}

ejecutarTareas()


// Consumir una api
// console.log(fetch('https://jsonplaceholder.typicode.com/todos'))
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json() )
      .then(json => console.log(json))


async function ejecutarApi() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  let data = await response.json()
  console.log(data)
}


ejecutarApi()