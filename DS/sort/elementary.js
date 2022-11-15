// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };

// // bubble
// // create func
// const bubble = (arr) => {
//   // start loop with i = 0,  i<arr.length i++
//   for (let i = 0; i < arr.length; i++) {
//     // nested loop j = 0 j<ar.len j++
//     for (let j = 0; j < arr.length; j++) {
//       // check ifn array of j,j+1
//       if (arr[j] > arr[j + 1]) {
//         // if so swap()
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   console.log(arr);
// };
// bubble([1, 3, 5, 2, 6]);

// selection sort f(n)
// const select = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     swap(arr, i, min);
//   }
//   console.log(arr);
// };

// select([1, 3, 5, 2, 6]);

// insert function
// // loop i=0,i<arr.length,i++;
// // // store arr[i] in var
// // // nested loop j = i-1, j<-1&&arr[j]>var,j--
// // // // arr[j+1] = arr[j]
