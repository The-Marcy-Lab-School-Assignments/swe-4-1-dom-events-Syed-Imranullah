# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

1. The error is `Uncaught TypeError: Cannot read properties of null (reading 'style')` 
2. This occur Because the script runs before the DOM loads, so querySelector returns null since the button doesn’t exist yet.
3. Moving the script to the bottom of the body will fix the error because that ensures the DOM is loaded before the JavaScript runs.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
`event.target` is the element that was actually clicked. In this case, it’s the <button> because the user clicked the button.

`event.currentTarget` is the element that has the event listener attached. Here, it’s the <div id="button-container">.

They can be different because of how events move through the DOM. When you click the button, the click starts on the button and then goes up to the parent div that has the event listener. So event.target is the button you clicked, and event.currentTarget is the div where the event is being handled.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**

The issue is that the elements were created but never added inside the `productCard div`. You only appended `productCard` to the body, but you didn’t append `productImage`, `productName`, and `productPrice` inside `productCard`.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. This is called event delegation. The alternative is attaching event listeners to each <li> individually. Event delegation is better because it uses one event listener on the parent element instead of many listeners, which is more efficient and easier to manage.

2. event.target.closest('li') finds the nearest <li> element related to the clicked element. It is important because users might click on elements inside the <li> (like the <p> tags), so closest() ensures we still get the correct <li> even if the click wasn’t directly on it.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. querySelector() returns the first matching element it finds, while querySelectorAll() returns all matching elements as a NodeList. You would use querySelectorAll() when you want to select and work with multiple elements, like selecting all list items in a todo list.

2. A NodeList is a collection of DOM nodes returned by querySelectorAll(), but it is not a true array, so array methods like map() or filter() don’t work directly. It’s important to know this so you can convert it to an array if you need array methods.