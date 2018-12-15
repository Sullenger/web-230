/*
============================================
; Title:  sullenger-exercise-3.3.js
; Author: Jason Sullenger
; Date:   15 December 2018
; Description: Defines a switch statement testing the value of a declared variable
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

/*Tests output for code in sullenger-header.js
parameters passed are first name, last name, and assignment name*/
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 3.3"));

// Variable declared
var eventKeyCode = 13;

// Switch statement defined and tested
switch(eventKeyCode) {
  case 13:
  console.log("The enter key was pressed.")
  break;

  case 16:
  console.log("The shift key was pressed.")
  break;

  case 32:
  console.log("The spacebar key was pressed.")
  break;

  case 8:
  console.log("The backspace / delete key was pressed.")
  break;

  default:
  console.log("Unrecognized key.")
  break;
  };
