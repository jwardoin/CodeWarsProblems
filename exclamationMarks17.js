// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// my original solution

function balance(left,right){
    const replacers = {'?':'3','!':'2'}
    const leftCount = left.replace(/[!?]/gi, char => replacers[char]).split("").reduce((a,b) => a + Number(b),0)
    const rightCount = right.replace(/[!?]/gi, char => replacers[char]).split("").reduce((a,b) => a + Number(b),0)
    return rightCount > leftCount ? "Right" : rightCount < leftCount ?      "Left" : "Balance"
}

// A nightmarish refactor

function balance(left,right){
    const l = {
      name:"Left",
      count:0
    }
     const r = {
      name:"Right",
      count:0
    }
    const replacers = {'?':'3','!':'2'}
    const sides = new Array(left, right)
    const sideCounts = [l,r]
    sides.forEach((side, i) => sideCounts[i].count = side.replace(/[?!]/gi, char => replacers[char]).split("").reduce((a,b)=>a+Number(b),0))
    const newCount = sideCounts.sort((a,b)=> a.count - b.count)
    return l.count === r.count ? "Balance" : newCount[1].name
  }

// what I learned from others' solutions

function balance(left,right) {
    const weight = s => [...s].map(c => c === '!' ? 2 : c === '?' ? 3 : 0).reduce((s, x) => s + x, 0); //make function that takes spread syntax of each side - for some reason, I couldn't get comparison to work, so I stuck out a solution using .replace() instead
    let diff = weight(left) - weight(right); // pass each side into the new function
    return diff === 0 ? 'Balance' : diff > 0 ? 'Left' : 'Right'; // if 0, they're the same- if positive, left - if negative, right
  }