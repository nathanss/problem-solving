function changeArrayDirectly(arr) {
  arr[0] = 1;
}

const arr = [0, 1, 2];

changeArrayDirectly(arr);

console.log(arr);
