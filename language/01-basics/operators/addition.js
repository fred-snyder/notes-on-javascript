var a = 2;
var b = 5;

a += 5 // shorthand syntax for a = a + 5
console.log(a)

a += b
console.log(a)

var c = 5.0
var d = 3.5
console.log(c + d)

c = 5
d = 3.5
console.log(c + d)


// add strings
var e = "Hello"
var f = "World"
console.log(e + f)
console.log(e + " " + f)
console.log(e, f)

/*
JavaScript is a weakly typed language. 
It has types, but it's relaxed about them, and can treat values somewhat arbitrary. 
The stronger the typing system is — the stricter the rules are.
*/

// add numbers and string
e = e + 15
console.log(e)

// add booleans
e = e + true
console.log(e)

// add array and string
someArray = [1, 2, 3]
console.log(someArray + "Hello")

someArray = someArray + 4
console.log(someArray)
console.log(typeof someArray) // string

// add boolean and number
console.log(14 + true)

// boolean + boolean
console.log(true + false) // 1

// number + null
console.log(15 + null) // 15
