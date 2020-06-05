/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   5 June 2020
; Modified by: Wendy Leon
; Description: Functions with and without parameters
;===========================================
*/

/*

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/


var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 2.4 - Functions"));

console.log('\n');

//Create a function called fullName with two parameters
//(first and last name) and a return the two parameters as one string.


//function

function fullName(first, lastName){

  return (first + " " + lastName);
}

 //output

 console.log(fullName("Wendy","Leon"));

 // test with variable

 testFullName = fullName("Alfie","Leon");
 console.log(testFullName);

 // Create a function called dateWriter with three parameters
 //(year, month, and day) and return a new date using the
 //passed-in values.

//function

 function dateWriter (year, month, day){

  return (new Date(day, month, year));
}

 //output

 console.log(dateWriter(1,0,1978));

// test with variable

  testDateWriter = dateWriter(7,18,2010);
  console.log(testDateWriter);

// Create a function called formatNumber with two parameters
//(number and numOfFixedPositions) and return the number
//with the number of fixed positions you specified in the
//second parameter.

//function

function formatNumber (number, numOfFixedPositions){

  return (number.toFixed(numOfFixedPositions));
}

 //output

 console.log(formatNumber(5,4));

// test with variable

testFormatNumber = formatNumber(4,2);
console.log(testFormatNumber);

//Create a function called convertToInt with one string
//parameter.  Parse the string parameter and return the
//value as an integer.


//function

function convertToInt (stringParameter){

  return (parseInt(stringParameter));
}

 //output

 console.log(convertToInt("5 is the number to be converted"));

// test with variable

testConvertToInt = parseInt("2nd test");
console.log(testConvertToInt);


//Create a function called convertToFloat with one string
//parameter.  Parse the string parameter and return the
//value as a float.

//function

function convertToFloat (stringParameter){

  return (parseInt(stringParameter));
}

 //output

 console.log(parseFloat("5.68 is the number to be converted"));

// test with variable

testConvertToFloat = parseFloat("4.63 miles");
console.log(testConvertToFloat);


