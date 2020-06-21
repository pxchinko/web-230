/* ============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 18 June 2020
; Modified By: Wendy Leon
; Description: Arrays - Filter function
;=========================================== */

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/
// Add Header

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 4.2 - Array Exercise - Fruit Array"));

console.log('\n');

const ORIGINAL = " ORIGINAL ";
const SORTED = " SORTED ";
const SELECTED = " SELECTED ";
const NEW_LINE = "\n"
const ARRAY_WORD = "ARRAY ";
const TWO_LINES = "--";
// Create a string array of 5 states.

var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

// Create a function called getState with two string parameters

function getState (state1, state2){

/* In the body of the getState function add an if statement
to test if the two string parameters match.  If they match, return true*/

  if (state1 === state2)

    return true;

}

/* Using JavaScript's built-in filter() function, call the getState function
and pass-in the current element of the filter loop and the value to find
(see page 154 of the courses textbook). */

/* This is what I came up doing an online research - much easier
var X = "Iowa";
console.log (states.filter(findState => findState === X));*/

// following the instructions - this took a very long research
//https://www.javascripttutorial.net/javascript-array-filter/
/*
console.log (
    states.filter (
      function (x) {
        return getState (x, 'Iowa');

      }
    )
);*/

// Display the contents of the original array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
console.log(TWO_LINES + ORIGINAL + ARRAY_WORD + TWO_LINES);
states.forEach(element => {
  console.log(element)
});
console.log(NEW_LINE);

/*console.log(for ( var i = 0 ; i <= states.length - 1; i++ )
{
  console.log( states [i] );
});*/

// Sort and display the contents of the updated array

//forEach( element => {console.log(sortedArray = states.sort());
sortedArray = states.sort();
console.log(TWO_LINES + SORTED + ARRAY_WORD + TWO_LINES);
sortedArray.forEach (element => {console.log(element)});
console.log(NEW_LINE);

//Display the selected value
console.log(TWO_LINES + "SELECTED VALUE" + TWO_LINES)
console.log (
    selected = states.filter (
      function (x) {
        return getState (x, 'Iowa');

      }
    ).toString()
);








