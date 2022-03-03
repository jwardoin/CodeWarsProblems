// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// my original solution

function repeatStr (n, s) {
    let repeatedStr = ""
    for (let i = 0; i < n; i++) {
      repeatedStr += s
    }
    return repeatedStr;
  }

// what I learned from others' solutions

function repeatStr (n, s) {
    return s.repeat(n) // using the repeat string method does the same as above but is much cleaner
  }
