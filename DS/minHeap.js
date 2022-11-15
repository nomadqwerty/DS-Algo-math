class Data {
  constructor(val, lvl) {
    this.val = val;
    this.lvl = lvl;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  insert(val, lvl) {
    const obj = new Data(val, lvl);
    this.heap.push(obj);
    this.bubbleUp();
  }
  bubbleUp() {
    let lIdx = this.heap.length - 1;
    let lObj = this.heap[lIdx];
    while (lIdx > 0) {
      let pIdx = Math.floor((lIdx - 1) / 2);
      let pObj = this.heap[pIdx];
      if (pObj.lvl <= lObj.lvl) break;
      this.swap(this.heap, pIdx, lIdx);
      lIdx = pIdx;
    }
  }
  extract() {
    if (this.heap.length > 0) {
      this.swap(this.heap, 0, this.heap.length - 1);
      let root = this.heap.pop(this.heap.length - 1);
      this.sift();
      console.log(root);
    } else {
      console.log("heap is empty");
      return;
    }
  }
  sift() {
    let idx = 0;
    let fObj = this.heap[0];
    let len = this.heap.length;
    while (idx < len) {
      let lObjIdx = idx * 2 + 1;
      let rObjIdx = idx * 2 + 2;
      let swapp = false;
      let lObj;
      let rObj;
      if (lObjIdx < len) {
        lObj = this.heap[lObjIdx];
        if (lObj.lvl < fObj.lvl) {
          swapp = lObjIdx;
        }
      }
      if (rObjIdx < len) {
        rObj = this.heap[rObjIdx];
        if ((!swapp && rObj.lvl < fObj.lvl) || (swapp && rObj.lvl < lObj.lvl)) {
          swapp = rObjIdx;
        }
      }
      if (!swapp) break;
      this.swap(this.heap, idx, swapp);
      idx = swapp;
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert("bean", 5);
minHeap.insert("john", 4);
minHeap.insert("sam", 3);
minHeap.insert("missy", 2);
minHeap.insert("fortunatus", 1);
minHeap.insert("unatus", 6);

minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
minHeap.extract();
