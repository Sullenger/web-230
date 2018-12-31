/*
============================================
; Title:  sullenger-exercise-4.2.js
; Author: Jason Sullenger
; Date:   30 December 2018
; Description:Loops through an array and console logs the corresponding item
;===========================================
*/

// Fruit array defined
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// getFruit function defined
function getFruit(x){
  console.log("");
  for(var i=0; i<fruit.length; i++){
    console.log(x[i]);
  };
};

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 4.2"));

// Calls the function getFruit with the array as the parameters
getFruit(fruit);
