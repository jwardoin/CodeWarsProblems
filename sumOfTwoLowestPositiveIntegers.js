// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// my original solution

function sumTwoSmallestNumbers(numbers) {  
    // return numbers.sort((a,b) => a - b).filter((a,b,arr) => a === arr[0] || a === arr[1]).reduce((a,b) => a + b) tried to get this to work but it couldn't pass the random tests
    const nums = numbers.sort((a,b) => a - b)
    return nums[0] + nums[1]
  }

// what I learned from others' solutions

function sumTwoSmallestNumbers(numbers) {  
   return numbers.sort((a,b) => a - b).slice(0,2).reduce((a,b) => a + b) // use slice to grab the two lowest values instead of filter
}