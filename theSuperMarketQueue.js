// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// my original solution

function queueTime(customers, n) {
    if(!customers.length) return 0
    let timeStorage = []
    for(let i = 0; i < customers.length; i++){
      if(n>i){
        timeStorage.push(customers[i])
      } else {
        let minNumberLocation = timeStorage.indexOf(Math.min(...timeStorage))
        timeStorage[minNumberLocation] += customers[i]
      }
    }
    return Math.max(...timeStorage)
}

// what I learned from others' solutions

function queueTime(customers, n) {
    const queue = Array(n).fill(0) // Array.prototype.fill() creates an array the length of n and fills it with zeros
    customers.forEach(customer=>{
        let minNumberLocation = queue.indexOf(Math.min(...queue)) // same method as above
        queue[minNumberLocation] += customer
    })
    return Math.max(...queue) // using Math.max along with .fill() allows us to not use if statements at the beginning to handle if input is 0
}