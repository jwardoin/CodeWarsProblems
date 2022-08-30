// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// my original solution

function highestRank(arr) {
  let highest = 0;
  const table = arr.reduce((a, b) => {
    if (!a[b]) {
      a[b] = 0;
    }
    a[b]++;
    return a;
  }, {});

  const entries = Object.entries(table);

  entries.forEach((answer, i, arr) => {
    console.log(answer);
    if (answer[1] >= arr[highest][1] && +answer[0] > +arr[highest][0]) {
      highest = i;
    }
  });
  return +entries[highest][0];
}
