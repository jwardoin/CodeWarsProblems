// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// my original solution

function wave(str){
    return [...str].map((a, index)=>{
      let currentWave = ""
      for(let i = 0; i < str.length; i++){
        if(index === i) {
          currentWave += a.toUpperCase()
        } else {
          currentWave += str[i]
        }
      }
      return currentWave
    }).filter((a,i)=> a[i] !== " ")
}

// what I learned from others' solutions

function wave(str){
    return [...str].map((a, i)=>str.slice(0,i)+a.toUpperCase()+str.slice(i+1)).filter((a,i)=> a !== str) // using slice to sandwich the new uppercase letter || for filter, a is only the same as the original string when at the index a space was present, so no need to added indexes and search for spaces
}