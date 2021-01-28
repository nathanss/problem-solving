function rotateMatrix(matrix) {
  for (let layer = 0; layer < matrix.length / 2; layer++) {
    let first = layer;
    let last = matrix.length - layer - 1;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first]; // left -> top
      matrix[last - offset][first] = matrix[last][last - offset]; // bottom -> left
      matrix[last][last - offset] = matrix[i][last]; // right -> bottom
      matrix[i][last] = top; // top -> right
    }
  }
  return matrix;
}

const matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

console.log(rotateMatrix(matrix));
