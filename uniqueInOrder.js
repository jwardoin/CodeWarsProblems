// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// my original solution

function uniqueInOrder(iterable){
    return [...iterable].filter((a,i,arr) => i === 0 || a !== arr[i-1])
}

// what I learned from others' solutions

function uniqueInOrder(iterable){
    const results = []
    let last

    for(let i = 0; i<iterable.length;i++) {
        if(iterable[i] !== last) {
            results.push(last = iterable[i])
        }
    }

    return results
}