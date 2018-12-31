/*
============================================
; Title:  sullenger-exercise-4.3.js
; Author: Jason Sullenger
; Date:   30 December 2018
; Description: filters through an array to return matching results
;===========================================
*/

// vehicle array defined
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// getValue function defined (accepts two parameters)
function getValue(x,y){
  for(var i=0; i<x.length; i++){
    if(y === x[i]){
      console.log(vehicles[i]);
    };
  };
};

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 4.3"));

// Console logs all the items in the vehicles array
console.log("\n -- DISPLAYING ARRAY ITEMS --");
for(var i=0; i< vehicles.length; i++){
  console.log(vehicles[i]);
};

// Calls getValue matching with Motorcycle
console.log("\n -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// Call getValue matching with Bus
console.log("\n -- SELECTED VALUE --");
getValue(vehicles, "Bus");
