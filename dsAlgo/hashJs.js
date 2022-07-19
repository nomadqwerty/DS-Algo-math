const linked = require('../linkedList')

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

let hash
let hashet = (input,index)=>{
    hash = [] 
    
    let val = hashFuncStr(input,index)
    console.log(val)
    hash[val] = new linked()
    
    if(hash[val].head==null){
        hash[val].insert(input)
    }
    
}

hashet('pink',3)
hash[2]
console.log(hash)