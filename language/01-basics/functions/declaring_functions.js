// declare a function
function funcName(/* condition block */) {
    return // execution block
}
funcName // no execution
funcName() // run the function



// declare a variable of type function
var otherFunc = function () {
    return
};
console.log(typeof otherFunc) // function



// declare a new variable of type function
var newFunctionVar = otherFunc
newFunctionVar() // call the new function
console.log(typeof newFunctionVar) // function
