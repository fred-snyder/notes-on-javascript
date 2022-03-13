# Scope

Scope is about accessibility of variables, functions and objects. What variables can javascript access and from where (inside the code).

From the MDN docs:
> The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

1. You can create variables in different scopes.
2. There is a hierarchy in these scopes.
3. These hierarchies are nested. Inner scopes can access outer scopes.

## Global scope
- window object

## Local scope
- inside a function block

From the MDN Docs:
> A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

- Hammad Ahmed has a very detailed blog post about scope.
  - https://scotch.io/tutorials/understanding-scope-in-javascript

- Todd Motto
  - https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope
