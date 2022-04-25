// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// my original solution

function descendingOrder(n){  
    return Number(n.toString().split("").sort((a,b) => a-b).reverse().join(""))
  }

// what I learned from others' solutions

function descendingOrder(n){  
    return +n.toString().split("").sort().reverse().join("") // add a + to make an integer and sort by default will go from lowest to highest so there is no need to add the function as an argument
  }