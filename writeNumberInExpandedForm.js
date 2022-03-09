// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// my original solution

function expandedForm(num) {
    let numString = String(num)
    let answer = []
    zero: for (let i = 0; i < numString.length; i++) {
      if (numString[i] === "0") continue zero
      answer.push(Number(numString.slice(i)) - Number(numString.slice(i + 1)))
    }
    return answer.join(" + ")
  }

// what I learned from others' solutions

const expandedForm = n => n.toString() //turn num to a string
                            .split("") // split into an array to use array methods
                            .reverse() // reverse it so you can use index to progressively add zeros to the numbers
                            .map( (a, i) => a * Math.pow(10, i)) // or a * (10 ** i) // also can use .repeat method to add 0's
                            .filter(a => a > 0) // get rid of the indexes that contained 0
                            .reverse() // switch them back to original order
                            .join(" + "); 
