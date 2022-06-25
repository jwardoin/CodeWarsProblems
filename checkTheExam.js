// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// my original solution

function checkExam(array1, array2) {
    const score = array2.map((answer, i) => !answer ? 0 : answer === array1[i] ? 4 : -1).reduce((a,b)=>a+(b),0) // nested ternary makes this solution harder to read and iterating over the array twice is unnecessary - O(2n)
    return score > 0 ? score : 0
}

// Refactored for performance

function checkExam(array1, array2) {
    const score = array2.reduce((a,b,i)=>{ // more readable and O(n)
      if(b) {
        if(b === array1[i]) {
          a += 4
        } else {
          a -= 1
        }
      }
      return a
      },0)
    return score > 0 ? score : 0
}