/*
============================================
; Title:  sullenger-exercise-6.3.js
; Author: Jason Sullenger
; Date:   14 January 2019
; Description: Defines an object literal and console logs it
;===========================================
*/

// Object literal defined
var ticketLog = {
  id: 86799,
  name: "Password Reset",
  requestor: "Mr. Rammstein"
};

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 6.3"));

// Console logs the previously defined object
console.log(ticketLog);
console.log("\n{id: " + ticketLog.id + ", name: " + ticketLog.name + ", requestor: " + ticketLog.requestor + "}");




// DO NOT FINISH THIS ASSIGNMENT UNTIL THE CORRECT CONSOLE LOG HAS BEEN SORTED OUT
