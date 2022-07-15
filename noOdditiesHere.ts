// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// my original solution

export function noOdds(values: number[]): number[] {
    return values.filter((n: number) => !(n%2))
}

// what I learned from others' solutions

export function noOdds2(values: number[]): number[] {
    return values.filter((n: number) => !(n & 1)) // use bitwise AND operator - will only return 1(or true) if n is odd
}
