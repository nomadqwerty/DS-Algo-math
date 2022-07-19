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



// maximim subarray.
// an array to find 
let nums = [5,4,-1,7,8]

let m = nums[0]
let c = m

for(let i = 1; i<nums.length;i++){
    if(c<0){
        c=0
    }
    c = Math.max(nums[i]+c, nums[i])
    m = Math.max(m, c)
}
console.log(m)
