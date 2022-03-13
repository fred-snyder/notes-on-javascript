// prototypes // * blueprints // * javascript's inheritance
// * a prototype is like a blueprint or a template for an object

// this object has the default prototypes
var person = {
    name: "Fred",
    age: 35,
}

// different way to create an object
// Object.create() creates a new object and inherits the prototype from the passed object
// with the Object.create() method you can pick your own prototype
var guy = Object.create(person) // inherit the prototype from the person object
console.log(guy.__proto__) // ! do not use in production
console.log(guy.toString()) // toString() is a method inherited from the global prototype

// add a method to the global object prototype
Object.prototype.speak = function() {
    console.log("Hello")
}
console.log(guy.speak()) // undefined // the method doesn't return anything
guy.speak() // Hello // ! obj inherits that method from the Object.prototype


// All objects in JavaScript inherit from at least one other object. 
// The object being inherited from is known as the prototype, 
// and the inherited properties can be found in the prototype object of the constructor.

// * most objects have a prototype // however; you can create objects without a prototype
// pass `null` to Object.create() to create an object without an prototype
var anObj = Object.create(null); // ! this object has no prototype
anObj.name = "Maus"
anObj.age = 30
console.log(anObj.__proto__) // ! undefined // has no prototype
anObj.toString() // ! anObj.toString is not a function
console.log(anObj instanceof Object) // false

// usually every object inherits from Object.prototype
console.log(Object.prototype)

// https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
