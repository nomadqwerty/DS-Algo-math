// bubble:
// bubble sort aka sinking sort.
// it repeatedly compares two side by side elements and swaps them if thy are in worng order.
const arr = [37, 45, 29, 8, 12, 88, -3];

const bubbleSort = (array) => {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // if ((array[j], array[j + 1] != undefined)) {
        console.log(array[j], array[j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // }
      }
    }
  }
  return array;
};

console.log(bubbleSort(arr));
