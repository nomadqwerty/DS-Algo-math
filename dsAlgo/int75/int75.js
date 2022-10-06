// https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions

///////////////////////////////////////////////////////////////////
// Array
// two sum. solution
// naive solution
// let arr = [1,2,5,3,6,7]
// let val = 9
// for(let i = 0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         let twoSum = arr[i]+arr[j]
//         if(arr[i]+arr[j]==val){
//             console.log(i,j)
//         }
//     }
// }

// efficient solution
// let hash = {}

// for(let i = 0;i<arr.length;i++){
//     let neededVal = val-arr[i]
//     if(hash[neededVal]){
//         console.log(hash[neededVal],arr[i])
//     }
//     else{
//         hash[arr[i]]= i
//     }
// }

// best time to buy solution
// let price = [7,1,5,0,6,3,2]
// let min = price[0]
// let max = 0
// for(let i = 0; i<price.length;i++){
//     min = Math.min(min,price[i])
//     let indexVal = price.indexOf(min)
//     if(indexVal<i){
//         max = Math.max(max,price[i])
//     }
// }
// console.log(min,max)

// // duplicate finder
// // naive
// let arr2 = [1,1,1,3,3,2]

// arr2 = arr2.sort((a,b)=>{return a-b})

// for(let i = 0; i<arr2.length;i++){
//     if(arr2[i]==arr2[i+1]){
//         console.log(false)
//         break
//     }
// }

// // optimal:duplicate finder
// let arr3 = [1,3,4,1,2,3,1]
// let obj1 = {}

// for(let i = 0;i<arr3.length;i++){
//     if(arr3[i] in obj1){
//         obj1[arr3[i]]++
//         console.log('true')
//         return
//     }
//     else{
//         obj1[arr3[i]]=1
//     }

// }
// console.log(obj1)

// // product of array except left
// let arr = [1,2,3,4]
// let res = []
// let pre = 1
// for(let i = 0; i< arr.length;i++){
//     res[i]=pre
//     pre*=arr[i]
// }

// let post = 1
// for(let i = arr.length-1; i>=0 ; i--){
//     res[i]*=post
//     post*=arr[i]
// }
// console.log(res)

// // maximim subarray.
// // an array to find
// let nums = [5,4,-1,7,8]

// let m = nums[0]
// let c = m

// for(let i = 1; i<nums.length;i++){
//     if(c<0){
//         c=0
//     }
//     c = Math.max(nums[i]+c, nums[i])
//     m = Math.max(m, c)
// }
// console.log(m)

// // product of maxSubarray
// let nums2 = [-2,0,-1]

// let m2 = nums2[0]
// let c2 = m2

// for(let i = 1; i<nums2.length;i++){
//     if(c2<0){
//         c2=0
//     }
//     c2 = Math.max(nums2[i]*c2, nums2[i])
//     m2 = Math.max(m2, c2)
// }
// console.log(m2)

// // ////////////////////////////////////////////
// // // isomorphic strings\
// let isoStr = (sString,tString)=>{
//     let s = sString
//     let t = tString

//     if(s.length!==t.length){
//         return ('string not isomorphic')
//     }

//     let sHash = {}
//     let tHash = {}

//     for(let i = 0; i < s.length; i++){
//         if(sHash[s[i]]){
//             if(sHash[s[i]]!==t[i]){
//                 return ('string not isomorphic')
//             }
//         }else{
//             sHash[s[i]] = t[i]
//         }
//         if(tHash[t[i]]){
//             if(tHash[t[i]]!==s[i]){
//                 return ('string not isomorphic')
//             }
//         }else{
//             tHash[t[i]] = s[i]
//         }
//     }
//     return ' string is isomorphic'

// }
// console.log(isoStr('aaca','bbdr'))

////////////////////////////////////////////////
///// rotate array
// const rev = (nums,i,j)=>{
//     while(i<j){
//         [nums[i],nums[j]] = [nums[j],nums[i]]
//         i++
//         j--
//     }
// }

// const rotate = (nums,k)=>{
//     k = k%nums.length
//     rev(nums,0,nums.length-1)
//     rev(nums,0,k-1)
//     rev(nums,k,nums.length-1)
//     return nums
// }
// rotate([1,2,3,4],175)

// /////////////////////////
// // missing numbers
// let arr45 = [1,2,3,4,5,6,7,8,9,11,13,16,24]
// arr45.sort((a,b)=>a-b)
// let compare = []
// let set = new Set([...arr45])

// for (let i = 0; i < arr45[arr45.length - 1]; i++){
//     compare.push(i+1)
// }

// for(let i = 0;i <compare.length;i++){
//     if(!set.has(compare[i])){
//         console.log(compare[i])
//     }
// }

// ////////////////////////////
// // product of two max integers
// let arr = [1,20,30,44,58,57,7,8,23,6,8,24,6]
// arr.sort((a,b)=>a-b)
// console.log(arr[arr.length-1]*arr[arr.length-2])

// ///////////////////////////////////
// // sorted array search.
// const arr2 = [8,9,10,0,1,2,3,4,5,6,7]
// let t = 7
// let mid2 = Math.floor(arr2.length/2)
// let end2 = arr2.length-1
// let start2 = 0
// if(arr2[mid2]<=t&&arr2[end2]>=t){
//     console.log(true)
//     for(let i = mid2; i < arr2.length;i++){
//         if(arr2[i]==t){
//             console.log(arr2[i])
//         }
//     }
// }else{
//     for(let i = start2; i <= mid2;i++){
//         if(arr2[i]==t){
//             console.log(arr2[i])
//         }
//     }
// }

// container with most water
// let water = [2,4,3,7,1,8,9]

// let area = 0
// let i = 0
// let j = water.length-1
// while(i<j){
//     let height = Math.min(water[i],water[j])
//     let newArea = height*(j-i)
//     area = Math.max(area,newArea)
//     if(water[i]<water[j])i++
//     else j--
// }
// console.log(area)

////////////////////////////////////////////////////////////////////////////
// Binary.
// add nums without + - operator
let a = 3;
let b = 2;

// loop while b != 0
// while (b != 0) {
//   // get value of "a and(&) b operation" and move to left by 1 step. store in temp var
//   let t = (a & b) << 1;
//   // get value of "a xor(^) b operation"
//   a = a ^ b;
//   // update b with new value from t operation
//   b = t;
// }
// console.log(a);

// &: when using the & on binary, this operation only returns positive(1) if both values anded(&) are positives, 1&1=1. if both values anded are negative(0) the operation returns a negative, 0&0=0, if one value is positive and the othe is negative it returns a negative value,1&0=0(visa vis)
// 1&1 =1, 1&0=0, 0&0=0

// ^: when using the ^ on binary, this operation only returns positive(1) if one value is positive and the other is negative, it returns a positive value,1^0=1(visa vis). if both values xored are negative(0) the operation returns a negative, 0^0=0. this operation returns negative(0) if both values xored(^) are positives, 1^1=0.
// 1^1=0, 0^1=1, 0^0=0.

// learn <<: the left shift operator moves a Binary by 1 step to the left, this will cause the binary to double in value.
// in javascript use the << opertor like so, number << steps, 4 << 1
// 0101 = 01010

// the >> operator is used to divide. it shifts the number back by 1 step, this will cause the binary to half in value.
// in javascript use the << opertor like so, number >> steps, 4 >> 1
// 0101 = 0010 r 1

/////////////////////////////////////
// number of '1' bits.

// 110, 111, 1000
///
const hammingWeight = (num) => {
  let bits = 0;
  while (num) {
    bits = bits + (num % 2);
    num = num >> 1;
  }
  console.log(bits);
  return bits;
};

hammingWeight(5);
