// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// my original solution that is not DRY at all

function zero(mathFunc) {
  if (!mathFunc) {
    return 0;
  }
  switch (mathFunc[1]) {
    case '+':
      return 0 + mathFunc[0];
    case '-':
      return 0 - mathFunc[0];
    case '*':
      return 0 * mathFunc[0];
    case '/':
      return Math.floor(0 / mathFunc[0]);
  }
}
function one(mathFunc) {
  if (!mathFunc) {
    return 1;
  }
  switch (mathFunc[1]) {
    case '+':
      return 1 + mathFunc[0];
    case '-':
      return 1 - mathFunc[0];
    case '*':
      return 1 * mathFunc[0];
    case '/':
      return Math.floor(1 / mathFunc[0]);
  }
}
function two(mathFunc) {
  if (!mathFunc) {
    return 2;
  }
  switch (mathFunc[1]) {
    case '+':
      return 2 + mathFunc[0];
    case '-':
      return 2 - mathFunc[0];
    case '*':
      return 2 * mathFunc[0];
    case '/':
      return Math.floor(2 / mathFunc[0]);
  }
}
function three(mathFunc) {
  if (!mathFunc) {
    return 3;
  }
  switch (mathFunc[1]) {
    case '+':
      return 3 + mathFunc[0];
    case '-':
      return 3 - mathFunc[0];
    case '*':
      return 3 * mathFunc[0];
    case '/':
      return Math.floor(3 / mathFunc[0]);
  }
}
function four(mathFunc) {
  if (!mathFunc) {
    return 4;
  }
  switch (mathFunc[1]) {
    case '+':
      return 4 + mathFunc[0];
    case '-':
      return 4 - mathFunc[0];
    case '*':
      return 4 * mathFunc[0];
    case '/':
      return Math.floor(4 / mathFunc[0]);
  }
}
function five(mathFunc) {
  if (!mathFunc) {
    return 5;
  }
  switch (mathFunc[1]) {
    case '+':
      return 5 + mathFunc[0];
    case '-':
      return 5 - mathFunc[0];
    case '*':
      return 5 * mathFunc[0];
    case '/':
      return Math.floor(5 / mathFunc[0]);
  }
}
function six(mathFunc) {
  if (!mathFunc) {
    return 6;
  }
  switch (mathFunc[1]) {
    case '+':
      return 6 + mathFunc[0];
    case '-':
      return 6 - mathFunc[0];
    case '*':
      return 6 * mathFunc[0];
    case '/':
      return Math.floor(6 / mathFunc[0]);
  }
}
function seven(mathFunc) {
  if (!mathFunc) {
    return 7;
  }
  switch (mathFunc[1]) {
    case '+':
      return 7 + mathFunc[0];
    case '-':
      return 7 - mathFunc[0];
    case '*':
      return 7 * mathFunc[0];
    case '/':
      return Math.floor(7 / mathFunc[0]);
  }
}
function eight(mathFunc) {
  if (!mathFunc) {
    return 8;
  }
  switch (mathFunc[1]) {
    case '+':
      return 8 + mathFunc[0];
    case '-':
      return 8 - mathFunc[0];
    case '*':
      return 8 * mathFunc[0];
    case '/':
      return Math.floor(8 / mathFunc[0]);
  }
}
function nine(mathFunc) {
  if (!mathFunc) {
    return 9;
  }
  switch (mathFunc[1]) {
    case '+':
      return 9 + mathFunc[0];
    case '-':
      return 9 - mathFunc[0];
    case '*':
      return 9 * mathFunc[0];
    case '/':
      return Math.floor(9 / mathFunc[0]);
  }
}

function plus(numFunc) {
  return [numFunc, '+'];
}
function minus(numFunc) {
  return [numFunc, '-'];
}
function times(numFunc) {
  return [numFunc, '*'];
}
function dividedBy(numFunc) {
  return [numFunc, '/'];
}

// what I learned from others' solutions
// Lots of interest solution to study - come back to this one - https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript
