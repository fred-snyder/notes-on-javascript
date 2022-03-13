// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// Objects are sometimes called associative arrays, 
// since each property is associated with a string value that can be used to access it.

// ! create an object
// object literal notation (Javascript object notation)
var varObject = {
    name: "Fred", // field > aka > properties
    age: 35,
    doubleAge: function () {return this.age * 2}, // functions > aka > methods
}

console.log(typeof varObject) // object


// ! built-in methods and properties
var project = {
    name: "website",
    client: "Microsoft",
    year: "2020",
    month: "August",
}

// delete a field
delete project.client;
console.log(project.client) // undefined

// check if a field exists `in` an object
console.log("name" in project) // true
console.log("Name" in project) // false // case-sensitive

// loop over objects fields 
for (var i in project) {
    console.log("Fieldname:", i)
    console.log("Value:", project[i])
}

// This method returns an array with all the own (not in the prototype chain) 
// enumerable properties' names ("keys") of an object.
Object.keys(project)
// This method returns an array containing all own properties' names 
// (enumerable or not) of an object.
Object.getOwnPropertyNames(project)

// ! Object.methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object.freeze( {} )
// Object.values( {} )
// etc
