// two sum. solution
// naive solution
let arr = [1,2,5,3,6,7]
let val = 9
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
let price = [7,1,5,0,6,3,2]
let min = price[0]
let max = 0
for(let i = 0; i<price.length;i++){
    min = Math.min(min,price[i])
    let indexVal = price.indexOf(min)
    if(indexVal<i){
        max = Math.max(max,price[i])
    }
}
console.log(min,max)