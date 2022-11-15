// // nonrepeating string
// let str = "abcabcbb";
// const nonRep = (str) => {
//   let obj = {};
//   let nonRepeat = 0;
//   let newStr = "";
//   let len = [];
//   let point = 0;
//   let obj2 = [];
//   let j;
//   for (let i = 0; i < str.length; i++) {
//     j = i;
//     if (!obj[str[i]]) {
//       obj[str[i]] = str[i];
//       nonRepeat++;
//     } else if (obj[str[i]]) {
//       obj2.push(`${point}-${i - 1}`);
//       point = i;
//       obj = {};
//       obj[str[i]] = str[i];
//       len.push(nonRepeat);
//       nonRepeat = 1;
//     }
//   }
//   Object.keys(obj).forEach((key) => {
//     newStr += key;
//   });
//   len.push(nonRepeat);
//   obj2.push(`${point}-${j}`);
//   console.log(len, obj);
//   console.log("there are", Math.max(...len), " nonrepeating chars");
//   return newStr;
// };
// console.log(nonRep(str));

//
// sliding window
let arr = [10, 2, 43, 14, 5, 6];

// two trackers
// i - for the start of frame
// j - for the end of frame

// x to keep track of i's last position
// y to keep track of j's last position
let len = arr.length - 1;
let frame = 2;
let i = 0;
let j = 0;
let x = 0;
let y = 0;
let total = 0;
j = 2;
while (j <= len) {
  if (j <= 0) {
    console.log("window out of bounds");
    break;
  }

  const iVal = i;
  // console.log(arr[i]);
  y += arr[i];
  i++;
  if (i == j) {
    y += arr[j];

    total = Math.max(total, y);
    y = 0;
    // console.log("here");
    x = Math.abs(frame - i) + 1;
    i = x;
    j += 1;
  }
}

console.log(total);
