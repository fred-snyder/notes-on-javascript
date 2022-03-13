// reduce

var arr = [10, 20, 30, 40]

// reduces an array to a single value
arr = arr.reduce(function(prevVal, currVal, currIndex, arr) {
    // console.log(currVal, "index:", currIndex, "prev:", prevVal)
    // logic to reduce // sum/divide/etc
})

/**
 * for every iterarion the callback functions works with 3 values
 * the return value of the previous iterarion
 * the value at the current index
 * and the current index
 * 
 * for the first iteration
 * the previous iterarion == the element at index 0
 */

// console.log(arr) // returns undefined // the reduce function returns the prevVal


// sum the the current and previous
var arr = [10, 20, 30, 40]
var arrNew
arrNew = arr.reduce(function(prevVal, currVal, currIndex, arr) {
    console.log(currVal, "index:", currIndex, "prev:", prevVal)
    // return prevVal / currVal
    // return prevVal * currVal
    // return prevVal - currVal
    return prevVal + currVal // THIS VALUE WILL BE PASSED AS AN ARGUMENT FOR THE NEXT ITERATION
})

console.log(arrNew) // returns the sum of all the elements // 100
console.log(arrNew / arr.length) // return the average // 25


// From the docs
    /**
     * Calls the specified callback function for all the elements in an array. 
     * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */

    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
