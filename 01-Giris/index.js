//Slugify
import slugify from 'slugify';
const degisken = slugify('some string');

console.log(degisken);

//My Modules
import Hello, { topla, carp, bol, cikar, cars, car, text } from "./my-modules.js"

console.log(topla(5, 6));
console.log(carp(5, 6));
console.log(Hello("Ahmet"));
console.log(cars)
console.log(`Burası Dizi mi ? : ` + Array.isArray(cars));
console.log(car)
console.log("Car object mi?" + typeof car)
console.log(text)