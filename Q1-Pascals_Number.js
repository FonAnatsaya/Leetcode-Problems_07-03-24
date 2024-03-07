// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

const getRow = function (rowIndex) {
  let pascalTriangle = new Array(rowIndex + 1);
  for (let i = 0; i <= rowIndex; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[i] = 1;
    for (let j = 1; j <= i - 1; j++) {
      let prevRow = pascalTriangle[i - 1];
      row[j] = prevRow[j] + prevRow[j - 1];
    }
    pascalTriangle[i] = row;
  }
  return pascalTriangle[rowIndex];
};
console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
