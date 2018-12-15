/*
============================================
; Title:  sullenger-exercise-3.4.js
; Author: Jason Sullenger
; Date:   15 December 2018
; Description: For loop testing if a matching number is found with a random number given
;===========================================
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

/*Tests output for code in sullenger-header.js
parameters passed are first name, last name, and assignment name*/
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.4"));

// Variables defined here
var exampleVar1= 9;

// Functions now defined
function match (firstParam, secondParam) {
  if (firstParam === secondParam)
    return true;
  else
    return false;
};

function logMismatch (mismatchFirstParam, mismatchSecondParam) {
  console.log(mismatchFirstParam + " does not match " + mismatchSecondParam + "!");
};

function logMatch (matchFirstParam, matchSecondParam) {
  console.log(matchFirstParam + " does match " + matchSecondParam + "!");
};

// Console logs title of game
console.log("\n-- DO THE NUMBERS MATCH GAME --");

// For loop testing match against a random number
for (var x = 0; x < 10; x++) {
  var randomVar = randomNumber();
  if (match (exampleVar1, randomVar)){
    logMatch(exampleVar1, randomVar);
  } else {
    logMismatch(exampleVar1, randomVar);
  };
};
