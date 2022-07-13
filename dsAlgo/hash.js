const Slinked = require('../linkedList')
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

// collsion resoltion techniques
// 1. linked list. using Llist we insert nodes instead of values like str
let hashtable = []

// lets say we want to insert dave in the hashtable
let hashKey = 'dave'

// we create a node for list for it
let hashValue = new Slinked()

// insert dave as a node
hashValue.insert('dave')

// insert the list into the hashtable
hashtable[0]=hashValue

// when collision. when index i (lets say i == 0 in loop) is filled
if(hashtable[0]){
    // we insert value as the next value in dave linked list
    hashtable[0].insert('dan')
}

console.log(hashtable[0])