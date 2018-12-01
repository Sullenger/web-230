/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   01 December 2018
; Modified By: Jason Sullenger
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Jason";
var myLastName = "Sullenger";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line


// variable declaration of company employees

var oneFirstName = "Adam";
var oneLastName = "Seattle";
var oneMiddleName = "Rutherford";
var oneAddress = "123 Main Street Houston, TX";
var onePay = 15.75;
var oneDateHire = new Date(2010, 1, 13).toLocaleDateString();

var twoFirstName = "Bertha";
var twoLastName = "Houston";
var twoMiddleName = "Delilah";
var twoAddress = "234 Main Street Denver, CO";
var twoPay = 20.00;
var twoDateHire = new Date(2012, 3, 28).toLocaleDateString();

var threeFirstName = "Charlie";
var threeLastName = "Denver";
var threeMiddleName = "Diesel";
var threeAddress = "345 Main Street Phoenix, AZ";
var threePay = 21.25;
var threeDateHire = new Date(2014, 5, 1).toLocaleDateString();

var fourFirstName = "Danielle";
var fourLastName = "Phoenix";
var fourMiddleName = "Faith";
var fourAddress = "456 Main Street Boise, ID";
var fourPay = 16.50;
var fourDateHire = new Date(2016, 7, 15).toLocaleDateString();

var fiveFirstName = "Erika";
var fiveLastName = "Boise";
var fiveMiddleName = "April";
var fiveAddress = "567 Main Street Seattle, WA";
var fivePay = 44.00;
var fiveDateHire = new Date(2018, 9, 30).toLocaleDateString();


// start of layout for display

var employeeOne = "\nFirst Name: " + oneFirstName + "\nLast Name: " + oneLastName + "\nAddress: " + oneAddress + "\nPay Rate: " + "$" + onePay.toFixed(2) + "\nHireDate: " + oneDateHire;

var employeeTwo = "\nFirst Name: " + twoFirstName + "\nLast Name: " + twoLastName + "\nAddress: " + twoAddress + "\nPay Rate: " + "$" + twoPay.toFixed(2) + "\nHireDate: " + twoDateHire;

var employeeThree = "\nFirst Name: " + threeFirstName + "\nLast Name: " + threeLastName + "\nAddress: " + threeAddress + "\nPay Rate: " + "$" + threePay.toFixed(2) + "\nHireDate: " + threeDateHire;

var employeeFour = "\nFirst Name: " + fourFirstName + "\nLast Name: " + fourLastName + "\nAddress: " + fourAddress + "\nPay Rate: " + "$" + fourPay.toFixed(2) + "\nHireDate: " + fourDateHire;

var employeeFive = "\nFirst Name: " + fiveFirstName + "\nLast Name: " + fiveLastName + "\nAddress: " + fiveAddress + "\nPay Rate: " + "$" + fivePay.toFixed(2) + "\nHireDate: " + fiveDateHire;


// start of console log for employee info

console.log(employeeOne);
console.log("\n");

console.log(employeeTwo);
console.log("\n");

console.log(employeeThree);
console.log("\n");

console.log(employeeFour);
console.log("\n");

console.log(employeeFive);