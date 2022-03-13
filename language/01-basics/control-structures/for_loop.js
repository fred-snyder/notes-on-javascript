// Loops

// structure
/*
begin: declare and initialize an iterator variable
condition
step: instruction after each iteration
*/


for (var i = 0; i < 5; i++) { // inline variable declaration
    // loop body
    break // break the execution of the loop
}


var i; //  you can also declare the variable in advance
for (i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}


var i = 0;
for (; i < 5; i++) { // skip the iterator declaration
    if (i === 3) {
        continue // this continue statement instructs the loop to jump the execution to the next iteration
    }
    console.log(i)
    
}


// nest loops
for (i = 0; i < 2; i++) {
    for (j = 0; j < 5; j++) {
        console.log("i:", i)
        console.log("j:", j)
        
    }
}
