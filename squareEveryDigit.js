


// my original solution

function squareDigits(num){
    return Number(num.toString().split("").map(num => parseInt(num) ** 2).join(""))
}


// what I learned from others' solutions

function squareDigits(num){
    return Number(("" + num).split("").map(num => parseInt(num) ** 2).join("")) // can optionally add num to an empty string to change types
}