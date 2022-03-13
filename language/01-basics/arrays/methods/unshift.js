// unshift (push at beginning)

var arr = [1, 2]

// unshift the first element from the passed array
arr.unshift(0);

console.log(arr) // [0, 1, 2, 3]

// array.unshift() adds new elements add the beginning of the array
// and returns the length of the array
console.log(arr.unshift(4, 8, 6)) // 6
console.log(arr) // [ 4, 8, 6, 0, 1, 2 ]
