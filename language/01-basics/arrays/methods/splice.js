// splice (splice elements off an array)

var arr = ["Hello", "world", "du", "monde"]

// splice the array at index
arr.splice(3) // remove elements at index 3 and up
console.log(arr) // [ 'Hello', 'world', 'du'] 

arr.splice(2) // remove elements at index 2 and up
console.log(arr) // [ 'Hello', 'world' ]

var arr = ["Hello", "world", "du", "monde", "wereld"]
arr.splice(1,3) // remove elements at index 1 to index 3 (including index 3)
console.log(arr)
