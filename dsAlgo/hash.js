// hashing is a method of sorting and indexing data
// idea behind hashing is to store large data to be indexed with keys ceated by formulas. (hashFuncs)

// apple =Userinput> [hashFunc]=hashValue> index 18
// appT =Userinput> [hashFunc]=hashValue> index 26
// app =Userinput> [hashFunc]=hashValue> index 34

// hashTable = {18:apple,26:appt,34:app}, quite like an array

// why use hashing
// its faster
// search timecomplexity for hash is o(1) || o(n)

// hash terminolgies
// 1. hashFunction = is a function that is used to map data of abritary size to data of fixed size, apple is to 18.
// 2. key, user input. apple
// 3. hashValue, values returned from hashFunction, 18
// 4. hashTable, a datatStructure that which implements an associative array abstract dataType. a structure for mapping hashKeys to hashValue
// {18:apple}. objects make use similar concepts in js
// 5. collision, when two hashKeys produce the same hashValue. apple => 18, appleTea => 18. 

// hash Function:basic
// hash function for numbers storage

let hashFuncNum = (hashKey,index)=>{
    return hashKey%index
}

// hash function for Strings
let hashFuncStr = (hashValue,index)=>{
    let asciiVal = 0
    // loop over string. 
    for(let i=0;i<hashValue.length;i++){
        // convert string chars to ascii val
        // increment asciiVal with them
        asciiVal+=hashValue[i].charCodeAt()
    }
    // return modulo of asciiVal and given index
    return asciiVal%index
}

// good traits of a hash func
// distubuted well across table
// uses all input to avoid collision