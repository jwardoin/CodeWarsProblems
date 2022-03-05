// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//my original solution

function count (string) {  
    return string.split("").reduce((a,b) => {
      if (!a[b]) {
        a[b] = 0
      }
      a[b]++
      return a
    }, {} );
  }


// what I learned from others' solutions

function count(string) {
    return string.split("").reduce((obj, letters) => obj[letters] ? object[letters]++ : object[letters] = 1, {})
} // using a ternary operater to add up instances of each letter as opposed to an if statement