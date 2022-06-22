// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// my original solution

function findOdd(A) {
    let oddNumber = 0
    const counted = A.reduce((a,b)=>{
      if(!a[b]){
        a[b] = 0
      }
      a[b]++
      return a
    }, {})
    Object.entries(counted).forEach(([item, value]) => {
      if(value % 2){
        oddNumber = Number(item)
      }
    })
    return oddNumber
}

// what I learned from others' solutions

function findOdd(A) {
    let oddNumber = 0
    const counted = A.reduce((a,b)=> a[b] ? a[b]++ : a[b] = 1, {}) // learned how to use a ternary on my favorite reduce trick
    Object.entries(counted).forEach(([item, value]) => {
      if(value % 2){
        oddNumber = Number(item)
      }
    })
    return oddNumber
}

function findOdd(A) {
    return A.find(item => A.filter(number => number === item).length % 2) // Not very performant, but I think it's easier to read than the above
}