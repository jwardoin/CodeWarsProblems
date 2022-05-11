// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// my original solution

function longest(s1, s2) {
    let charTracker = ''
    return (s1+s2).split('').filter(char => {
      if(!charTracker.includes(char)){
        charTracker += char
        return char
      }})
      .sort()
      .join('')
  }

// what I learned from others' solutions

function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join('')
  } // Set object is used to storage unique characters - much cleaner
  // needs to be placed in an array in order to use array methods sort and join - needs spread syntax to return each unique character into the array