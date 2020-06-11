/*=======================================
; Title: Discussion Board 3.1
; Author: Professor Krasso
; Date: 10 June 2020
; Modify by: Sarah Massie
; Description: Javascript program using an if else statement with 2 errors.
=======================================*/

// score
const score = 70;  // remove > - > symbol should be used for comparison and not assignment 
var msg;            // Message

function congratulate() {
  msg = 'Congratulations!';
}

function disappointment() {
  msg ='Sorry.';
}



if (score >= 70) {      // If score is 50 or higher
  congratulate();
  msg += ' Proceed to next round.';
} 
// If score is less than 50
else {  // removed else condition (score <= 70)  as this was not needed - alternatively we could have replaced the else for another if or added an if next to the else statement ie. else if (condition)
  disappointment();
  msg += ' Try that again.';
}

console.log(msg);