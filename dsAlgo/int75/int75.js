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


////////////////////////////
// product of two max integers

let arr = [1,20,30,44,58,57,7,8,23,6,8,24,6]
arr.sort((a,b)=>a-b)
console.log(arr[arr.length-1]*arr[arr.length-2])