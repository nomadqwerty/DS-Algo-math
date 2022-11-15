let str = "aaaaaa";
// let strArr = str.split("");
// let decoy = [];

// for (let i = str.length - 1; i >= 0; i--) {
//   decoy.push(strArr[i]);
// }
// let strDecoy = decoy.join("");
// console.log(strDecoy == str);

// first index
let i = 0;
// last index
let j = str.length - 1;
// loop if i < length or j >= 0
while (i < str.length || j >= 0) {
  console.log(i, str.length);
  // return if i!==j
  if (str[i] !== str[j]) {
    console.log("false");
    return false;
  }
  // increment i
  i++;
  // decrement j
  j--;
}
