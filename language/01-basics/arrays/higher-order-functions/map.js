// map

var arr = [1, 2, 3, 4]

// calls a function for each element in the array
// retuns an array with the result
arr = arr.map(
    function(val, i, arr) {
        return val * 3
    }
)

console.log(arr)
