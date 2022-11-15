const Slink = require("./Slinked");
class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
let stck = new Stack();
stck.push(1);
stck.push(2);
stck.push(3);
stck.push(4);
stck.pop();

const SlinkStack = new Slink();

SlinkStack.shift(1);
SlinkStack.shift(2);
SlinkStack.shift(3);
SlinkStack.unShift();
console.log(SlinkStack);
