---
layout: default
title: Css
nav_order: 2
permalink: /css
---

^-.*\[.*\]\s([a-zA-Z|\s]*)


# Css
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }
1. TOC
{:toc}

## 1. Are CSS property names case-sensitive?

- [ ] No
- [ ] Yes

<details>
<summary>Answer!</summary>

    No

</details>

## 2. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
ul {
    color: red;
}

#must-buy {
    color: yellow;
}

.highlight {
    color: blue;
}
```


- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>
    
    Blue
    
</details>


## 3. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
ul {
    color: red;
}

li {
    color: yellow;
}

#must-buy {
    color: blue;
}
```

- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>

    Blue

</details>

## 4. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
.list .favorite {
    color: red;
}

#must-buy {
    color: yellow:
}

#highlight {
    color: blue;
}
```

- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>

    Red

</details>

## 5. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
ul#awesome {
    color: red;
}

#must-buy {
    color: yellow;
}

ul.list li.favorite span {
    color: blue;
}
```

- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>

    Blue

</details>

## 6. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
ul#awesome {
    color: red;
}

li > span {
    color: yellow;
}

.favorite {
    color: blue;
}
```

- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>

    Yellow

</details>

## 7. What is the color of the text `cookies`?

```html
<ul class="list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy">
        <span class="highlight">cookies</span>
    </li>
</ul>
```

```
ul#awesome {
    color: red;
}

li > span:nth-child(2) {
    color: yellow;
}

.favorite {
    color: blue;
}
```

- [ ] Red
- [ ] Blue
- [ ] Yellow
- [ ] Neither

<details>
<summary>Answer!</summary>

    Blue

</details>

