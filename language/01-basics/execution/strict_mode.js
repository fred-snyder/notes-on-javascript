"use strict"
// in strict mode you have to be explicit
// non strict external libraries could cause problems

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// legal
var varName = "Hello";

// illegal
varname = "Hello" // no variable declaration // no semicolon at the line end


// testVar will be declared with global scope in non-strict mode
function localScope() {
    testVar = "Hello";
};
console.log(testVar); // this will print "Hello" (if strict mode is not flagged.)
