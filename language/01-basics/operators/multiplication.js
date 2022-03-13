// js has floating point issues with multiplication and division

var floatA = 2.4;
var floatB = 1.5;

// should be 3.6
console.log(floatA * floatB) // 3.59999999996

floatC = floatA * floatB
console.log(floatC.toFixed(2)) // round 2 decimals
console.log(floatC.toFixed(1)) // round 1 decimal

console.log((3.56 / 2).toFixed(2)) // 1.78
console.log((3.56 / 2).toFixed(1)) // 1.8
console.log((3.56 / 2).toFixed(0)) // 2

// null evaluates to 0
console.log(12 * null) // 0

// infinity
console.log(Infinity)
