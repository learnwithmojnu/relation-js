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
