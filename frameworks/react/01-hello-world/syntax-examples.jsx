// JSX examples
const h1 = <h1>Hello world</h1>;
const myArticle = <article></article>;

// If a JSX expression takes up more than one line,
// then you must wrap the multi-line JSX expression in parentheses. 
const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
)

// A JSX expression must have exactly one outermost element.
const myDivTwo = (
    <div>
        <h1>Hello world</h1>
        <h2>Introduction text</h2>
    </div>
)

// In a un-compiled Javascript file JSX syntax is invalid.
// You can use a template literal instead.
const template = (
    `<div>
        <h1>Hello</h1>
    </div>`
)
