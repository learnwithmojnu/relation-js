# Javascript in a Relation
## What is javascript?
- javascript is high level programming language
- just-in-time compiled (execute line by line)
- single-threaded (your JS code is read and gets executed line by line)
- JavaScript is a single-threaded, non-blocking, asynchronous (not at the same time)
- enables you to create dynamically updating content
- control multimedia
- JavaScript can update and change both HTML and CSS.
- javascript is a life of a website

## VS Code Extension

- **Code Spell Checker**
- **Javascript Code Snippet**: help programer to save time
- **ESLint**
- **HTML Snippets**
##  What is DOM? (Document Object Model)
- we can access HTML document from javascript and can update html, create a new html, delete html
- The document has `<html>, <body>, <div>, <h1>` tag. All tags are called Object. If we want access `<body>` tag: `document.body`. If we access `h1` which is a child of the body, we use `document.body.h1`. We access document object in many ways -
*querySelector*,
*querySelectorAll*,
*getElementById*,
*getElementsByClassName*,
- **How would you set background color of an entire website?** `document.body.style.backgroundColor = 'red';`

### getElementsByTagName
- `document.getElementsByTagName('div');` 
### getElementById
- `document.getElementById('idName');`
### getElementsByClassName
- `var authors = document.getElementsByClassName('author');`
        `console.log(authors);`
        `for (let index = 0; index < authors.length; index++) {`
            `const element = authors[index];`
            `element.style.textAlign = 'center';`
            `element.innerHTML = 'Mojnu';`
        `}`
### querySelector / querySelectorAll
- querySelector() only returns the first element of the document. 
- If you want to get all matches, use the querySelectorAll() method instead.
- **How will you select all html tags that has the “blog” class?** `*document.querySelectorAll('.blog')*`

### setAttribute
*`var setAlt = document.querySelector('.image');`*
*`setAlt.setAttribute('alt', 'fish');`*

### create Element Using JavaScript
`var header = document.body;`
      ` var h1 = document.createElement('h1');`
       ` h1.innerHTML = "I am h1 tag created by JS"`
       ` header.appendChild(h1);`

### properties vs attributes

## add Event Listener and Event Bubble
### callback Function
- pass a function as a parameter

### arguments
- What will happen if you try to add an element to the arguments using push? *arguments are not array. It's an array like object and will give an error*

## Events (action)
- **onchange:**	An HTML element has been changed
- **onclick:**	The user clicks an HTML element
- **onmouseover:**	The user moves the mouse over an HTML element
- **onmouseout:**	The user moves the mouse away from an HTML element
- **onkeydown:**	The user pushes a keyboard key
- **onload:**	The browser has finished loading the page
`var btn1 = document.querySelector('.btn-1');`
        `btn1.addEventListener('click', function(){`
            `console.log('I am touch');`
       ` })`

### Event Bubble
[http://www.java2s.com/Tutorials/JavascriptImage/eventBubble.png](http://www.java2s.com/Tutorials/JavascriptImage/eventBubble.png)

### add element, delete element and replace element