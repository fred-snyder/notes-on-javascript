# html data attributes

Check this source document:
https://css-tricks.com/a-complete-guide-to-data-attributes/

How is this different/better/worse from `Element.classList.toggle` ???????
> Verify this: set the state of a class independent from responsive breakpoints?

```js
// set a data attribute
Element.dataset.buttonKenmerk = "value";
// evaluates to the following html attribute: data-button-kenmerk
```

Reading dataset attibutes as boolean is not really practical.
```js
console.log(Boolean('false'));
// this evaluates to true because this is a Boolean object

// this syntax does not work because the value on the right is evaluated as a string
this.dataset.buttonActive = !this.data.buttonActive;
```

Better to 
```js
// check if an element has a data attribute
this.hasAttribute('data-button-active');

// add or remove a data attribute
this.toggleAttribute('data-button-active');

// get the value of a data attribute
this.dataset.buttonActive;
```

```css
.style[data-button-active] {
	/* properties */
}

/* should work but the above syntax is more practical in the corresponding JS logic */
.style[data-button-active=true] {
}
```
