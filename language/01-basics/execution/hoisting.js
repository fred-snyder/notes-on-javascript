// Hoisting
/* 
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
(to the top of the current script or the current function).

(In reality it's more complicated than this. Look up `Lexical Scoping`)
*/

// var declarations are processed when the function or script starts


// assign first
someNumber = 200
console.log(someNumber)

// declare later
var someNumber

// hoisting with functions // call funcion before declaration
someFunc() // call
function someFunc() { return } // declare
