/*
============================================
; Title:  3.1 Control Statements - Two Errors
; Author: Professor Krasso / Anil Rayamajhi 
; Date:   10 June 2020
; Modified by: Wendy Leon
; Description: Anil Rayamajhi exercise 3.1 error correction
;===========================================
*/

//Variable Declaration
var numbers = [];


// for loop
for (var i = 0; i < 20; i++) { 
  isDivisibleByFive(i);
}


/** 
* Params: index 
* Response: void 
* 
* Description: add number to numbers is strictly divisible of 5 
* Hint: Modulus `%` Operator 
*/

/*

Deliverable:
Numbers: [0, 5, 10, 15]

*/

function isDivisibleByFive(index) { 
// if statement 
if ((index % 5 === 0)) {   // removed the ! and changed the division / operator by the modulous operator %
// index pushed to numbers array   
numbers.push (index); // added push function to add elements to array element
}
}

console.log("Numbers: [" + numbers + "]");


