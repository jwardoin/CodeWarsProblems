// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// my original solution

const reverseSeq = n => {
    const array = []
    for (let i = 1; i <= n; i++){
      array.unshift(i)    
    }
    return array;
  };

// what I learned from others' solutions
const reverseSeq = n => Array.from({n}, () => n--) // create array from n

