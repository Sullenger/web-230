/*
============================================
; Title:  sullenger-function-properties.js
; Author: Jason Sullenger
; Date:   7 December 2018
; Description: Defining functions and calling function properties
;===========================================
*/



// myName Function defined
function myName() {
  return myName.jason + " " + myName.sully;
};

// myName function properties
myName.jason = "Jason";
myName.sully = "Sullenger";


// Header function called
const header = require('./sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 2.3"));

// Testing console log of myName function
console.log("\n" + "Hello " + myName() + "!");
