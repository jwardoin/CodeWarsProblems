// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// my original solution

function isPangram(string){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const compare = string.toLowerCase()
    for (let letter of alphabet) {
      if (compare.includes(letter)) {
        continue
      } else {
        return false
      }
    }
    return true
  }

  // what I learned from others' solutions

  function isPangram(string) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
    return alphabet.every((letter) => string.toLowerCase().includes(letter)); // use array method .every method to check if string contains EVERYTHING from alphabet
  }

  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26; // use str method .match to match alphabet chars and ignore other chars - if your match equals 26(length of the alphabet), it returns true
  } 