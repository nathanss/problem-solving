function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function minimumBribes(q) {
  let totalNOfBribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] !== i + 1) {
      if (q[i - 1] === i + 1) {
        swap(q, i, i - 1);
        totalNOfBribes++;
      } else if (q[i - 2] === i + 1) {
        totalNOfBribes += 2;
        swap(q, i - 1, i - 2);
        swap(q, i, i - 1);
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }
  console.log(totalNOfBribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
