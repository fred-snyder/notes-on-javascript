# Primitive types

Javascript is `pass-by-value` (aka call-by-value) for primitive data-types.

- number
- string
- boolean
- null
- undefined

A variable of a primitive type holds the actual data.

```js
let varOne = 5;
let varTwo = varOne; // this creates a copy of the value 5 // the two variables are not linked in any way

console.log(varOne) // 5
console.log(varTwo) // 5

// assign new values to the copies
let varOne = 10; // varTwo will still be 5
let varTwo = 20; // varOne will still be 10
```
