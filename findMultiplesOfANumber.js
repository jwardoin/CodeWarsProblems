// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

// my original solution(s)

function findMultiples(integer, limit) { // really wanted to make it work with a while loop
    const multiples = [integer]
    let counter = 2
    while(multiples[multiples.length - 1] < limit - integer + 1){
      multiples.push(integer * counter)
      counter++
    }
    return multiples
}

function findMultiples(integer, limit) { // better solution with a for loop
    const multiples = []
    for(let i = 1; i <= Math.floor(limit/integer); i++) {
        multiples.push(i*integer)
    }
    return multiples
}

function findMultiples(integer, limit) { // completing the one line challenge from the instructions
    return  Array.from(new Array(Math.floor(limit/integer)), ((_, i)=> integer * (i+1))) //
}

