/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 31 May 2020
; Modified By: Wendy Leon
; Description: Primitive Types
;===========================================
*/ 


/*
Create 3 employee records with the following fields (this means there should be 3 firstName variables, 3 lastName variables, 3 address variables, 
3 payRate variables, and 3 hireDate variables)

Format the payRate to one decimal place (see page 48 of the courses textbook)

Format the hireDate using "slashes" (see page 35 of the courses textbook; use JavaScript's built-in new Date() object)

Run and test the program and make sure the output matches what I have 

When you are happy with the output stage, commit, and push your work to GitHub
*/

// ****** Employee 1 Set of variables ******

//variable to hold Employee 1 Name
var firstName1 = "Dan";

//variable to hold employee 1 Last Name
var lastName1 = "Lee";

//variable to hold employee 1 Address
var address1 = "22 Corona Court";

//variable to hold employee 1 Pay Rate
var payRate1 = 25;
payRate1 = payRate1.toFixed(1);

//variable to hold employee 1 Hire Date
var hireDate1 = new Date(2020,0,1);
hireDate1 = hireDate1.toLocaleDateString();


// ****** Employee 2 Set of variables ******

//variable to hold Employee 2 Name
var firstName2 = "Camille";

//variable to hold employee 2 Last Name
var lastName2 = "Rod";

//variable to hold employee 2 Address
var address2 = "66 Wellness Court";

//variable to hold employee 2 Pay Rate
var payRate2 = 15;
payRate2 = payRate2.toFixed(1);

//variable to hold employee 2 Hire Date
var hireDate2 = new Date(2010,0,5);
hireDate2 = hireDate2.toLocaleDateString();


// ****** Employee 3 Set of variables ******

//variable to hold Employee 3 Name
var firstName3 = "Paulie";

//variable to hold employee 3 Last Name
var lastName3 = "Smith";

//variable to hold employee 3 Address
var address3 = "37 Quarantine Lane";

//variable to hold employee 3 Pay Rate
var payRate3 = 65;
payRate3 = payRate3.toFixed(1);

//variable to hold employee 3 Hire Date
var hireDate3 = new Date(2005,6,3);
hireDate3 = hireDate3.toLocaleDateString();

//code output for employee 1 data set
console.log("First name: " + firstName1);

console.log("Last name: " + lastName1);

console.log("Address: " + address1);

console.log("Pay Rate: " + payRate1);

console.log("Hire Date: " + hireDate1 + "\n");

//code output for employee 2 data set
console.log("First name: " + firstName2);

console.log("Last name: " + lastName2);

console.log("Address: " + address2);

console.log("Pay Rate: " + payRate2);

console.log("Hire Date: " + hireDate2 + "\n");

//code output for employee 3 data set
console.log("First name: " + firstName3);

console.log("Last name: " + lastName3);

console.log("Address: " + address3);

console.log("Pay Rate: " + payRate3);

console.log("Hire Date: " + hireDate3);


