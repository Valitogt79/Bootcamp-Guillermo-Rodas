/* agregando propiedades al objeto

 */const human = {
  name: "Oswaldo",
  lastname: "Alonzo",
  age: 45
};

/* imprimiendo propiedades individuales */
console.log(human);
console.log(human.name);

/* agregando propiedades al objeto */
human.id = Symbol("valitogt");
human.blonde = true;
console.log(human);

console.log(typeof human.id);

/* Se puede ascceder a las propiedades con el operador "punto" o "corchete"  */
const designer = {
  name: "Juan",
  lastname: "Garces",
  "the Best Designer": true,
}

console.log(designer["name"]);
console.log(designer["the Best Designer"]);

/* Las propiedaes se pueden cambiar en el tiempo */
human.blonde = false;
human.age = human.age - 10;

console.log(human);

/*  Podemos elimiar las propiedades con el operador "delete" */
delete human.lastname;
delete human.age;

console.log(human);

/** Funciones puras y mutación en Javascript */
/* Function Statements ( Sentencia de Funcion / Declaración) */
function walk() {
  console.log("I am walking");
}

walk();

/* Function Expression (Expresión de función) */

const walkingWhithStyle = function () {
  console.log("I am walking");
}

walkingWhithStyle();

/* funcioines puras */

function sum(x, y) {
  return x + y;
}

console.log(sum(2, 1));

/* Copiar valor y copiar referencia */

let name = "Oswaldo";
let nickname = "valitogt";
name = "William"

console.log(name)
console.log(nickname)

let earthBorn = {
  name: "John",
}

let alien = earthBorn;
alien.name = " nhojano";

console.log(earthBorn);
console.log(alien)


/* funcion impura */

function changeName(person, newName) {
  person.name = newName;
  return person;
};

changeName(human, "Wilhelm")
const peopleInSingular = changeName(human, "Pedro");


console.log(peopleInSingular)
console.log(human);


/* Cómo hacer una copia de un objeto de manera pura */

let fruit = ["manzana", "pera", "banana"];

for (let i = 0; i < 3; i++) {
  console.log(fruit[i]);
}
console.log(fruit.length);

/* el alcance en javascript */

let msg = "hello world";
let planet = "mars"

function scope() {
  let msg = "Olá mundo!";
  let planet = "earth";
  console.log(msg);
  if (msg) {
    let msg = "hola Mundo";
    console.log(msg, planet)
  }

  msg = "hej världen";
  console.log(msg);
}

scope();
console.log(msg);
console.log(planet);
