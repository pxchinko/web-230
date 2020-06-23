/* ============================================
; Title: Assignment 5.3 Object Collections
; Author: Professor Krasso
; Date: 23 June 2020
; Modified By: Wendy Leon
; Description: Object Collections
;=========================================== */

/*
Create an array of five (5) composer objects with the following fields:
firstName, lastName, genre, rating (acceptable values are between 1 and 10)
Using forEach(), iterate over the composer objects and output the results.
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 5.3 - Object Collections"));
console.log('\n');

var composers = [
  {
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: '8',
  },
  {
    lastName:'Mozart',
    genre: 'Classical',
    rating: '10',
  },
  { lastName: 'Bach',
    genre: 'Classical',
    rating: '9',
  },
  {
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '9',
  },
  {
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '5',
  }
];

composers.forEach(function(composer){

  console.log('Lastname: ' + composer.lastName + ', Genre ' + composer.genre + ', Rating: ' + composer.rating + '.')

})




