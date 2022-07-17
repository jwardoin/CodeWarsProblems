// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// my original solution

function findUniq(arr) {
    let answer
    for(let i = 0;i<arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        answer = arr[i]
      }
    }
    return answer
}

// what I learned from others' solutions

function findUniq(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num)) // find method instead of for loop
}