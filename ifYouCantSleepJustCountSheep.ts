// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// my original solution

export function countSheep(num: number): string {
    let count: string = ""
    for(let i = 1; i <= num; i++){
      count += `${i} sheep...`
    }
    return count
}

// what I learned from others' solutions

export function countSheep2(num: number): string {
    return Array.from({length: num}, (_, i) => `${i + 1} sheep...`).join('') // use Array.from method to declare an array the length of num and pass a callback function that creates count string for each iteration - join array at the end
  }