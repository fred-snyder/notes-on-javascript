// forEach

/**
 * 
 * forEach takes a function with 3 arguments (with arbitrary names)
 * val: value of the array element
 * i: index of the array element
 * arr: the array itself
 */

var arr = ["Hello", "this", "was", "me"]
arr.forEach(function(val, i) {
    console.log("out:", val, i)
})

var arr = ["Hello", "world"]
arr.forEach(function(val, i, arr) {
    console.log("output", val, i, arr)
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
