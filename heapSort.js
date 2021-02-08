function heapSort(arr) {
  for (let i = Math.floor(arr.length - 1 / 2); i >= 0; i--) {
    heapifyDown(arr, i, arr.length - 1);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapifyDown(arr, 0, i);
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heapifyDown(arr, i, size) {
  let maxIndex = i;
  let leftIndex = 2 * i + 1;
  let rightIndex = 2 * i + 2;

  if (leftIndex < size && arr[leftIndex] > arr[maxIndex]) {
    maxIndex = leftIndex;
  }

  if (rightIndex < size && arr[rightIndex] > arr[maxIndex]) {
    maxIndex = rightIndex;
  }

  if (maxIndex !== i) {
    swap(arr, i, maxIndex);
    heapifyDown(arr, maxIndex, size);
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
heapSort(array);
console.log(array);
