// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// my original solution

const websites = Array.from({ length: 1000 }, () => 'codewars');

// what I learned from others' solutions

const websites2 = new Array(1000).fill('codewars');
