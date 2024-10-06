# JavaScript Assignment Operators and Loop Constructs

## Assignment Operators

JavaScript supports various assignment operators that allow you to assign values to variables. Here is a list of all the assignment operators in JavaScript:

### Basic Assignment Operator
- `=` (Assignment)

### Compound Assignment Operators
- `+=` (Addition assignment)
- `-=` (Subtraction assignment)
- `*=` (Multiplication assignment)
- `/=` (Division assignment)
- `%=` (Modulus assignment)
- `**=` (Exponentiation assignment)
- `<<=` (Left shift assignment)
- `>>=` (Right shift assignment)
- `>>>=` (Unsigned right shift assignment)
- `&=` (Bitwise AND assignment)
- `|=` (Bitwise OR assignment)
- `^=` (Bitwise XOR assignment)

### Logical Assignment Operators (ES2021)
- `&&=` (Logical AND assignment)
- `||=` (Logical OR assignment)
- `??=` (Logical nullish assignment)

## Loop Constructs

JavaScript provides several loop constructs that allow you to iterate over a block of code multiple times. Here is a list of all the loop constructs in JavaScript:

### `for` Loop
- Syntax:
  ```javascript
  for (initialization; condition; increment/decrement) {
      // code block to be executed
  }

### `while` Loop
- Syntax:
  ```javascript
  while (condition) {
  // code block to be executed
  }

### `do...while` Loop
- Syntax:
  ```javascript
  do {
    // code block to be executed
  } while (condition);


### `for...of` Loop
- Syntax:
  ```javascript
  for (variable of iterable) {
    // code block to be executed
  }

### `for...in` Loop
- Syntax:
  ```javascript
  for (variable in object) {
    // code block to be executed
  }


### `forEach` Array method
- Syntax:
  ```javascript
  array.forEach(function(currentValue, index, arr), thisValue)

### `map` Array methods
- Syntax:
  ```javascript
  array.map(function(currentValue, index, arr), thisValue)

### `filter` Array methods
- Syntax:
  ```javascript
  array.filter(function(currentValue, index, arr), thisValue)

### `reduce` Array methods
- Syntax:
  ```javascript
  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)