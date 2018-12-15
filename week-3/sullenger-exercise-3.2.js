/*
============================================
; Title:  sullenger-pattern-matching-functions.js
; Author: Jason Sullenger
; Date:   15 December 2018
; Description: Defines functions that test matches. Includes test variables and tests them against each other
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

// variable declared here
var exerciseVariable1 = "Truck";
var exerciseVariable2 = "Car";
var exerciseVariable3 = "Bike";
var exerciseVariable4 = "Four";
var exerciseVariable5 = "Three";
var exerciseVariable6 = "Bike";

// Functions now defined
function match (firstParam, secondParam) {
  if (firstParam === secondParam)
    return true;
  else
    return false;
};

function logMismatch (mismatchFirstParam, mismatchSecondParam) {
  console.log(mismatchFirstParam + " and " + mismatchSecondParam + " do not match!");
};

function logMatch (matchFirstParam, matchSecondParam) {
  console.log(matchFirstParam + " and " + matchSecondParam + " do match!");
};

/*Tests output for code in sullenger-header.js
parameters passed are first name, last name, and assignment name*/
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.2"));


// console log proving match function is working
console.log("\n" + match(exerciseVariable1, exerciseVariable2));
console.log(match(6, 6) + "\n");


// If/Else checks of the 6 declared variables
if (match(exerciseVariable1, exerciseVariable2)){
  logMatch(exerciseVariable1, exerciseVariable2);
} else {
  logMismatch(exerciseVariable1, exerciseVariable2);
};

if (match(exerciseVariable3, exerciseVariable6)){
  logMatch(exerciseVariable3, exerciseVariable6);
} else {
  logMismatch(exerciseVariable3, exerciseVariable6);
};

if (match(exerciseVariable4, exerciseVariable5)){
  logMatch(exerciseVariable4, exerciseVariable5);
} else {
  logMismatch(exerciseVariable4, exerciseVariable5);
};
