// filter

var arr = [1, 2, 3, 4]

// filter takes a function as argument
arr.filter(function(val) {
    if (val > 2) {
        console.log(val)
    }
})

arr.filter(function(val) {
    val >= 2 ? console.log("yes") : console.log("no") // ternary
})

// filter returns the elements of the array
console.log(
    arr.filter(function(val) {
        return val > 2 // shorthand statement: `if (true) {return val}`
    })
)

// filter and assign return value to original variable
arr = arr.filter(function(val) {
    return val > 2 // shorthand statement: `if (true) {return val}`
})

console.log(arr)
