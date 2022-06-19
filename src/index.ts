import { Hero } from "./classes/Hero";
import powers from "./data/powers";
import { printObject, generico, genericoArrow } from "./generics/generics";
import { Villain, Hero as Heroo } from "./interfaces";

//**Class */
//const ironman = new Hero("Dario", 1, 22);
//console.log(ironman.powers);

//*Funciones genericas
// console.log(printObject(123));
// console.log(printObject("Hola"));
// console.log(printObject(["Hola", 123]));
// console.log(printObject({ hoola: "hola" }));

// console.log(generico(123));
// console.log(generico("Hola"));
// console.log(generico(["Hola", 123]));
// console.log(generico({ hoola: "hola" }));

// console.log(genericoArrow(123));
// console.log(genericoArrow("Hola"));
// console.log(genericoArrow(["Hola", 123]));
// console.log(({ hoola: "hola" }));

//* Funciones genericas interfaces
// const deadPool = {
//   name: "DeadPool",
//   realName: "Wade Winston Wilson",
//   age: 23,
//   dengerLevel: 100,
// };

// console.log(genericoArrow<Heroo>(deadPool));
//console.log(genericoArrow<Villain>(deadPool));
