const assert = require('assert')
// fibonaci seq
const fib = (n)=>{
    if(typeof n !== 'number'|| n<0) return 'error'
    if(n<=1){
        return n
    }else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(-1))
// assume this funt is run with input of 4, n = 4
// recursive walk tru
// n = 4
    // if n <=1 return
    // 4 is > 1, skips condiotion

    // recursive call of 4-1 and 4-2

    // when n = 4-1
    // if 3<=1, skips condition
    // 1+1 is returned, 1+0 is returned.
    // 1+1+1+0 = 3. fib of 4 = 3
    // recursion on n-2
        // if 4-2 <=1 , skips condition
        // recursion for n-1
        // if 2 - 1<=1, return n , n= 1
        // if 2 -2<=1, return n, n = 0
        // return 1+0
    
    // when n = 3-1
    // if 2<=1, skips condition
    // 1+0 is returned
    //  recursion on n - 2
        // if 3 -2<=1, return n- which is 1
        // so 1+1 is returned to when n = 4
    
    // when n = 2-1
    // if 1<=1, returns n which is 1
    //  recursion on n -2
        // if 2-2 <= 1, return 0
        // so 1+0 is returned back to when n = 3
