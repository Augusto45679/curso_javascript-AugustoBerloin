# Functions in JS


1. Function Declaration

A function declaration is a statement that defines a function with a specified name, parameters, and a function body.

### 1. Function Declaration 
- Syntax:
  ```javascript
  function greet(name) {
        console.log(`Hello, ${name}!`);
    }

### 2. Function Expression
- Syntax:
  ```javascript
  const greet = function(name) {
        console.log(`Hello, ${name}!`);
    };

### 3. Arrow Function
- Syntax:
  ```javascript
  const greet = function(name) {
        console.log(`Hello, ${name}!`);
    };

### 4. Immediately Invoked Function Expression (IIFE)
An IIFE is a function that is defined and immediately invoked.
- Syntax:
  ```javascript
  (function() {
  console.log('This function is invoked immediately!');
    })();

### 5. Higher-Order Functions
A higher-order function is a function that takes another function as an argument or returns a function as a result.
- Syntax:
  ```javascript
  function double(x) {
    return x * 2;
  }

  function triple(x) {
    return x * 3;
  }

  function applyOperation(x, operation) {
    return operation(x);
  }

  console.log(applyOperation(5, double)); // Output: 10
  console.log(applyOperation(5, triple)); // Output: 15

### 6. Closures
A closure is a function that has access to its own scope and the scope of its parent functions.
- Syntax:
  ```javascript
  function outer() 
  {
      let x = 10;

    function inner()  
    {
      console.log(x);
    }

  return inner;
  }
  const innerFunc = outer();
  innerFunc(); // Output: 10

### 7. Callback Functions
A callback function is a function passed as an argument to another function, which is executed when a specific operation is completed.
- Syntax:
  ```javascript
  function asyncOperation(callback) {
  setTimeout(() => {
    callback('Operation completed!');
   }, 2000);
  }

    asyncOperation((message) => {
    console.log(message);
  });