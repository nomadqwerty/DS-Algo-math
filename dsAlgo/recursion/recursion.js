// recursion is a function that calls it self, by breaking the problem down into smaller bits and then reassembling it back to whole

// recursion property-
//1- perform same operations multiple times with diff smaller inputs
//2- we need a base condition. the base condition is a condition that will stop recursion if it is met

// russian doll example

const doll = (model)=>{
    // edge case
    if(typeof model !== 'number')
    // base
    if(model==1) return 
    // flow
    doll(model-1)
}
doll(7)

// why recursion? it is used to break down big problems
// easier than iterative solutions (neither can replace neither)
// used in many algorithms

// how recursion works
// method calls it self, reducing the value
// exit loop
// like so
const recursion = (value)=> {
    if(typeof value !== 'number')return 
    // exit loop
    if(value==0) return

    // method self call, reducing the value
    recursion(value-1)
}

// recursion in three steps
// step 1
// 