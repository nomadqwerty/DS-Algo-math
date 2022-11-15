class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Slink {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);

    if (!this.head || this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  shift(val) {
    let node = new Node(val);
    if (!this.head || this.head == null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      let temp = this.head;
      node.next = temp;
      this.head = node;
      this.length++;
    }
  }
  pop() {
    if (!this.head || this.head === null) {
      return undefined;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    let cur = this.head;
    let newTail = cur;
    if (cur.next) {
      while (cur.next.next) {
        cur = cur.next;
        newTail = cur;
      }
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return this;
    }
  }
  unShift() {
    if (!this.head || this.head === null) {
      return undefined;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let temp = this.head.next;
      this.head = temp;
      this.length--;
    }
  }
  insert(pos, val) {
    let node = new Node(val);

    if (!this.head || this.head == null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return;
    }
    if (this.head.val === pos) {
      this.shift(val);
      return;
    }
    if (this.tail.val === pos) {
      this.push(val);
      return;
    }
    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
      if (cur.val === pos) {
        node.next = cur.next;
        cur.next = node;
        this.length++;
        return;
      }
    }
  }
  remove(pos) {
    if (!this.head || this.head == null) {
      return;
    }
    if (this.head.val === pos) {
      this.unShift();
      return;
    }
    if (this.tail.val === pos) {
      this.pop();
      return;
    }

    let cur = this.head;
    let cur2 = this.head;

    let temp;
    while (cur.next) {
      cur = cur.next;
      if (cur.val === pos) {
        temp = cur.next;
      }
    }
    while (cur2.next) {
      if (cur2.next.val === pos) {
        let node = cur2;
        node.next = temp;
        cur = node;
        cur2 = cur;
        this.length--;
      }
      cur2 = cur2.next;
    }
  }
  get(val) {
    if (!this.head || this.head == null) {
      return;
    }
    if (this.head.val === val) {
      return this.head;
    }
    if (this.tail.val === val) {
      return this.tail;
    }
    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
      if (cur.val === val) {
        return cur;
      }
    }
  }
  set(val, newVal) {
    if (!this.head || this.head == null) {
      return;
    }
    if (this.head.val === val) {
      this.head.val = newVal;
      return this.head;
    }
    if (this.tail.val === val) {
      this.tail.val = newVal;
      return this.tail;
    }
    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
      if (cur.val === val) {
        cur.val = newVal;
        return cur;
      }
    }
  }
  clear() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;

    return this;
  }
  reverse() {
    let arr = [];

    let cur = this.head;

    while (cur) {
      let node = new Node(cur.val);
      arr.push(node.val);
      cur = cur.next;
    }

    // clears list:
    this.clear();

    for (let i = arr.length - 1; i >= 0; i--) {
      // print values in reverse
      console.log(arr[i]);

      // list singlelist push method
      this.push(arr[i]);
    }
    return this;
  }
}

module.exports = Slink;
