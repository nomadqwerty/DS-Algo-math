// // nonrepeating string
// let str = "abcabcbb";
// const nonRep = (str) => {
//   let obj = {};
//   let nonRepeat = 0;
//   let newStr = "";
//   let len = [];
//   let point = 0;
//   let obj2 = [];
//   let j;
//   for (let i = 0; i < str.length; i++) {
//     j = i;
//     if (!obj[str[i]]) {
//       obj[str[i]] = str[i];
//       nonRepeat++;
//     } else if (obj[str[i]]) {
//       obj2.push(`${point}-${i - 1}`);
//       point = i;
//       obj = {};
//       obj[str[i]] = str[i];
//       len.push(nonRepeat);
//       nonRepeat = 1;
//     }
//   }
//   Object.keys(obj).forEach((key) => {
//     newStr += key;
//   });
//   len.push(nonRepeat);
//   obj2.push(`${point}-${j}`);
//   console.log(len, obj);
//   console.log("there are", Math.max(...len), " nonrepeating chars");
//   return newStr;
// };
// console.log(nonRep(str));

//
// sliding window
let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];

// two trackers
// i - for the start of frame
// j - for the end of frame

// x to keep track of i's last position
// accumulator to keep track of j's last position
// let len = arr.length - 1;
// let frame = 2;
// let i = 0;
// let j = 0;
// let accumulator = 0;
// let total = 0;
// j = 2;
// while (j <= len) {
//   if (j <= 0) {
//     console.log("window out of bounds");
//     break;
//   }
//   // const iVal = i;
//   // console.log(arr[i]);
//   accumulator += arr[i];
//   i++;
//   if (i == j) {
//     accumulator += arr[j];

//     total = Math.max(total, accumulator);
//     accumulator = 0;
//     // console.log("here");
//     i = Math.abs(frame - i) + 1;
//     j += 1;
//   }
// }

// console.log(total);

// const list = "XYYZXZYZXXYZ";
// const sndStr = "XYZ";

// let i = 0;
// let j = sndStr.length;
// let checkVar = "";
// while (j <= list.length - 1) {
//   // console.log("i:", i);
//   i++;

// }
// let iterable = [1, 2, 3, 4, 5, 3, 5, 6, 7, 2];
// let d = 0;
// let c = 0;
// let count = 0;
// console.log(iterable.length);
// while (d < iterable.length - 1) {
//   count++;
//   if (c !== iterable.length - 1) {
//     c++;
//   } else {
//     d++;
//     c = d;
//   }
//   if (c !== d) {
//     if (iterable[c] == iterable[d]) {
//       console.log(`duplicate at index: `, c);
//     }
//   }
// }
// console.log("times looped: ", count);

// *1 iterate
// fast slow pointers

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

  //  ADD value from the back(tail) of list
  push(val) {
    const newNode = new Node(val);

    if (!this.head || this.head?.val == null) {
      this.head = newNode;
      //   point tail back to head
      this.tail = this.head;
      //   increment the list length
      this.length++;
    } else {
      // tail will always point to last added node , to add next node to last added node use tail.next = node
      this.tail.next = newNode;

      //   tail should refrence the last added node
      this.tail = newNode;
      //   increase length
      this.length++;

      return this.tail;
    }
    return;

    // add value to front of list
  }
  shift(val) {
    const newNode = new Node(val);

    if (!this.head || this.head?.val == null) {
      this.head = newNode;
      //   point tail back to head
      this.tail = this.head;
      //   increment the list length
      this.length++;
    } else {
      let temp = this.head;
      newNode.next = temp;
      this.head = newNode;
      this.length++;
    }
    return;
  }
  //   remove item from back of list
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
    let prev;

    while (cur.next) {
      prev = cur;
      cur = cur.next;
      if (!cur.next) {
        prev.next = null;
        this.tail = prev;
        this.length--;
      }
    }
    return;
  }
  unShift() {
    if (!this.head || this.head?.val === null) {
      return undefined;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      // point head to its next val
      this.head = this.head.next;
      this.length--;
      return;
    }
    return;
  }
  insert(pos, val) {
    let newNode = new Node(val);
    // check if head exist
    if (!this.head || this.head?.val == null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    }
    if (pos > this.length) {
      return;
    }
    if (pos == this.length) {
      this.push(newNode.val);
      return;
    }
    let cur = this.head;
    let prev;
    // start from 1, assuming the head already exists
    let count = 0;
    while (cur.next) {
      count++;
      console.log(pos, count);
      if (count == pos) {
        prev.next = newNode;
        newNode.next = cur;
        this.length++;
        // break;
      }
      prev = cur;
      cur = cur.next;
    }
    return;
  }
  remove(pos) {
    pos = pos - 1;
    pos = this.length - pos;
    if (!this.head || this.head?.val == null) {
      return;
    }
    if (pos === 1) {
      this.unShift();
      return;
    }
    if (pos === this.length) {
      this.pop();
      return;
    }

    let cur = this.head;
    let prev;
    // start from 1, assuming the head already exists
    let count = 0;
    while (cur.next) {
      count++;
      if (count == pos) {
        prev.next = cur.next;
        this.length--;
      }
      prev = cur;
      cur = cur.next;
    }
  }
  get(val) {
    if (!this.head || this.head?.val == null) {
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

  detectCycle() {
    if (!this.head || this.head == null) {
      return;
    }
    if (this.head == this.tail) {
      return;
    }
    // *2 iterate
    let slow = this.head;
    let fast = this.head;
    let isCycle = false;
    while (slow) {
      slow = slow?.next;
      fast = fast?.next?.next;
      if (fast == null) {
        break;
      }
      if (slow == fast) {
        isCycle = true;
        break;
      }
    }
    console.log(isCycle);
    return isCycle;
  }
  reverse() {
    if (!this.head || this.head == null) {
      return;
    }
    if (this.head == this.tail) {
      return;
    }

    let cur = this.head;
    let store = [];

    // iterrate through linked list to get all values
    while (cur) {
      // store values in array
      store.push(cur.val);
      cur = cur.next;
    }
    // clear liked listed after iteration
    this.clear();
    // iterarte over array and create new
    for (let i = store.length - 1; i >= 0; i--) {
      this.push(store[i]);
    }
  }
}
const linked = new Slink();
linked.push(0);
linked.push(2);
linked.push(4);
linked.push(6);

const linked2 = new Slink();
linked2.push(1);
linked2.push(3);
linked2.push(5);
linked2.push(7);

const mergeSortedArrays = (linked1, linked2) => {
  const len = Math.min(linked1.length, linked2.length);

  let i = 1;
  let head1 = linked1.head;
  let head2 = linked2.head;
  let newList = new Slink();
  while (i <= len) {
    newList.push(Math.min(head1?.val, head2?.val));
    newList.push(Math.max(head1?.val, head2?.val));
    head1 = head1?.next;
    head2 = head2?.next;
    i++;
  }
  while (head1 || head2) {
    if (head1) {
      newList.push(head1.val);
      head1 = head1.next;
    }
    if (head2) {
      newList.push(head2.val);
      head2 = head2.next;
    }
  }
  console.log(newList);
  return newList;
};
mergeSortedArrays(linked, linked2);
