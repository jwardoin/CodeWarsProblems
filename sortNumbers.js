// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// my original solution

function solution(nums){
    return nums ? nums.sort((a,b)=>a-b) : []
}

// what I learned from others' solutions

function solution(nums){
    return (nums||[]).sort((a,b)=>a-b) // looks a bit cleaner but is much slower
}
