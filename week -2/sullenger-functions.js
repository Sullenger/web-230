/*
============================================
; Title:  sullenger-functions.js
; Author: Jason Sullenger
; Date:   7 December 2018
; Description: Assignment testing understanding of functions
;===========================================
*/

// Declaration of variables
var currentDate = new Date();
var myAge = "30";
var bankGoal = "500";

// Functions defined
function fullName(firstName, lastName){
  return firstName + " " + lastName;
};

function dateWriter(year, month, day) {
  return month+1 + "/" + day + "/" + year;
};

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
};

function convertToInt (string1) {
  return parseInt(string1, 10);
};

function convertToFloat(string2) {
  return parseFloat(string2);
};

// Header called
const header = require('./sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Assignment 2.4"));

// console logging desired output
console.log("\n Hello my name is " + fullName("Jason", "Sullenger") + "!");

console.log("\n Today's date is " + dateWriter(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) + " and the current temperature is 33.5 degrees.")

console.log("\n I am " + formatNumber(convertToInt(myAge), 0) + " years old and my savings account goal is " + convertToFloat(bankGoal) + " thousand dollars.");


