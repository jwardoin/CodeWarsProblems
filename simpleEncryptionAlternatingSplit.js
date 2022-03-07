// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//my original solution

function encrypt(text, n) {
  if (n < 0 || !n || !text) return text;
  for (let i = 0; i < n; i++){
    let newText = []
    newText += text.split("").filter((a,b) => b % 2 === 1).join("")
    newText += text.split("").filter((a,b) => b % 2 === 0).join("")
    text = newText
  }
  return text
}

function decrypt(encryptedText, n) {
  if (n < 0 || !n || !encryptedText) return encryptedText;
  for (let i = 0; i < n; i++){
    let newText = []
    for(let j = 0; j <= Math.floor(encryptedText.length/2); j++) {
      newText.push(encryptedText[j + Math.floor(encryptedText.length/2)])
      newText.push(encryptedText[j])
    }
    if (newText.length === encryptedText.length) {
      encryptedText = newText.join("")
    } else {
      newText.pop()
      encryptedText = newText.join("")
    }
    
  }
  return encryptedText
}

// what I learned from others' solutions

// come back to this one