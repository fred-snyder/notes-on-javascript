# Data

Readings:
- https://eloquentjavascript.net/04_data.html
- https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- https://flexiple.com/loop-through-object-javascript/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Different ways of creating data set. What are differences/advantages/disadvantages:
- array methods vs objects methods
- forEach(), keys(), etc()
- Object.entries()

## Array of objects

```js

let filters = [
	{
		id: 1,
		name: "Television",
		active: false,
	},
	{
		id: 2,
		name: "Radio",
		active: true,
	}
]

```

## Object of objects

```js
let filters = {
	1: {
		name: "Television",
		active: false,
	},
	2: {
		name: "Radio",
		active: true,
	}
}
```
