// your code goes here
function mergeSort(arr) {
  // recursive stack
  // logic of splitting into layers with base case
  if (arr.length > 1) {
    // by dividing arr.length by 2 find the midpoint
    let midpoint = Math.floor(arr.length / 2) + 1;
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint, arr.length);
    mergeSort(left);
    mergeSort(right);
    arr = conquer(arr, left.length, right.length, midpoint);
  }
}

function conquer(arr, leftL, rightL, midpoint) {
  console.log(arr);
  // we need to right the logic of merge
  // merge two sorted arrays into one (not using spread operator)
  let newArr = [];
  // first array (left side) [1, 2, 5]
  let i = 0;
  // [3, 4] second array (right side)
  let j = midpoint;
  while (i < midpoint && j < arr.length) {
    console.log("New arr", newArr);
    if (arr[i] < arr[j]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr[j]);
      j++;
    }
    console.log(i, j);
  }
  console.log(newArr);
  while (i < midpoint) {
    newArr.push(arr[i]);
    i++;
  }
  while (j < arr.length) {
    newArr.push(arr[j]);
    j++;
  }
  console.log(newArr);
  return newArr;
}

console.log(mergeSort([3, 2, 5, 3, 1]));
console.log(conquer([1, 2, 5, 3, 4], 3, 2, 3));
