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
        if(this.head === null){
            this.head = node
            this.tail = node
            this.len++
        }else{
            let cur = this.head
            while(cur){
                if(cur.next==null){
                    cur.next = node
                    this.len++
                    break
                }
                cur=cur.next
            }
        }
    }
}

const list = new Slinked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)

module.exports = Slinked