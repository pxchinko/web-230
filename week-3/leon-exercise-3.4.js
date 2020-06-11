/*
============================================
; Title:  3.4 - Loops
; Author: Professor Krasso
; Date:   10 June 2020
; Modified by: Wendy Leon
; Description: Looping statements
;===========================================
*/

/*
Create a variable and assign it a value between 1 and 10
Take the functions you wrote in exercise 3.2 (match, logMismatch and logMatch) and copy them to this week's assignment.
Create a for loop with 10 iterations and inside the body of the for loop create a local variable and assign it a random number between 1 and 10 (use the randomNumber function I have provided in the starter code)
During each iteration of the for loop the random number should be reassigned a new random value (this means the placement of the variable should be inside the for loop).
Next, create an if...else statement and use the match function to test if the variable in step one matches the random number created in step 3.  For true, call the logMatch function using the same two values.  For false, call the logMismatch function using the same two values.  If it is not obvious by now, you are basically wrapping a for loop around the work you did in exercise 3.2.  And, instead of using multiple if...else statements and test variables you will be using a for loop to generate the test variables and one if..else statement to check the generated values.
Run and test the program and make sure your out
*/

// Declare Variable


/*
Create a variable and assign it a value between 1 and 10*/

var number = 5;

/* Take the functions you wrote in exercise 3.2 (match,
logMismatch and logMatch) and copy them to this week's
assignment.*/

// Function

function match (para1, para2){
  if (para1 === para2){
      return true;
  }
  else{
      return false;
  }
}

function logMismatch (para1, para2){
  console.log ("The " + para1 + " and " + para2 + " parameters do not match! \n");
}

function logMatch(para1, para2){
  console.log ("The " + para1 + " and " + para2 + " parameters do match! \n")
}

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}



for (var x = 0; x < 10; x++) {

   var randomNumb = (randomNumber()); // var that holds random number
   console.log ("The random Number iteration # " + (x+1) + " is: " + randomNumb);

   if (match(number, randomNumb) == 1) { //if numbers do match
      logMatch(number, randomNumb); // print match message
   }
   else { // if numbers do not match
      logMismatch (number, randomNumb); // print no match message
   }

}


