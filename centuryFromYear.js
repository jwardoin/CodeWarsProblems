// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//my original solution

function century(year) {
    return year % 100 === 0 ? year / 100 : Math.floor(year/100) + 1
  }
  
// what I learned from others' solutions

function century(year) {
    return Math.ceil(year/100) // .ceil() will round up to the nearest whole number, so I wouldn't need to use a ternary and the .floor method to get the right outcome
}