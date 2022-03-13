// declare a const
const age = 18;

// re-assing a new value
age = 20;

// Error:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment

/*
A constant is a value that cannot be altered by the program during normal execution. 
It cannot change through re-assignment, and it can't be redeclared. 
In JavaScript, constants are declared using the const keyword. 
*/

// why do you see constants everywhere in JS?
// usually variables change during execution no?
// for example:
// how is it possible a const is used in this example and not let?

function example() {
	const someArray = [1, 2, 3, 4, 5];
	const anotherArray = [];
	someArray.forEach((e) => {
		anotherArray.push(e + 1);
	});
	console.log(anotherArray); // [ 2, 3, 4, 5, 6 ]
}

example();

// well anotherArray stays an array
// not reassigned
// not declared
// it points to an array in memory
// so it's valid as a const
