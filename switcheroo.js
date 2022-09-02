// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// my original solution

function switcheroo(x) {
  return x.replace(/[ab]/g, (e) => (e === 'a' ? 'b' : 'a'));
}
