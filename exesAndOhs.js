// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my original solution

function XO(str) {
    const charCount=str.split("").reduce((a,b)=>{
      b = b.toLowerCase()
      if(!a[b]){
        a[b] = 0
      }
      a[b]++
      return a
    }, {})
    return charCount['x'] === charCount['o']
}

// what I learned from others' solutions

function XO(str) {
    str = str.toLowerCase()
    return str.split('x').length === str.split('o').length; // removing each character entirely from the string should result in the same length
}

function XO(str) {
    const x = str.replace(/x/gi, '')
    const o = str.replace(/o/gi, '')
    return x.length === o.length // similar approach as above but using replace instead of split
}