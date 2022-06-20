// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// my original solution

function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 15
    let dogYears = 15
    for (let i = 2; i <= humanYears; i++) {
      if(i === 2) {
        dogYears+=9
        catYears+=9
      } else {
      dogYears+=5
      catYears+=4
      }
    }
    return [humanYears,catYears,dogYears]
}
  
// what I learned from others' solutions

// instead of looping, you can use a ternary + straight math to get the correct numbers - the ternary covers the extra years from the first and second year
function humanYearsCatYearsDogYears(humanYears) {
    return [humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears, 
    (humanYears - 1 ? 14 : 10) + 5 * humanYears]
}