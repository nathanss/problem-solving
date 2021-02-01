function maxContiguousSubArraySumDynamic(arr) {
  let previousValue = arr[0];
  let globalMaxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const prevValueTmp = Math.max(arr[i], previousValue + arr[i]);
    globalMaxValue = Math.max(prevValueTmp, globalMaxValue);
    previousValue = prevValueTmp;
  }
  return globalMaxValue;
}

function maximumSumSubArrayBruteForce(arr) {
  let answer = -Infinity;

  for (let startIndex = 0; startIndex < arr.length; startIndex++) {
    let sum = 0;
    for (
      let subArraySizeOffset = 1;
      subArraySizeOffset <= arr.length - startIndex;
      subArraySizeOffset++
    ) {
      sum += arr[startIndex + subArraySizeOffset - 1];
      answer = Math.max(answer, sum);
    }
  }
  return answer;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxContiguousSubArraySumDynamic(arr));
