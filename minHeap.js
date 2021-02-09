function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

class MinHeap {
  constructor() {
    this.arr = [];
  }

  insert(val) {
    this.arr.push(val);
    let parentIdx = Math.floor((this.arr.length - 1) / 2);
    let index = this.arr.length - 1;
    while (this.arr[index] < this.arr[parentIdx]) {
      swap(this.arr, parentIdx, index);
      index = parentIdx;
      parentIdx = Math.floor(parentIdx / 2);
    }
  }

  heapify(nodeIdx) {
    if (nodeIdx < 0) {
      return;
    }
    const leftChildIdx = nodeIdx * 2 + 1;
    const rightChildIdx = nodeIdx * 2 + 2;

    let maxIdx = nodeIdx;

    if (
      leftChildIdx < this.arr.length &&
      this.arr[leftChildIdx] < this.arr[maxIdx]
    ) {
      maxIdx = leftChildIdx;
    }

    if (
      rightChildIdx < this.arr.length &&
      this.arr[rightChildIdx] < this.arr[maxIdx]
    ) {
      maxIdx = rightChildIdx;
    }

    if (maxIdx !== nodeIdx) {
      swap(this.arr, maxIdx, nodeIdx);
      this.heapify(maxIdx);
    }
  }

  extractMin() {
    const min = this.arr[0];
    const lastElement = this.arr.pop();
    this.arr[0] = lastElement;
    this.heapify(0);
    return min;
  }
}

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(8);
minHeap.insert(7);
minHeap.insert(6);
minHeap.insert(4);
console.log(minHeap.arr);
