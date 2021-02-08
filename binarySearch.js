function binarySearch(arr, value, leftIdx, rightIdx) {
  while (leftIdx <= rightIdx && leftIdx >= 0 && rightIdx <= arr.length - 1) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[midIdx] === value) {
      return midIdx;
    }

    if (arr[midIdx] < value) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 5, 6, 7];

console.log(binarySearch(arr, 8, 0, arr.length - 1));
