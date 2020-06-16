
/* ============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 16 June 2020
; Modified By: Wendy Leon
; Description: 2 errors in the array
;=========================================== */


// Add Header

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 4.2 - Array Exercise - Fruit Array"));

console.log('\n');

/* Desired output

    Melon , Cherry, Orange, Banana, Watermelon

*/

// Two errors below

var fruits = [ 'Melon' , 'Cherry', 'Orange', 'Banana', 'Watermelon'] ;

//Function and Iteration creation to display the fruit array

function getFruit ( arrFruit ){



for ( var x = 0; x <  arrFruit.length; x ++)

console.log ( arrFruit [ x ]);

}

// Calls the function and variable

getFruit ( fruits );
