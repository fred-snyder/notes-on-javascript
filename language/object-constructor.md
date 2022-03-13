# Question

Is the last argument of an object callback function always the instantiated object itself?

Example:
```js
const observer = new IntersectionObserver((entries, arg1, observer, arg2) => {
	console.log('observer: ', observer); // undefined
	console.log('arg1: ', arg1); // this refers to const observer
	console.log('arg2: ', arg2); // undefined
}, {});

```
