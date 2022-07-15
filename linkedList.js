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

const list = new Slinked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
console.log(list)

module.exports = Slinked