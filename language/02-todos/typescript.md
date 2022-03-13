# Typescript

Visual Studio Code includes TypeScript language support but does not include the TypeScript compiler....
https://code.visualstudio.com/docs/typescript/typescript-tutorial

> More advanced topic

Visual Studio Code's JavaScript IntelliSense provides intelligent code completion, parameter info, references search, and many other advanced language features. It's powered by the JavaScript language service developed by the TypeScript team.

If you look up definitions with VSCode you'll jump to the Typescript source file. For example:

```ts
/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
```

So from the definition we can see:
- forEach takes a (callback) function as an argument
- the callback takes 3 arguments
- value of the element, index of the element, the array object

> arrow function // thisArg // HOW DOES THIS WORK
> void // the function returns data of the type `void` returns // in other words: nothing

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
