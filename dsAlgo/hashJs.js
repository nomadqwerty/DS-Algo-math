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
    
    let hashVal = hashFuncStr(input,index)
    
    if(!hash[hashVal]){
        hash[hashVal] = new linked()
        hash[hashVal].insert(input)
    }
    else{
        hash[hashVal].insert(input)
    }
}

hashet('pink',3)
hashet('zink',3)

console.log(hash.length)