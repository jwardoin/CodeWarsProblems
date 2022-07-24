// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// my original solution

function incrementString (strng) {
    return !(/\d/.test(strng)) ? strng + 1 : strng.replace(/\d+/gi, num => {
      let newNum = `${Number(num) + 1}`
      if(num.length > newNum.length) {
        newNum = "0".repeat(num.length-newNum.length) + newNum
      }
      return newNum
    })
}

// what I learned from others' solutions

let incrementString = strng => strng.replace(/([0-8]|\d?9+)?$/, num => num ? + num + 1 : 1) // regex grabs last digit unless they are multiple 9's, then it grabs the digit before(if there) and all of the 9's(if multiple) - replacer function will increment and return whatever is matched