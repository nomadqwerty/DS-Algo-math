// merge sort
// create new function
const helperSort = (arr1, arr2) => {
  let empArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      empArr.push(arr1[i]);
      i++;
    } else {
      empArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    empArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    empArr.push(arr2[j]);
    j++;
  }
  return empArr;
};

const merge = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));
  return helperSort(left, right);
};

console.log(merge([1, 5, 8, 2, 9, 3, 2, 4, 68]));
