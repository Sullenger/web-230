/*
============================================
; Title:  sullenger-assignment-4.4.js
; Author: Jason Sullenger
; Date:   30 December 2018
; Description:
;===========================================
*/

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

function gettingLoopy(){
  for(var i=0; i< states.length; i++){
    console.log(states[i]);
  };
}

function getState(x,y){
  if(x === y){
    return true;
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
