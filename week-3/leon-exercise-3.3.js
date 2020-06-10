/*
============================================
; Title:  3.3 - Control Statements
; Author: Professor Krasso
; Date:   10 June 2020
; Modified by: Wendy Leon
; Description: Replace if statements with Switch Case statements
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output  
  The enter key was pressed
*/

// Multiway branch of if statements (replace with switch statements)

/*
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/
// Declare Variable
var eventKeyCode = 13;

// Function

function keyWord(word){
   console.log("The " + word + " key was pressed.")  
}

switch (eventKeyCode) { 

    case 13:
      keyWord("enter"); 
      break;

    case 16:
      keyWord("shift"); 
      break; 

    case 32:
        keyWord("spacebar"); 
        break;

    case 8:
        keyWord("backspace / delete key"); 
        break; 

    default:
        console.log("Unrecognized key"); 
        break;

}