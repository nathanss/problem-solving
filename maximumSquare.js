const matrix = [
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
];

function largestSquare(matrix) {
  const buffer = [];
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    buffer[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0) {
        buffer[i][j] = matrix[i][j];
      } else if (matrix[i][j] === 0) {
        buffer[i][j] = 0;
      } else {
        buffer[i][j] =
          Math.min(buffer[i - 1][j], buffer[i - 1][j - 1], buffer[i][j - 1]) +
          1;
        max = Math.max(max, buffer[i][j]);
      }
    }
  }
  return max;
}

console.log(largestSquare(matrix));
