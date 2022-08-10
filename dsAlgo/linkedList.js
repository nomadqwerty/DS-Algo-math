class Node{
    constructor(val){
        this.val = val
        this.next=null
    }
}

class Slinked{
    constructor(){
        this.head = null
        this.tail = null
        this.len = 0
    }
    insert(val){
        let node = new Node(val)
        if(this.len===10){
            return 'list is full'
        }
        if(this.head === null){
            this.head = node
            this.tail = node
            this.len++
        }else{
           let temp = this.head
           node.next = temp
           this.head = node
           this.len++
        }
    }
}



module.exports = Slinked