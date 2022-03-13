// bind this
// bind() // For a given function, creates a bound function that has the same body as the original function.

// Method binding
// A method is not bound to the object that it is a method of. 
// Specifically, `this` is not fixed in a method. 
// Put another way, `this` does not necessarily refer to the object containing a method. 
// Instead, `this` is "passed" by the function call.

function foo(someArg) {
    console.log(this)
    return this
}

var someObj = {
    func: foo,
}

// ! add the extra set ()
someObj.func.bind(this)() // bind `this` to the execution context of the statement

var storeObj = {
    brand: "Microsoft"
}

// bind this to storeObj
someObj.func.bind(storeObj)() // bind `this` to the execution context of the statement
// * explanation: hey JS, that `func` method from `someObj` execute it as if it's a method from `storeObj`

// bind this to storeObj with argument(s) example
someObj.func.bind(storeObj, "Some argument")()

// bind the function // ! but don't execute it
var boundFunc = someObj.func.bind(storeObj)
boundFunc() // execute the bound function

// ! call()
// the call method is the same as binding and always executing
someObj.func.call(storeObj, "Some argument") // calls the `func` function from `someObj` with `storeObj` as the execution context

// ! apply()
// the apply method is the same as binding and always executing
someObj.func.apply(storeObj, ["Some argument"]) // but pass the argument(s) as an array

// ! when to use
// Use .bind() when you want that function to later be called with a certain context, useful in events. 
// Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
