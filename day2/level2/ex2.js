// Day 2: Functions & Arrow Functions
// Level 2 (Intermediate)
// String Emptiness Check: Write an arrow function isEmpty(str) that returns true
//  if a string is empty or contains only spaces, and false otherwise.

let isEmpty = (str) => str.trim() === "" ? true : false ; 

console.log(isEmpty(" "));