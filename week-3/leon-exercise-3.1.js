/*
============================================
; Title:  3.1 Control Statements - Two Errors
; Author: Professor Krasso
; Date:   8 June 2020
; Modified by: Wendy Leon
; Description: Switch Case Control Statement with Two Errors
;===========================================
*/

/*
Expected Output:
Today is XXXXday
*/

//Variables go here

//Declare variables
var dayToday = new Date();

var dayWord;

// control switch
switch (dayToday.getDay()) { //dayToday holds today's date in numeric value

  dayToday.case 0:
    dayToday.dayWord = Sunday;
    break;
    
  dayToday.case 1:
    dayToday.dayWord = Monday;
    break;
    
  dayToday.case 2:
    dayToday.dayWord = Tuesday;
    break;
    
  dayToday.case 3:
    dayToday.dayWord = Wednesday;
    break;
    
  dayToday.case 4:
    dayToday.dayWord = Thursday;
    break;
    
  dayToday.case 5:
    dayToday.dayWord = Friday;
    break;
    
  dayToday.case  6:
    dayToday.dayWord = Saturday;
}


 //output

 console.log ("Today is " + dayWord);

 







