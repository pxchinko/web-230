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


// Create a string array of 5 states.

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'];

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

const criteria = (a) => a === "Alabama";


console.log (states.filter(getState((a) => a === "Alabama")));
















