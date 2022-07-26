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

let hash = []

let hashFunc = (val,index)=>{
    let hashV = hashFuncStr(val,index)
    if(hash[hashV]===undefined){
        hash[hashV] = new linked()
        hash[hashV].insert(val)
    }else if(hash[hashV]){
        hash[hashV].insert(val)
    }
  
}
hashFunc('value',1)
hashFunc('plate',2)
hashFunc('pink',4)
console.log(hash)