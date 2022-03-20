// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// my original solution

function isIsogram(str){
    let checkStr = ""
    str.toLowerCase().split("").forEach(char => {
      if (checkStr.includes(char)){
        return
      } else {
        checkStr += char
      }
    })
    return checkStr === str.toLowerCase()
  }

// what I learned from others' solutions

function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length // create a Set object using the input and compare its size to the length of the original string - if they're are the same, we know no character is used twice as the Set object only stores unique values
}