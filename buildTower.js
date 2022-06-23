// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"

// my original solution

function towerBuilder(nFloors) {
    const tower = []
    for(let i = 0; i < nFloors; i++) {
      let thisFloor = ''
      if(!i){
        thisFloor = '*'
      } else {
        thisFloor = tower[i - 1].trim() + '**'
      }
      thisFloor = thisFloor.padStart(nFloors - 1 + thisFloor.length - i)
      thisFloor = thisFloor.padEnd(nFloors - 1 + thisFloor.length - i)
      tower.push(thisFloor)
    }
    return tower
}