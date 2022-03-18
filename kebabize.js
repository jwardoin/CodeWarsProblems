// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

// my original solution

function kebabize(str) {
    const result = str.split("").map((letter, i) => {
      console.log(i)
      if(/\d/.test(letter)){ 
        return '' 
      } else if(/[A-Z]/.test(letter)){
        return "-"+letter.toLowerCase()
      } else {
        return letter
      }
    }).join('')
    
    return result[0] === "-" ? result.slice(1) : result
    
  }

// what I learned from others' solutions

function kebabize(str) {
    return str.replace(/[^a-z]/gi, '').replace(/^[A-Z]/, letter => letter.toLowerCase()).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    // first replace changes all non-alphabet chars to empty, second changes the very first letter to lowercase, and the third replaces all uppercase letter to lowercase with a hyphen in front
    // didn't realize I could chain .replace, so I used if/else statements with regex tests to change - also didn't fully understand the g & i in regex, so I wasn't aware I could handle the potential opening hyphen by only changing the first character to lowercase before adding in hyphens
}
