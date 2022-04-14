// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


// my original solution

function persistence(num) {
    let numbers = num
    let counter = 0
     if (numbers < 10) {
       return 0
     }
    while(numbers > 9) {
      numbers = String(numbers).split("").reduce((acc,num) => acc * Number(num), 1)
      counter++
    }
    return counter
  }

// My solution with recursion

function persistence(num, counter = 0) {
    if (num < 10) {
       return counter
    }
    return persistence(String(num).split("").reduce((acc,num) => acc * Number(num), 1), counter + 1)
  }