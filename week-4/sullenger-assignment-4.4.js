/*
============================================
; Title:  sullenger-assignment-4.4.js
; Author: Jason Sullenger
; Date:   05 January 2019
; Description:Loops through array, sorting and filtering the items
;===========================================
*/

// states array defined
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// looping function for states array defined
function gettingLoopy(){
  for(var i=0; i< states.length; i++){
    console.log(states[i]);
  };
}

// filter function defined
function getState(x,value){
  if(x === value){
    return value;
  }
}

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Assignment 4.4"));

// Console logs all the items in the states array
console.log("\n -- ORIGINAL ARRAY --");
gettingLoopy(states);

// Console logs all the items in the states array alphabetically
console.log("\n -- SORTED ARRAY --");
gettingLoopy(states.sort());


// Calls getState matching with Iowa
console.log("\n -- SELECTED VALUE --");
console.log(states.filter(function (x) {return getState(x, "Iowa")})[0]);
