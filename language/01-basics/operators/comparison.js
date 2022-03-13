// comparison operators

// compare for equal values
console.log(1 == 1) // true
console.log(1 == "1") // true

// compare for equal values and equeal types
console.log(1 === 1) // true
console.log(1 == true) // true
console.log(1 === true) // false

// not equal
console.log(1 !== true) // true
console.log(1 !== false) // true
console.log(1 != "1") // false // because it IS equal in value

// compare NaN
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false
console.log(NaN != NaN) // true

// compare null
console.log(0 === null) // false
console.log(0 == null) // false

console.log(null === null) // true
console.log(null == null) // true

console.log(NaN == null) // false

console.log(null == undefined) // true
console.log(null === undefined) // false

// compare undefined
console.log(0 == undefined) // false



/*
x == y
Equal (==)
Returns true if the operands are equal.

x === y
Strict equal (===)
Returns true if the operands are equal and of the same type.

x != y
Not equal (!=)
Returns true if the operands are not equal.

x !== y
Strict not equal (!==)
Returns true if the operands are not equal and/or not of the same type.
*/



/*
x>y
Greater than (>)
Returns true if the left operand is greater than the right operand.

x>=y
Greater than or equal (>=)
Returns true if the left operand is greater than or equal to the right operand.

x<y
Less than (<)
Returns true if the left operand is less than the right operand.

x<=y
Less than or equal (<=)
Returns true if the left operand is less than or equal to the right operand.
*/
