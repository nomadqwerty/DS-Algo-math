// // bubble:
// // bubble sort aka sinking sort.
// // it repeatedly compares two side by side elements and swaps them if thy are in worng order.
// const arr = [37, 45, 29, 8, 12, 88, -3];

// const bubbleSort = (array) => {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         // if ((array[j], array[j + 1] != undefined)) {
//         console.log(array[j], array[j + 1]);
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         // }
//       }
//     }
//   }
//   return array;
// };

// console.log(bubbleSort(arr));

//selectionSort
const selected = (array) => {
  // function to swap values
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  // 1st loop over array
  for (var i = 0; i < array.length; i++) {
    // create variable to store lowest number
    var low = i;
    // create second loop
    for (var j = i + 1; j < array.length; j++) {
      // if the low var is greater than j, update low with item j
      if (array[low] > array[j]) low = j;
    }
    // only swap if i is not equal to low var
    if (i !== low) swap(array, i, low);
  }
  return array;
};

console.log(selected([2, 1, 0]));

// const inserted = (array) => {
//   for (var i = 1; i < array.length; i++) {
//     var cur = array[i];
//     for (var j = i - 1; j >= 0 && array[j] > cur; j--) {
//       array[j + 1] = array[j];
//       console.log(array);
//     }
//     array[j + 1] = cur;
//   }
//   return array;
// };

// console.log(inserted([0, 2, 34, 22, 10, 19, 17]));
