class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Dlink {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail || !this.head) {
      return "empty list";
    }
    let popped = this.tail;
    if (this.legth == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) {
      return;
    }
    let shifted = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    shifted.next = null;
    this.length--;
    return this;
  }
  unShift(val) {
    let node = new Node(val);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  get(index) {
    let cur = this.head;
    let ail = this.tail;
    let start = this.length - index;
    let half = this.length / 2;
    let back = this.length - index;
    let val;
    if (index === 0) {
      val = this.head.val;
    }
    if (start >= half) {
      for (let i = 0; i <= index; i++) {
        val = cur;
        cur = cur.next;
      }
    }
    if (start < half) {
      for (let i = 0; i < back; i++) {
        val = ail;
        ail = ail.prev;
      }
    }
    if (start > this.length) {
      return;
    }
    return val;
  }
  set(index, val) {
    let node = this.get(index);
    if (node.val) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    }
    let gNp = this.get(index - 1);
    let getNode = this.get(index);
    node.next = getNode;
    gNp.next = null;
    gNp.next = node;
    node.prev = gNp;
    this.length++;
  }
  remove(index) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let delNode = this.get(index);
    delNode = delNode.next;
    let befordelNode = this.get(index - 1);
    befordelNode.next = null;
    befordelNode.next = delNode;
    delNode.prev = befordelNode;
    this.length--;
  }
  print() {
    if (this.length === 0) return null;
    if (!this.head || !this.tail) return null;
    let cur = this.head;
    while (cur) {
      console.log(cur.val);
      cur = cur.next;
    }
  }
}

module.exports = Dlink;
