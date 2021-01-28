function computePondSizes(land) {
  const sizes = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 0) {
        sizes.push(computeSize(land, i, j));
      }
    }
  }
  return sizes;
}

function computeSize(land, i, j) {
  if (i < 0 || i >= land.length || j < 0 || j >= land[i].length) {
    return 0;
  }
  if (land[i][j] !== 0) {
    return 0;
  }
  land[i][j] = -1;
  let sum = 1;
  for (let ii = -1; ii <= 1; ii++) {
    for (let jj = -1; jj <= 1; jj++) {
      sum += computeSize(land, i + ii, j + jj);
    }
  }
  return sum;
}

const land = [
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
];

console.log(computePondSizes(land));
