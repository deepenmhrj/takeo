// < !--These next instructions are to be written in JavaScript in the < script > tag-- >
// < !-- 🐨 Create a div-- >
// < !--   💰 document.createElement('div')-- >
// < !-- 🐨 Set the div's textContent to 'Hello World' and className to 'container' -->
//   < !--   💰 div.textContent = '...' -- >
// < !-- 🐨 Append the div to the root div using`append` -- >
// < !--   💰 document.getElementById('root')-- >
// < !--   📜 https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append -->

//1
// const divElement = document.createElement('div');
// divElement.textContent = "hello world";
// divElement.className = 'container';
// document.getElementById('root').append(divElement);

'use strict';

// //2
// const sourceElement = document.createElement('div');
// sourceElement.id = 'root';

// const destination = document.body;

// destination.append(sourceElement);

// const divElement = document.createElement('div');
// divElement.textContent = 'hello';
// divElement.className = "container";

// sourceElement.apppend(divElement);


// 3
// const rootElement = document.getElementById("root");
// const element = React.createElement('div', {
//   className: 'container',
//   children: 'hello world'
// });

// ReactDOM.render(element, rootElement)

//4  JSX
const rootElement = document.getElementById("root");
const element = <div className="container">Hello World</div>;
ReactDOM.render(element, rootElement);