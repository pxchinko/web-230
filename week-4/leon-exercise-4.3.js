
/* ============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 16 June 2020
; Modified By: Wendy Leon
; Description: 2 errors in the array
;=========================================== */
/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

// Add Header

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 4.2 - Array Exercise - Fruit Array"));

console.log('\n');

// start program

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function

function getValue (arr, val){

  console.log("-- SELECTED VALUE --");

  for (var k = 0; k< arr.length; k++){
    if (arr[k] === val){
      console.log (arr[k]);
    }
  }
}

// output
console.log("-- DISPLAYING ARRAY ITEMS __");
for (var x=0; x < vehicles.length; x++){
  console.log(vehicles[x]);
}

// new line
console.log("");

getValue(vehicles, "Motorcycle");

console.log("");

getValue(vehicles, "Bus");



