/*
============================================
; Title:  sullenger-exercise-7.2.js
; Author: Jason Sullenger
; Date:   24 January 2019
; Description: Uses a constructor function to print the information from an object
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 7.2"));

// employee constructor function defined
function employee(id, firstName, lastName, title) {

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

};

// Variable set with the information being passed to the constructor function
var employeeConstruct = [

new employee(555, "Aaron", "Miami", "Lead Dev"),

new employee(566, "Brad", "Houston", "Junior Dev"),

new employee(577, "Charlie", "Sacramento", "Human Resources"),

new employee(588, "Dan", "Ogden", "Sanitation"),

new employee(599, "Erick", "Reno", "CEO"),

];

// line space between header and data
console.log("");

// console logs the information passed into the constructon function.
for(var i = 0; i<employeeConstruct.length; i++){
  console.log(employeeConstruct[i].id + " " + employeeConstruct[i].firstName + " " + employeeConstruct[i].lastName + " " + employeeConstruct[i].title);
};
