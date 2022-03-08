// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// my original solution

function getCount(str) {  
    const strMethod = str.match(/[aeiou]/gi)
    return strMethod ? strMethod.length : 0
  }

// what I learned from others' solutions

function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length; // use the OR operator followed by empty array to solve for case of empty input
  }

function getCount(str) {
    return str.replace(/^aeiou/gi, "").length // use the ^ to replace everything in the string that ISNT a vowel with an empty string then grab the length
}