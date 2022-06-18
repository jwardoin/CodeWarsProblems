// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

// my original solution

function unusualFive() {
    const five = 'five '
    return five.length
}

// what I learned from others' solutions
function unusualFive() {
    return 'five '.length // can just return length of str without declaraing and assigning to a variable
}