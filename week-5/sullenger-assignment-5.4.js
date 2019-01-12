/*
============================================
; Title:  sullenger-assignment-5.4.js
; Author: Jason Sullenger
; Date:   07 January 2019
; Description:
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
console.log(header.display("Jason" , "Sullenger" , "Assignment 5.4"));

//uses map() to filter composers array by genre

var compGenre = composers.map(function(composer){
  return "Genre: "+ composer.genre + "\nLastName: "+ composer.lastName;
});

//uses map() to filter composers array by rating

var compRating = composers.map(function(composer){
  return "Rating: "+ composer.rating + "\nLastName: "+ composer.lastName;
    });

//Console logs the new arrays created by map()

console.log("\n--COMPOSER BY RATING--");
compRating.forEach(function(x){console.log(x + "\n")});

console.log("--COMPOSER BY GENRE--");
compGenre.forEach(function(x){console.log(x + "\n")});
