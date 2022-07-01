// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// my original solution

function capitalize(s){
    const evenCap = [] 
    const oddCap = []
    for(let i = 0; i < s.length; i++) {
      if(i % 2){
        evenCap.push(s[i].toUpperCase())
        oddCap.push(s[i])
      } else {
        evenCap.push(s[i])
        oddCap.push(s[i].toUpperCase())
      }
    }
    return [oddCap.join(''), evenCap.join('')];
}
  

// what I learned from others' solutions