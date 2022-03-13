// the `this` keyword
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// From the docs:
// A property of an execution context (global, function or eval) that, 
// in non–strict mode, is always a reference to an object and 
// in strict mode can be any value.

// use this to reference fields inside the object context
var varObject = {
    name: "Fred",
    age: 35,
    speak: function() {
        console.log("Hi", this.name)
    }
}

varObject.speak() // Hi Fred

// ! what does `this` refer to?
// ! the answer: find out what the object execution context is
// this refers to the object on which you're calling the function

console.log(this) // console log the window object // ! from the browser

// example 1
function foo() {
    return this
}
foo() // console log the window object // ! from the browser

// example 2
// `this` refers to the left part of the dot-statement (the statement that executed code where `this` is included)
var someObj = {
    func: foo,
}
console.log(someObj.func()) // outputs the object `someObj`
