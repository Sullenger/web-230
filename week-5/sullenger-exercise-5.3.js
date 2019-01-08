/*
============================================
; Title:  sullenger-exercise-5.3.js
; Author: Jason Sullenger
; Date:   07 January 2019
; Description: Loops of the properties in the objects of an array and console logs them
;===========================================
*/

// defines array of composers
var composers = [
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 8,
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Hip Hop",
    rating: 9,
  },
  {
    firstName: "Hans",
    lastName: "Zimmer",
    genre: "Jazz",
    rating: 5,
  },
  {
    firstName: "Frederic",
    lastName: "Chopin",
    genre: "Techno",
    rating: 10,
  },
  {
    firstName: "Antonio",
    lastName: "Vivaldi",
    genre: "Opera",
    rating: 8,
  }];

// Console logs the header created in previous weeks
const header = require('../week -2/sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "Exercise 5.3"));

// loops over array and console logs the properties of that object
console.log("");
composers.forEach(function(x){
  console.log("Last Name: " + x.lastName + ", Genre: " + x.genre + ", Rating: " + x.rating);
});
