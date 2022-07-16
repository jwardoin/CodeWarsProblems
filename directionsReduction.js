// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// my original solution

function dirReduc(arr){
    const opposites = {
      'NORTH' : 'SOUTH',
      'SOUTH' : 'NORTH',
      'EAST' : 'WEST',
      'WEST' : 'EAST'
    }
    
    let directions = []
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i + 1] === opposites[arr[i]]) {
       i++
      } else {
        directions.push(arr[i])
      }
    }
    
    if(arr.join("") === directions.join("")){
      return arr
    }
    
    return dirReduc(directions)
}