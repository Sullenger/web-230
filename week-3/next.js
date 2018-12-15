/*
============================================
; Title:  sullenger-pattern-matching-functions.js
; Author: Jason Sullenger
; Date:   15 December 2018
; Description:
;===========================================
*/

/*Tests output for code in sullenger-header.js
parameters passed are first name, last name, and assignment name*/

const header = require('../week -2/sullenger-header.js');

console.log(header.display("Jason" , "Sullenger" , "Exercise 3.2"));


// Functions defined here

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





console.log("\n" + match(6, 6));
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
