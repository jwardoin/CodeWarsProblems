// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// my original solution

function isSortedAndHow(array) {
    let directions = []
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] < array[i+1]) directions.push('asc')
      else if(array[i] === array[i+1]) directions.push('equals')
      else directions.push('desc')
    }
    const uniqueDir = new Set(directions)
    if (uniqueDir.size > 1 && !uniqueDir.has('equal')) return 'no'
    else if (directions.includes('asc')) return 'yes, ascending'
    else return 'yes, descending'
}

// Refactor

function isSortedAndHow(array) {
    const filteredArray = array.map((a,i,arr) => a < arr[i+1] ? 'asc' : a === arr[i+1] ? 'equals' : 'desc').slice(0,-1)
    if(filteredArray.includes('asc')&&filteredArray.includes('desc')) return 'no'
    else if (filteredArray.includes('desc')) return 'yes, descending'
    else return 'yes, ascending'
} 

// what I learned from others' solutions

function isSortedAndHow(array) {
    if(array.every((a,i)=>i===0||array[i]>=array[i-1])) return 'yes, ascending'
    else if(array.every((a,i)=>i===0||array[i]<=array[i-1])) return 'yes, descending'
    else return 'no'
} // use the .every() method to check if each callback returns the same value - return true at index 0 and use array[i-1] to avoid going out of bounds comparing the last value and thus needing to use slice
