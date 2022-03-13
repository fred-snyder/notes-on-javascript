# Data types

Javascript is a dynamically typed language.

```js
"string"
"number" // NaN // int, float
"boolean"
"object" // array, null
"function"
"undefined"
```


## Dynamic vs Static
Statically typed languages check the types and look for type errors during compile time.
Dynamically typed languages check the types and look for type errors during runtime.


## Weak vs Strong
JavaScript is a weakly typed language. It has types, but it's relaxed about them. That means you can change the type of a variable by assigning a value of a different type.

Javascript also automatically casts types if possible.
```js
console.log(1 + "1") // 2
```

The stronger the typing system is — the stricter the rules are.


## Primitive vs Reference types

In JavaScript, a variable may store two types of values: primitive and reference.


## Typescript type checking (VSCode)

Add basic type checking to your .js files by adding the following to the top of your source file.

```js
// @ts-check

```
