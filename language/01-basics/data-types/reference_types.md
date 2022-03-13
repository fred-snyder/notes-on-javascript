# Reference types

Javascript is `pass-by-reference` (aka call-by-reference) for objects and arrays.

- array (type object)
- object
- function

A variable of type object actually holds a pointer to a memory address. So a pointer to the data.

```js
let arrayOne = [1, 2, 3, 4];
let arrayTwo = arrayOne;

// change the underlying array
arrayOne.push(5) // add a new item to the array // arrayOne is a pointer to an array
console.log(arrayOne) // [1, 2, 3, 4, 5]
console.log(arrayTwo) // [1, 2, 3, 4, 5]

// assign a new value to a variable // this creates a new object
arrayOne = ["a", "b", "c", "d"]
console.log(arrayOne) // ["a", "b", "c", "d"]
console.log(arrayTwo) // [1, 2, 3, 4, 5] // arrayTwo is still a pointer to array [1, 2, 3, 4, 5]
```
