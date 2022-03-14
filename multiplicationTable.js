// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// my original solution

multiplicationTable = function(size) {
    const answer = []
    for (let i = 1; i <= size; i++){
      answer[i-1] = []
      for (let j = 1; j <= size; j++) {
        answer[i-1].push(i * j)
      }
    }
    return answer
  }
