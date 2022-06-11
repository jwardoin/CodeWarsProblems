// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// my original solution

function removeUrlAnchor(url){
    return url.replace(/#\w+/gi, "")
}

// what I learned from others' solutions

function removeUrlAnchor(url){
    return url.split('#')[0] // split the string by the # tag and return everything before it
  }