/* ============================================
; Title: Assignment 5.1 Advanced Arrays
; Author: Professor Krasso
; Date: 22 June 2020
; Modified By: Wendy Leon
; Description: Advanced Arrays
;=========================================== */

/*  Create a simple JavaScript program using a keyed collection array with at least two (2) errors
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 5.1 - Advanced Arrays"));
console.log('\n');

// creating a map object
let animalEat = new Map();
// adding keys and values to a map object
animalEat.set('cow, grass');
animalEat.set(squirrel, nuts');
animalEat.set(monkey , bananas');
//displaying the keys and values of the map object
for (let [key, value] of animalEat){
  console.log('The ' + key + ' eats ' + value);
}

//displaying the size of the map object
console = log(animalEat.size);
//displaying the value of a key in the map object
console.log(animalEat.get('cow'));
//displaying the value of a key in the map object
console.log(animalEat.has('frog'));
// deleting the value of the cow key in the map object
console.log(animalEat.delete('cow'));
// emptying the map object
console.log(animalEat.clear());
//displaying the size of the map object
console.log(animalEat.size);









