const Dlink = require("./Dlinked");

class Q extends Dlink {
  constructor() {
    super();
    this.Dlink = new Dlink();
  }
  enQ(val) {
    this.Dlink.unShift(val);
  }
  dQ() {
    this.Dlink.pop();
  }
}

const q = new Q();
q.enQ(0);
q.enQ(1);
q.enQ(2);
q.enQ(3);
q.dQ();
console.log(q.Dlink);
