/* ============================================
; Title: Assignment 5.4 Filtering/Reducing Complex Data Structures
; Author: Professor Krasso
; Date: 24 June 2020
; Modified By: Wendy Leon
; Description: Object Collections
;=========================================== */

/*
Using map() function, create a filtered array of composers by rating
Using map() function, create a filtered array of composers by genre .
Using forEach() function, iterate over each array and output the results.
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/

// Add Header

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 5.4 - Filtering/Reducing Complex Data Structures"));
console.log('\n');

var composers = [
  {
    genre: 'Classical',
    lastName: 'Beethoven',
    rating: '8'
  },
  {
    genre: 'Classical',
    lastName: 'Mozart',
    rating: '10'
  },
  {
    genre: 'Classical',
    lastName: 'Bach',
    rating: '9'
  },
  {
    genre: 'Classical',
    lastName: 'Haydn',
    rating: '6'
  },
  {
    genre: 'Classical',
    lastName: 'Schubert',
    rating: '5'
  }
]

var eachComposerRating = composers.map(function(composer){

  return 'Rating: ' + composer.rating + ': ' + '\nComposer: ' + composer.lastName + '\n';

})

console.log('-- COMPOSER BY RATING --');

eachComposerRating.forEach(
   function (rating){
      console.log(rating)
   }
);

var eachComposerGenre = composers.map(function (composer){
   return 'Genre: ' + composer.genre + ': ' + '\nComposer: ' + composer.lastName + '\n';
})
console.log('-- COMPOSER BY Genre --');

eachComposerGenre.forEach(function (genre) {
  console.log(genre);
});
