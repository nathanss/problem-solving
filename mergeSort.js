function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftSlice = arr.slice(0, middleIndex);
  const rightSlice = arr.slice(middleIndex, arr.length);
  return merge(mergeSort(leftSlice), mergeSort(rightSlice));
}

function merge(leftSlice, rightSlice) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftSlice.length && rightPointer < rightSlice.length) {
    if (leftSlice[leftPointer] < rightSlice[rightPointer]) {
      result.push(leftSlice[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightSlice[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer < leftSlice.length) {
    result.push(leftSlice[leftPointer]);
    leftPointer++;
  }
  while (rightPointer < rightSlice.length) {
    result.push(leftSlice[rightPointer]);
    rightPointer++;
  }
  return result;
}

const arr = [10, 9, 8, 7, 6, 5];

console.log(mergeSort(arr));
