// constructor functions // an alternative object constructor // it's like a class declaration
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

// different way to create an object
var obj = new Object()
obj.name = "Fred" // create the properties
obj.age = 35 // create the properties
console.log(obj)


// constructor function Person
function Person(name, age, city) { // the prototype for this object >> Person.prototype
    this.name = name
    this.age = age
    this.city = city
}

// declare and initialize a new Person Object
var person = new Person()
// var person = new Person("Fred", 35)
person.name = "Fred"
person.age = 35

// add a new function to the // ! prototype of Person
Person.prototype.talk = function() {
    return "Talk to me"
}
console.log(person.talk()) // Talk to me
console.log(person.city) // undefined

// ! Object.prototype
// every object created with a constructor function inherits from the Object.prototype
// check if an object inherits from another object
console.log(person instanceof Object) // true

// get the prototype of person
console.log(person.__proto__) // Person {}
console.log(person.__proto__ == Person.prototype) // true
console.log(Object.getPrototypeOf(person)) // Person {}
console.log(Object.getPrototypeOf(person) == Person.prototype) // true
console.log(Object.getPrototypeOf(person) == Object.prototype) // false

// ! Object.constructor
/**
 * All objects (with the exception of objects created with Object.create(null)) will have a constructor property. 
 * Objects created without the explicit use of a constructor function (such as object- and array-literals) 
 * will have a constructor property that points to the Fundamental Object constructor type for that object.
 */

// all objects that inherit from another object also inherit a constructor property
console.log(person.constructor) // [λ: Person]
console.log(Person.constructor) // [λ: Function]
console.log(Object.constructor) // [λ: Function]
