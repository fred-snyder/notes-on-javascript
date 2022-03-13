//// @ts-check

var arr = [1, 2, 3, 4];

// get value at index
console.log(arr[0]); // 1
console.log(arr[1]); // 2

// get the length of an array
console.log(arr.length); // 4

// replace elements at index
arr[1] = 100; // [ 1, 100, 3, 4 ]
arr[1] = arr[0] + arr[3]; // [ 1, 5, 3, 4 ]
arr[2] = 'Hello'; // type warning
console.log(arr);

// undefined elements
arr[6] = 'World';
console.log(arr); // [ 1, 5, 'Hello', 4, , , 'World' ] // empty elements

// create an array with undefined elements
arr = [1, 2, 3, 4, 5, ,]; // extra comma

// because an array is an object
var arr = ['Hello', 'world'];
arr['Hello'] = 200; // this will add a property to the array
console.log(arr); // [ 'Hello', 'world', Hello: 200 ]
