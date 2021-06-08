---
title: "Async Notes"
date: "2021-06-06T20:12:03.284Z"
description: "An async cheatsheet"
---

### Async 📝

- An async function allows you to handle asynchronous code in a manner that appears synchronous.

```javascript
`// Creating an async function adding async before the function`
async function getUser() {
  return {}
}
// will return a promise instead of a value w/ async added
console.log(getUser())
//output Promise { {} }
```
### Async-Await

- An async function can handle a promise called within it using the await operator. 
- Await can be used within an async function and will wait until a promise settles before executing the designated code.

```js
// Handle fetch with async/await
// async func wrapping await 
async function getUser() {
  const response = await fetch('https://api.github.com/users/octocat')
  // await ensuring the data is not logged before the request has populated it w/data.
  const data = await response.json()

  console.log(data)
}

// Execute async function
getUser()
```
```javascript
//awaiting and returning multiple promises
const {shopForFlowers, trimTheStems, placeInVase} = require('./library.js');

`// multiple promises`
async function getFlowers(){
  const type = await shopForFlowers();
  const neaten = await trimTheStems(type);
  const pretty = await placeInVase(neaten);
  console.log(dinner);
}
getFlowers();
```

### Errors, Try/Catch Blocks
```javascript
// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    // Handle error in catch
    console.error(error)
  }
}
```
Reference:

[Understanding the Event Loop, Callbacks, Promises, and Async/Await in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)