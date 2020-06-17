
/* ============================================
; Title: Assignment 4.1
; Author: Professor Krasso
; Date: 16 June 2020
; Modified By: Karina Alvarez - corrections by Wendy Leon
; Description: 2 errors in the array
;=========================================== */

// Add Header

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 4.1 - Array Exercise - Find two errors"));

console.log('\n');

// different variables specified at once
var favoriteShows, text, SLen, i;

// array of 4 different movies/Tv shows
//one error
favoriteShows = ["Mr. Robot", "Dark", "Money Heist", "The Good Doctor"]; // missing closing square bracket

FavLen = favoriteShows.length;

//the for loop will go through each array.
// one error
text = "";

for (i = 0; i < FavLen; i++){ // missing opening curly brace
  text += favoriteShows[i] + '\n';
}

// Output should be the 4 shows specified in favoriteShows in a different line each.
// one error
console.log(text); // removed paranthesis - text is not a function - it is an array
