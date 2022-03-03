// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// my original solution

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
   }

// what I learned from others' solutions

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2; // will also return true and false when both have odd or even numbers
  }


// using bitwise operator ^ could be a good choice as well since the difference between an odd and even number is a 1 and 0 in the first bit