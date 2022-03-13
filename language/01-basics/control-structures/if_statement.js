var condition = 0;
var condition = 1; // if a value in a condition is 1 or higher it will evaluate as true
var condition = true;
var condition = false;

// condition block is a boolean
if (condition) {
    console.log("True")
}

// is the same as
if (condition === true) {
    console.log("True")
}

// multiple condition checks
if (condition) {
    console.log("If");
} else if (condition) {
    console.log("Else if")
} else {
    console.log("Else")
}

// shorthand statements
if (true) var x = {greet: 'Hello world'};
if (true) var x = "Hello world";
