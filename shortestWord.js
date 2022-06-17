// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// my original solution

function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length))
}

// Refactor for performance

function findShort(s) { // a less elegant solution that has much higher performance - Math.min + map is O(2n) where as this solution is O(n)
    let smallestWord = Infinity
    s.split(' ').forEach(word => {
        if(word.length < smallestWord) {
            smallestWord = word.length
        }
    })
    return smallestWord
}