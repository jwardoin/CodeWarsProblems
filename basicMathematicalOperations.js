
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Solutions 

// Using ternary operators

function basicOp(operation, value1, value2)
{
  return operation === "+" ? value1 + value2 :
         operation === "-" ? value1 - value2 :
         operation === "*" ? value1 * value2 :
         operation === "/" ? value1 / value2 : alert("Please enter a valid mathematical operator")
}

// Using a Switch

// function basicOp(operation, value1, value2)
// {
//   switch (operation) {
//     case '+':
//         return value1 + value2;
//     case '-':
//         return value1 - value2;
//     case '*':
//         return value1 * value2;
//     case '/':
//         return value1 / value2;
//     default: alert("Please enter a valid mathematical operator")            
//   }
// }

// Using If conditionals

// function basicOp(operation, value1, value2)
// {
//   if (operation === "+") return value1 + value2
//   else if (operation === "-") return value1 - value2
//   else if (operation === "*") return value1 * value2
//   else if (operation === "/") return value1 / value2
//   else alert("Please enter a valid mathematical operator")
// }

// Using .eval() string method

// const basicOp = (operation, value1, value2) => eval(value1 + operation + value2) - shortest code I learned, but apparently eval is dangerous
