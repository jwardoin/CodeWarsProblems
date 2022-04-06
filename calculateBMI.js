// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// my original solution(s)

function bmi(weight, height) {
    const bmi = weight / height ** 2 
    if (bmi <= 18.5) {
      return "Underweight"
    } else if (bmi <= 25 ){
      return "Normal"
    } else if (bmi <= 30) {
      return "Overweight"
    } else {
      return "Obese"
    }
}

// ternary is easier to write but harder to read
function bmi(weight, height) { 
    const bmi = weight / height ** 2 
    return bmi <= 18.5 
    ? "Underweight" : bmi <= 25
    ? "Normal" : bmi <= 30
    ? "Overweight" : "Obese"
  }

// what I learned from others' solutions

function bmi(weight, height , bmi = weight/height**2) {  // forgot you can add default variables as parameters
    return bmi <= 18.5 
    ? "Underweight" : bmi <= 25
    ? "Normal" : bmi <= 30
    ? "Overweight" : "Obese"
}