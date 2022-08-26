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

console.log(helperSort([1, 2, 4, 6], [3, 5, 7, 9]));

const merge = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, mid));
  let right = merge(arr.slice(mid));
};
