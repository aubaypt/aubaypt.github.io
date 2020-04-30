---
layout: default
title: React
permalink: /js/react
parent: Javascript
---

# React
{: .no_toc }

> You can test your react responses in the [codesandbox](https://codesandbox.io/s/new?file=/src/App.js) website.


## Table of contents
{: .no_toc .text-delta }
1. TOC
{:toc}


## 1. What is the difference between state and props?

<details markdown="1">
<summary>Answer!</summary>

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. i.e,

* `Props` get passed to the component similar to function parameters
* `state` is managed within the component, similar to variables declared within a function.

</details>

## 2. How you render the name prop of this component inside the div?

```jsx
const Componente = (props) => (
  <div>
    ???
  </div>
);
```

<details markdown="1">
<summary>Answer!</summary>

```html
<div>
    {props.name}
</div>
```

</details>

## 3. What happens when the following render() method executes?

```jsx
render(){
    let langs = ["Ruby","ES6","Scala"]
    return (
        <div>
            {langs.map(it => <p>{it}</p>)}
        </div>
    )
}
```

- [ ] Displays the list of languages in the array
- [ ] Error. Cannot use direct JavaScript code in JSX
- [ ] Displays nothing
- [ ] Error. Should be replaced with a for..loop for correct output

<details markdown="1">
<summary>Answer!</summary>

    Displays the list of languages in the array

</details>

## 4. How do you write an inline style specifying the font-size:12px and color:red; in JSX?

- [ ] `style={ {font-size:12,color:'red'} }`
- [ ] `style={ {fontSize:'12px',color:'red'} }`
- [ ] `style={fontSize:'12px',color:'red'}`
- [ ] `style={ {font-size:12px,color:'red'} }`

<details markdown="1">
<summary>Answer!</summary>

```jsx
style={ {fontSize:'12px',color:'red'} }
```

The inline CSS is written in a JavaScript object, properties with two names, like `background-color`, must be written with camel case syntax.

</details>

## 5. What is Prop Drilling?

<details markdown="1">
<summary>Answer!</summary>
Prop drilling (also called "threading") refers to the process you have to go through to get data to parts of the React Component tree. A very simple example of a stateful component that has to pass the props N levels until it be used.
```jsx
function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(o => !o)
  return <Switch on={on} onToggle={toggle} />
}
function Switch({on, onToggle}) {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  )
}
function SwitchMessage({on}) {
  return <div>The button is {on ? 'on' : 'off'}</div>
}
function SwitchButton({onToggle}) {
  return <button onClick={onToggle}>Toggle</button>
}
```

</details>


## 6. Difference between Functional and Class-Components?

<details markdown="1">
<summary>Answer!</summary>

Since React 16.8([The One With Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)) was released the only major difference is in Syntax. Before that function components aren't able to use `state` and `Lifecycle hooks`.   

Comparing those two ways to create a component, we can see that functional components with hooks use less code and it is more clear to read and understand. 

</details>