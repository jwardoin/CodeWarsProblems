// the input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// my original solution

function revrot(str, sz) {
  if (sz <= 0 || sz > str.length || !str) return '';
  const result = [];
  for (let i = 0; i <= str.length; i += sz) {
    if (i + sz > str.length) break;
    let substr = str.slice(i, i + sz);
    let sumOfDigits = [...substr].reduce((a, b) => a + Number(b) ** 3, 0);
    if (sumOfDigits % 2 === 0) {
      substr = [...substr].reverse().join('');
    } else {
      let rotated = substr.slice(1);
      substr = rotated + substr[0];
    }
    result.push(substr);
  }
  return result.join('');
}
