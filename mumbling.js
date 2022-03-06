// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//my original solution

function accum(s) {
    let newS = ""
    for(let i = 0; i < s.length; i++) {
      newS += s[i].toUpperCase()
      for(let j = 0; j < i; j++){
        newS += s[i].toLowerCase()
      }
      if (i < s.length - 1) newS += "-"
    }
    return newS
  }

// what I learned from others' solutions

const accum = s => s.split("").map((e,i) => e.toUpperCase()+e.toLowerCase().repeat(i)).join("-") // turn it into an array, use the .map method to create the called for string with .repeat, then use the .join method
