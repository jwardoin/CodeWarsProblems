// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// my original solution

function high(x){
    let counter = 0
    let wordTracker = ""
    x.split(' ').forEach(word => {
      let innerCounter = 0
      word.split("").forEach(char => {
        innerCounter += char.charCodeAt(0) - 96
      })
      if (innerCounter > counter) {
        counter = innerCounter
        wordTracker = word
        }
    })
    return wordTracker
  }

// what I learned from others' solutions

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  } // got the first half of this code upon refactor - needed to assign the array of points to a variable, use it plsu Math.max to find the index of the word, and pass it to the array of words to return the winner