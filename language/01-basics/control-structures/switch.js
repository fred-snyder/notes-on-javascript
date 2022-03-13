var someNumber = 12;

// compare one condition against multiple values
switch (someNumber) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2")
        break;
    default:
        console.log("Default")
        break;       
}

// if you don't use the break keyword // the evaluation falls through
// if the condition equals `true` the switch starts to execute the code
// it starts from the corresponding case, until it breaks, or until the end of the switch
switch (someNumber) {
    case 8:
        console.log("Case 1")
    case 12:
        console.log("Case 2") // Prints: Case 2
    case 26:
        console.log("Case 3") // Prints: Case 2
    default:
        console.log("Case default") // Prints: Case default  
}

// compare one condition against multiple values
switch (typeof someNumber) {
    case "string":
        console.log("Case 1");
        break
    case "number":
        console.log("Case 2")
        break
    default:
        console.log("Default")
        break
}
