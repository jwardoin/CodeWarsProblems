// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// my original solution

function encode(string) {
    const replacers = {"a":"1","e":"2","i":"3","o":"4","u":"5"}
    return string.replace(/[aeiou]/gi, v => replacers[v])
  }
  
  function decode(string) {
    const replacers ={"1":"a","2":"e","3":"i","4":"o","5":"u"}
    return string.replace(/[1-5]/gi, n => replacers[n])
  }

// what I learned from others' solutions

//instead of having to use a key for replacements, return indexOf to replace with a number and return charAt to put char back

const encode = (string) => string.replace(/[aeiou]/gi, v => '_aeiou'.indexOf(v))
const decode = (string) => string.replace(/[1-5]/gi, n => '_aeiou'.charAt(n)) // use the _ because we need to skip index 0