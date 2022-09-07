////////////////////////////////////////////////////////
// // merge sort
// // create new function
// const helperSort = (arr1, arr2) => {
//   let empArr = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       empArr.push(arr1[i]);
//       i++;
//     } else {
//       empArr.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     empArr.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     empArr.push(arr2[j]);
//     j++;
//   }
//   return empArr;
// };

// const merge = (arr) => {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = merge(arr.slice(0, mid));
//   let right = merge(arr.slice(mid));
//   return helperSort(left, right);
// };

// console.log(merge([1, 5, 8, 2, 9, 3, 2, 4, 68]));

/////////////////////////////////////////////
// quickSort
// const arr = [28, 14, 5, 42, 30, 25, 45, 60];

// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };

// let pivotHelp = (arr, start = 0, end = arr.length - 1) => {
//   let p = arr[start];
//   let ind = start;

//   for (var i = start + 1; i < arr.length; i++) {
//     if (arr[i] < p) {
//       ind++;
//       swap(arr, ind, i);
//     }
//   }
//   swap(arr, start, ind);
//   return arr;
// };
// console.log(pivotHelp(arr));

// const quick = (arr, left = 0, right = arr.length - 1) => {
//   if (left < right) {
//     let piv = pivotHelp(arr, left, right);
//     quick(arr, left, piv - 1);
//     quick(arr, piv - 1, right);
//   }
//   return arr;
// };
// console.log(quick(arr));
////////////////////////////////////////////////////////////
// radix
// get value from a specified position from a group of integers , 1234 at position 0 is 4, position 1 is 3 and so on.

const arr = [28, 14, 5, 42, 30, 25, 45, 60];
const getNum = (num, index) => {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
};

// // get length of a value.
const getLength = (number) => {
  if (number === 0 && number > 10) return 1;

  //log10 means how many times the base(10) will multiplied by its self to get the given number
  // log10 of 100 is 2, because 10 * 10 is 100,
  // basically we get the log10 value of the input number and plus it by 1. thats how to get the length of a given interger or intergers
  return Math.floor(Math.log10(Math.abs(number)) + 1);
};

const getMostDigits = (array) => {
  let max = getLength(array[0]);
  for (let i = 1; i < array.length; i++) {
    let val = getLength(array[i]);
    max = Math.max(max, val);
  }
  return max;
};

const radix = (nums) => {
  let max = getMostDigits(nums);
  for (let i = 0; i < max; i++) {
    let digit = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digie = getNum(nums[j], i);
      digit[digie].push(nums[j]);
    }
    nums = [].concat(...digit);
  }
  return nums;
};

console.log(radix(arr));
