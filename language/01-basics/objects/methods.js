// Methods // object-functions

// A method is a function associated with an object, or, put, 
// a method is a property of an object that is a function

var varObject = {
    name: "Fred",
    age: 35,
    doubleAge: function () {
        return this.age * 2
    },
    speak: function() {
        console.log("Hi there")
    }
}

// another way of defining a method
var someObj = {
    someMethod(params) {
        return
    }
};

// another way of defining a method
var someFunk = function() {};
someObj.anotherMethod = someFunk;

// call the doubleAge method
varObject.doubleAge()
console.log(varObject.age) // 35

// double the age
varObject.age = varObject.doubleAge() // assign the returned value to the age property
console.log(varObject.age) // 70

varObject.speak() // Hi there
