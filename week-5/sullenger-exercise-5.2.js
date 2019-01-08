/*
============================================
; Title:  sullenger-exercise-5.2.js
; Author: Jason Sullenger
; Date:   07 January 2019
; Description: console logs items in an array using forEach()
;===========================================
*/

// favorite foods defined in array
var favFoods = ["PIZZA", "TACOS", "HAMBURGER", "NACHOS", "PEARS"]


// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 5.2"));

// loops over array and console logs the item
console.log("");
favFoods.forEach(function(x){console.log(x);});
