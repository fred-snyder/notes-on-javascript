// Object properties
// A property of an object can be explained as a variable that is attached to the object.

var varObject = {
    name: "Fred", // string property
    age: 35, // number property
    "Home town": "Amsterdam", // property-name as a string
}

// output a field
console.log(varObject.name)
console.log(varObject["name"]) // alternative syntax

// output a fieldName with a variable
var fieldName = "age";
console.log(varObject.age)
console.log(varObject[fieldName])

// set a fieldName with a variable
var fieldName = "age";
varObject[fieldName] = 56
console.log(varObject[fieldName])

// log a string property name
console.log(varObject["Home town"])
