// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// my original solution

function solve(s) {
  const substrings = s.split(/[aeiou]+/).map((substr) =>
    [...substr].reduce((a, b) => {
      return a + b.charCodeAt(0) - 96;
    }, 0)
  );

  return Math.max(...substrings);
}

// what I learned from others' solutions

function solve(s) {
  // an iterative solution that is more readable and O(n) time complexity
  let max = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    if (/[^aeiou]/.test(s[i])) {
      current += s[i].charCodeAt() - 96;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }

  return max;
}
