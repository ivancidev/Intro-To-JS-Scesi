var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);

var myCar = {
  //clave   valor
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

console.log(myCar.make);

let student = {
  name: "Juan",
  subjects: ["english", "math"],
  data: function () {
    return `Name: ${this.name}`;
  },
  description: {
    height: 1.9,
    weight: "80kg",
  },
};

console.log(student.data());
console.log(student.description.height);
console.log(student.subjects[0]);

student.name = "Dylan";
console.log(student.data());
// agregar una propiedad
student["lastName"] = "Carrasco";
console.log(student.lastName);

console.log(student.age);

// function inscription(student) {
// const {name, subjects, lastName} = student;
//   return `Name: ${name} and lastName: ${lastName}`;
// }

function inscription({name, subjects, lastName}) {
  return `Name: ${name} and lastName: ${lastName} subjects: ${subjects}`;
}

console.log(inscription(student));

//Destructuracion de objetos
const obj = {
  a: 1,
  b: 2,
};
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
console.log(a);


// Clases
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}


let objPerson = new Person("juan", 34);
console.log(objPerson.greeting());


// Extends
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  get() {
    return `Subjects: ${this.subject}`
  }
}


let objTeacher = new Teacher("juan", 34, "english");
console.log(objTeacher.greeting());
console.log(objTeacher.get())