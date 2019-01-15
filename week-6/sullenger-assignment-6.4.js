/*
============================================
; Title:  sullenger-assignment-6.4.js
; Author: Jason Sullenger
; Date:   14 January 2019
; Description: Defines nested object literal and console logs the formatted information
;===========================================
*/

// New date defined for ticketLog
var newDate = new Date();

// ticketLog object defined
var ticketLog = {
  id: 77777,
  name: "Password Reset",
  dateCreated: newDate.toLocaleDateString(),
  priority: 4,
  person: {
    id: 13528,
    firstName: "Jeremy",
    lastName: "McSizzle",
    jobTitle: "Apprentice Support Operator"
  }
};

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Assignment 6.4"));

// Console logs expected output from Nested Object Literal defined above
console.log("\nTicket " + ticketLog.id + " was created on " + ticketLog.dateCreated + " and assigned to employee " + ticketLog.person.firstName + " " + ticketLog.person.lastName + " (" + ticketLog.person.jobTitle + ").");

