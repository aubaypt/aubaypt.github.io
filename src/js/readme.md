---
layout: default
title: Javascript
nav_order: 3
permalink: /js
has_children: true
has_toc: false
---

# Javascript
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }
1. TOC
{:toc}

## 1. What is the difference between `==` and `===` ?

<details>
<summary>Answer!</summary>

`===` takes type of variable in consideration, while `==` make type correction based upon values of variables

```js
0==false // true, because false is equivalent of 0 
0===false // false, because both operands are of different type 
2=="2" // true, auto type coercion, string converted into number 
2==="2" // false, since both operands are not of same type
```
</details>


## 2. What’s the difference between `var`, `let` and `const`?

<details>
<summary>Answer!</summary>

`var` It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.

```js
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i) // 10
```

`let` Is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i) // ReferenceError: i is not defined
```

`const` Is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

```js
const myObject = {}
myObject.prop = "hello!" // No error
myObject = "hello" // Error
```

</details>

## 3. What will be the return value from both `console.log` on the following code? Why?

```js
var fullname = 'Ricardo';
var person = {
    fullname: 'Sandra',
    prop: {
        fullname: 'José',
        getFullname: function () {
            return this.fullname;
        }
    }
};
console.log(person.prop.getFullname());
var test = person.prop.getFullname;
console.log(test());
```

<details>
<summary>Answer!</summary>

```js
console.log(person.prop.getFullname()); //José
var test = person.prop.getFullname; 
console.log(test()); // Ricardo
```

</details>


## 4. Difference between regular functions and arrow functions

<details>
<summary>Answer!</summary>

`Syntax`, javaScript arrow functions are roughly the equivalent of lambda functions in python or blocks in Ruby, but they have more intricate details. Arrow functions allow a developer to accomplish the same result with fewer lines of code and approximately half the typing.

`this` binding, unlike regular functions, arrow functions do not have their own this. The `this` refers to the values of `this` in the environment the arrow function is defined in (i.e. "outside" the arrow function).

`arguments` binding, arguments objects are not available in arrow functions, but are available in regular functions.

Arrow functions cannot be called with `new`.

</details>
