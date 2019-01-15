/*
============================================
; Title:  sullenger-exercise-6.2.js
; Author: Jason Sullenger
; Date:   14 January 2019
; Description: Tests exception handling
;===========================================
*/

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 6.2"));

// exception handling defined
try {

  var usualFrog = "Ceratophrys cranwelli";

  var myFavFrog = "Phyllobates terribilis";

if (usualFrog !== myFavFrog) throw "BadTasteInFrogsException";

  console.log("Poison Dart frogs > Pacman frogs");

} catch (err) {

  console.log("\nCatch clause: " + err);

} finally {

  console.log("Finally clause reached...");

};
