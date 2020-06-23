/* ============================================
; Title: Assignment 5.2 Built-in Functions
; Author: Professor Krasso
; Date: 23 June 2020
; Modified By: Wendy Leon
; Description: Advanced Arrays
;=========================================== */

/*
Create a String array of your five (5) favorite food types.
Using forEach(), iterate over the array and output the results.
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 5.1 - Advanced Arrays"));
console.log('\n');

/*  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

var faveFoods = ["Oysters","Shrimp","Steak","Tacos","Sushi"];

faveFoods.forEach(function (food){console.log(food)});






