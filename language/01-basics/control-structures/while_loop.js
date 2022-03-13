// While loops

/*
while (condition) {
    while loop body
}
*/

var someNumber = 10;

while (someNumber < 20) {
    console.log(someNumber)
    someNumber++
}


// variant with if statements
var condition = true;
var i = 10;

while (condition) {
    if (i === 14) {
        condition = false;
    }
    else if (i === 20) {
        break
    }
    console.log(i)
    i = i + 2
}
