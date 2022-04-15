// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// my original solution

function rowSumOddNumbers(n) {
    if (n === 1) return 1
    const triangle = [[1]]
    let counter = 1
      for(let i = 1; i <= n; i++){
      let numStorage = []
      for(let j = 0; j <= i; j++) {
        counter += 2
        numStorage.push(counter)
      }
      triangle.push(numStorage)
    }
    return triangle[n - 1].reduce((a,b) => a + b, 0)
  }

// what I learned from others' solutions

const rowSumOddNumbers = n => n**3 // I knew there was a more logical pattern, but I didn't see that it was just the row number cubed until I made it to others' solutions