/*
============================================
; Title:  3.2 - Pattern Matching Functions
; Author: Professor Krasso
; Date:   10 June 2020
; Modified by: Wendy Leon
; Description: Matching functions for logical error handling
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

/* Run and test the program and make sure your output matches what I have in the starter code. 
Stage, commit and push your work to GitHub .

*/ 

// Add Header

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 3.2 - Pattern Matching Functions"));

console.log('\n');


//Declare variables

//Create six local test variables with default values.

var testVar1 = "Truck";
var testVar2 = "Car";

var testVar3 = "Blue";
var testVar4 = "Blue";

var testVar5 = 1;
var testVar6 = 2;

var testVar7 = 3;
var testVar8 = 3;

// Functions 

/*
Create a function called match with two parameters, compare the parameters using the equality 
operation (===).  If they match return true if they do not match return false. */

function match (para1, para2){
    if (para1 === para2){
        return true;
    }
    else{
        return false;
    }
}

/*
Create a function called logMismatch with two parameters, create a string message with 
the two parameters saying they do not match.  Use the parameters as the values you display
 in the string message. 
 */

 function logMismatch (para1, para2){
     console.log("The " + para1 + " and " + para2 + " parameters do not match!");
 }

 /* Create a function called logMatch with two parameters, create a string message with the
two parameters saying they do match.  Use the parameters as the values you display in 
the string message.*/

 function logMatch(para1, para2){
     console.log("The " + para1 + " and " + para2 + " parameters do match!")
 }

 //output from the match() function

 console.log(match("A","B"));
 console.log(match(2,2));

 /*
Using if...else statements call the match function and pass-in two of the test variables.  
In the body of the "true" statement call the logMatch function and pass-in these same 
two variables.  In the body of the "false" statement call the logMismatch function 
and pass-in these same two variables.  Repeat this process until all 6 variables 
have been tested.*/

if (match(testVar1,testVar2)){
    logMatch(testVar1, testVar2)
}
else {
    logMismatch(testVar1, testVar2)
}

if (match(testVar3,testVar4)){
    logMatch(testVar3, testVar4)
}
else {
    logMismatch(testVar3, testVar4)
}

if (match(testVar5,testVar6)){
    logMatch(testVar5, testVar6)
}
else {
    logMismatch(testVar5, testVar6)
}

if (match(testVar7,testVar8)){
    logMatch(testVar7, testVar8)
}
else {
    logMismatch(testVar7, testVar8)
}


 







