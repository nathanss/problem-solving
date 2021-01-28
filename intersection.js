function intersection(a, b) {
  const map = {};
  let intersection = [];

  a.forEach((v) => {
    map[v] = true;
  });

  b.forEach((v) => {
    if (map[v]) {
      intersection.push(v);
    }
  });
  return intersection;
}

const a = [0, 1, 2, 3];
const b = [3, 4, 5, 1];

console.log(intersection(a, b));
