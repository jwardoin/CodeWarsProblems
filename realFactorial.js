// Your task is to write function factorial.

// my original solution

function factorial(n){
    // recursive
    //   if(n <= 1) return 1
    //   return n * factorial(n-1)
    
    //iterative
    let factorial = 1
    for(let i = 1; i <= n; i++){
      factorial *= i
    }
    return factorial
  }

// what I learned from others' solutions

const factorial = n => n ? factorial(n - 1) * n : 1 // using a ternary instead of if statement to check for base case