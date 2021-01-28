// Complete the minimumBribes function below.
function minimumBribes(q) {
  let totalNOfBribes = 0;
  for (let i = q.length - 1; i >= 2; i--) {
    if (q[i] === i + 1) {
      totalNOfBribes += 0;
    } else if (q[i - 1] === i + 1) {
      totalNOfBribes += 1;
    } else if (q[i - 2] === i + 1) {
      totalNOfBribes += 2;
    } else {
      console.log("Too chaotic");
      return;
    }
  }
  if (q.length >= 2 && q[0] !== 1) {
    totalNOfBribes += 1;
  }
  console.log(totalNOfBribes);
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
