// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// my original solution

function domainName(url){
    return url.match(/\b(?!http|https|www\b)(\w|\d|-)+/)[0]
  }

// what I learned from others' solutions

function domainName(url){
    return url.replace('https://', '').replace('http://','').replace('www.', '').split('.')[0] // use replace instead
}