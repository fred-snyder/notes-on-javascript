// Prototype chain 
// the chain traverses levels of prototype
// the chain traverses upwards

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// Each object has a private property which holds a link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 
// By definition, null has no prototype, and acts as the final link in this prototype chain.

var guy = Object.create(Object) // inherit the prototype from the person object

console.log(guy.__proto__) // ! do not use in production

// add a method to the global object prototype
Object.prototype.speak = function() {
    console.log("Hello")
}

console.log(guy.speak()) // undefined // the method doesn't return anything
guy.speak() // Hello // ! obj inherits that method from the Object.prototype


// check if an object inherits from another object
console.log(guy instanceof Object) // true

var otherGuy = Object.create(guy)
console.log(otherGuy instanceof guy) // ! this doesn't work because instanceof takes a constructor-function as a right-hand side
console.log(otherGuy instanceof Object) // true

// ! Object.getPrototypeOf()
// get the prototype of an object
console.log(Object.getPrototypeOf(guy))
console.log(Object.getPrototypeOf(otherGuy))
console.log(Object.getPrototypeOf(guy) == Object) // true

// ! Object.setPrototypeOf()
// Sets the prototype of a specified object to object proto or null. 
// Returns the object
Object.setPrototypeOf(guy, Object)
