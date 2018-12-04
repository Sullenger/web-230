/*
============================================
; Title:  sullenger-header-test.js
; Author: Jason Sullenger 
; Date:   3 December 2018
; Description: Tests the display of a formatted header
;===========================================
*/

/*Tests output for code in sullenger-header.js
parameters passed are first name, last name, and assignment name*/

const header = require('./sullenger-header.js');

console.log(header.display("Jason" , "Sullenger" , "Exercise 2.2 - Header"));