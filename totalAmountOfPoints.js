// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// my original solution

function points(games) {
    return games.map(score => score.split(":")).map(a => {
      if(a[0] === a[1]) {
        return 1
      } else if (a[0] > a[1]) {
        return 3
      }
      }).reduce((a,b)=>a+b,0)
  }

// what I learned from others' solutions

const points = games => games.reduce((a,b) =>{ // you don't need to use split since you can just use index 2 for the value of the second number
    return a += b[0]>b[2] ? 3 : b[0]===b[2] ? 1 : 0 // using only reduce to accumulate the final number as opposed to mapping all of the scores and then reducing them
})