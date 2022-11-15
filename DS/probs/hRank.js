// let arr = [10, 100, 300, 200, 1000, 20, 30];
// MINMAX
// const minMax = (array = arr, k = 3) => {
//   array.sort((a, b) => a - b);
//   let num = Infinity;
//   for (let i = 0; i + k - 1 < array.length; i++) {
//     num = Math.min(num, arr[i + k - 1] - arr[i]);
//   }
//   return num;
// };
// minMax();
// console.log(minMax());

///////////////////////////////////////////////////////////////////
// Strong password
// let password = "!aA0";

// let passwordCheck = (param = password) => {
//   let check = {};
//   for (let i = 0; i < password.length; i++) {
//     if (password[i].charCodeAt() >= 33 && password[i].charCodeAt() <= 43) {
//       check["one"] = true;
//     }
//     if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
//       check["two"] = true;
//     }
//     if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
//       check["three"] = true;
//     }
//     if (password[i] >= 0 && password[i] <= 9) {
//       check["four"] = true;
//     }
//   }
//   if (!check["one"] || !check["two"] || !check["three"] || !check["four"]) {
//     return "weak";
//   }
//   return "strong";
// };
// console.log(passwordCheck());

// // dynamic arrays
// const dArr = (n = 2, query) => {
//   let arr = Array.from({ length: n }, () => []);
//   let q = query[0];
//   let x = query[1];
//   let y = query[2];
//   let la = 0;
//   if (q == 1) {
//     let idx = (x ^ la) % n;
//     arr[idx].push(y);
//   }
//   if (q == 2) {
//     let idx = (x ^ la) % n;
//     let len = arr[idx].length;
//     la = arr[idx][y % len];
//   }
//   console.log(arr, la);
// };

// dArr(2, [2, 3, 5]);

// // misssing nums
// const arr1 = [2, 3, 5, 7, 8];
// const arr2 = [2, 3, 5, 7, 8, 0, 3, 1];
// const obj = {};

// for (let i = 0; i < arr2.length; i++) {
//   obj[arr2[i]] = arr1[i];
// }
// for (key in obj) {
//   if (obj[key] === undefined) {
//     console.log(key);
//   }
// }
// console.log(obj);

/////////////////////////////////////////////////////
// count sort

let arr = [
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [4, "ij"],
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [0, "ij"],
  [4, "that"],
  [3, "be"],
  [0, "to"],
  [1, "be"],
  [5, "question"],
  [1, "or"],
  [2, "not"],
  [4, "is"],
  [2, "to"],
  [4, "the"],
];
for (let i = 0; i < arr.length / 2; i++) {
  arr[i][1] = "-";
}
let arr3 = arr.map((el) => el.toString()).sort();
let arr2 = arr3
  .map((el) => el.replace(el[0], ""))
  .join()
  .replace(/,/g, " ");
console.log(arr2);
