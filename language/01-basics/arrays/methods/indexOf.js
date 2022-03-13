// indexOf

// get the index of a certain element
// call by value

var arr = ["Hello", "world", "du", "monde"]

console.log(arr.indexOf("Hello")) // 0

arr['Hello'] = 200
console.log(arr)

// at the index of element "Hello" replace the element with "Hola"
arr[arr.indexOf("Hello")] = "Hola"
console.log(arr)
