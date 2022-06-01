function mergeSort(arr) {
  // recursive stack
  // logic of splitting into layers with base case
  if (arr.length > 1) {
    // by dividing arr.length by 2 find the midpoint
    let midpoint = Math.floor(arr[arr.length / 2]);
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint, arr.length);
    mergeSort(left);
    mergeSort(right);
    // we need to right the logic of merge
    // merge two sorted arrays into one (not using spread operator)
    let newArr = [];
    // first array (left side) [1, 2, 5]
    let i = 0;
    // [3, 4] second array (right side)
    let j = 0;
    while (i < left.length || j < right.length) {
      if (left[i] < right[j]) {
        newArr.push(left[i]);
        i++;
      } else {
        newArr.push(right[j]);
        j++;
      }
    }
  }
}
